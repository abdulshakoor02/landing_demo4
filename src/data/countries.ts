export interface Country {
  id: number;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  flagIcon: string;
  statistics: {
    processingTime: string;
    popularVisas: string[];
    successRate: string;
    applicantsProcessed: string;
  };
  quickFacts: string[];
  overlayPosition: 'bottom-left' | 'bottom-right' | 'center';
  animationDelay: number;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const countriesData: Country[] = [
  {
    id: 1,
    name: 'Canada',
    tagline: 'Your pathway to North American excellence',
    description: 'Experience world-class healthcare, exceptional education systems, and a multicultural society that welcomes global talent with open arms.',
    heroImage: '/images/countries/canada-hero.jpg',
    flagIcon: '/images/flags/canada.svg',
    statistics: {
      processingTime: '6-12 months',
      popularVisas: ['Express Entry', 'PNP', 'Family Class'],
      successRate: '89%',
      applicantsProcessed: '15K+'
    },
    quickFacts: [
      'Free healthcare system',
      'Pathway to citizenship in 3 years',
      'High quality of life index'
    ],
    overlayPosition: 'bottom-left',
    animationDelay: 0,
    testimonial: {
      quote: 'The process was smooth and professional. Highly recommended!',
      author: 'Sarah Johnson',
      position: 'Software Engineer'
    }
  },
  {
    id: 2,
    name: 'Australia',
    tagline: 'Land down under awaits your future',
    description: 'Discover a robust economy, stunning landscapes, and exceptional work-life balance in one of the world\'s most liveable countries.',
    heroImage: '/images/countries/australia-hero.jpg',
    flagIcon: '/images/flags/australia.svg',
    statistics: {
      processingTime: '8-16 months',
      popularVisas: ['Skilled Migration', 'Student Visa', 'Working Holiday'],
      successRate: '85%',
      applicantsProcessed: '12K+'
    },
    quickFacts: [
      'High minimum wage standards',
      'Points-based immigration system',
      'World-class universities'
    ],
    overlayPosition: 'bottom-right',
    animationDelay: 0.1
  },
  {
    id: 3,
    name: 'United Kingdom',
    tagline: 'Gateway to European opportunities',
    description: 'Join a global financial hub with rich cultural heritage, world-renowned education, and endless career opportunities.',
    heroImage: '/images/countries/uk-hero.jpg',
    flagIcon: '/images/flags/uk.svg',
    statistics: {
      processingTime: '3-12 months',
      popularVisas: ['Skilled Worker', 'Student', 'Global Talent'],
      successRate: '82%',
      applicantsProcessed: '18K+'
    },
    quickFacts: [
      'Access to European markets',
      'NHS healthcare system',
      'Historic universities'
    ],
    overlayPosition: 'center',
    animationDelay: 0.2
  },
  {
    id: 4,
    name: 'Germany',
    tagline: 'Innovation capital of Europe',
    description: 'Be part of Europe\'s strongest economy with cutting-edge technology, excellent social benefits, and unmatched career growth.',
    heroImage: '/images/countries/germany-hero.jpg',
    flagIcon: '/images/flags/germany.svg',
    statistics: {
      processingTime: '3-9 months',
      popularVisas: ['EU Blue Card', 'Job Seeker', 'Skilled Professional'],
      successRate: '91%',
      applicantsProcessed: '22K+'
    },
    quickFacts: [
      'Strong manufacturing sector',
      'Excellent work-life balance',
      'Free higher education'
    ],
    overlayPosition: 'bottom-left',
    animationDelay: 0.3
  },
  {
    id: 5,
    name: 'New Zealand',
    tagline: 'Where work meets natural wonder',
    description: 'Embrace a lifestyle that perfectly balances career success with breathtaking natural beauty and friendly communities.',
    heroImage: '/images/countries/newzealand-hero.jpg',
    flagIcon: '/images/flags/newzealand.svg',
    statistics: {
      processingTime: '9-15 months',
      popularVisas: ['Skilled Migration', 'Working Holiday', 'Investor'],
      successRate: '87%',
      applicantsProcessed: '8K+'
    },
    quickFacts: [
      'Adventure sports capital',
      'Clean, green environment',
      'Friendly immigration policies'
    ],
    overlayPosition: 'bottom-right',
    animationDelay: 0.4
  },
  {
    id: 6,
    name: 'United States',
    tagline: 'Land of infinite possibilities',
    description: 'Access the world\'s largest economy, drive innovation in cutting-edge industries, and pursue the American Dream.',
    heroImage: '/images/countries/usa-hero.jpg',
    flagIcon: '/images/flags/usa.svg',
    statistics: {
      processingTime: '6-24 months',
      popularVisas: ['H-1B', 'L-1', 'O-1', 'EB-5'],
      successRate: '78%',
      applicantsProcessed: '35K+'
    },
    quickFacts: [
      'Global business opportunities',
      'World-leading technology sector',
      'Diverse cultural landscape'
    ],
    overlayPosition: 'center',
    animationDelay: 0.5,
    testimonial: {
      quote: 'Professional guidance throughout the entire visa process.',
      author: 'Michael Chen',
      position: 'Data Scientist'
    }
  }
];