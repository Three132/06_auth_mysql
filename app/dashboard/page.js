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
    <section className="dashboard">
      <p className="eyebrow">03 — Dashboard</p>
      <h1>
        Hello, <em>{user.fullname}.</em>
      </h1>
      <dl className="info">
        <div>
          <dt>Full name</dt>
          <dd>{user.fullname}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{user.email}</dd>
        </div>
        <div>
          <dt>Member ID</dt>
          <dd>{user.id}</dd>
        </div>
      </dl>
      <button className="button-ghost" onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
}
