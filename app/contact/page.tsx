import BookingForm from '@/components/BookingForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blush/20 via-cream to-mauve/10 py-20 px-4 text-center">
        <p className="text-gold font-body tracking-widest uppercase text-xs mb-3">Let&apos;s Connect</p>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">Book Your Session</h1>
        <p className="font-body text-charcoal/60 max-w-xl mx-auto">
          Ready to capture your most precious moments? Fill in the form below or WhatsApp us directly.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div>
          <h2 className="font-heading text-2xl text-charcoal mb-6">Get in Touch</h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blush/30 rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={18} className="text-mauve" />
              </div>
              <div>
                <p className="font-body font-semibold text-charcoal text-sm">WhatsApp</p>
                <a href="https://wa.me/601160979138" className="font-body text-charcoal/60 text-sm hover:text-mauve transition-colors">
                  011-60979138
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blush/30 rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={18} className="text-mauve" />
              </div>
              <div>
                <p className="font-body font-semibold text-charcoal text-sm">Email</p>
                <a href="mailto:redlipscreative@gmail.com" className="font-body text-charcoal/60 text-sm hover:text-mauve transition-colors">
                  redlipscreative@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blush/30 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-mauve" />
              </div>
              <div>
                <p className="font-body font-semibold text-charcoal text-sm">Location</p>
                <p className="font-body text-charcoal/60 text-sm">Penang, Malaysia</p>
                <p className="font-body text-charcoal/40 text-xs">Expanding to all of Malaysia</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blush/30 rounded-2xl flex items-center justify-center shrink-0">
                <Clock size={18} className="text-mauve" />
              </div>
              <div>
                <p className="font-body font-semibold text-charcoal text-sm">Response Time</p>
                <p className="font-body text-charcoal/60 text-sm">Usually within a few hours</p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <a
              href="https://wa.me/601160979138?text=Hi!%20I%27d%20love%20to%20book%20a%20photoshoot%20with%20Sweet%20Arrival."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-body text-sm hover:bg-[#20bb5a] transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us Now
            </a>
          </div>
        </div>

        {/* Booking Form */}
        <div>
          <h2 className="font-heading text-2xl text-charcoal mb-6">Fill in a Request</h2>
          <BookingForm />
        </div>
      </section>
    </>
  )
}
