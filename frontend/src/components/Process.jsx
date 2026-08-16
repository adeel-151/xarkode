import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container, Reveal, Badge } from './ui.jsx';
import { workProcess } from '../data/content.js';

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="bg-ink-900 py-24 sm:py-32 overflow-hidden">
      <Container>
        <Reveal className="text-center max-w-2xl mx-auto">
          <Badge className="!bg-brand-teal/10 !border-brand-teal/30 !text-brand-teal font-bold mb-6">Our Process</Badge>
          <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
            How We <span className="text-gradient">Build</span>
          </h2>
          <p className="mt-4 text-muted-2 text-lg">We don't just write code. We engineer scalable infrastructure.</p>
        </Reveal>

        <div className="mt-24 relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Timeline Line (Background) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-ink-800 -translate-x-1/2 rounded-full" />
          
          {/* Timeline Line (Glowing Foreground) */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-brand-teal to-brand-blue -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(46,230,197,0.5)]" 
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 sm:gap-24">
            {workProcess.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={item.step} className="relative flex items-center md:justify-between w-full">
                  {/* Step Node */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 w-16 h-16 rounded-2xl bg-ink-900 border-2 border-brand-teal text-brand-teal font-display font-extrabold text-xl flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(46,230,197,0.3)]"
                  >
                    {item.step}
                  </motion.div>

                  {/* Content Cards */}
                  <div className={`w-full md:w-5/12 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right md:mr-auto' : 'md:pl-16 md:ml-auto'}`}>
                    <Reveal delay={0.3} y={30}>
                      <div className={`glass-card-strong p-8 rounded-3xl border border-white/5 hover:border-brand-teal/30 transition-colors ${isEven ? 'md:items-end' : ''}`}>
                        <h3 className="font-display text-2xl font-extrabold text-white mb-4">
                          {item.title}
                        </h3>
                        <p className="text-base leading-relaxed text-muted-2">
                          {item.description}
                        </p>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
