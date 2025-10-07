import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { colors } from '../theme/colors';

const faqs = [
  {
    question: 'Is there a long-term contract required?',
    answer: 'No. Our All-In-One Growth Pack is month-to-month. You can cancel anytime with no penalties or fees.'
  },
  {
    question: 'What deliverables can I expect each month?',
    answer: 'Deliverables vary based on your needs but typically include website updates, content creation, ad campaign management, SEO optimizations, and monthly strategy reports.'
  },
  {
    question: 'How quickly can we get started?',
    answer: 'Onboarding typically takes 3-5 business days. We\'ll schedule a kickoff call, gather your requirements, and begin execution immediately after.'
  },
  {
    question: 'Do you provide monthly reporting?',
    answer: 'Yes. You\'ll receive detailed monthly reports covering all services, plus a dedicated strategy review session to discuss results and next steps.'
  },
  {
    question: 'Can I add additional services if needed?',
    answer: 'Absolutely. While the pack includes our most popular services, we can customize and scale based on your specific growth needs.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'white' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl" style={{ color: colors.muted }}>
            Everything you need to know about working with WinScale
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-xl rounded-2xl border overflow-hidden transition-all"
              style={{
                backgroundColor: colors.surface,
                borderColor: openIndex === index ? colors.accent : 'rgba(10, 42, 107, 0.1)'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left transition-all hover:bg-white/50"
              >
                <span className="text-lg font-bold pr-4" style={{ color: colors.text }}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: colors.primary }}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-lg leading-relaxed" style={{ color: colors.muted }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
