const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../utils/SecretToken");

module.exports.Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // password hash already in UserModel pre-save hook ✅
    const user = await User.create({ username, email, password });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // production => true
      sameSite: "lax",
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful ✅",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.log("Signup error:", error);
    return res.status(500).json({ success: false, message: "Signup error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful ✅",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.log("Login error:", error);
    return res.status(500).json({ success: false, message: "Login error" });
  }
};

module.exports.Logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ success: true, message: "Logout done ✅" });
};
