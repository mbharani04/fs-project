// Dashboard.jsx

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import StatisticsCard from '../components/StatisticsCard'
import ComplaintCard from '../components/ComplaintCard'
import { getSession } from '../utils/auth'
import { getComplaintsByUser, getComplaintStats } from '../utils/complaintUtils'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [session] = useState(getSession())
  const [complaints, setComplaints] = useState([])
  const [stats, setStats] = useState({ total: 0, pending: 0, inProgress: 0, resolved: 0 })

  const refresh = () => {
    const userComplaints = getComplaintsByUser(session?.email)
    setComplaints(userComplaints.slice(0, 6))
    setStats(getComplaintStats(session?.email))
  }

  useEffect(() => { refresh() }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 lg:ml-60 min-h-screen">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4 sticky top-0 z-20">
          <button
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1">
            <h1 className="font-semibold text-navy-900 text-sm sm:text-base">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold text-navy-900">{session?.name}</p>
              <p className="text-xs text-gray-400">{session?.email}</p>
            </div>
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              {session?.name?.[0]?.toUpperCase()}
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          {/* Welcome */}
          <div className="mb-8 p-6 bg-gradient-to-r from-navy-900 to-navy-700 rounded-2xl text-white">
            <h2 className="font-display text-2xl font-bold">Welcome, {session?.name?.split(' ')[0]}! 👋</h2>
            <p className="text-gray-300 text-sm mt-1">Here's an overview of your complaints and services.</p>
            <div className="flex gap-3 mt-4">
              <Link to="/reports" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                + File New Complaint
              </Link>
              <Link to="/government-schemes" className="border border-white/30 hover:bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                Explore Schemes
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatisticsCard icon="📋" label="Total Complaints" value={stats.total} color="blue" />
            <StatisticsCard icon="⏳" label="Pending" value={stats.pending} color="yellow" />
            <StatisticsCard icon="🔄" label="In Progress" value={stats.inProgress} color="purple" />
            <StatisticsCard icon="✅" label="Resolved" value={stats.resolved} color="green" />
          </div>

          {/* Quick links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { to: '/reports', icon: '📋', title: 'File a Complaint', desc: 'Submit a new public grievance', color: 'bg-blue-50 border-blue-200' },
              { to: '/government-schemes', icon: '🏛️', title: 'Government Schemes', desc: 'Explore welfare programs', color: 'bg-orange-50 border-orange-200' },
              { to: '/scholarships', icon: '🎓', title: 'Scholarships', desc: 'Find educational funding', color: 'bg-purple-50 border-purple-200' },
              { to: '/government-ids', icon: '🪪', title: 'ID Services', desc: 'Apply or update ID documents', color: 'bg-teal-50 border-teal-200' },
              { to: '/safety-purpose', icon: '🛡️', title: 'Safety Helplines', desc: 'Emergency numbers & guides', color: 'bg-red-50 border-red-200' },
              { to: '/higher-officials', icon: '👮', title: 'Higher Officials', desc: 'Direct complaint to officers', color: 'bg-indigo-50 border-indigo-200' },
            ].map(({ to, icon, title, desc, color }) => (
              <Link key={to} to={to} className={`p-4 rounded-xl border ${color} hover:shadow-md transition-all flex items-center gap-3`}>
                <div className="text-2xl">{icon}</div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{title}</p>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent complaints */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-bold text-navy-900">Recent Complaints</h3>
              <Link to="/reports" className="text-orange-500 hover:text-orange-600 text-sm font-semibold">View all →</Link>
            </div>

            {complaints.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                <div className="text-5xl mb-3">📭</div>
                <h3 className="font-semibold text-navy-900 mb-1">No complaints yet</h3>
                <p className="text-gray-500 text-sm mb-4">You haven't filed any complaints. Start by reporting an issue.</p>
                <Link to="/reports" className="btn-primary">File Your First Complaint</Link>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {complaints.map((c) => (
                  <ComplaintCard key={c.id} complaint={c} onRefresh={refresh} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}