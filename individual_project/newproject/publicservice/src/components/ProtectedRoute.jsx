import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../utils/auth';

const ProtectedRoute = () => {
  const isAuthenticated = auth.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
