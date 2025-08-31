export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqsData: FAQ[] = [
  {
    id: 1,
    question: 'How long does the immigration process typically take?',
    answer: 'The immigration process varies significantly depending on the country, visa type, and individual circumstances. Generally, it can take anywhere from 3 months to 2 years. We provide personalized timelines during our initial consultation based on your specific situation.'
  },
  {
    id: 2,
    question: 'What documents do I need to start the application process?',
    answer: 'Required documents vary by visa type and country, but generally include: passport, educational credentials, employment records, financial statements, medical examinations, and police certificates. We provide a comprehensive checklist during our initial consultation.'
  },
  {
    id: 3,
    question: 'Can I apply for immigration if I don\'t have a job offer?',
    answer: 'Yes, many countries offer immigration pathways without a job offer, including skilled worker programs, investor visas, and student pathways. Our team will assess your qualifications to identify the best options for your situation.'
  },
  {
    id: 4,
    question: 'How much does the immigration process cost?',
    answer: 'Costs vary based on the complexity of your case, destination country, and services required. Government fees typically range from $1,000-$5,000, while professional services depend on case complexity. We provide transparent pricing during our consultation.'
  },
  {
    id: 5,
    question: 'What happens if my application is refused?',
    answer: 'If your application is refused, we analyze the reasons and explore options such as appeals, re-applications with additional documentation, or alternative pathways. Our team has extensive experience with complex cases and refusals.'
  },
  {
    id: 6,
    question: 'Do you guarantee approval of my application?',
    answer: 'While we cannot guarantee approval due to government discretion, we maintain a 98% success rate by ensuring complete documentation, thorough preparation, and expert guidance. Our transparent approach includes realistic assessments of your chances.'
  }
];