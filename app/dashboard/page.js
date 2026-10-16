"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  // load the logged-in user from the API
  useEffect(() => {
    fetch("/api/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  // ask the server to delete the cookie, then go to login
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login"; // full page load clears the cached dashboard
  };

  if (!user) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="auth-box">
      <h1>Dashboard</h1>
      <p className="subtitle">Welcome, {user.fullname}</p>
      <table className="info">
        <tbody>
          <tr>
            <th>Full name</th>
            <td>{user.fullname}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Member ID</th>
            <td>{user.id}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
