import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-[0_8px_24px_-8px_rgba(46,230,197,0.5)] transition-transform hover:-translate-y-1"
          style={{ background: 'linear-gradient(135deg, #2ee6c5, #3b82f6)' }}
        >
          <ArrowUp size={20} strokeWidth={2.5} className="text-ink-900" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
