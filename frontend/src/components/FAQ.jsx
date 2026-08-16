import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, X, Search, ArrowRight, MessageSquare } from 'lucide-react';
import { Container, Reveal, Button, Badge } from './ui.jsx';
import { faqItems } from '../data/content.js';
import { Link } from 'react-router-dom';

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <motion.div 
      layout
      className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-brand-teal bg-ink-800 shadow-[0_0_30px_rgba(46,230,197,0.15)]' : 'border-ink-600 bg-ink-900/50 hover:border-brand-teal/30 hover:bg-ink-800'}`}
    >
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between gap-4 p-6 text-left">
        <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-brand-teal' : 'text-white'}`}>{item.question}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-brand-teal text-ink-900 shadow-[0_0_15px_rgba(46,230,197,0.5)]' : 'bg-ink-700 text-white'}`}>
          {isOpen ? <X size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-base leading-relaxed text-muted-2">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return faqItems;
    return faqItems.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section id="faq" className="bg-ink-900 py-24 sm:py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none" />

      <Container className="max-w-4xl relative z-10">
        <Reveal className="text-center mb-16">
          <Badge className="!bg-brand-blue/10 !border-brand-blue/30 !text-brand-blue font-bold mb-6">Support & Knowledge</Badge>
          <h2 className="font-display text-4xl font-extrabold text-white sm:text-6xl mb-6">
            We've Got <span className="text-gradient">Answers</span>
          </h2>
          <p className="text-lg text-muted-2 max-w-2xl mx-auto">
            Everything you need to know about our process, pricing, and how we engineer growth for your business.
          </p>

          {/* Search Bar */}
          <div className="mt-10 relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-brand-teal h-5 w-5" />
            </div>
            <input 
              type="text" 
              placeholder="Search for an answer..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-ink-800 border border-ink-600 rounded-full py-4 pl-12 pr-6 text-white placeholder-muted-2 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all shadow-xl"
            />
          </div>
        </Reveal>

        {/* FAQ List */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4 min-h-[400px]">
            <AnimatePresence>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, i) => (
                  <AccordionItem 
                    key={item.question} 
                    item={item} 
                    isOpen={openIndex === i} 
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)} 
                  />
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                  className="text-center py-12"
                >
                  <p className="text-muted-2 text-lg">No questions found matching "{searchQuery}"</p>
                  <button onClick={() => setSearchQuery('')} className="mt-4 text-brand-teal hover:underline font-medium">Clear search</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Big Sleek CTA at the bottom */}
        <Reveal delay={0.2} className="mt-24">
          <div className="glass-card-strong rounded-3xl p-10 sm:p-14 border border-brand-teal/20 text-center relative overflow-hidden group">
            {/* Hover flare */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-brand-teal/0 via-brand-teal/5 to-brand-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6 shadow-[0_0_30px_rgba(46,230,197,0.2)]">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Still have a question?</h3>
              <p className="text-muted-2 mb-8 max-w-lg">
                Can't find the answer you're looking for? Our team is available and ready to help you navigate your digital transformation.
              </p>
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue px-8 py-4 text-base font-bold text-ink-900 shadow-[0_8px_24px_-8px_rgba(46,230,197,0.5)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Talk to Our Team
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-white">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
