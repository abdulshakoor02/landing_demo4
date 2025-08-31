export interface Country {
  id: number;
  name: string;
  benefit: string;
  image: string;
  quickFacts: string[];
}

export const countriesData: Country[] = [
  {
    id: 1,
    name: 'Canada',
    benefit: 'High quality of life and excellent healthcare',
    image: '/images/countries/canada.jpg',
    quickFacts: [
      'Processing Time: 6-12 months',
      'Popular Visas: Express Entry, PNP',
      'Language: English/French',
    ],
  },
  {
    id: 2,
    name: 'Australia',
    benefit: 'Strong economy and diverse job market',
    image: '/images/countries/australia.jpg',
    quickFacts: [
      'Processing Time: 8-16 months',
      'Popular Visas: Skilled Migration, Student',
      'Language: English',
    ],
  },
  {
    id: 3,
    name: 'United Kingdom',
    benefit: 'Global financial hub with rich culture',
    image: '/images/countries/uk.jpg',
    quickFacts: [
      'Processing Time: 3-12 months',
      'Popular Visas: Skilled Worker, Student',
      'Language: English',
    ],
  },
  {
    id: 4,
    name: 'Germany',
    benefit: 'Economic powerhouse with innovation focus',
    image: '/images/countries/germany.jpg',
    quickFacts: [
      'Processing Time: 3-9 months',
      'Popular Visas: EU Blue Card, Job Seeker',
      'Language: German/English',
    ],
  },
  {
    id: 5,
    name: 'New Zealand',
    benefit: 'Stunning landscapes and work-life balance',
    image: '/images/countries/new-zealand.jpg',
    quickFacts: [
      'Processing Time: 9-15 months',
      'Popular Visas: Skilled Migration, Working Holiday',
      'Language: English',
    ],
  },
  {
    id: 6,
    name: 'United States',
    benefit: 'Land of opportunity with diverse industries',
    image: '/images/countries/usa.jpg',
    quickFacts: [
      'Processing Time: 6-24 months',
      'Popular Visas: H-1B, L-1, O-1',
      'Language: English',
    ],
  },
];