import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowDownRight, ChevronRight, ChevronLeft } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Understand the Business',
    description: 'We examine the business model, audience, challenges, workflow, and commercial goals before proposing a solution.',
    focus: 'Discovery & Requirements',
  },
  {
    number: '02',
    title: 'System Architecture & Strategy',
    description: 'We map out user journeys, data flow, integrations, and tech stack architecture before writing code.',
    focus: 'System Modeling & Tech Stack',
  },
  {
    number: '03',
    title: 'High-Fidelity UI/UX Design',
    description: 'We craft cinematic visual experiences, interactive prototypes, and modular design systems tailored to your brand.',
    focus: 'Interface Craft & Aesthetics',
  },
  {
    number: '04',
    title: 'Full-Stack Engineering',
    description: 'Clean, scalable, maintainable codebase built with modern frameworks, strict typing, and high performance.',
    focus: 'Production Code & Testing',
  },
  {
    number: '05',
    title: 'Workflow Automation & AI',
    description: 'Connecting tools, databases, automated WhatsApp alerts, and intelligent agents to eliminate manual bottlenecks.',
    focus: 'Automations & Integration',
  },
  {
    number: '06',
    title: 'Launch, Testing & Evolution',
    description: 'Rigorous QA testing, deployment to production infrastructure, telemetry tracking, and iterative growth support.',
    focus: 'Production Release & Growth',
  },
];

