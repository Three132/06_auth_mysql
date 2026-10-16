import { Geist, Instrument_Serif } from "next/font/google";
import Link from "next/link";
import "./style.css";

// body text font
const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

// big serif font for headings
const displayFont = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Auth Demo — DIT205",
  description: "Register, login and members area with Next.js and MySQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        {/* top bar shown on every page */}
        <header className="navbar">
          <Link href="/" className="brand">
            Auth<span>.</span>Demo
          </Link>
          <nav className="nav-links">
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
        {/* student credit shown on every page */}
        <footer className="footer">
          <span>6803531 ธีรพัฒน์ ทองสิมา</span>
          <span>DIT205 · Next.js + MySQL</span>
        </footer>
      </body>
    </html>
  );
}
