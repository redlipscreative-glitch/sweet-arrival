import type { Metadata } from 'next'
import { Playfair_Display, Nunito } from 'next/font/google'
import './globals.css'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="bg-cream text-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  )
}
