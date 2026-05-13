import PhotoGallery from '@/components/PhotoGallery'
import Link from 'next/link'
import { MapPin, Clock, Users } from 'lucide-react'

const packages = [
  {
    name: 'Maternity Bliss',
    desc: 'Bump session celebrating your beautiful pregnancy journey',
    duration: '1.5 hours',
    includes: ['50+ edited photos', 'Studio or outdoor location', 'Outfit guidance', 'Online gallery'],
    price: 'From RM 499',
  },
  {
    name: 'Newborn Dreams',
    desc: 'Timeless newborn portraits in the first 14 days of life',
    duration: '3 hours',
    includes: ['70+ edited photos', 'Wrapping and posing', 'Props included', 'Online gallery', 'Studio setup'],
    price: 'From RM 699',
    highlight: true,
  },
  {
    name: 'Family Story',
    desc: 'Mum, dad, and baby captured together as a new family',
    duration: '2 hours',
    includes: ['60+ edited photos', 'Indoor or outdoor', 'Family styling tips', 'Online gallery'],
    price: 'From RM 599',
  },
]

export default function PhotoshootPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blush/20 via-cream to-mauve/10 py-20 px-4 text-center">
        <p className="text-gold font-body tracking-widest uppercase text-xs mb-3">Sweet Arrival Photography</p>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">Every Moment, Preserved</h1>
        <p className="font-body text-charcoal/60 max-w-xl mx-auto mb-6">
          Professional maternity, newborn, and family photoshoots in Penang — expanding to all of Malaysia.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm font-body text-charcoal/60 mb-8">
          <span className="flex items-center gap-1.5"><MapPin size={14} className="text-mauve" /> Penang, Malaysia</span>
          <span className="flex items-center gap-1.5"><Users size={14} className="text-mauve" /> Expanding nationwide</span>
        </div>
        <Link href="/contact" className="bg-mauve text-white px-8 py-4 rounded-full font-body hover:bg-charcoal transition-colors">
          Book Your Session
        </Link>
      </section>

      {/* Packages */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl text-charcoal text-center mb-10">Session Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 flex flex-col ${
                pkg.highlight
                  ? 'bg-mauve text-white shadow-xl md:scale-105'
                  : 'bg-white shadow-sm border border-blush/30'
              }`}
            >
              {pkg.highlight && (
                <span className="self-start bg-white/20 text-white text-xs px-3 py-1 rounded-full font-body mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`font-heading text-2xl mb-2 ${pkg.highlight ? 'text-white' : 'text-charcoal'}`}>
                {pkg.name}
              </h3>
              <p className={`font-body text-sm mb-4 ${pkg.highlight ? 'text-white/70' : 'text-charcoal/60'}`}>
                {pkg.desc}
              </p>
              <div className={`flex items-center gap-1.5 text-sm font-body mb-5 ${pkg.highlight ? 'text-white/70' : 'text-charcoal/60'}`}>
                <Clock size={14} /> {pkg.duration}
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className={`font-body text-sm flex items-center gap-2 ${pkg.highlight ? 'text-white/80' : 'text-charcoal/70'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pkg.highlight ? 'bg-white' : 'bg-mauve'}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`font-heading text-xl mb-4 ${pkg.highlight ? 'text-white' : 'text-mauve'}`}>
                {pkg.price}
              </p>
              <Link
                href="/contact"
                className={`text-center py-3 rounded-2xl font-body text-sm transition-colors ${
                  pkg.highlight
                    ? 'bg-white text-mauve hover:bg-blush'
                    : 'bg-mauve text-white hover:bg-charcoal'
                }`}
              >
                Book This Package
              </Link>
            </div>
          ))}
        </div>
      </section>

      <PhotoGallery />
    </>
  )
}
