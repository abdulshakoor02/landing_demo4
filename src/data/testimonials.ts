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
    name: 'Sarah Johnson',
    location: 'Toronto, Canada',
    quote: 'The team at ImmigrationPro made our family\'s relocation process seamless. Their expertise and attention to detail were exceptional. We couldn\'t have done it without them!',
    rating: 5,
    image: '/images/testimonials/sarah-johnson.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'London, UK',
    quote: 'As a skilled worker, I was nervous about the visa process. ImmigrationPro guided me through every step with clarity and professionalism. I highly recommend their services.',
    rating: 5,
    image: '/images/testimonials/michael-chen.jpg',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Sydney, Australia',
    quote: 'Thanks to ImmigrationPro, I was able to secure my student visa and scholarship. Their support extended beyond just the paperwork - they truly cared about my future.',
    rating: 5,
    image: '/images/testimonials/elena-rodriguez.jpg',
  },
  {
    id: 4,
    name: 'David Kim',
    location: 'Seoul, South Korea',
    quote: 'The business immigration process seemed daunting, but ImmigrationPro made it straightforward. Their strategic approach helped us expand internationally successfully.',
    rating: 5,
    image: '/images/testimonials/david-kim.jpg',
  },
  {
    id: 5,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    quote: 'As a medical professional, the licensing and visa process was complex. ImmigrationPro\'s specialized knowledge in my field made all the difference in my successful relocation.',
    rating: 5,
    image: '/images/testimonials/priya-sharma.jpg',
  },
];