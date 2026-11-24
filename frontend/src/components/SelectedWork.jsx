import { ArrowUpRight, Check } from 'lucide-react';

export default function SelectedWork() {
  const deliverables = [
    'Online appointment booking',
    'Appointment slot management',
    'Patient records and history',
    'Treatments and follow-up scheduling',
    'Payments and remaining balances',
  ];

  const technologies = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'];

  return (
    <section id="work" className="bg-[#ded4fc] text-[#1a0845] py-24 border-b border-[#1a0845]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#1a0845]/15 gap-4 text-xs font-mono tracking-widest text-[#5a4488] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#1a0845]">03</span>
            <span>SELECTED WORK</span>
          </div>
          <div>PUBLIC CASE STUDIES</div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-14 pb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-semibold text-6xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3.5px] uppercase text-[#1a0845]">
              SELECTED<br />
              <span className="text-[#641ae6]">WORK</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#4a3575] leading-relaxed max-w-md">
              Real systems, presented with the same care we bring to the work itself. Only publicly approved projects appear here.
            </p>
          </div>
        </div>

        {/* Project Card Showcase */}
        <div className="bg-white rounded-none border border-[#1a0845]/15 p-6 sm:p-10 shadow-[0_20px_50px_rgba(30,8,77,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Mockup Graphic */}
            <div className="lg:col-span-6 bg-[#0f0b1e] rounded-none p-4 sm:p-6 border border-black/10 shadow-inner flex flex-col justify-between min-h-[380px]">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/50 pb-3 border-b border-white/10">
                <span className="font-bold text-white/70">01</span>
                <span>BUSINESS SYSTEM • WEB APP</span>
              </div>

              {/* Graphic Center Piece */}
              <div className="my-auto py-12 flex flex-col items-center justify-center text-center">
                <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 bg-purple-600/30 blur-2xl rounded-full" />
                  <svg viewBox="0 0 100 100" className="w-24 h-24 fill-none drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    <path d="M25 20 L60 20 L80 45 L45 45 Z" fill="url(#case-grad1)" />
                    <path d="M20 55 L55 55 L75 80 L40 80 Z" fill="url(#case-grad2)" />
                    <defs>
                      <linearGradient id="case-grad1" x1="25" y1="20" x2="80" y2="45" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#c084fc" />
                        <stop offset="1" stopColor="#7c3aed" />
                      </linearGradient>
                      <linearGradient id="case-grad2" x1="20" y1="55" x2="75" y2="80" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a855f7" />
                        <stop offset="1" stopColor="#4c1d95" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="font-display font-black text-3xl tracking-tight text-white uppercase">
                  XARKODE
                </span>
                <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase mt-0.5">
                  OFFICIAL
                </span>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>HEALTHCARE & CLINIC WORKFLOW</span>
                <span>PRODUCTION SYSTEM</span>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#634994]">
                <span>BUSINESS SYSTEM • WEB APP</span>
                <span>PUBLIC PROJECT</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1a0845] tracking-tight">
                XarKode Clinic Management System
              </h3>

              <p className="text-sm text-[#4b3777] leading-relaxed">
                Clinics manage bookings, patient records and follow-ups manually across WhatsApp and spreadsheets, losing appointments and revenue.
              </p>

              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1a0845] mb-1.5">
                  WHAT XARKODE DELIVERED
                </div>
                <p className="text-sm text-[#4b3777] leading-relaxed">
                  A custom web system connecting website bookings, appointment slots, patient records, treatments, payments and WhatsApp reminders in one dashboard.
                </p>
              </div>

              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1a0845] mb-2">
                  TECHNOLOGY
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#5b21b6]">
                  {technologies.map((tech) => (
                    <span key={tech} className="bg-purple-50 px-2.5 py-1 rounded-none border border-purple-200">
                      / {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-2 border-t border-[#1a0845]/10">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#270e5e] font-medium">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#7028e0] text-white">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#641ae6] hover:text-[#4c1d95] transition-colors"
                >
                  <span>Explore the project</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Case Study Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[#584185]">
          <div>Selected creative work is documented on the Work page.</div>
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 font-bold text-[#1a0845] hover:text-[#641ae6] transition-colors"
          >
            <span>View Selected Brands and Projects</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
