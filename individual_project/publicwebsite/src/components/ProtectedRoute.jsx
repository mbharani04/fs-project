// ProtectedRoute.jsx — Redirects to login if not authenticated

import React from 'react'
import { Navigate } from 'react-router-dom'
import { isLoggedIn } from '../utils/auth'

export default function ProtectedRoute({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />
  }
  return children
}