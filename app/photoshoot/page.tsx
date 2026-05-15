import PhotoGallery from '@/components/PhotoGallery'
import Link from 'next/link'
import { MapPin, Users } from 'lucide-react'

const packages = [
  {
    name: 'Maternity',
    desc: 'Beautiful maternity portraits with your husband, indoors or outdoors',
    pricing: [
      { label: 'Indoor (With Husband)', price: 'RM 499' },
      { label: 'Outdoor (With Husband)', price: 'RM 599' },
    ],
    includes: [
      'One professional photographer',
      'Poses guidance during session',
      'Self prepare (1–2 outfits)',
      'All softcopies colour tuned & returned',
      'Softcopies delivered within 2 weeks',
    ],
    addons: ['Following hour — RM 299/hr', 'Photobook available', 'Makeup & hairdo package available'],
  },
  {
    name: 'Newborn Standard',
    desc: 'Timeless newborn portraits capturing your baby\'s precious early days',
    pricing: [
      { label: 'Studio', price: 'RM 688' },
      { label: 'On-Site', price: 'RM 888' },
    ],
    includes: [
      'Full edits — 13 copies',
      'Basic edits — 30 copies',
      '2 poses',
      '2 styling',
    ],
    highlight: true,
  },
  {
    name: 'Newborn Premium',
    desc: 'Our most complete newborn experience with hardcopy keepsakes included',
    pricing: [
      { label: 'Studio', price: 'RM 1,200' },
      { label: 'On-Site', price: 'RM 1,400' },
    ],
    includes: [
      'Full edits — 20 copies',
      'Basic edits — all copies',
      '3 poses',
      '4 styling',
      '11R photo + frame ×1',
      'Album 11×8 inch ×1',
    ],
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

              {/* Pricing */}
              <div className="space-y-1 mb-5">
                {pkg.pricing.map((p) => (
                  <div key={p.label} className="flex justify-between items-center">
                    <span className={`font-body text-xs ${pkg.highlight ? 'text-white/70' : 'text-charcoal/60'}`}>{p.label}</span>
                    <span className={`font-heading text-base ${pkg.highlight ? 'text-white' : 'text-mauve'}`}>{p.price}</span>
                  </div>
                ))}
              </div>

              {/* Includes */}
              <ul className="space-y-2 mb-4 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className={`font-body text-sm flex items-center gap-2 ${pkg.highlight ? 'text-white/80' : 'text-charcoal/70'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pkg.highlight ? 'bg-white' : 'bg-mauve'}`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Add-ons (Maternity only) */}
              {'addons' in pkg && pkg.addons && (
                <div className="mb-5">
                  <p className={`font-body text-xs uppercase tracking-widest mb-2 ${pkg.highlight ? 'text-white/50' : 'text-charcoal/40'}`}>Add-Ons</p>
                  <ul className="space-y-1">
                    {pkg.addons.map((addon) => (
                      <li key={addon} className={`font-body text-xs flex items-center gap-2 ${pkg.highlight ? 'text-white/70' : 'text-charcoal/50'}`}>
                        <span className={`w-1 h-1 rounded-full shrink-0 ${pkg.highlight ? 'bg-white/50' : 'bg-mauve/50'}`} />
                        {addon}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href="/contact"
                className={`text-center py-3 rounded-2xl font-body text-sm transition-colors mt-auto ${
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
