export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'All-Inclusive Visa Service',
    description: 'Visa Assistance At Your Doorstep. Delivering exceptional visa services right to your door. Preparing documents and delivering them at their location.',
    icon: '🏠',
  },
  {
    id: 2,
    title: 'Business Travel Visas',
    description: 'We\'re here to simplify the process by one-on-one visa application right to your business travel visas door. Our mission is to make obtaining business visas as convenient as possible.',
    icon: '✈️',
  },
  {
    id: 3,
    title: 'Free Consultation & Chat',
    description: 'Book Free Consultation and Chat with Visa Expert for personalized guidance. Get expert advice tailored to your specific visa requirements.',
    icon: '💬',
  },
  {
    id: 4,
    title: '75+ Countries Coverage',
    description: 'Global assistance from UAE, stress-free applications. We cover visa requirements for destinations across Europe, Asia, Americas, and beyond.',
    icon: '🌍',
  },
  {
    id: 5,
    title: 'Appointment Booking',
    description: 'Seamless scheduling for visa processes including embassy appointments, biometric appointments, and document submission deadlines.',
    icon: '📅',
  },
];