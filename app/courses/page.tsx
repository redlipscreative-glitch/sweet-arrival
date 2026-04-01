import CourseCard from '@/components/CourseCard'
import { courses } from '@/data/courses'

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-mauve/20 via-cream to-blush/10 py-20 px-4 text-center">
        <p className="text-gold font-body tracking-widest uppercase text-xs mb-3">Learn & Grow</p>
        <h1 className="font-heading text-5xl text-charcoal mb-4">Courses for Every Stage</h1>
        <p className="font-body text-charcoal/60 max-w-xl mx-auto">
          Expert-led courses from Udemy and Coursera — handpicked for mums at every stage of the journey. Learn at your own pace, from the comfort of home.
        </p>
      </section>

      {/* Courses by Category */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {(['Prenatal', 'Newborn Care', 'Breastfeeding', 'Postnatal'] as const).map((category) => {
          const categoryCourses = courses.filter((c) => c.category === category)
          return (
            <div key={category} className="mb-14">
              <h2 className="font-heading text-2xl text-charcoal mb-6 pb-2 border-b border-blush">
                {category}
              </h2>
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
          Sweet Arrival curates courses from trusted platforms. Some links are affiliate links — we may earn a small commission if you enroll, at no extra cost to you.
        </p>
      </section>
    </>
  )
}