// Sub-component for individual overlapping card with scroll animation
function OverlappingStepCard({ step, index, scrollYProgress, activeIndex }) {
  // Card 0 sits stationary. Cards 1 through 5 slide in from right (120vw -> 0)
  const isFirst = index === 0;

  // Progress ranges for each card's arrival
  // Card 1: 0.08 -> 0.24
  // Card 2: 0.24 -> 0.40
  // Card 3: 0.40 -> 0.56
  // Card 4: 0.56 -> 0.72
  // Card 5: 0.72 -> 0.88
  const startProgress = 0.08 + (index - 1) * 0.16;
  const endProgress = startProgress + 0.16;

  // Horizontal motion: starts offscreen to the right, slides into resting position
  const x = useTransform(
    scrollYProgress,
    isFirst ? [0, 1] : [startProgress, endProgress],
    isFirst ? [0, 0] : ['100vw', '0vw'],
    { clamp: true }
  );

  // Slight subtle rotation as it slides in for a natural tactile card feel
  const rotate = useTransform(
    scrollYProgress,
    isFirst ? [0, 1] : [startProgress, endProgress],
    isFirst ? [0, 0] : [8, 0],
    { clamp: true }
  );

  // Z-index increases with index so subsequent cards stack on top
  const zIndex = 10 + index * 5;

  // Stagger offset so previous card numbers remain visible on the left edge like tabs
  const leftOffset = index * 22; // px offset on desktop

  const isCurrentActive = activeIndex === index;

  return (
    <motion.div
      style={{
        x,
        rotate,
        zIndex,
        left: `${leftOffset}px`,
      }}
      className="absolute top-0 w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[520px] transition-shadow duration-300"
    >
      <div
        className={`h-[420px] sm:h-[450px] rounded-none p-6 sm:p-10 flex flex-col justify-between border transition-all duration-300 ${
          isCurrentActive
            ? 'bg-[#150f2e]/95 border-[#8b5cf6]/60 shadow-[-30px_0_60px_rgba(0,0,0,0.9),0_20px_40px_rgba(112,40,224,0.3)] backdrop-blur-2xl'
            : 'bg-[#0f0b22]/90 border-white/15 shadow-[-25px_0_50px_rgba(0,0,0,0.85)] backdrop-blur-xl'
        }`}
      >
        {/* Top Step Counter Bar */}
        <div className="flex items-center justify-between text-xs font-mono tracking-widest text-white/50 pb-5 border-b border-white/10">
          <span
            className={`text-4xl font-display font-black tracking-tight ${
              isCurrentActive ? 'text-[#8b5cf6]' : 'text-white/80'
            }`}
          >
            {step.number}
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
            <span>{step.number} / 06</span>
          </div>
        </div>

        {/* Title & Body */}
        <div className="py-6 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#8b5cf6]">
            {step.focus}
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            {step.title}
          </h3>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-white/10 text-xs font-mono uppercase tracking-widest text-white/50">
          <span>XARKODE PROCESS</span>
          <span className="text-[#8b5cf6] font-bold text-base flex items-center gap-1">
            <ArrowDownRight size={18} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Playbook() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track vertical scroll through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Automatically update active step based on scroll position
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.20) {
      setActiveIndex(0);
    } else if (latest < 0.36) {
      setActiveIndex(1);
    } else if (latest < 0.52) {
      setActiveIndex(2);
    } else if (latest < 0.68) {
      setActiveIndex(3);
    } else if (latest < 0.84) {
      setActiveIndex(4);
    } else {
      setActiveIndex(5);
    }
  });

  // Jump to specific card by scrolling container
  const jumpToCard = (targetIndex) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    
    // Target scroll progress for index
    const targetProgress = targetIndex === 0 ? 0.05 : 0.08 + (targetIndex - 1) * 0.16 + 0.08;
    const targetScrollY = containerTop + targetProgress * containerHeight;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-[#08070e] text-white h-[340vh]"
    >
      {/* Sticky Full-Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 sm:py-14 overflow-hidden border-b border-white/10">
        {/* Ambient Glow in the background */}
        <div 
          className="pointer-events-none absolute right-10 top-1/3 w-[650px] h-[650px] rounded-full blur-[170px] opacity-30"
          style={{
            background: 'radial-gradient(circle, #7028e0 0%, #3b0764 55%, transparent 80%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between relative z-10">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4 text-xs font-mono tracking-widest text-white/60 uppercase">
            <div className="flex items-center gap-6">
              <span className="font-bold text-white">04</span>
              <span>THE XARKODE PLAYBOOK</span>
            </div>
            <div>A CLEAR PATH FROM PROBLEM TO PROGRESS</div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center my-auto">
            {/* Left Column: Heading & Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>HOW WE WORK</span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[4.6rem] leading-[0.92] tracking-tighter uppercase text-white">
                THE<br />
                XARKODE<br />
                <span className="text-[#8b5cf6]">PLAYBOOK</span>
              </h2>

              <p className="text-white/70 text-sm sm:text-base max-w-sm leading-relaxed">
                The best digital work starts before the first screen. Scroll vertically to watch each architectural phase lock into place.
              </p>

              {/* Numbered Jump Buttons */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  {steps.map((s, idx) => (
                    <button
                      key={s.number}
                      type="button"
                      onClick={() => jumpToCard(idx)}
                      className={`h-9 px-3.5 rounded-none font-mono text-xs font-bold transition-all cursor-pointer ${
                        activeIndex === idx
                          ? 'bg-[#7028e0] text-white shadow-[0_0_15px_rgba(112,40,224,0.5)]'
                          : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                      }`}
                    >
                      {s.number}
                    </button>
                  ))}
                </div>

                {/* Arrow navigation buttons */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => jumpToCard(activeIndex > 0 ? activeIndex - 1 : 0)}
                    disabled={activeIndex === 0}
                    className="w-9 h-9 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    aria-label="Previous phase"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => jumpToCard(activeIndex < steps.length - 1 ? activeIndex + 1 : steps.length - 1)}
                    disabled={activeIndex === steps.length - 1}
                    className="w-9 h-9 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    aria-label="Next phase"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <span className="text-xs font-mono text-purple-400 tracking-wider">
                    SCROLL DOWN TO ADVANCE ⇣
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Stacked Overlapping Cards Deck Stage */}
            <div className="lg:col-span-7 relative h-[430px] sm:h-[460px] w-full flex items-center justify-start overflow-visible">
              {steps.map((step, idx) => (
                <OverlappingStepCard
                  key={step.number}
                  step={step}
                  index={idx}
                  scrollYProgress={scrollYProgress}
                  activeIndex={activeIndex}
                />
              ))}
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="pt-4 flex items-center justify-between border-t border-white/10 text-xs font-mono text-white/40">
            <div className="flex items-center gap-2">
              <span>PHASE</span>
              <span className="text-[#8b5cf6] font-bold">{steps[activeIndex].number}</span>
              <span>OF 06</span>
            </div>

            {/* Visual step segments */}
            <div className="flex items-center gap-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 transition-all duration-300 ${
                    activeIndex === i ? 'w-8 bg-[#8b5cf6]' : 'w-3 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
