// Card.jsx — Generic info card

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card({ icon, title, description, color, link, badge }) {
  const navigate = useNavigate()
  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer group"
      onClick={() => navigate(link)}
    >
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl shadow-md`}>
            {icon}
          </div>
          {badge && (
            <span className="text-xs font-bold px-2 py-1 bg-orange-100 text-orange-600 rounded-full">{badge}</span>
          )}
        </div>
        <h3 className="font-semibold text-navy-900 text-sm mb-2 group-hover:text-orange-600 transition-colors">{title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{description}</p>
        <button className={`text-xs font-semibold bg-gradient-to-r ${color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity`}>
          Explore →
        </button>
      </div>
    </div>
  )
}