export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Al-Mansoori',
    location: 'Dubai, UAE',
    quote: 'The Visa Guy made my Turkey visa application seamless from Dubai! The door-step service saved me so much time and effort.',
    rating: 5,
    image: '/images/testimonials/ahmed-mansoori.jpg',
  },
  {
    id: 2,
    name: 'Fatima Khan',
    location: 'Abu Dhabi, UAE',
    quote: 'Fast business visa for Germany – saved my trip! The consultation was incredibly helpful and the process was stress-free.',
    rating: 5,
    image: '/images/testimonials/fatima-khan.jpg',
  },
  {
    id: 3,
    name: 'Mohammed Al-Hammadi',
    location: 'Sharjah, UAE',
    quote: 'The free consultation feature is a game-changer. They helped me choose the right visa for my family trip to Italy.',
    rating: 5,
    image: '/images/testimonials/mohammed-hammadi.jpg',
  },
  {
    id: 4,
    name: 'Aisha Bint Mohammed',
    location: 'Dubai, UAE',
    quote: 'Door-step document collection service is brilliant! They came to my office in Dubai Marina and handled everything.',
    rating: 5,
    image: '/images/testimonials/aisha-mohammed.jpg',
  },
  {
    id: 5,
    name: 'Khalid Al-Fahim',
    location: 'Abu Dhabi, UAE',
    quote: 'Applied for Schengen visa to France with 25% discount. Got approved in just 12 days! Exceptional service.',
    rating: 5,
    image: '/images/testimonials/khalid-fahim.jpg',
  },
];