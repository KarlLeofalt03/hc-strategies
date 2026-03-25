'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/',        label: 'Home' },
  { href: '/course',  label: 'Course' },
  { href: '/tools',   label: 'Tools' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/support', label: 'Support' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        {/* Logo */}
        <Link href="/" className="navbar__logo">
          <Image
            src="/logo-small.png"
            alt="HC Strategies"
            width={48}
            height={48}
            className="navbar__logo-img"
            priority
          />
          <span className="navbar__logo-text font-display">
            HC <span>STRATEGIES</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`navbar__link ${pathname === l.href ? 'navbar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="navbar__right">
          <span className="navbar__live-badge">
            <span className="status-dot" />
            LIVE MARKET
          </span>
          <Link href="/pricing" className="btn btn--primary btn--enroll">
            Enroll Now
          </Link>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="navbar__hamburger-line"
              style={open ? { transform: 'rotate(45deg) translate(4px, 5px)' } : {}}
            />
            <span
              className="navbar__hamburger-line"
              style={open ? { opacity: 0 } : {}}
            />
            <span
              className="navbar__hamburger-line"
              style={open ? { transform: 'rotate(-45deg) translate(4px, -5px)' } : {}}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`navbar__mobile-link ${pathname === l.href ? 'navbar__mobile-link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/pricing"
            className="btn btn--primary"
            onClick={() => setOpen(false)}
          >
            Enroll Now →
          </Link>
        </div>
      )}
    </nav>
  )
}