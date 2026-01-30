import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/login", { email, password });

      if (res.data.success) {
        alert("Login Successful ✅");

        // ✅ redirect to dashboard app (port 3001)
        window.location.href = "http://localhost:3001";
      } else {
        alert(res.data.message || "Login failed ❌");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login error ❌");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Login</h1>

      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

