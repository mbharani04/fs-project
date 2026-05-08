// Loader.jsx — Full-page loading spinner

import React from 'react'

export default function Loader({ message = 'Loading...' }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950 bg-opacity-90">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-navy-700"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-orange-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-t-emerald-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        <p className="text-white font-body text-sm mt-2">{message}</p>
      </div>
    </div>
  )
}