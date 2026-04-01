import { ExternalLink, Star } from 'lucide-react'
import { Product } from '@/data/products'

const platformColors: Record<Product['platform'], string> = {
  Lazada: 'bg-orange-100 text-orange-700',
  Shopee: 'bg-red-100 text-red-700',
  Amazon: 'bg-yellow-100 text-yellow-800',
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-mauve text-white text-xs px-2 py-1 rounded-full font-body">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className={`self-start text-xs px-2 py-0.5 rounded-full font-body mb-2 ${platformColors[product.platform]}`}>
          {product.platform}
        </span>
        <h3 className="font-body font-semibold text-charcoal text-sm leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          <Star size={12} className="text-gold fill-gold" />
          <span className="text-xs font-body text-charcoal/60">{product.rating} ({product.reviewCount.toLocaleString()})</span>
        </div>
        <p className="font-heading text-mauve font-semibold mt-auto mb-3">{product.price}</p>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-1.5 bg-blush/40 text-charcoal text-sm font-body py-2 rounded-xl hover:bg-mauve hover:text-white transition-colors"
        >
          Buy Now <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}
