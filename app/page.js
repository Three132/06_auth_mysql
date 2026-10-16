import Link from "next/link";

// home page: links to every page in the project
export default function Home() {
  return (
    <section className="home">
      <p className="eyebrow">Next.js · MySQL · JWT</p>
      <h1>
        Members <em>only,</em>
        <br />
        done properly.
      </h1>
      <ul className="menu">
        <li>
          <Link href="/register">
            <span className="num">01</span>
            <span className="title">Register</span>
            <span className="note">Create a new account</span>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <span className="num">02</span>
            <span className="title">Login</span>
            <span className="note">Sign in with your email</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <span className="num">03</span>
            <span className="title">Dashboard</span>
            <span className="note">Members only</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
