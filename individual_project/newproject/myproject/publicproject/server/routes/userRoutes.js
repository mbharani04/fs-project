const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

/**
 * GET /api/user/dashboard
 * Protected: requires valid JWT + role must be "user" or "admin"
 * (Admins can also view the user dashboard data if needed)
 */
router.get(
  "/user/dashboard",
  authMiddleware,
  authorizeRoles("user", "admin"),
  (req, res) => {
    res.status(200).json({
      message: "Welcome to the User Dashboard.",
      user: req.user,
    });
  }
);

module.exports = router;
