import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-50 via-cream to-blush/20 py-20 px-4 text-center">
        <p className="text-gold font-body tracking-widest uppercase text-xs mb-3">Curated for Mums</p>
        <h1 className="font-heading text-5xl text-charcoal mb-4">Shop Sweet Arrival</h1>
        <p className="font-body text-charcoal/60 max-w-xl mx-auto">
          Hand-picked essentials for every stage — maternity, newborn, breastfeeding, and postpartum. Shop from Lazada, Shopee, and Amazon. Ships across Asia.
        </p>
      </section>

      {/* Products by Category */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {(['Maternity', 'Newborn', 'Breastfeeding', 'Postpartum'] as const).map((category) => {
          const categoryProducts = products.filter((p) => p.category === category)
          return (
            <div key={category} className="mb-14">
              <h2 className="font-heading text-2xl text-charcoal mb-6 pb-2 border-b border-blush">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )
        })}

        {/* Affiliate disclaimer */}
        <p className="text-xs font-body text-charcoal/40 text-center mt-8 max-w-2xl mx-auto">
          Sweet Arrival recommends products we believe in. Some links are affiliate links — we may earn a small commission on purchases made through these links, at no extra cost to you.
        </p>
      </section>
    </>
  )
}
