import Link from 'next/link'
import { Camera, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl text-cream mb-3">Sweet Arrival</h3>
          <p className="text-sm leading-relaxed">
            Your journey to motherhood, celebrated. Photoshoots, courses, and everything a mum needs — all in one place.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-cream mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/photoshoot', label: 'Photoshoot' },
              { href: '/courses', label: 'Courses' },
              { href: '/shop', label: 'Shop' },
              { href: '/contact', label: 'Book Now' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blush transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-cream mb-3">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-blush shrink-0" />
              <a href="https://wa.me/601160979138" className="hover:text-blush transition-colors">
                011-60979138
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-blush shrink-0" />
              <a href="mailto:redlipscreative@gmail.com" className="hover:text-blush transition-colors">
                redlipscreative@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Camera size={16} className="text-blush shrink-0" />
              <a href="https://instagram.com/sweetarrival.asia" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
                @sweetarrival.asia
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 text-center py-4 text-xs text-cream/40">
        © {new Date().getFullYear()} Sweet Arrival. All rights reserved. | Penang, Malaysia
      </div>
    </footer>
  )
}
