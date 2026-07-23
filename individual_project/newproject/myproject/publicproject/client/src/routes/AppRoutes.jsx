import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Existing pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AboutSection from "../pages/AboutSection";
import ContactSection from "../pages/ContactSection";
import ServiceSection from "../pages/ServiceSection";
import PublicRights from "../servicescards/PublicRights";

// New pages
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Unauthorized from "../pages/Unauthorized";

// Route guard
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* ── Root redirect ───────────────────────────────── */}
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
        }
      />

      {/* ── Auth routes (Public) ────────────────────────── */}
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/home" replace /> : <Login />
        }
      />
      <Route
        path="/register"
        element={
          isAuthenticated ? <Navigate to="/home" replace /> : <Register />
        }
      />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* ── Protected Website Pages (Requires Login) ────── */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <AboutSection />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <ContactSection />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services"
        element={
          <ProtectedRoute>
            <ServiceSection />
          </ProtectedRoute>
        }
      />
      <Route
        path="/public-rights"
        element={
          <ProtectedRoute>
            <PublicRights />
          </ProtectedRoute>
        }
      />

      {/* ── Protected: USER dashboard ─────────────────── */}
      <Route
        path="/user/dashboard"
        element={
          <ProtectedRoute allowedRoles={["user", "admin"]}>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      {/* ── Protected: ADMIN dashboard ────────────────── */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* ── Fallback redirect ─────────────────────────── */}
      <Route
        path="*"
        element={
          isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
};

export default AppRoutes;