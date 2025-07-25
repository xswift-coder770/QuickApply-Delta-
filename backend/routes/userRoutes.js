
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getDashboardData, updateDashboardData, getProfile } = require("../controllers/userController");

router.get("/dashboard", auth, getDashboardData);
router.put("/dashboard", auth, updateDashboardData);
router.get("/profile", auth, getProfile);

module.exports = router;
