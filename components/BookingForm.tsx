export default function BookingForm() {
  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-sm border border-blush/30">
      <iframe
        src="https://tally.so/embed/wkQ5Vd?hideTitle=1&transparentBackground=1"
        width="100%"
        height="500"
        frameBorder={0}
        title="Book a Photoshoot"
      />
      <p className="text-xs font-body text-charcoal/40 text-center py-3">
        Prefer WhatsApp?{' '}
        <a href="https://wa.me/601160979138" className="text-mauve hover:underline">
          Message us directly
        </a>
      </p>
    </div>
  )
}
