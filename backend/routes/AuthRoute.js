const router = require("express").Router();
const { Signup, Login, Logout } = require("../controllers/AuthController");
const { verifyToken } = require("../middleware/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

// ✅ Protected check route
router.get("/me", verifyToken, (req, res) => {
  res.json({ success: true, message: "Authorized ✅", user: req.user });
});

module.exports = router;
