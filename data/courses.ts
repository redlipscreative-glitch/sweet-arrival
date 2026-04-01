export type Course = {
  id: string
  title: string
  description: string
  platform: 'Udemy' | 'Coursera'
  duration: string
  price: string
  rating: number
  reviewCount: number
  category: 'Prenatal' | 'Postnatal' | 'Newborn Care' | 'Breastfeeding'
  affiliateUrl: string
  imageUrl: string
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Pregnancy Guide: Prenatal Wellness & Birth Prep',
    description: 'Everything you need to know from conception to birth — nutrition, exercise, birth planning, and emotional wellbeing.',
    platform: 'Udemy',
    duration: '6.5 hours',
    price: 'RM 89',
    rating: 4.8,
    reviewCount: 3241,
    category: 'Prenatal',
    affiliateUrl: 'https://www.udemy.com/course/complete-pregnancy-guide/?couponCode=SWEETARRIVAL',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop',
  },
  {
    id: '2',
    title: 'Prenatal Yoga for Every Trimester',
    description: 'Safe, gentle yoga sequences for each stage of pregnancy. Reduce back pain, improve sleep, and prepare your body for birth.',
    platform: 'Udemy',
    duration: '4 hours',
    price: 'RM 59',
    rating: 4.7,
    reviewCount: 1892,
    category: 'Prenatal',
    affiliateUrl: 'https://www.udemy.com/course/prenatal-yoga/?couponCode=SWEETARRIVAL',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=225&fit=crop',
  },
  {
    id: '3',
    title: 'Newborn Care: The First 12 Weeks',
    description: 'Practical skills for new parents — feeding, sleeping, bathing, soothing, and recognising when to call a doctor.',
    platform: 'Udemy',
    duration: '5 hours',
    price: 'RM 79',
    rating: 4.9,
    reviewCount: 2104,
    category: 'Newborn Care',
    affiliateUrl: 'https://www.udemy.com/course/newborn-care-first-12-weeks/?couponCode=SWEETARRIVAL',
    imageUrl: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&h=225&fit=crop',
  },
  {
    id: '4',
    title: 'Breastfeeding Masterclass',
    description: 'A complete guide to successful breastfeeding — latch, supply, pumping, storage, and returning to work while nursing.',
    platform: 'Udemy',
    duration: '3.5 hours',
    price: 'RM 69',
    rating: 4.8,
    reviewCount: 1567,
    category: 'Breastfeeding',
    affiliateUrl: 'https://www.udemy.com/course/breastfeeding-masterclass/?couponCode=SWEETARRIVAL',
    imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=225&fit=crop',
  },
  {
    id: '5',
    title: 'Postnatal Recovery: Body & Mind',
    description: 'Evidence-based guide to recovering after birth — pelvic floor rehab, postnatal nutrition, and managing the fourth trimester.',
    platform: 'Coursera',
    duration: '8 hours',
    price: 'RM 149',
    rating: 4.6,
    reviewCount: 987,
    category: 'Postnatal',
    affiliateUrl: 'https://www.coursera.org/learn/postnatal-recovery?irclickid=SWEETARRIVAL',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=225&fit=crop',
  },
  {
    id: '6',
    title: 'Understanding Your Newborn: Sleep & Soothing',
    description: 'Learn gentle, evidence-based methods to establish healthy sleep habits and soothe your newborn in the early weeks.',
    platform: 'Coursera',
    duration: '5 hours',
    price: 'RM 129',
    rating: 4.7,
    reviewCount: 743,
    category: 'Newborn Care',
    affiliateUrl: 'https://www.coursera.org/learn/newborn-sleep?irclickid=SWEETARRIVAL',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=225&fit=crop',
  },
]
