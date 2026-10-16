import Link from "next/link";

// home page: links to every page in the project
export default function Home() {
  return (
    <div className="auth-box">
      <h1>Auth Demo</h1>
      <p className="subtitle">Register, log in and open the members page.</p>
      <ul className="menu">
        <li>
          <Link href="/register">
            Register
            <small>Create a new account</small>
          </Link>
        </li>
        <li>
          <Link href="/login">
            Login
            <small>Sign in with your email</small>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            Dashboard
            <small>Members only</small>
          </Link>
        </li>
      </ul>
    </div>
  );
}
