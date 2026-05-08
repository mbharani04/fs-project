// ComplaintCard.jsx

import React from 'react'
import { deleteComplaint, updateComplaintStatus } from '../utils/complaintUtils'

const STATUS_BADGE = {
  Pending: 'badge-pending',
  'In Progress': 'badge-progress',
  Resolved: 'badge-resolved',
}

export default function ComplaintCard({ complaint, onRefresh }) {
  const { id, name, problemType, area, district, state, description, status, createdAt } = complaint

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this complaint?')) {
      deleteComplaint(id)
      onRefresh()
    }
  }

  const handleStatusChange = (e) => {
    updateComplaintStatus(id, e.target.value)
    onRefresh()
  }

  const dateStr = new Date(createdAt).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
  })

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="font-mono text-xs text-gray-400">{id}</span>
          <h3 className="font-semibold text-navy-900 text-sm mt-0.5">{problemType}</h3>
        </div>
        <span className={STATUS_BADGE[status] || 'badge-pending'}>{status}</span>
      </div>

      <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">{description}</p>

      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
        <div><span className="text-gray-400">Name:</span> {name}</div>
        <div><span className="text-gray-400">Area:</span> {area}</div>
        <div><span className="text-gray-400">District:</span> {district}</div>
        <div><span className="text-gray-400">State:</span> {state}</div>
        <div><span className="text-gray-400">Date:</span> {dateStr}</div>
      </div>

      <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
        <select
          value={status}
          onChange={handleStatusChange}
          className="text-xs border border-gray-300 rounded-lg px-2 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

        <button
          onClick={handleDelete}
          className="text-xs text-red-500 hover:text-red-700 font-medium flex items-center gap-1 transition-colors"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  )
}