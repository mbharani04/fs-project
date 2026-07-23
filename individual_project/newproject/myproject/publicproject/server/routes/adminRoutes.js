const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const { changeAdminPassword } = require("../controllers/adminController");

const router = express.Router();

/**
 * GET /api/admin/dashboard
 * Protected: requires valid JWT + role must be exactly "admin"
 * A user with role "user" will receive HTTP 403.
 */
router.get(
  "/admin/dashboard",
  authMiddleware,
  authorizeRoles("admin"),
  (req, res) => {
    res.status(200).json({
      message: "Welcome to the Admin Dashboard.",
      user: req.user,
    });
  }
);

/**
 * PUT /api/admin/change-password
 * Protected: requires valid JWT + role must be exactly "admin"
 */
router.put(
  "/admin/change-password",
  authMiddleware,
  authorizeRoles("admin"),
  changeAdminPassword
);

module.exports = router;
