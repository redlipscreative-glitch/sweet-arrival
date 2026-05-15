import { ExternalLink, Star, Clock } from 'lucide-react'
import { Course } from '@/data/courses'

const platformColors: Record<Course['platform'], string> = {
  Udemy: 'bg-purple-100 text-purple-700',
  Coursera: 'bg-blue-100 text-blue-700',
}

const categoryColors: Record<Course['category'], string> = {
  Prenatal: 'bg-blush/50 text-mauve',
  Postnatal: 'bg-yellow-100 text-yellow-800',
  'Newborn Care': 'bg-green-100 text-green-700',
  Breastfeeding: 'bg-mauve/20 text-mauve',
  Wellness: 'bg-teal-100 text-teal-700',
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs px-2 py-0.5 rounded-full font-body ${platformColors[course.platform]}`}>
            {course.platform}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-body ${categoryColors[course.category]}`}>
            {course.category}
          </span>
          {course.language === '中文' && (
            <span className="text-xs px-2 py-0.5 rounded-full font-body bg-red-100 text-red-700 font-semibold">
              中文
            </span>
          )}
        </div>
        <h3 className="font-body font-semibold text-charcoal text-sm leading-snug mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-xs font-body text-charcoal/60 leading-relaxed mb-3 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center gap-3 mb-3 text-xs text-charcoal/60">
          <span className="flex items-center gap-1">
            <Star size={12} className="text-gold fill-gold" />
            {course.rating} ({course.reviewCount.toLocaleString()})
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {course.duration}
          </span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-heading text-mauve font-semibold">{course.price}</span>
          <a
            href={course.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center gap-1.5 bg-mauve text-white text-sm font-body px-4 py-2 rounded-xl hover:bg-charcoal transition-colors"
          >
            Enroll <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  )
}
