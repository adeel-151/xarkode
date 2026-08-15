import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Container, Reveal, Button } from './ui.jsx';
import { faqItems, outcomeBadges, brand } from '../data/content.js';
import { submitFaqQuestion } from '../lib/api.js';
import useUIStore from '../store/useUIStore.js';

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={`rounded-2xl border px-5 transition-colors ${isOpen ? 'border-brand-teal/40 bg-ink-700/60' : 'border-ink-600 bg-ink-800'}`}>
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between gap-4 py-4 text-left">
        <span className={`text-sm font-medium ${isOpen ? 'text-brand-teal' : 'text-white'}`}>{item.question}</span>
        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isOpen ? 'bg-brand-teal/15 text-brand-teal' : 'text-muted'}`}>
          {isOpen ? <X size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-2">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const badgePositions = [
  { label: 'Cleaner', style: { left: '0%', bottom: '2%' } },
  { label: 'Stronger', style: { left: '20%', top: '2%' } },
  { label: 'More Modern', style: { left: '6%', bottom: '-14%' } },
  { label: 'More Quality', style: { left: '46%', top: '-10%' } },
  { label: 'More Profitable', style: { left: '38%', bottom: '-16%' } },
  { label: 'Scalable', style: { right: '0%', bottom: '4%' } },
];

function FloatingBadge({ label, style, delay }) {
  return (
    <motion.span
      style={style}
      initial={{ y: -4 }}
      animate={{ y: 4 }}
      transition={{ duration: 3.4, delay, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      className="absolute inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-900 shadow-lg"
    >
      <CheckCircle2 size={13} className="text-positive" />
      {label}
    </motion.span>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(faqItems.findIndex((f) => f.defaultOpen));
  const [form, setForm] = useState({ email: '', question: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | done
  const pushToast = useUIStore((s) => s.pushToast);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.question) return;

    setStatus('loading');
    try {
      await submitFaqQuestion(form);
      pushToast({ type: 'success', message: "Thanks — we'll get back to you soon." });
      setForm({ email: '', question: '' });
    } catch (err) {
      pushToast({
        type: 'error',
        message: err?.response?.data?.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setStatus('idle');
    }
  };

  return (
    <section id="faq" className="bg-ink-800 py-16 sm:py-24 border-y border-ink-600">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-14">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-ink-600 bg-ink-700/40 p-5">
                <p className="text-sm font-semibold text-white">Still have a question?</p>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="Write your email"
                  className="mt-4 w-full rounded-xl border border-ink-600 bg-ink-800 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-brand-teal focus:outline-none"
                />
                <textarea
                  required
                  rows={4}
                  value={form.question}
                  onChange={(e) => setForm((f) => ({ ...f, question: e.target.value }))}
                  placeholder="Write your question..."
                  className="mt-3 w-full resize-none rounded-xl border border-ink-600 bg-ink-800 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-brand-teal focus:outline-none"
                />
                <div className="mt-4">
                  <Button as="button" type="submit" variant="light" icon={false} disabled={status === 'loading'} className="w-full justify-center">
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <Loader2 size={15} className="animate-spin" /> Sending
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send question <Send size={14} />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <AccordionItem key={item.question} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-sm text-muted-2 sm:text-base">After working with us, every project becomes:</p>

            {/* Desktop / tablet — scattered badge cloud around the wordmark */}
            <div className="relative mx-auto mt-6 hidden max-w-3xl py-16 sm:block">
              <h3 className="select-none font-display text-7xl font-extrabold text-gradient md:text-8xl lg:text-[9rem]">{brand.name}</h3>
              {badgePositions.map((b, i) => (
                <FloatingBadge key={b.label} label={b.label} style={b.style} delay={i * 0.3} />
              ))}
            </div>

            {/* Mobile — simplified stacked version */}
            <div className="mt-6 sm:hidden">
              <h3 className="select-none font-display text-5xl font-extrabold text-gradient">{brand.name}</h3>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {outcomeBadges.map((label) => (
                  <span key={label} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-900">
                    <CheckCircle2 size={13} className="text-positive" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
