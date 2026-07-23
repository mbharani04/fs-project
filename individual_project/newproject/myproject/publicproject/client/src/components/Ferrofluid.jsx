import { Renderer, Program, Mesh, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

const VERT = `#version 300 es
in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform vec2 uResolution;

out vec4 fragColor;

// Simplex noise / distance function for magnetic ferrofluid spikes
float hash(vec3 p) {
    p = fract(p * vec3(443.8975, 397.2973, 491.1871));
    p += dot(p, p.yxz + 19.19);
    return fract((p.x + p.y) * p.z);
}

float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}

float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    vec3 shift = vec3(100.0);
    for (int i = 0; i < 4; ++i) {
        v += a * noise(p);
        p = p * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

// Distance estimator for ferrofluid liquid spikes
float sdSphere(vec3 p, float s) {
    return length(p) - s;
}

float map(vec3 p) {
    float t = uTime * 0.45;
    
    // Magnetic pulse distortion
    float n = fbm(p * 1.4 + vec3(t * 0.3, t * 0.2, t * 0.15));
    float spikes = sin(p.x * 4.5 + t) * cos(p.y * 4.5 - t) * sin(p.z * 4.5 + t) * 0.28;
    
    return sdSphere(p, 1.85 + n * 0.65 + spikes);
}

vec3 calcNormal(vec3 p) {
    vec2 e = vec2(0.002, 0.0);
    return normalize(vec3(
        map(p + e.xyy) - map(p - e.xyy),
        map(p + e.yxy) - map(p - e.yxy),
        map(p + e.yyx) - map(p - e.yyx)
    ));
}

void main() {
    vec2 st = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    
    vec3 ro = vec3(0.0, 0.0, 4.5);
    vec3 rd = normalize(vec3(st, -1.5));
    
    // Raymarching
    float t = 0.0;
    float tmax = 10.0;
    bool hit = false;
    vec3 p = ro;
    
    for(int i = 0; i < 64; i++) {
        p = ro + rd * t;
        float d = map(p);
        if(d < 0.005) {
            hit = true;
            break;
        }
        t += d * 0.6;
        if(t > tmax) break;
    }
    
    vec3 col = vec3(0.04, 0.06, 0.12);
    
    if(hit) {
        vec3 n = calcNormal(p);
        vec3 lightDir = normalize(vec3(1.5, 2.0, 2.5));
        vec3 viewDir = -rd;
        
        // Metallic & Iridescent Ferrofluid lighting
        float diff = max(dot(n, lightDir), 0.0);
        vec3 ref = reflect(-lightDir, n);
        float spec = pow(max(dot(viewDir, ref), 0.0), 32.0);
        float fresnel = pow(1.0 - max(dot(viewDir, n), 0.0), 3.0);
        
        vec3 baseColor = vec3(0.07, 0.09, 0.15); // Dark metallic liquid
        vec3 specColor = vec3(0.35, 0.55, 0.95); // Metallic specular highlight
        vec3 rimColor = vec3(0.45, 0.25, 0.85);  // Iridescent magnetic rim
        
        col = baseColor * diff + specColor * spec * 1.5 + rimColor * fresnel * 0.8;
    }
    
    fragColor = vec4(col, hit ? 0.85 : 0.0);
}
`;

export default function Ferrofluid() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let renderer;
        try {
            renderer = new Renderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
        } catch (e) {
            console.error("WebGL not supported for Ferrofluid:", e);
            return;
        }

        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);

        const geometry = new Triangle(gl);

        const program = new Program(gl, {
            vertex: VERT,
            fragment: FRAG,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: [container.clientWidth, container.clientHeight] }
            },
        });

        const mesh = new Mesh(gl, { geometry, program });
        container.appendChild(gl.canvas);

        function resize() {
            if (!container || !renderer) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            program.uniforms.uResolution.value = [width, height];
        }

        window.addEventListener('resize', resize);
        resize();

        let animationFrameId;
        function update(t) {
            animationFrameId = requestAnimationFrame(update);
            program.uniforms.uTime.value = t * 0.001;
            renderer.render({ scene: mesh });
        }
        animationFrameId = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            if (gl.canvas && gl.canvas.parentNode) {
                gl.canvas.parentNode.removeChild(gl.canvas);
            }
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="landing-ferrofluid-background-canvas"
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                overflow: 'hidden'
            }}
        />
    );
}
