import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

const VERT = `#version 300 es
in vec2 uv;
in vec2 position;
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uAmplitude;
uniform float uBlend;

in vec2 vUv;
out vec4 fragColor;

vec3 permute(vec3 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

struct ColorStop {
    vec3 color;
    float position;
};

#define COLOR_RAMP(colors, factor, finalColor) { \
    int index = 0; \
    for (int i = 0; i < 2; i++) { \
        ColorStop currentColor = colors[i]; \
        ColorStop nextColor = colors[i + 1]; \
        bool isBetween = currentColor.position <= factor && factor <= nextColor.position; \
        index = isBetween ? i : index; \
    } \
    ColorStop currentColor = colors[index]; \
    ColorStop nextColor = colors[index + 1]; \
    float range = nextColor.position - currentColor.position; \
    float lerpFactor = (factor - currentColor.position) / range; \
    finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
    vec2 uv = vUv;
    
    ColorStop colors[3];
    colors[0] = ColorStop(uColorStops[0], 0.0);
    colors[1] = ColorStop(uColorStops[1], 0.5);
    colors[2] = ColorStop(uColorStops[2], 1.0);
    
    vec3 rampColor;
    COLOR_RAMP(colors, uv.x, rampColor);
    
    float height = snoise(vec2(uv.x * 2.0 + uTime * 0.08, uTime * 0.15)) * 0.5 * uAmplitude;
    height += snoise(vec2(uv.x * 3.0 - uTime * 0.1, uTime * 0.12)) * 0.3 * uAmplitude;
    
    float intensity = smoothstep(0.0, 1.0, (uv.y - height));
    intensity = pow(intensity, 1.5);
    
    float auroraAlpha = smoothstep(1.0, 0.0, abs(uv.y - height - 0.25) * 2.2);
    
    vec3 finalColor = mix(rampColor, vec3(1.0), uBlend * 0.3) * auroraAlpha;
    
    fragColor = vec4(finalColor, auroraAlpha * 0.65);
}
`;

export default function Aurora(props) {
    const {
        colorStops = ["#7cff67", "#B497CF", "#5227FF"],
        amplitude = 1,
        blend = 0.5,
        speed = 1
    } = props;

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let renderer;
        try {
            renderer = new Renderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
        } catch (e) {
            console.error("WebGL not supported for Aurora:", e);
            return;
        }

        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);

        const geometry = new Triangle(gl);

        const parseColor = (hex) => {
            const c = new Color(hex);
            return [c.r, c.g, c.b];
        };

        const colorArray = colorStops.map(parseColor);

        const program = new Program(gl, {
            vertex: VERT,
            fragment: FRAG,
            uniforms: {
                uTime: { value: 0 },
                uAmplitude: { value: amplitude },
                uBlend: { value: blend },
                uColorStops: { value: colorArray },
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
            program.uniforms.uTime.value = t * 0.001 * speed;
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
    }, [colorStops, amplitude, blend, speed]);

    return (
        <div
            ref={containerRef}
            className="aurora-canvas-container"
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
