export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Visa Applications',
    description: 'Comprehensive assistance with all types of visa applications including work, student, and family visas. Our experts guide you through every step of the process to ensure maximum success.',
    icon: '📄',
  },
  {
    id: 2,
    title: 'Immigration Law',
    description: 'Expert legal representation for complex immigration cases. We handle appeals, deportations, and other legal challenges with proven success rates.',
    icon: '⚖️',
  },
  {
    id: 3,
    title: 'Citizenship Services',
    description: 'Complete support through the naturalization process, including eligibility assessment, application preparation, and interview preparation.',
    icon: '🛂',
  },
  {
    id: 4,
    title: 'Business Immigration',
    description: 'Specialized services for entrepreneurs and businesses seeking to expand internationally, including investor visas and intra-company transfers.',
    icon: '🏢',
  },
];