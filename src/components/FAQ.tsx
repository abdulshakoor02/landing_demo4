"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What is the Express Entry system and how does it work?",
    answer: "Express Entry is an online system used by Immigration, Refugees and Citizenship Canada (IRCC) to manage applications for permanent residence from skilled workers. It uses a points-based system called the Comprehensive Ranking System (CRS) to assess candidates based on factors like age, education, work experience, language abilities, and adaptability. The highest-scoring candidates receive invitations to apply for permanent residence.",
    category: "Skilled Worker",
  },
  {
    id: "2",
    question: "Can I include my family members in my immigration application?",
    answer: "Yes, you can usually include your spouse/common-law partner and dependent children in your application. The definition of dependent children varies by country but generally includes children under 22 who are not married or in a common-law relationship. Retirement-age parents may also be eligible in some cases if you meet specific sponsorship requirements.",
    category: "Family Sponsorship",
  },
  {
    id: "3",
    question: "How long does the immigration process typically take?",
    answer: "Processing times vary significantly depending on the immigration program, country, and individual circumstances. Express Entry applications typically take 6-8 months, family sponsorship 12-24 months, student visas 2-4 months, and investor visas 12-36 months. We provide realistic timelines based on your specific situation.",
    category: "General",
  },
  {
    id: "4",
    question: "What language tests are required for immigration?",
    answer: "Most countries require English or French language proficiency. Common tests include IELTS, TOEFL, CELPIP (English), and TEF, TCF (French). The required score varies by program, but generally higher scores result in more points. Some programs offer exemptions if you've studied in an English-speaking institution or meet certain work experience criteria.",
    category: "Language Requirements",
  },
  {
    id: "5",
    question: "Do I need a job offer to immigrate to Canada?",
    answer: "Not necessarily. While a valid job offer can significantly boost your Express Entry CRS score, it's not mandatory for the Federal Skilled Worker or Canadian Experience Class programs. However, having a job offer in certain provinces may make you eligible for Provincial Nominee Programs, which can provide additional points.",
    category: "Employment",
  },
  {
    id: "6",
    question: "What is the minimum investment required for investor visas?",
    answer: "Investment requirements vary by program and country. Canada's Start-up Visa usually requires minimum CAD $75,000-200,000 investment. US EB-5 requires minimum $800,000 (Targeted Employment Area) or $1.05 million. UK Innovator Founder requires minimum £50,000 in certain conditions. We help identify the best investment pathway for your goals and budget.",
    category: "Investment",
  },
  {
    id: "7",
    question: "Can I work while studying on a student visa?",
    answer: "Most student visas allow limited work hours. In Canada, international students can work up to 20 hours per week during regular academic sessions and full-time during scheduled breaks. The UK allows students to work full-time during holidays and up to 20 hours per week during term time. Australia allows up to 48 hours per fortnight.",
    category: "Student Visa",
  },
  {
    id: "8",
    question: "What happens if my immigration application is refused?",
    answer: "If your application is refused, you typically have options for appeal or reapplication. The specific process depends on the program and grounds for refusal. We analyze refusals, identify issues, and develop strategies to strengthen your case for reapplication or appeal. Many refusals can be successfully addressed through proper appeal procedures.",
    category: "Application Process",
  },
  {
    id: "9",
    question: "How do I maintain my permanent resident status?",
    answer: "Most countries require permanent residents to meet residency obligations. For Canada, you must live in Canada for at least 2 out of every 5 years. Other factors include maintaining ties to the country, filing taxes, and not being convicted of serious crimes. We provide guidance on maintaining your status and eventually qualifying for citizenship.",
    category: "Permanent Residence",
  },
  {
    id: "10",
    question: "When can I apply for citizenship after getting permanent residence?",
    answer: "Citizenship eligibility periods vary: Canada requires 3 out of 5 years as a permanent resident (1,095 days). The US requires 5 years (3 if married to a US citizen). UK requires 5 years with certain additional requirements. We help track your residency days and prepare for citizenship applications when you meet eligibility requirements.",
    category: "Citizenship",
  },
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ item, isOpen, onClick }: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex-1 pr-4">
          <h3 className="text-lg font-heading font-semibold text-[#0D2F5B] leading-tight">
            {item.question}
          </h3>
          <span className="text-xs text-[#D4AF37] font-medium">
            {item.category}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen
              ? "bg-[#D4AF37] text-[#0D2F5B]"
              : "bg-gray-100 text-gray-400 group-hover:bg-[#D4AF37] group-hover:text-[#0D2F5B]"
          }`}
        >
          {isOpen ? (
            <ChevronDownIcon className="w-5 h-5" />
          ) : (
            <PlusIcon className="w-5 h-5" />
          )}
        </motion.div>
      </motion.button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              <div className="border-l-4 border-[#D4AF37] pl-4">
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (prev.includes(id)) {
        // Allow only one item to be open at a time
        return [];
      } else {
        return [id];
      }
    });
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-semibold text-[#0D2F5B] mb-4">
                Your Questions, Answered
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Find answers to common questions about immigration processes, requirements, and timelines.
                If you don&apos;t find what you&apos;re looking for, don&apos;t hesitate to contact us.
              </p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 p-6 bg-[#F1F5F9] rounded-xl"
              >
                <h3 className="text-lg font-heading font-semibold text-[#0D2F5B] mb-2">
                  Need More Help?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our team is here to provide personalized guidance for your unique situation.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D4AF37] text-[#0D2F5B] px-6 py-3 rounded-lg font-semibold hover:bg-[#B8972A] transition-all duration-300 inline-flex items-center"
                >
                  Contact Us
                  <ChevronDownIcon className="w-4 h-4 ml-2 rotate-90" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItems.includes(item.id)}
                  onClick={() => toggleItem(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}