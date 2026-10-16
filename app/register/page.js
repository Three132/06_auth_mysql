"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // send the form to the API, go to the login page on success
  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      router.push("/login");
    } else {
      setMessage(data.message); // e.g. "Email already registered"
    }
  };

  return (
    <div className="auth-box">
      <h1>Register</h1>
      <p className="subtitle">Create an account to open the dashboard.</p>
      <form onSubmit={handleRegister}>
        <div className="field">
          <label htmlFor="fullname">Full name</label>
          <input
            id="fullname"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            placeholder="Full name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="At least 6 characters"
            minLength={6}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p className="error">{message}</p>}
      <p className="switch">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
