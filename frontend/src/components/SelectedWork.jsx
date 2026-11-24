import { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, Database, Layers } from 'lucide-react';

export default function SelectedWork() {
  const [activeIdx, setActiveIdx] = useState(0);

  const projects = [
    {
      id: 'clinic-os',
      number: '01',
      tabLabel: '01 / CLINIC MANAGEMENT OS',
      category: 'BUSINESS SYSTEM • WEB APP',
      badge: 'HEALTHCARE & CLINIC WORKFLOW',
      status: 'PRODUCTION SYSTEM',
      title: 'XarKode Clinic Management System',
      problem:
        'Clinics manage bookings, patient records and follow-ups manually across WhatsApp and spreadsheets, losing appointments and revenue.',
      delivered:
        'A custom web system connecting website bookings, appointment slots, patient records, treatments, payments and automated WhatsApp reminders in one unified dashboard.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      deliverables: [
        'Online appointment booking & real-time calendar sync',
        'Appointment slot management & patient queueing',
        'Encrypted patient records, history & visit notes',
        'Treatments, prescription logs & follow-up scheduling',
        'Payments, automated billing & remaining balance tracking',
      ],
      renderGraphic: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 fill-none drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          <defs>
            <linearGradient id="proj1-g1" x1="25" y1="20" x2="80" y2="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c084fc" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="proj1-g2" x1="20" y1="55" x2="75" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a855f7" />
              <stop offset="1" stopColor="#4c1d95" />
            </linearGradient>
          </defs>
          <path d="M25 20 L60 20 L80 45 L45 45 Z" fill="url(#proj1-g1)" />
          <path d="M20 55 L55 55 L75 80 L40 80 Z" fill="url(#proj1-g2)" />
        </svg>
      ),
    },
    {
      id: 'ai-whatsapp-agent',
      number: '02',
      tabLabel: '02 / AUTONOMOUS AI BOT & CRM',
      category: 'AI AUTOMATION • AUTONOMOUS AGENT',
      badge: '24/7 INBOUND SALES & WORKFLOW PIPELINE',
      status: 'ENTERPRISE AI DEPLOYMENT',
      title: 'Autonomous AI WhatsApp Agent & CRM Engine',
      problem:
        'High-volume service businesses miss out-of-hours leads, suffer 3+ hour reply delays, and lose high-value prospects due to manual triage bottlenecks.',
      delivered:
        'An autonomous AI conversational agent integrated directly with WhatsApp Cloud API, trained on proprietary company knowledge to qualify prospects, handle objections, and sync leads to CRM in real time.',
      technologies: ['OpenAI / Claude API', 'FastAPI', 'Python', 'WhatsApp Cloud API', 'PostgreSQL', 'Docker'],
      deliverables: [
        'Sub-3-second contextual AI conversational response time',
        'Automated lead qualification, budget verification & intent tagging',
        'Two-way CRM synchronization & contact enrichment',
        'Calendar booking directly inside WhatsApp chat',
        'Intelligent human agent handover with full transcript context',
      ],
      renderGraphic: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 fill-none drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          <defs>
            <linearGradient id="proj2-g1" x1="50" y1="15" x2="50" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c084fc" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>
            <linearGradient id="proj2-g2" x1="15" y1="50" x2="85" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e9d5ff" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <polygon points="50,15 85,50 50,85 15,50" fill="url(#proj2-g1)" />
          <polygon points="50,28 72,50 50,72 28,50" fill="url(#proj2-g2)" opacity="0.85" />
          <circle cx="50" cy="50" r="7" fill="#ffffff" />
        </svg>
      ),
    },
    {
      id: 'saas-ecommerce',
      number: '03',
      tabLabel: '03 / MULTI-TENANT SAAS SUITE',
      category: 'SAAS PLATFORM • CLOUD INFRASTRUCTURE',
      badge: 'HIGH-CONCURRENCY B2B & D2C COMMERCE',
      status: 'SCALABLE CLOUD ARCHITECTURE',
      title: 'Multi-Tenant Enterprise Commerce Suite',
      problem:
        'Scaling multi-brand retailers struggle with fragmented multi-store inventory, sluggish page load times, and rigid monolithic platforms unable to handle traffic spikes.',
      delivered:
        'A cloud-native multi-tenant SaaS architecture enabling brands to deploy sub-50ms storefronts with centralized multi-warehouse inventory, real-time analytics, and automated logistics webhooks.',
      technologies: ['Next.js 14', 'Tailwind CSS', 'Node.js', 'Redis', 'PostgreSQL', 'Stripe API'],
      deliverables: [
        'Sub-50ms Edge-cached storefront page loads worldwide',
        'Isolated tenant databases with custom domain SSL routing',
        'Real-time inventory reconciliation across omnichannel POS & online stores',
        'Automated webhook pipelines for logistics & shipping carriers',
        'Unified analytics dashboard tracking multi-store ARR and customer LTV',
      ],
      renderGraphic: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 fill-none drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          <defs>
            <linearGradient id="proj3-top" x1="50" y1="18" x2="80" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e9d5ff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="proj3-left" x1="20" y1="40" x2="50" y2="82" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <linearGradient id="proj3-right" x1="50" y1="40" x2="80" y2="82" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9333ea" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>
          </defs>
          <polygon points="50,18 80,35 50,52 20,35" fill="url(#proj3-top)" />
          <polygon points="20,35 50,52 50,82 20,65" fill="url(#proj3-left)" />
          <polygon points="50,52 80,35 80,65 50,82" fill="url(#proj3-right)" />
        </svg>
      ),
    },
  ];

  const current = projects[activeIdx];

  return (
    <section id="work" className="bg-[#ded4fc] text-[#1a0845] py-24 border-b border-[#1a0845]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#1a0845]/15 gap-4 text-xs font-mono tracking-widest text-[#5a4488] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#1a0845]">03</span>
            <span>SELECTED WORK</span>
          </div>
          <div>{projects.length} FLAGSHIP CASE STUDIES • WEB, SAAS & AI</div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-14 pb-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-semibold text-[36px] sm:text-6xl lg:text-[5.5rem] leading-[40px] sm:leading-[0.9] tracking-[-1.5px] sm:tracking-[-3.5px] uppercase text-[#1a0845] break-words">
              SELECTED<br />
              <span className="text-[#641ae6]">WORK</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#4a3575] leading-relaxed max-w-md">
              Real systems, engineered with the same precision we bring to client partnerships. Explore our work across clinical software, autonomous AI, and enterprise SaaS.
            </p>
          </div>
        </div>

        {/* Interactive Case Study Selectors */}
        <div className="flex flex-wrap gap-2 mb-8">
          {projects.map((proj, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveIdx(idx)}
                className={`w-full sm:w-auto px-4 py-3 sm:px-5 sm:py-3.5 text-xs font-mono uppercase tracking-wider rounded-none transition-all cursor-pointer flex items-center justify-between sm:justify-start gap-3 ${
                  isActive
                    ? 'bg-[#1a0845] text-white font-bold shadow-md'
                    : 'bg-white/70 text-[#5a4488] hover:bg-white hover:text-[#1a0845] border border-[#1a0845]/15'
                }`}
              >
                <span className={isActive ? 'text-[#a78bfa]' : 'text-[#641ae6] font-bold'}>
                  {proj.number}
                </span>
                <span>{proj.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Project Card Showcase */}
        <div className="bg-white rounded-none border border-[#1a0845]/15 p-5 sm:p-10 shadow-[0_20px_50px_rgba(30,8,77,0.08)] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Mockup Graphic */}
            <div className="lg:col-span-6 bg-[#0f0b1e] rounded-none p-4 sm:p-6 border border-black/10 shadow-inner flex flex-col justify-between min-h-[300px] sm:min-h-[420px]">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/50 pb-3 border-b border-white/10">
                <span className="font-bold text-[#a78bfa]">{current.number}</span>
                <span>{current.category}</span>
              </div>

              {/* Graphic Center Piece */}
              <div className="my-auto py-12 flex flex-col items-center justify-center text-center">
                <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 bg-purple-600/30 blur-2xl rounded-full" />
                  {current.renderGraphic()}
                </div>
                <span className="font-display font-semibold text-3xl tracking-tight text-white uppercase">
                  XARKODE
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#a78bfa] uppercase mt-0.5 font-bold">
                  {current.status}
                </span>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>{current.badge}</span>
                <span>ARCHITECTED FOR SCALE</span>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#634994]">
                <span>{current.category}</span>
                <span className="text-[#641ae6] font-bold">PROJECT {current.number} / {projects.length}</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1a0845] tracking-tight">
                {current.title}
              </h3>

              <p className="text-sm text-[#4b3777] leading-relaxed">
                {current.problem}
              </p>

              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1a0845] mb-1.5">
                  WHAT XARKODE DELIVERED
                </div>
                <p className="text-sm text-[#4b3777] leading-relaxed">
                  {current.delivered}
                </p>
              </div>

              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1a0845] mb-2">
                  TECHNOLOGY STACK
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#5b21b6]">
                  {current.technologies.map((tech) => (
                    <span key={tech} className="bg-purple-50 px-2.5 py-1 rounded-none border border-purple-200">
                      / {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-2 border-t border-[#1a0845]/10">
                {current.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#270e5e] font-medium">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#7028e0] text-white shrink-0">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#641ae6] hover:text-[#4c1d95] transition-colors"
                >
                  <span>Request a similar system</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Case Study Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[#584185]">
          <div>Need a custom architecture for your business?</div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-bold text-[#1a0845] hover:text-[#641ae6] transition-colors"
          >
            <span>Consult directly with Adeel Qaiser</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
