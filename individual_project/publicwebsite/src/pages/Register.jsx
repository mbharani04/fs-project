// Register.jsx

import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { saveUser, emailExists } from '../utils/auth'
import { validateRegister } from '../utils/validations'
import { generateCaptcha, verifyCaptcha } from '../utils/captcha'
import { generateOTP } from '../utils/otp'
import CaptchaBox from '../components/CaptchaBox'
import OTPVerification from '../components/OTPVerification'

const STEPS = ['Account Details', 'CAPTCHA', 'OTP Verification']

export default function Register() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [captcha, setCaptcha] = useState(generateCaptcha())
  const [captchaInput, setCaptchaInput] = useState('')
  const [otp, setOtp] = useState('')
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  const refreshCaptcha = () => { setCaptcha(generateCaptcha()); setCaptchaInput('') }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleStep0 = (e) => {
    e.preventDefault()
    const errs = validateRegister(form)
    if (emailExists(form.email)) errs.email = 'This email is already registered'
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStep(1)
  }

  const handleStep1 = (e) => {
    e.preventDefault()
    if (!verifyCaptcha(captchaInput, captcha)) {
      setErrors({ captcha: 'Incorrect CAPTCHA. Please try again.' })
      refreshCaptcha()
      return
    }
    const newOtp = generateOTP()
    setOtp(newOtp)
    setStep(2)
  }

  const handleOTPVerify = (entered) => {
    if (entered === otp) {
      const user = {
        id: Date.now().toString(),
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        registeredAt: new Date().toISOString(),
      }
      saveUser(user)
      navigate('/login', { state: { message: 'Registration successful! Please login.' } })
      return true
    }
    return false
  }

  const handleOTPResend = () => {
    const newOtp = generateOTP()
    setOtp(newOtp)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-xl">JS</div>
          <div>
            <span className="font-display text-white font-bold text-xl">JanSampark</span>
            <p className="text-orange-400 text-xs">Public Service Portal</p>
          </div>
        </Link>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {STEPS.map((s, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-1.5">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  i < step ? 'bg-emerald-500 text-white' : i === step ? 'bg-orange-500 text-white' : 'bg-navy-700 text-gray-400'
                }`}>
                  {i < step ? '✓' : i + 1}
                </div>
                <span className={`text-xs hidden sm:inline ${i === step ? 'text-white' : 'text-gray-500'}`}>{s}</span>
              </div>
              {i < STEPS.length - 1 && <div className={`flex-1 h-0.5 max-w-8 ${i < step ? 'bg-emerald-500' : 'bg-navy-700'}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {step === 0 && (
            <>
              <div className="text-center mb-7">
                <h1 className="font-display text-2xl font-bold text-navy-900">Create Account</h1>
                <p className="text-gray-500 text-sm mt-1">Register as a citizen to file complaints</p>
              </div>

              <form onSubmit={handleStep0} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={`input-field ${errors.name ? 'border-red-400' : ''}`} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className={`input-field ${errors.email ? 'border-red-400' : ''}`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="10 digit mobile number" maxLength={10} className={`input-field ${errors.phone ? 'border-red-400' : ''}`} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Password *</label>
                  <div className="relative">
                    <input name="password" type={showPass ? 'text' : 'password'} value={form.password} onChange={handleChange} placeholder="Min 6 characters" className={`input-field pr-10 ${errors.password ? 'border-red-400' : ''}`} />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
                      {showPass ? '🙈' : '👁️'}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password *</label>
                  <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Repeat password" className={`input-field ${errors.confirmPassword ? 'border-red-400' : ''}`} />
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="w-full bg-navy-800 hover:bg-navy-700 text-white font-semibold py-3.5 rounded-xl transition-all mt-2">
                  Continue to CAPTCHA →
                </button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                Already registered? <Link to="/login" className="text-orange-500 hover:text-orange-600 font-semibold">Sign in</Link>
              </p>
            </>
          )}

          {step === 1 && (
            <>
              <div className="text-center mb-7">
                <h1 className="font-display text-2xl font-bold text-navy-900">Security Check</h1>
                <p className="text-gray-500 text-sm mt-1">Please verify you're a real citizen</p>
              </div>

              <form onSubmit={handleStep1} className="space-y-5">
                <CaptchaBox
                  captcha={captcha}
                  onRefresh={refreshCaptcha}
                  value={captchaInput}
                  onChange={setCaptchaInput}
                  error={errors.captcha}
                />

                <button type="submit" className="w-full bg-navy-800 hover:bg-navy-700 text-white font-semibold py-3.5 rounded-xl transition-all">
                  Verify & Get OTP →
                </button>
                <button type="button" onClick={() => setStep(0)} className="w-full border border-gray-300 text-gray-600 font-medium py-3 rounded-xl hover:bg-gray-50 transition-all text-sm">
                  ← Back
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-center mb-7">
                <h1 className="font-display text-2xl font-bold text-navy-900">OTP Verification</h1>
                <p className="text-gray-500 text-sm mt-1">Enter the 6-digit OTP to confirm your registration</p>
              </div>
              <OTPVerification otp={otp} onVerify={handleOTPVerify} onResend={handleOTPResend} email={form.email} />
            </>
          )}
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          <Link to="/" className="hover:text-gray-300 transition-colors">← Back to Portal</Link>
        </p>
      </div>
    </div>
  )
}