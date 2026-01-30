import React, { useState } from "react";
import API from "../../api";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/signup", {
        username,
        email,
        password,
      });

      if (res.data.success) {
        alert("Signup successful ✅");
        window.location.href = "http://localhost:3001";
      } else {
        alert(res.data.message || "Signup failed ❌");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Signup error ❌");
      console.log("Signup error:", err);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-subtitle">Signup to continue to dashboard</p>

        <form onSubmit={handleSignup} className="auth-form">
          <div className="auth-field">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="auth-btn" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
