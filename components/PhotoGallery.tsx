const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop', alt: 'Maternity shoot' },
  { src: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&h=400&fit=crop', alt: 'Newborn shoot' },
  { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=400&fit=crop', alt: 'Family session' },
  { src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop', alt: 'Bump to baby' },
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop', alt: 'Maternity yoga' },
  { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop', alt: 'Newborn wrap' },
]

export default function PhotoGallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-heading text-3xl text-charcoal mb-2">Gallery</h2>
        <p className="font-body text-charcoal/60 text-sm">A glimpse into every precious moment</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryImages.map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
