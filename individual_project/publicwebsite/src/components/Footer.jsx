// Footer.jsx

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-400 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">JS</div>
              <div>
                <span className="font-display text-white font-bold text-lg leading-none">JanSampark</span>
                <p className="text-orange-400 text-xs">Public Service Portal</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Bridging citizens and government for faster, transparent, and accountable public service delivery across India.
            </p>
            <div className="flex gap-3 mt-5">
              {['Twitter', 'Facebook', 'YouTube', 'Telegram'].map((s) => (
                <a key={s} href="#" className="w-8 h-8 bg-navy-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all text-xs font-bold">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/reports', label: 'File Complaint' },
                { to: '/dashboard', label: 'Dashboard' },
                { to: '/government-schemes', label: 'Gov. Schemes' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-500 hover:text-orange-400 transition-colors flex items-center gap-1">
                    <span className="text-orange-600 text-xs">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { to: '/government-schemes', label: 'Government Schemes' },
                { to: '/scholarships', label: 'Scholarships' },
                { to: '/safety-purpose', label: 'Safety Helplines' },
                { to: '/medical-funds', label: 'Medical Funds' },
                { to: '/government-ids', label: 'ID Services' },
                { to: '/social-services', label: 'Social Services' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-500 hover:text-orange-400 transition-colors flex items-center gap-1">
                    <span className="text-orange-600 text-xs">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>JanSampark Portal, Ministry of Electronics & IT, New Delhi – 110001</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>Helpline: 1800-XXX-XXXX (Toll Free)</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>support@jansampark.gov.in</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>

            <div className="mt-5 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-xs font-semibold">EMERGENCY HELPLINE</p>
              <p className="text-white font-display text-xl font-bold mt-1">112</p>
              <p className="text-gray-500 text-xs">Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© 2025 JanSampark – Public Service & Complaint Portal. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-400 transition-colors">RTI</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}