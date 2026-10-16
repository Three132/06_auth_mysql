import { Geist } from "next/font/google";
import Link from "next/link";
import "./style.css";

// body text font
const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "Auth Demo — DIT205",
  description: "Register, login and members area with Next.js and MySQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bodyFont.variable}>
      <body>
        {/* top bar shown on every page */}
        <header className="navbar">
          <Link href="/" className="brand">
            Auth Demo
          </Link>
          <nav className="nav-links">
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
        {/* student credit shown on every page */}
        <footer className="footer">6803531 ธีรพัฒน์ ทองสิมา · DIT205</footer>
      </body>
    </html>
  );
}
