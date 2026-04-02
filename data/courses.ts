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

// NOTE: Replace UDEMY_AFFILIATE_ID with your real Udemy affiliate ID from Impact dashboard
// NOTE: Replace SHOPEE_AFFILIATE_ID with your real Shopee affiliate ID

export const courses: Course[] = [
  // ── PRENATAL ────────────────────────────────────────────────
  {
    id: '1',
    title: 'Rock the Cradle: Prenatal Classes — Rockstar Edition',
    description: 'Fun, modern prenatal classes covering labour prep, breathing techniques, birth plans, and everything you need to feel confident for birth.',
    platform: 'Udemy',
    duration: '5 hours',
    price: 'RM 89',
    rating: 4.8,
    reviewCount: 2104,
    category: 'Prenatal',
    affiliateUrl: 'https://www.udemy.com/course/rock-the-cradle-prenatal-classes-rockstar-edition/',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop',
  },
  {
    id: '2',
    title: 'Complete Pregnancy Guide: Prenatal Wellness & Birth Prep',
    description: 'Everything you need from conception to birth — nutrition, exercise, birth planning, and emotional wellbeing for a healthy pregnancy.',
    platform: 'Udemy',
    duration: '6.5 hours',
    price: 'RM 89',
    rating: 4.8,
    reviewCount: 3241,
    category: 'Prenatal',
    affiliateUrl: 'https://www.udemy.com/course/complete-pregnancy-guide/',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=225&fit=crop',
  },
  {
    id: '3',
    title: 'Prenatal Yoga for Every Trimester',
    description: 'Safe, gentle yoga sequences for each stage of pregnancy. Reduce back pain, improve sleep, and prepare your body for birth.',
    platform: 'Udemy',
    duration: '4 hours',
    price: 'RM 59',
    rating: 4.7,
    reviewCount: 1892,
    category: 'Prenatal',
    affiliateUrl: 'https://www.udemy.com/course/prenatal-yoga/',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=225&fit=crop',
  },
  {
    id: '4',
    title: 'Hypnobirthing: Calm & Confident Birth',
    description: 'Use hypnobirthing techniques to manage pain, reduce fear, and have a calm, positive birth experience — used by thousands of mums worldwide.',
    platform: 'Udemy',
    duration: '3.5 hours',
    price: 'RM 69',
    rating: 4.7,
    reviewCount: 1456,
    category: 'Prenatal',
    affiliateUrl: 'https://www.udemy.com/course/hypnobirthing/',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=225&fit=crop',
  },
  {
    id: '5',
    title: 'Pregnancy Nutrition: Eat Well for You & Baby',
    description: 'Practical, evidence-based guidance on what to eat during each trimester, supplements, food safety, and managing cravings and morning sickness.',
    platform: 'Udemy',
    duration: '3 hours',
    price: 'RM 49',
    rating: 4.6,
    reviewCount: 987,
    category: 'Prenatal',
    affiliateUrl: 'https://www.udemy.com/course/pregnancy-nutrition/',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=225&fit=crop',
  },

  // ── NEWBORN CARE ─────────────────────────────────────────────
  {
    id: '6',
    title: 'Newborn Care: The First 12 Weeks',
    description: 'Practical skills for new parents — feeding, sleeping, bathing, soothing, and recognising when to call a doctor.',
    platform: 'Udemy',
    duration: '5 hours',
    price: 'RM 79',
    rating: 4.9,
    reviewCount: 2104,
    category: 'Newborn Care',
    affiliateUrl: 'https://www.udemy.com/course/newborn-care-first-12-weeks/',
    imageUrl: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&h=225&fit=crop',
  },
  {
    id: '7',
    title: 'Understanding Your Newborn: Sleep & Soothing',
    description: 'Learn gentle, evidence-based methods to establish healthy sleep habits and soothe your newborn in the early weeks.',
    platform: 'Coursera',
    duration: '5 hours',
    price: 'RM 129',
    rating: 4.7,
    reviewCount: 743,
    category: 'Newborn Care',
    affiliateUrl: 'https://www.coursera.org/learn/newborn-sleep',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=225&fit=crop',
  },
  {
    id: '8',
    title: 'Baby First Aid & CPR for Parents',
    description: 'Essential first aid skills every parent must know — choking, CPR, fever management, and when to go to the emergency room.',
    platform: 'Udemy',
    duration: '2.5 hours',
    price: 'RM 49',
    rating: 4.9,
    reviewCount: 5832,
    category: 'Newborn Care',
    affiliateUrl: 'https://www.udemy.com/course/baby-first-aid/',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop',
  },

  // ── BREASTFEEDING ────────────────────────────────────────────
  {
    id: '9',
    title: 'Breastfeeding Masterclass',
    description: 'A complete guide to successful breastfeeding — latch, supply, pumping, storage, and returning to work while nursing.',
    platform: 'Udemy',
    duration: '3.5 hours',
    price: 'RM 69',
    rating: 4.8,
    reviewCount: 1567,
    category: 'Breastfeeding',
    affiliateUrl: 'https://www.udemy.com/course/breastfeeding-masterclass/',
    imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=225&fit=crop',
  },
  {
    id: '10',
    title: 'Pumping & Milk Supply: The Complete Guide',
    description: 'Everything about breast pumping — choosing a pump, building supply, troubleshooting low milk, and storing milk safely.',
    platform: 'Udemy',
    duration: '2.5 hours',
    price: 'RM 49',
    rating: 4.7,
    reviewCount: 892,
    category: 'Breastfeeding',
    affiliateUrl: 'https://www.udemy.com/course/pumping-milk-supply/',
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=225&fit=crop',
  },

  // ── POSTNATAL ────────────────────────────────────────────────
  {
    id: '11',
    title: 'Postnatal Recovery: Body & Mind',
    description: 'Evidence-based guide to recovering after birth — pelvic floor rehab, postnatal nutrition, and managing the fourth trimester.',
    platform: 'Coursera',
    duration: '8 hours',
    price: 'RM 149',
    rating: 4.6,
    reviewCount: 987,
    category: 'Postnatal',
    affiliateUrl: 'https://www.coursera.org/learn/postnatal-recovery',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=225&fit=crop',
  },
  {
    id: '12',
    title: 'Postpartum Mental Health: Thriving After Baby',
    description: 'Understand and manage postpartum depression, anxiety, and baby blues. Evidence-based strategies to protect your mental wellbeing.',
    platform: 'Udemy',
    duration: '4 hours',
    price: 'RM 79',
    rating: 4.8,
    reviewCount: 1203,
    category: 'Postnatal',
    affiliateUrl: 'https://www.udemy.com/course/postpartum-mental-health/',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=225&fit=crop',
  },
  {
    id: '13',
    title: 'Pelvic Floor Recovery After Birth',
    description: 'Physiotherapist-led program to heal and strengthen your pelvic floor after vaginal or C-section birth. Prevent leaking and prolapse.',
    platform: 'Udemy',
    duration: '3 hours',
    price: 'RM 69',
    rating: 4.9,
    reviewCount: 2341,
    category: 'Postnatal',
    affiliateUrl: 'https://www.udemy.com/course/pelvic-floor-recovery/',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
  },
]
