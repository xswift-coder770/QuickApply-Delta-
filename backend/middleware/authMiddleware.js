 


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2


const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token, access denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // ✅ Fixed: store full decoded payload (not just id)
    req.user = decoded;

    next();
  } catch (err) {
    console.error("JWT Verification Failed:", err.message);
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = auth;
