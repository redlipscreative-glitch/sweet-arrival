import HeroSection from '@/components/HeroSection'
import FeatureBlocks from '@/components/FeatureBlocks'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProductCard from '@/components/ProductCard'
import CourseCard from '@/components/CourseCard'
import { products } from '@/data/products'
import { courses } from '@/data/courses'
import Link from 'next/link'

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.badge === 'Best Seller').slice(0, 4)
  const featuredCourse = courses[0]

  return (
    <>
      <HeroSection />
      <FeatureBlocks />

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl text-charcoal">Mum&rsquo;s Favourites</h2>
            <p className="font-body text-charcoal/60 text-sm mt-1">Best-selling picks for every stage</p>
          </div>
          <Link href="/shop" className="text-mauve font-body text-sm hover:text-charcoal transition-colors shrink-0 ml-4">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Course */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl text-charcoal">Learn from the Best</h2>
            <p className="font-body text-charcoal/60 text-sm mt-1">Expert courses for every stage of your journey</p>
          </div>
          <Link href="/courses" className="text-mauve font-body text-sm hover:text-charcoal transition-colors shrink-0 ml-4">
            View all →
          </Link>
        </div>
        <div className="max-w-sm">
          <CourseCard course={featuredCourse} />
        </div>
      </section>

      <TestimonialsSection />
    </>
  )
}
