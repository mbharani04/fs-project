import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * ProtectedRoute
 * Wraps any route that requires authentication and/or specific roles.
 *
 * Props:
 *   allowedRoles {string[]}  — array of roles that can access this route
 *                              e.g. ["admin"] or ["user", "admin"]
 *   children                 — the component to render if authorized
 *
 * Behavior:
 *   - Not logged in           → redirect to /login
 *   - Logged in, wrong role   → redirect to their correct dashboard
 *   - Logged in, correct role → render children
 *
 * IMPORTANT: This is UI-only protection.
 * Backend middleware (authMiddleware + authorizeRoles) is the real security layer.
 */
const ProtectedRoute = ({ allowedRoles, children }) => {
  const { isAuthenticated, user } = useAuth();

  // 1. Not logged in at all — send to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 2. Logged in but role not allowed — redirect to their own dashboard
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }
    return <Navigate to="/user/dashboard" replace />;
  }

  // 3. Authorized — render the protected page
  return children;
};

export default ProtectedRoute;
