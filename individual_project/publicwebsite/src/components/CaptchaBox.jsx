// CaptchaBox.jsx

import React, { useEffect, useRef } from 'react'
import { generateCaptcha } from '../utils/captcha'

export default function CaptchaBox({ captcha, onRefresh, value, onChange, error }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    drawCaptcha()
  }, [captcha])

  const drawCaptcha = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const w = canvas.width
    const h = canvas.height

    // Background
    ctx.fillStyle = '#0a1e4e'
    ctx.fillRect(0, 0, w, h)

    // Noise dots
    for (let i = 0; i < 80; i++) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.15})`
      ctx.beginPath()
      ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 2, 0, Math.PI * 2)
      ctx.fill()
    }

    // Noise lines
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = `rgba(249,115,22,${Math.random() * 0.3})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(Math.random() * w, Math.random() * h)
      ctx.lineTo(Math.random() * w, Math.random() * h)
      ctx.stroke()
    }

    // Text
    ctx.font = 'bold 26px "JetBrains Mono", monospace'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    const chars = captcha.split('')
    const charWidth = w / (chars.length + 1)
    chars.forEach((char, i) => {
      const x = charWidth * (i + 1)
      const y = h / 2 + (Math.random() - 0.5) * 8
      const angle = (Math.random() - 0.5) * 0.3

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)
      ctx.fillStyle = `hsl(${30 + Math.random() * 30}, 100%, ${60 + Math.random() * 20}%)`
      ctx.fillText(char, 0, 0)
      ctx.restore()
    })
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">CAPTCHA Verification</label>
      <div className="flex items-center gap-3 mb-2">
        <canvas
          ref={canvasRef}
          width={180}
          height={50}
          className="rounded-lg border border-gray-300 select-none"
        />
        <button
          type="button"
          onClick={onRefresh}
          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          title="Refresh CAPTCHA"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
      <input
        type="text"
        placeholder="Enter CAPTCHA above"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`input-field ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
        autoComplete="off"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}