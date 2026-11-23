import { useState } from 'react';
import { ArrowDownRight, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Playbook() {
  const [activeStep, setActiveStep] = useState(0);

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

  return (
    <section id="process" className="bg-[#08070e] text-white py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>HOW WE WORK</span>
            </div>

            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-[4.8rem] leading-[0.92] tracking-tighter uppercase text-white">
              THE<br />
              XARKODE<br />
              <span className="text-[#8b5cf6]">PLAYBOOK</span>
            </h2>

            <p className="text-white/70 text-base max-w-sm leading-relaxed">
              The best digital work starts before the first screen. We make the path visible, collaborative, and grounded in the business.
            </p>

            <div className="text-xs font-mono tracking-widest text-white/40 pt-4">
              01-06
            </div>
          </div>

          {/* Right Column: Interactive Step Card Container */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Main Interactive Card */}
            <div className="bg-[#100c22] border border-white/15 rounded-none p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-all duration-300">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between text-xs font-mono tracking-widest text-white/50 pb-6 border-b border-white/10">
                <span className="text-3xl font-display font-black text-[#8b5cf6]">
                  {steps[activeStep].number}
                </span>
                <span>{steps[activeStep].number} / 06</span>
              </div>

              {/* Title & Body */}
              <div className="py-8 space-y-4">
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  {steps[activeStep].title}
                </h3>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10 text-xs font-mono uppercase tracking-widest text-white/50">
                <span>XARKODE PROCESS</span>
                <span className="text-[#8b5cf6] font-bold text-base">
                  <ArrowDownRight size={18} />
                </span>
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                {steps.map((s, idx) => (
                  <button
                    key={s.number}
                    onClick={() => setActiveStep(idx)}
                    className={`h-10 px-4 rounded-none font-mono text-xs font-bold transition-all ${
                      activeStep === idx
                        ? 'bg-[#7028e0] text-white shadow-[0_0_15px_rgba(112,40,224,0.5)]'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {s.number}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
