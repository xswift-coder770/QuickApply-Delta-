 

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { saveRephrased, deleteRephrased, rephraseText } = require("../controllers/aiController");

router.post("/save", auth, saveRephrased);

router.delete("/delete/:id", auth, deleteRephrased);
router.post("/rephrase", rephraseText);

module.exports = router;