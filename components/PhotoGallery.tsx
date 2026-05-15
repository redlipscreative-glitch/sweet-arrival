const galleryImages = [
  { src: '/gallery/3603792884239727920.jpg', alt: 'Family with newborn' },
  { src: '/gallery/3603311432213864538.jpg', alt: 'Newborn in basket' },
  { src: '/gallery/3602313159407546492.jpg', alt: 'Family portrait' },
  { src: '/gallery/3601860136505115808.jpg', alt: 'Parents with newborn' },
  { src: '/gallery/3600863629651764752.jpg', alt: 'Mum and baby' },
  { src: '/gallery/3600108573037015034.jpg', alt: 'Dad holding newborn' },
  { src: '/gallery/3599686006588052720.jpg', alt: 'Newborn portrait' },
  { src: '/gallery/3598689289669438266.jpg', alt: 'Newborn sleeping' },
  { src: '/gallery/3598085235264473145.jpg', alt: 'Family session' },
  { src: '/gallery/3487375869716804417.jpg', alt: 'Newborn in basket with toy' },
  { src: '/gallery/3487194658376918533.jpg', alt: 'Newborn close up' },
  { src: '/gallery/3487043694744905984.jpg', alt: 'Sweet newborn portrait' },
  { src: '/gallery/3486651198212660986_3486651190419443332.jpg', alt: 'Newborn on moon prop 2' },
  { src: '/gallery/3486469839318743325.jpg', alt: 'Newborn on moon prop' },
  { src: '/gallery/3486318923471221470.jpg', alt: 'Newborn studio' },
  { src: '/gallery/3485926429746123389.jpg', alt: 'Newborn in flower basket' },
  { src: '/gallery/3485745092007178716.jpg', alt: 'Newborn styling' },
  { src: '/gallery/3485594137915938149.jpg', alt: 'Newborn in basket with flowers' },
  { src: '/gallery/3483570851997399553_3483570841343920375.jpg', alt: 'Maternity portrait' },
  { src: '/gallery/3483570851997399553_3483570840731554671.jpg', alt: 'Maternity session' },
  { src: '/gallery/3483419825014077441.jpg', alt: 'Maternity sunset with flowers' },
  { src: '/gallery/3481970235350089318_3481970223538882780.jpg', alt: 'Sweet arrival session' },
  { src: '/gallery/3481970235350089318_3481970223077580805.jpg', alt: 'Sweet arrival session 2' },
  { src: '/gallery/3481396394913482050_3481396384763454600.jpg', alt: 'Newborn session 2' },
  { src: '/gallery/3481245377722865781_3481245367555923462.jpg', alt: 'Baby portrait' },
  { src: '/gallery/3481245377722865781_3481245367866269390.jpg', alt: 'Baby portrait 2' },
  { src: '/gallery/3480671571745135987.jpg', alt: 'Newborn photoshoot' },
  { src: '/gallery/3480520607064757612_3480520594297265384.jpg', alt: 'Studio session' },
  { src: '/gallery/3480520607064757612_3480520594070926636.jpg', alt: 'Studio session 2' },
  { src: '/gallery/3479916636927603073.jpg', alt: 'Maternity shoot' },
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
