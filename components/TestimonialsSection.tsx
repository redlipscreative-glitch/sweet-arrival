const testimonials = [
  {
    name: 'Sarah Lim',
    location: 'Penang',
    text: 'The photographer made me feel so comfortable during my maternity shoot. The photos are absolutely stunning — I cry every time I look at them.',
    session: 'Maternity Shoot',
  },
  {
    name: 'Priya N.',
    location: 'Georgetown',
    text: 'My newborn shoot was done when my baby was 7 days old. The photos captured every tiny detail perfectly. Cannot recommend enough!',
    session: 'Newborn Shoot',
  },
  {
    name: 'Michelle Tan',
    location: 'Penang',
    text: 'I bought so many things from the shop recommendations and took the breastfeeding course. It genuinely helped me in my first weeks.',
    session: 'Shop & Courses',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-blush/20 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl text-charcoal mb-3">Mums Love Sweet Arrival</h2>
          <p className="font-body text-charcoal/60">Real experiences from our community</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="font-body text-charcoal/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-heading text-charcoal font-semibold">{t.name}</p>
                <p className="font-body text-charcoal/50 text-xs">{t.location} · {t.session}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
