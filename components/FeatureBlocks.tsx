import Link from 'next/link'
import { Camera, BookOpen, ShoppingBag } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'Photoshoot',
    description: 'Maternity, newborn, and family sessions in Penang. Precious moments captured beautifully.',
    href: '/photoshoot',
    cta: 'See Packages',
    bg: 'bg-blush/30',
  },
  {
    icon: BookOpen,
    title: 'Courses',
    description: 'Expert-led courses on prenatal wellness, newborn care, breastfeeding, and postnatal recovery.',
    href: '/courses',
    cta: 'Browse Courses',
    bg: 'bg-mauve/20',
  },
  {
    icon: ShoppingBag,
    title: 'Shop',
    description: 'Curated essentials for every stage — maternity, newborn, breastfeeding, and postpartum. Shipped across Asia.',
    href: '/shop',
    cta: 'Shop Now',
    bg: 'bg-yellow-50',
  },
]

export default function FeatureBlocks() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl text-charcoal mb-3">Everything You Need</h2>
        <p className="font-body text-charcoal/60">From bump to baby, we have got you covered.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className={`${f.bg} rounded-3xl p-8 flex flex-col`}>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <f.icon size={24} className="text-mauve" />
            </div>
            <h3 className="font-heading text-2xl text-charcoal mb-3">{f.title}</h3>
            <p className="font-body text-charcoal/60 text-sm leading-relaxed flex-1 mb-6">
              {f.description}
            </p>
            <Link
              href={f.href}
              className="self-start text-mauve font-body text-sm font-semibold hover:text-charcoal transition-colors underline underline-offset-4"
            >
              {f.cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
