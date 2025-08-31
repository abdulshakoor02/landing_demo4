// Types for Services
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Types for Success Stories
export interface SuccessStory {
  id: number;
  category: string;
  title: string;
  description: string;
  metrics: string;
  image: string;
  featured?: boolean;
}

// Types for Testimonials
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
}

// Types for Countries
export interface Country {
  id: number;
  name: string;
  benefit: string;
  image: string;
  quickFacts: string[];
}

// Types for FAQ
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// Types for Partners
export interface Partner {
  id: number;
  name: string;
  logo: string;
}