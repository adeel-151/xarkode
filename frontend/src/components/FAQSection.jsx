import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      num: '01',
      question: 'How much does a website or management system cost?',
      answer:
        'Every system is tailored to your business needs, workflow complexity, and integration requirements. Modern responsive websites start from $1,000, while custom business management systems, automated portals, and AI workflows are scoped transparently based on deliverables.',
    },
    {
      num: '02',
      question: 'How long does development take?',
      answer:
        'Standard high-performance websites typically take 2-4 weeks from discovery to launch. Comprehensive business systems and custom automated dashboards generally take 4-8 weeks, depending on data integration and testing requirements.',
    },
    {
      num: '03',
      question: 'Do you provide maintenance after launch?',
      answer:
        'Yes. We provide continuous technical support, server monitoring, security updates, feature improvements, and on-demand maintenance packages so your systems continue to run reliably.',
    },
    {
      num: '04',
      question: 'Can you improve an existing website?',
      answer:
        'Absolutely. We can perform a full UI/UX and code audit, modernize the visual identity, optimize loading speeds, restructure conversion funnels, and connect automated inquiry handling to your existing setup.',
    },
    {
      num: '05',
      question: 'Do you build custom dashboards and automation?',
      answer:
        'Yes, custom operational dashboards and intelligent automations are our flagship expertise. We connect customer inquiries, calendar bookings, database records, and automated WhatsApp/email notifications in one synchronized system.',
    },
    {
      num: '06',
      question: 'Can you work with international clients?',
      answer:
        'Yes, we work with businesses worldwide. We coordinate via WhatsApp, Zoom, Google Meet, and asynchronous progress boards to ensure seamless project delivery regardless of time zone.',
    },
    {
      num: '07',
      question: 'How does the project begin?',
      answer:
        'It starts with a free strategy session where we discuss your operations, goals, and current pain points. We then deliver a clear architectural proposal, timeline, and exact scope of deliverables.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#f5f4ef] text-[#180838] py-24 border-b border-[#180838]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#180838]/15 gap-4 text-xs font-mono tracking-widest text-[#645b77] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#180838]">11</span>
            <span>QUESTIONS, ANSWERED</span>
          </div>
          <div>BEFORE WE BEGIN</div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-14 pb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-semibold text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.92] tracking-[-3.5px] uppercase text-[#180838]">
              FREQUENTLY<br />
              <span className="text-[#7028e0]">ASKED.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#524962] leading-relaxed max-w-md">
              A few practical answers before we get into your business, your audience, and what needs to change.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="border-t border-[#180838]/15 divide-y divide-[#180838]/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.num} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left group gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-xs font-mono font-bold text-[#736a88]">{faq.num}</span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#180838] group-hover:text-[#7028e0] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <span
                    className={`transform transition-transform duration-200 text-[#736a88] group-hover:text-[#7028e0] ${
                      isOpen ? 'rotate-180 text-[#7028e0]' : ''
                    }`}
                  >
                    <ChevronDown size={20} />
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pl-8 sm:pl-12 pr-4 text-sm sm:text-base text-[#4a405c] leading-relaxed animate-fadeIn">
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
