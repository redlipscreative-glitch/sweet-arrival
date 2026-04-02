'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import GoogleTranslate from '@/components/GoogleTranslate'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/photoshoot', label: 'Photoshoot' },
  { href: '/courses', label: 'Courses' },
  { href: '/shop', label: 'Shop' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-blush">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl text-charcoal tracking-wide">
          Sweet Arrival
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal/70 hover:text-charcoal transition-colors font-body text-sm tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <GoogleTranslate />
          <Link
            href="/contact"
            className="bg-mauve text-white px-5 py-2 rounded-full text-sm font-body hover:bg-charcoal transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-blush px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-charcoal/70 hover:text-charcoal font-body border-b border-blush/50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 bg-mauve text-white text-center px-5 py-2.5 rounded-full text-sm font-body"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}
