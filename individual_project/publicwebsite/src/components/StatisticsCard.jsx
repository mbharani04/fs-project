// StatisticsCard.jsx

import React from 'react'

export default function StatisticsCard({ icon, label, value, change, color = 'blue' }) {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    orange: 'from-orange-500 to-orange-600',
    green: 'from-emerald-500 to-emerald-600',
    red: 'from-red-500 to-red-600',
    purple: 'from-purple-500 to-purple-600',
    yellow: 'from-yellow-500 to-yellow-600',
  }

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex items-center gap-4 hover:shadow-lg transition-shadow">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[color] || colorMap.blue} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{label}</p>
        <p className="text-2xl font-display font-bold text-navy-900 mt-0.5">{value}</p>
        {change && <p className="text-xs text-emerald-600 font-medium mt-0.5">{change}</p>}
      </div>
    </div>
  )
}