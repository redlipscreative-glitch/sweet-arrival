import type { Metadata } from 'next'
import { Playfair_Display, Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sweet Arrival | Maternity & Newborn Photoshoot, Courses & Shop',
  description: 'Celebrate your journey to motherhood with Sweet Arrival — professional maternity and newborn photoshoots in Penang, online pregnancy courses, and a curated shop for mums.',
  openGraph: {
    title: 'Sweet Arrival',
    description: 'Your Journey to Motherhood, Celebrated.',
    siteName: 'Sweet Arrival',
    locale: 'en_MY',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="bg-cream text-charcoal font-body antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
