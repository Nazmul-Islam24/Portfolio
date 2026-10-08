import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/projectsData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#D9D6D0]/60 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#B88A5A] mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12] mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B] max-w-xl mx-auto">
            Everything you need to know about working together, project timelines, and technical decisions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#FFFFFF] border border-[#D9D6D0] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#171717]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A5A]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#171717] tracking-tight">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#F5F3EF] border border-[#D9D6D0] flex items-center justify-center shrink-0 text-[#171717] transition-transform duration-200">
                    {isOpen ? <Minus className="w-4 h-4 text-[#B88A5A]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#6B6B6B] leading-relaxed border-t border-[#D9D6D0]/50 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
