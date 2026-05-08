// OTPVerification.jsx

import React, { useState, useRef } from 'react'

export default function OTPVerification({ otp, onVerify, onResend, email }) {
  const [inputs, setInputs] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const refs = useRef([])

  const handleChange = (idx, val) => {
    if (!/^\d?$/.test(val)) return
    const newInputs = [...inputs]
    newInputs[idx] = val
    setInputs(newInputs)
    if (val && idx < 5) refs.current[idx + 1]?.focus()
    if (!val && idx > 0) refs.current[idx - 1]?.focus()
    setError('')
  }

  const handleKeyDown = (idx, e) => {
    if (e.key === 'Backspace' && !inputs[idx] && idx > 0) {
      refs.current[idx - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const newInputs = Array(6).fill('')
    pasted.split('').forEach((ch, i) => { newInputs[i] = ch })
    setInputs(newInputs)
    refs.current[Math.min(pasted.length, 5)]?.focus()
  }

  const handleVerify = () => {
    const entered = inputs.join('')
    if (entered.length < 6) { setError('Please enter all 6 digits.'); return }
    if (!onVerify(entered)) setError('Incorrect OTP. Please try again.')
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-700">
        <p className="font-semibold mb-1">OTP sent to: {email}</p>
        <p className="text-blue-600">Demo OTP: <span className="font-mono bg-white px-2 py-0.5 rounded border border-blue-300 font-bold tracking-widest">{otp}</span></p>
      </div>

      <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
        {inputs.map((val, idx) => (
          <input
            key={idx}
            ref={(el) => (refs.current[idx] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={val}
            onChange={(e) => handleChange(idx, e.target.value)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            className={`w-12 h-14 text-center text-xl font-bold border-2 rounded-xl focus:outline-none transition-all ${
              val
                ? 'border-orange-500 bg-orange-50 text-navy-900'
                : 'border-gray-300 focus:border-blue-500 bg-white text-gray-800'
            } ${error ? 'border-red-400' : ''}`}
          />
        ))}
      </div>

      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

      <button
        onClick={handleVerify}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all"
      >
        Verify OTP
      </button>

      <p className="text-center text-gray-500 text-sm mt-4">
        Didn't receive it?{' '}
        <button onClick={onResend} className="text-blue-600 hover:text-blue-700 font-semibold">
          Resend OTP
        </button>
      </p>
    </div>
  )
}