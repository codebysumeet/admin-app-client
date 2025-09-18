import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const api = {
  verify: async (token) => {
    const res = await fetch("http://localhost:4000/api/admin/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    return res.json();
  },
};

export default function AdminPage() {
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) return navigate("/login");

    api.verify(token).then((res) => {
      if (res.ok) setStatus("verified");
      else {
        localStorage.removeItem("admin_token");
        navigate("/login");
      }
    });
  }, [navigate]);

  if (status === "loading") return <div>Checking credentials...</div>;

  return (
    <div className="admin-page">
      <h1>🌾 Welcome Admin</h1>
      <p>This is the Agriculture Department secure dashboard.</p>
      <button
        onClick={() => {
          localStorage.removeItem("admin_token");
          navigate("/login");
        }}
        className="logout-btn"
      >
        Logout
      </button>
    </div>
  );
}
