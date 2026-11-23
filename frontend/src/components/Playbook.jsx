import { useState, useRef, useEffect } from 'react';
import { ArrowDownRight, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Playbook() {
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef(null);

  const steps = [
    {
      number: '01',
      title: 'Understand the Business',
      description: 'We examine the business model, audience, challenges, workflow, and commercial goals before proposing a solution.',
      focus: 'Business Discovery & Requirements',
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

  // Scroll to specific card by index
  const scrollToCard = (index) => {
    setActiveStep(index);
    if (scrollContainerRef.current) {
      const cards = scrollContainerRef.current.children;
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
      }
    }
  };

  // Listen to horizontal scroll to update active step
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = 380; // approximate step card stride
      const newIndex = Math.min(
        steps.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (newIndex !== activeStep) {
        setActiveStep(newIndex);
      }
    }
  };

  return (
    <section id="process" className="bg-[#08070e] text-white py-24 border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Gradient Lighting */}
      <div 
        className="pointer-events-none absolute right-10 top-1/3 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, #3b0764 60%, transparent 80%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4 text-xs font-mono tracking-widest text-white/60 uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-white">04</span>
            <span>THE XARKODE PLAYBOOK</span>
          </div>
          <div>A CLEAR PATH FROM PROBLEM TO PROGRESS</div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>HOW WE WORK</span>
            </div>

            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-[4.6rem] leading-[0.92] tracking-tighter uppercase text-white">
              THE<br />
              XARKODE<br />
              <span className="text-[#8b5cf6]">PLAYBOOK</span>
            </h2>

            <p className="text-white/70 text-base max-w-sm leading-relaxed">
              The best digital work starts before the first screen. We make the path visible, collaborative, and grounded in the business.
            </p>

            {/* Stepper Navigation Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-2">
                {steps.map((s, idx) => (
                  <button
                    key={s.number}
                    onClick={() => scrollToCard(idx)}
                    className={`h-9 px-3.5 rounded-none font-mono text-xs font-bold transition-all cursor-pointer ${
                      activeStep === idx
                        ? 'bg-[#7028e0] text-white shadow-[0_0_15px_rgba(112,40,224,0.5)]'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {s.number}
                  </button>
                ))}
              </div>

              {/* Arrow navigation buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToCard(activeStep > 0 ? activeStep - 1 : steps.length - 1)}
                  className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous step"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scrollToCard(activeStep < steps.length - 1 ? activeStep + 1 : 0)}
                  className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next step"
                >
                  <ChevronRight size={18} />
                </button>
                <span className="text-xs font-mono text-white/40 tracking-widest pl-2">
                  SCROLL HORIZONTALLY ⟶
                </span>
              </div>
            </div>

            <div className="text-xs font-mono tracking-widest text-white/40 pt-2">
              01-06 / ARCHITECTURAL PHASES
            </div>
          </div>

          {/* Right Column: Overlapping Horizontal Scroll Deck */}
          <div className="lg:col-span-8 overflow-hidden">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto pb-8 pt-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-4 pr-12"
              style={{
                perspective: '1000px',
              }}
            >
              {steps.map((step, idx) => {
                const isSelected = activeStep === idx;
                // Overlapping margin for deck feel on all but the first card
                const overlapClass = idx === 0 ? '' : '-ml-12 sm:-ml-20 lg:-ml-24';
                // Higher z-index for later cards so they overlap the previous ones
                const zIndex = 10 + idx * 5;

                return (
                  <div
                    key={step.number}
                    onClick={() => scrollToCard(idx)}
                    style={{ zIndex }}
                    className={`relative shrink-0 w-[300px] sm:w-[420px] md:w-[460px] snap-start transition-all duration-300 cursor-pointer ${overlapClass} ${
                      isSelected ? 'scale-[1.02] -translate-y-2' : 'hover:-translate-y-1'
                    }`}
                  >
                    {/* Overlapping Card Container */}
                    <div 
                      className={`h-full rounded-none p-7 sm:p-10 flex flex-col justify-between border transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#150e2d] border-[#8b5cf6]/60 shadow-[-25px_0_50px_rgba(0,0,0,0.9),0_20px_40px_rgba(112,40,224,0.25)]'
                          : 'bg-[#100c22]/95 border-white/15 shadow-[-20px_0_40px_rgba(0,0,0,0.85)] hover:border-white/30'
                      }`}
                    >
                      {/* Top Step Counter Bar */}
                      <div className="flex items-center justify-between text-xs font-mono tracking-widest text-white/50 pb-5 border-b border-white/10">
                        <span className={`text-4xl font-display font-black tracking-tight ${
                          isSelected ? 'text-[#8b5cf6]' : 'text-white/80'
                        }`}>
                          {step.number}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                          <span>{step.number} / 06</span>
                        </div>
                      </div>

                      {/* Title & Body */}
                      <div className="py-8 space-y-4">
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
                  </div>
                );
              })}
            </div>

            {/* Visual Indicator of Overlapping Cards */}
            <div className="flex items-center justify-between px-2 pt-2 text-xs font-mono text-white/40">
              <div className="flex items-center gap-2">
                <span>PHASE</span>
                <span className="text-[#8b5cf6] font-bold">{steps[activeStep].number}</span>
                <span>OF 06</span>
              </div>
              <div className="flex items-center gap-1.5">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 transition-all ${
                      activeStep === i ? 'w-6 bg-[#8b5cf6]' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
