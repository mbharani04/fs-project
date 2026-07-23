import React, { createContext, useContext, useState, useCallback } from "react";

// ─────────────────────────────────────────────
// AuthContext — global authentication state
// ─────────────────────────────────────────────

const AuthContext = createContext(null);

/**
 * Safely read initial auth state from localStorage.
 * Returns null values if nothing is stored or if data is malformed.
 */
const getInitialState = () => {
  try {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    if (token && userStr) {
      return {
        token,
        user: JSON.parse(userStr),
      };
    }
  } catch {
    // malformed JSON in localStorage — clear it
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
  return { token: null, user: null };
};

export const AuthProvider = ({ children }) => {
  const initial = getInitialState();
  const [token, setToken] = useState(initial.token);
  const [user, setUser] = useState(initial.user);

  /**
   * login — called after successful API login response
   * Stores token and safe user info (no password) in localStorage and state.
   * @param {Object} userData — { id, name, email, role }
   * @param {string} authToken — JWT string
   */
  const login = useCallback((userData, authToken) => {
    // Only store non-sensitive fields
    const safeUser = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role,
    };

    localStorage.setItem("token", authToken);
    localStorage.setItem("user", JSON.stringify(safeUser));

    setToken(authToken);
    setUser(safeUser);
  }, []);

  /**
   * logout — clears auth state and localStorage
   */
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  }, []);

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * useAuth — custom hook to consume AuthContext
 * Throws if used outside of AuthProvider.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an <AuthProvider>");
  }
  return context;
};

export default AuthContext;
