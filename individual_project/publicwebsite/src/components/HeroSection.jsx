// HeroSection.jsx

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STATS = [
  { value: '2.4Cr+', label: 'Complaints Resolved' },
  { value: '486+', label: 'Active Schemes' },
  { value: '28', label: 'States Covered' },
  { value: '24/7', label: 'Support Available' },
]

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero-bg min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-sm mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Government of India — Digital Initiative
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Your Voice,<br />
              <span className="text-gradient">Government's Action</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              JanSampark is India's trusted public complaint and service portal — empowering citizens to report issues, access schemes, and demand accountability from government authorities.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/register"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Register Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/reports"
                className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                File a Complaint
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map(({ value, label }) => (
                <div key={label} className="glass rounded-xl p-3 text-center">
                  <div className="text-2xl font-display font-bold text-orange-400">{value}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — graphic */}
          <div className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Central card */}
              <div className="w-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center shadow-2xl animate-float">
                <div className="text-7xl mb-4">🏛️</div>
                <h3 className="font-display text-white text-xl font-bold">Smart Governance</h3>
                <p className="text-gray-300 text-sm mt-2">Transparent · Accountable · Responsive</p>

                <div className="mt-6 space-y-3">
                  {[
                    { icon: '✅', text: 'OTP Verified System' },
                    { icon: '🔒', text: 'Secure Complaint Filing' },
                    { icon: '📡', text: 'Real-time Tracking' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2">
                      <span>{icon}</span>
                      <span className="text-white text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
                LIVE 24/7
              </div>

              {/* Floating badge bottom-left */}
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                🇮🇳 India Portal
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative h-16 overflow-hidden">
        <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,0 C480,64 960,64 1440,0 L1440,64 L0,64 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  )
}