import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/agriculture-logo.png";
import "../App.css";

const api = {
  login: async (username, password) => {
    const res = await fetch("http://localhost:4000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    return res.json();
  },
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setError(null);
    try {
      const res = await api.login(username, password);
      if (res.ok && res.token) {
        localStorage.setItem("admin_token", res.token);
        navigate("/admin");
      } else {
        setError(res.message || "Login failed");
      }
    } catch (err) {
      setError("Server error. Try again.");
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <img src={logo} alt="Agriculture Dept Logo" className="logo" />
        <h2>Agriculture Dept.</h2>
        <p>Admin Login</p>

        <form onSubmit={submit}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
