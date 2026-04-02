import CourseCard from '@/components/CourseCard'
import { courses } from '@/data/courses'

export default function CoursesPage() {
  const chineseCourses = courses.filter((c) => c.language === '中文')
  const englishCourses = courses.filter((c) => c.language !== '中文')

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-mauve/20 via-cream to-blush/10 py-20 px-4 text-center">
        <p className="text-gold font-body tracking-widest uppercase text-xs mb-3">Learn & Grow</p>
        <h1 className="font-heading text-5xl text-charcoal mb-4">Courses for Every Stage</h1>
        <p className="font-body text-charcoal/60 max-w-xl mx-auto">
          Expert-led courses from Udemy and Coursera — in English and Chinese. Handpicked for mums at every stage of the journey.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">

        {/* Chinese Courses Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 pb-2 border-b-2 border-red-200">
            <span className="bg-red-100 text-red-700 text-sm font-body font-semibold px-3 py-1 rounded-full">中文课程</span>
            <h2 className="font-heading text-2xl text-charcoal">华语课程</h2>
            <span className="font-body text-charcoal/50 text-sm">Chinese Courses</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {chineseCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* English Courses by Category */}
        <div className="mb-6 pb-2 border-b-2 border-blush">
          <h2 className="font-heading text-2xl text-charcoal">English Courses</h2>
        </div>

        {(['Prenatal', 'Newborn Care', 'Breastfeeding', 'Postnatal'] as const).map((category) => {
          const categoryCourses = englishCourses.filter((c) => c.category === category)
          return (
            <div key={category} className="mb-14">
              <h3 className="font-heading text-xl text-charcoal mb-5 pb-2 border-b border-blush/60">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categoryCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )
        })}

        {/* Affiliate disclaimer */}
        <p className="text-xs font-body text-charcoal/40 text-center mt-8 max-w-2xl mx-auto">
          Sweet Arrival curates courses from trusted platforms. Some links are affiliate links — we may earn a small commission if you enroll, at no extra cost to you. 本站部分链接为推广链接，购买课程时不会产生额外费用。
        </p>
      </section>
    </>
  )
}
