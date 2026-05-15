import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blush/30 via-cream to-mauve/20">
      <div className="absolute top-20 right-10 w-64 h-64 bg-blush/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-mauve/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-gold font-body tracking-[0.2em] uppercase text-sm mb-4">
          Welcome to Sweet Arrival
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-charcoal leading-tight mb-6">
          Your Journey to
          <span className="block text-mauve">Motherhood</span>
        </h1>
        <p className="font-body text-charcoal/60 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional maternity and newborn photoshoots, curated pregnancy courses, and everything a mum needs — all in one beautiful place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/photoshoot"
            className="bg-mauve text-white px-8 py-4 rounded-full font-body text-base hover:bg-charcoal transition-colors shadow-lg"
          >
            Book a Photoshoot
          </Link>
          <Link
            href="/shop"
            className="bg-transparent border-2 border-mauve text-mauve px-8 py-4 rounded-full font-body text-base hover:bg-mauve hover:text-white transition-colors"
          >
            Shop for Mum
          </Link>
        </div>
      </div>
    </section>
  )
}
