/**
 * authorizeRoles(...allowedRoles)
 * Factory function that returns a middleware checking req.user.role.
 * Must be used AFTER authMiddleware (which sets req.user).
 *
 * Usage:
 *   router.get("/admin/dashboard", authMiddleware, authorizeRoles("admin"), handler)
 *   router.get("/common",          authMiddleware, authorizeRoles("user", "admin"), handler)
 *
 * Returns 403 if the authenticated user's role is not in the allowed list.
 */
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      // Should not reach here if authMiddleware is used first
      return res.status(401).json({ message: "Not authenticated." });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Access denied. Required role(s): ${allowedRoles.join(", ")}. Your role: ${req.user.role}.`,
      });
    }

    next();
  };
};

module.exports = authorizeRoles;
