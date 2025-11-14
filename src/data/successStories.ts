export interface SuccessStory {
  id: number;
  category: string;
  title: string;
  description: string;
  metrics: string;
  image: string;
  featured?: boolean;
}

export const successStoriesData: SuccessStory[] = [
  {
    id: 1,
    category: 'Tourist Visa',
    title: 'UAE Family Explores Rome',
    description: 'Al-Mansoori family from Dubai secured Schengen tourist visas and explored the historic streets of Rome in just 15 days.',
    metrics: 'Processing Time: 15 days',
    image: '/images/stories/italy-family.jpg',
    featured: true,
  },
  {
    id: 2,
    category: 'Business Visa',
    title: 'Dubai Entrepreneur Secures Germany Meeting',
    description: 'Ahmed Khalif from Dubai obtained fast business visa for critical tech conference in Berlin, saving his multi-million dollar deal.',
    metrics: 'Processing Time: 5 days',
    image: '/images/stories/germany-business.jpg',
  },
  {
    id: 3,
    category: 'Schengen Visa',
    title: 'Multi-Country European Tour Approved',
    description: 'Abu Dhabi couple planned romantic getaway across France, Switzerland, and Italy with single Schengen visa approval.',
    metrics: 'Countries: 3 • Duration: 30 days',
    image: '/images/stories/schengen-tour.jpg',
  },
  {
    id: 4,
    category: 'Turkey eVisa',
    title: 'Quick Cultural Tour to Istanbul',
    description: 'Sharjah residents received instant Turkey eVisa approval for cultural exploration of Istanbul\'s historic sites.',
    metrics: 'Processing Time: 24 hours',
    image: '/images/stories/turkey-cultural.jpg',
  },
  {
    id: 5,
    category: 'Business Travel',
    title: 'Swiss Banking Conference Success',
    description: 'UAE financial advisor secured Swiss visa for exclusive Geneva banking conference, expanding her international network.',
    metrics: 'Conference: Annual Banking Summit',
    image: '/images/stories/swiss-banking.jpg',
  },
  {
    id: 6,
    category: 'Family Vacation',
    title: 'France Summer Holiday',
    description: 'Family of four from Abu Dhabi enjoyed perfect French summer holiday with seamless visa processing and door-step document collection.',
    metrics: 'Processing Time: 12 days • 25% discount applied',
    image: '/images/stories/france-holiday.jpg',
    featured: true,
  },
];