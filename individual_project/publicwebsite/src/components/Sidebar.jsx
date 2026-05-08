// Sidebar.jsx — Dashboard sidebar

import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../utils/auth'

const links = [
  { to: '/dashboard', label: 'Overview', icon: '📊' },
  { to: '/reports', label: 'My Complaints', icon: '📋' },
  { to: '/government-schemes', label: 'Gov. Schemes', icon: '🏛️' },
  { to: '/scholarships', label: 'Scholarships', icon: '🎓' },
  { to: '/government-ids', label: 'ID Services', icon: '🪪' },
  { to: '/safety-purpose', label: 'Safety', icon: '🛡️' },
  { to: '/medical-funds', label: 'Medical Funds', icon: '🏥' },
  { to: '/higher-officials', label: 'Officials', icon: '👮' },
  { to: '/data-transparency', label: 'Transparency', icon: '📈' },
]

export default function Sidebar({ mobileOpen, onClose }) {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
    if (onClose) onClose()
  }

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Overlay on mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-navy-950 z-30 flex flex-col transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-60`}
      >
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {links.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(to)
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-400 hover:bg-navy-800 hover:text-white'
              }`}
            >
              <span className="text-base">{icon}</span>
              {label}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-navy-800">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-navy-800 hover:text-white transition-all mb-1"
          >
            <span>🏠</span> Public Portal
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-900/30 hover:text-red-300 transition-all"
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>
    </>
  )
}