import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Container, Reveal, Avatar } from './ui.jsx';
import { testimonials } from '../data/content.js';

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback((dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => go(1), 6000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, go]);

  const current = testimonials[index];

  return (
    <section
      id="reviews"
      className="bg-ink-800 py-32 sm:py-40 relative overflow-hidden border-y border-ink-600"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Massive background quote mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
        <Quote size={600} className="text-brand-teal" />
      </div>

      <Container className="relative z-10 text-center">
        <Reveal>
          <div className="mb-6 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-brand-teal text-brand-teal" />
            ))}
          </div>

          <div className="min-h-[300px] sm:min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                <p className="max-w-4xl font-display text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                  "{current.quote}"
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <Avatar name={current.name} size={50} />
                  <div className="text-left">
                    <p className="text-base font-extrabold tracking-wide text-white">{current.name}</p>
                    <p className="text-sm font-medium text-brand-teal">{current.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-16 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-ink-900 text-white transition-all hover:border-brand-teal hover:bg-brand-teal/10 hover:text-brand-teal shadow-xl"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-gradient-to-r from-brand-teal to-brand-blue' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-ink-900 text-white transition-all hover:border-brand-teal hover:bg-brand-teal/10 hover:text-brand-teal shadow-xl"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
