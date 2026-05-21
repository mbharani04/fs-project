import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import DDL from './pages/DDL';
import DML from './pages/DML';
import DQL from './pages/DQL';
import Normalization from './pages/Normalization';
import Subquery from './pages/Subquery';
import Triggers from './pages/Triggers';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/ddl"
            element={
              <PrivateRoute>
                <DDL />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/dml"
            element={
              <PrivateRoute>
                <DML />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/dql"
            element={
              <PrivateRoute>
                <DQL />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/normalization"
            element={
              <PrivateRoute>
                <Normalization />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/subquery"
            element={
              <PrivateRoute>
                <Subquery />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/triggers"
            element={
              <PrivateRoute>
                <Triggers />
              </PrivateRoute>
            }
          />
          
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
