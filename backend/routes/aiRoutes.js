
// backend/routes/aiRoutes.js

const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { rephraseText, saveRephrased, deleteRephrased } = require("../controllers/aiController");
 
router.post("/rephrase", rephraseText);
 
router.post("/save", auth, saveRephrased);
router.delete("/delete/:id", auth, deleteRephrased);

module.exports = router;
