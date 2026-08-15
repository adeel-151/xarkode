import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from './ui.jsx';
import { hero } from '../data/content.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden bg-ink-900 pb-28 pt-32 sm:min-h-screen sm:pt-40">
      {/* Cinematic Image Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop")',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Dark & Gradient Overlays for Cinematic Feel */}
      <div className="absolute inset-0 z-0 bg-ink-900/75 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink-900/80 via-transparent to-transparent" />

      <Container className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-8 max-w-4xl"
        >
          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-[6rem]"
          >
            {hero.headlinePre}
            <br />
            {hero.headlineMid}
            <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(90deg,#2ee6c5,#3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 40px rgba(46,230,197,0.4))'
              }}
            >
              {hero.headlineAccent}
            </span>
          </motion.h1>

          <motion.p variants={item} className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {hero.subtext}
          </motion.p>

          <motion.div variants={item} className="mt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue px-8 py-4 text-sm font-bold text-ink-900 shadow-[0_8px_32px_-8px_rgba(46,230,197,0.6)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(46,230,197,0.8)]"
            >
              {hero.cta}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-900 text-white">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
