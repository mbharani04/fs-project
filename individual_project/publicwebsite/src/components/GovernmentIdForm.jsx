// GovernmentIdForm.jsx

import React, { useState } from 'react'
import { storageGet, storageSet } from '../utils/storage'

export default function GovernmentIdForm({ idType, onClose }) {
  const KEY = `gov_id_${idType.toLowerCase().replace(/\s/g, '_')}`
  const existing = storageGet(KEY)

  const [form, setForm] = useState(existing || {
    fullName: '', dob: '', address: '', mobile: '', email: '', idNumber: '', proofFile: '',
  })
  const [success, setSuccess] = useState(false)
  const [isEdit, setIsEdit] = useState(!!existing)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    storageSet(KEY, { ...form, submittedAt: new Date().toISOString(), status: 'Submitted' })
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="font-display text-xl font-bold text-navy-900 mb-2">Application Submitted!</h3>
        <p className="text-gray-500 text-sm mb-6">Your {idType} application has been submitted successfully. You will receive updates via email.</p>
        <button onClick={onClose} className="btn-primary">Close</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-display text-lg font-bold text-navy-900 mb-4">
        {isEdit ? 'Edit' : 'Apply for'} {idType}
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="As per records" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
          <input name="dob" type="date" value={form.dob} onChange={handleChange} required className="input-field" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
          <textarea name="address" value={form.address} onChange={handleChange} required rows={2} placeholder="Full residential address" className="input-field resize-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
          <input name="mobile" value={form.mobile} onChange={handleChange} required maxLength={10} placeholder="10 digit mobile" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Existing ID Number (if edit)</label>
          <input name="idNumber" value={form.idNumber} onChange={handleChange} placeholder="Current ID number" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Proof (filename)</label>
          <input name="proofFile" value={form.proofFile} onChange={handleChange} placeholder="document.pdf" className="input-field" />
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button type="submit" className="btn-primary flex-1">Submit Application</button>
        <button type="button" onClick={onClose} className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">Cancel</button>
      </div>
    </form>
  )
}