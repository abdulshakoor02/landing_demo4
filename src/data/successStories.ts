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
    category: 'Skilled Worker',
    title: 'From Engineer to Tech Lead in Toronto',
    description: 'Maria secured a skilled worker visa and now leads a team at a major tech company in Toronto.',
    metrics: 'Processing Time: 6 months',
    image: '/images/stories/story1.jpg',
  },
  {
    id: 2,
    category: 'Family Visa',
    title: 'Reuniting a Family in Vancouver',
    description: 'The Johnson family was successfully reunited after a complex multi-visa application process.',
    metrics: 'Visas Processed: 4',
    image: '/images/stories/story2.jpg',
    featured: true,
  },
  {
    id: 3,
    category: 'Student Visa',
    title: 'Scholarship to Harvard Business School',
    description: 'Ahmed secured a full scholarship and student visa to pursue his MBA at Harvard Business School.',
    metrics: 'Scholarship Value: $200,000',
    image: '/images/stories/story3.jpg',
  },
  {
    id: 4,
    category: 'Investor Visa',
    title: 'Launching a Startup in Silicon Valley',
    description: 'Sofia used her investor visa to launch a successful fintech startup in Silicon Valley.',
    metrics: 'Investment: $500,000',
    image: '/images/stories/story4.jpg',
  },
  {
    id: 5,
    category: 'Family Visa',
    title: 'Grandparents Reunite with Grandchildren',
    description: 'After years of separation, grandparents were able to join their family through our family visa services.',
    metrics: 'Processing Time: 8 months',
    image: '/images/stories/story5.jpg',
  },
  {
    id: 6,
    category: 'Skilled Worker',
    title: 'Medical Professional in London',
    description: 'Dr. Chen successfully transferred his medical license and relocated to work in the NHS.',
    metrics: 'Licenses Transferred: 2',
    image: '/images/stories/story6.jpg',
    featured: true,
  },
];