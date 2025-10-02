 


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2

const User = require("../models/User");

// heer we use  Get method to fetch  dashboard data for the logged-in user
exports.getDashboardData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Failed to load dashboard data", error: err.message });
  }
};

// Updateing  dashboard data for the logged-in user
exports.updateDashboardData = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.json({ msg: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get full profile data for the logged-in user
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Failed to load profile", error: err.message });
  }
};
