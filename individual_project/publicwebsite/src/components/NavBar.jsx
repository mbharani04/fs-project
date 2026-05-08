// NavBar.jsx — Responsive navigation bar

import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { isLoggedIn, logout, getSession } from '../utils/auth'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setLoggedIn(isLoggedIn())
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogout = () => {
    logout()
    setLoggedIn(false)
    setMenuOpen(false)
    navigate('/login')
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/cards', label: 'Info Hub' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-navy-950 shadow-2xl' : 'bg-navy-950/90 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              JS
            </div>
            <div>
              <span className="font-display text-white font-bold text-lg leading-none">JanSampark</span>
              <p className="text-orange-400 text-xs leading-none">Public Service Portal</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(to)
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-navy-700'
                }`}
              >
                {label}
              </Link>
            ))}

            {loggedIn && (
              <>
                <Link
                  to="/reports"
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/reports') ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white hover:bg-navy-700'
                  }`}
                >
                  Reports
                </Link>
                <Link
                  to="/dashboard"
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive('/dashboard') ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white hover:bg-navy-700'
                  }`}
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>

          {/* Auth buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {loggedIn ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                    {getSession()?.name?.[0]?.toUpperCase() || 'U'}
                  </div>
                  <span className="hidden xl:inline">{getSession()?.name?.split(' ')[0]}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-gray-300 hover:text-white text-sm px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors">
                  Login
                </Link>
                <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-lg transition-colors font-semibold">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-navy-900 border-t border-navy-700 py-4 space-y-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg mx-2 transition-colors ${
                  isActive(to) ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white hover:bg-navy-700'
                }`}
              >
                {label}
              </Link>
            ))}
            {loggedIn && (
              <>
                <Link to="/reports" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-navy-700 rounded-lg mx-2">Reports</Link>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-navy-700 rounded-lg mx-2">Dashboard</Link>
              </>
            )}
            <div className="pt-3 border-t border-navy-700 mx-2 space-y-2">
              {loggedIn ? (
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm font-medium text-red-400 hover:bg-navy-700 rounded-lg">
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-navy-700 rounded-lg">Login</Link>
                  <Link to="/register" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm font-semibold bg-orange-500 text-white rounded-lg text-center">Register</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}