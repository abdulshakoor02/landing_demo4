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
    name: 'Turkey',
    tagline: 'Explore historic wonders',
    description: 'From Istanbul\'s bazaars to Cappadocia\'s landscapes. Experience rich history, vibrant culture, and breathtaking scenery.',
    heroImage: '/images/countries/turkey-hero.jpg',
    flagIcon: '/images/flags/turkey.svg',
    statistics: {
      processingTime: '2-4 weeks',
      popularVisas: ['Tourist eVisa', 'Business Visa'],
      successRate: '95%',
      applicantsProcessed: '5K+'
    },
    quickFacts: [
      'Easy online eVisa application',
      'Rich Ottoman and Byzantine history',
      'Perfect blend of East and West'
    ],
    overlayPosition: 'bottom-left',
    animationDelay: 0,
    testimonial: {
      quote: 'Turkey visa through The Visa Guy was incredibly fast and seamless!',
      author: 'Ahmed Al-Mansoori',
      position: 'Tourist from Dubai'
    }
  },
  {
    id: 2,
    name: 'Italy',
    tagline: 'Romantic Mediterranean escape',
    description: 'Rome, Venice, and Tuscan hills await. Discover ancient ruins, Renaissance art, and world-renowned cuisine.',
    heroImage: '/images/countries/italy-hero.jpg',
    flagIcon: '/images/flags/italy.svg',
    statistics: {
      processingTime: '15-30 days',
      popularVisas: ['Schengen Tourist', 'Business Visa'],
      successRate: '92%',
      applicantsProcessed: '8K+'
    },
    quickFacts: [
      'Schengen area access',
      'Rich cultural heritage',
      'World-famous cuisine and wine'
    ],
    overlayPosition: 'bottom-right',
    animationDelay: 0.1
  },
  {
    id: 3,
    name: 'France',
    tagline: 'Eiffel Tower and fine cuisine',
    description: 'Experience Parisian charm, provincial beauty, and some of the world\'s finest art, fashion, and gastronomy.',
    heroImage: '/images/countries/france-hero.jpg',
    flagIcon: '/images/flags/france.svg',
    statistics: {
      processingTime: '15-30 days',
      popularVisas: ['Schengen Tourist', 'Business Visa'],
      successRate: '90%',
      applicantsProcessed: '12K+'
    },
    quickFacts: [
      'Schengen area member',
      'High success for UAE applicants',
      'Rich cultural experiences'
    ],
    overlayPosition: 'center',
    animationDelay: 0.2
  },
  {
    id: 4,
    name: 'Germany',
    tagline: 'Engineering and culture hub',
    description: 'Experience precision engineering, rich cultural heritage, and efficient cities that blend tradition with innovation.',
    heroImage: '/images/countries/germany-hero.jpg',
    flagIcon: '/images/flags/germany.svg',
    statistics: {
      processingTime: '15-30 days',
      popularVisas: ['Schengen Tourist', 'Business Visa'],
      successRate: '93%',
      applicantsProcessed: '15K+'
    },
    quickFacts: [
      'Schengen visa access',
      'Strong economy for business',
      'Rich history and culture'
    ],
    overlayPosition: 'bottom-left',
    animationDelay: 0.3
  },
  {
    id: 5,
    name: 'Switzerland',
    tagline: 'Alpine adventures',
    description: 'Discover pristine mountains, crystal-clear lakes, and charming cities that offer unparalleled natural beauty and quality of life.',
    heroImage: '/images/countries/switzerland-hero.jpg',
    flagIcon: '/images/flags/switzerland.svg',
    statistics: {
      processingTime: '15-30 days',
      popularVisas: ['Schengen Tourist', 'Business Visa'],
      successRate: '91%',
      applicantsProcessed: '7K+'
    },
    quickFacts: [
      'Schengen area access',
      'Stunning Alpine scenery',
      'High quality of life'
    ],
    overlayPosition: 'bottom-right',
    animationDelay: 0.4
  },
  {
    id: 6,
    name: 'United Kingdom',
    tagline: 'Gateway to British heritage',
    description: 'Explore historic castles, vibrant cities, and rich cultural traditions that span centuries of innovation and tradition.',
    heroImage: '/images/countries/uk-hero.jpg',
    flagIcon: '/images/flags/uk.svg',
    statistics: {
      processingTime: '15-30 days',
      popularVisas: ['Standard Visitor', 'Business Visa'],
      successRate: '88%',
      applicantsProcessed: '10K+'
    },
    quickFacts: [
      'Separate from Schengen area',
      'Rich royal heritage',
      'Global financial hub'
    ],
    overlayPosition: 'center',
    animationDelay: 0.5,
    testimonial: {
      quote: 'Professional guidance throughout the entire UK visa process.',
      author: 'Fatima Khan',
      position: 'Business Traveler from Abu Dhabi'
    }
  }
];