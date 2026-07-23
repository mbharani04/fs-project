const User = require("../models/User");
const bcrypt = require("bcrypt");

/**
 * PUT /api/admin/change-password
 * Allows logged-in admin user to change their password.
 */
const changeAdminPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const adminId = req.user.userId;

    if (!currentPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: "Current password and new password are required." });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "New password must be at least 6 characters long." });
    }

    const admin = await User.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: "Admin account not found." });
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect current password." });
    }

    // Hash and save new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashedPassword;
    await admin.save();

    res.status(200).json({ message: "Password updated successfully." });
  } catch (error) {
    console.error("changeAdminPassword error:", error);
    res.status(500).json({ message: "Server error. Could not change password." });
  }
};

module.exports = { changeAdminPassword };
