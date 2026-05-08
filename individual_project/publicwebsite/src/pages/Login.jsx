// Login.jsx

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { findUser, login } from '../utils/auth'
import { isValidEmail } from '../utils/validations'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!isValidEmail(form.email)) errs.email = 'Enter a valid email'
    if (!form.password) errs.password = 'Password is required'
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setTimeout(() => {
      const user = findUser(form.email)
      if (!user || user.password !== form.password) {
        setErrors({ general: 'Invalid email or password. Please try again.' })
        setLoading(false)
        return
      }
      login(user)
      navigate('/dashboard')
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8 group">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-xl">
            JS
          </div>
          <div>
            <span className="font-display text-white font-bold text-xl">JanSampark</span>
            <p className="text-orange-400 text-xs">Public Service Portal</p>
          </div>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="font-display text-2xl font-bold text-navy-900">Welcome Back</h1>
            <p className="text-gray-500 text-sm mt-1">Login to your citizen account</p>
          </div>

          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
              <span>⚠️</span> {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="citizen@example.com"
                className={`input-field ${errors.email ? 'border-red-400' : ''}`}
                autoComplete="email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`input-field ${errors.password ? 'border-red-400' : ''}`}
                autoComplete="current-password"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-navy-800 hover:bg-navy-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </span>
              ) : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-orange-500 hover:text-orange-600 font-semibold">
              Register here
            </Link>
          </p>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          <Link to="/" className="hover:text-gray-300 transition-colors">← Back to Portal</Link>
        </p>
      </div>
    </div>
  )
}