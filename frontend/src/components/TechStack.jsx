import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Cpu, Database, Globe, Layers, ShieldCheck, Zap, Workflow, Terminal } from 'lucide-react';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & Cloud' },
    { id: 'ai', label: 'AI & Automations' },
  ];

  const technologies = [
    {
      num: '01',
      name: 'Next.js 15',
      category: 'frontend',
      role: 'Production SSR & Static Hybrid',
      status: 'App Router / Turbopack',
      icon: (
        <svg viewBox="0 0 180 180" className="w-5 h-5 fill-current">
          <circle cx="90" cy="90" r="90" fill="#000" />
          <path d="M149.508 157.08L69.142 54H54v71.97h12.114V69.384l72.28 92.518a89.91 89.91 0 0011.114-4.822z" fill="#fff" />
          <path d="M115 54h12v42.5h-12z" fill="#fff" />
        </svg>
      ),
    },
    {
      num: '02',
      name: 'React 19',
      category: 'frontend',
      role: 'Reactive Component System',
      status: 'Concurrent / Server Components',
      icon: (
        <svg viewBox="0 0 115 102" className="w-5 h-5 fill-none stroke-current" strokeWidth="6">
          <ellipse cx="57.5" cy="51" rx="55" ry="20" transform="rotate(30 57.5 51)" />
          <ellipse cx="57.5" cy="51" rx="55" ry="20" transform="rotate(90 57.5 51)" />
          <ellipse cx="57.5" cy="51" rx="55" ry="20" transform="rotate(150 57.5 51)" />
          <circle cx="57.5" cy="51" r="9" fill="currentColor" />
        </svg>
      ),
    },
    {
      num: '03',
      name: 'TypeScript',
      category: 'frontend',
      role: 'Type-Safe Architecture',
      status: 'Strict Typing & Zero Runtime Errors',
      icon: (
        <span className="font-mono font-black text-xs px-1 bg-[#3178c6] text-white rounded-none">
          TS
        </span>
      ),
    },
    {
      num: '04',
      name: 'Tailwind CSS v4',
      category: 'frontend',
      role: 'Modern Utility Styling',
      status: 'Lightning CSS Engine',
      icon: (
        <svg viewBox="0 0 54 33" className="w-5 h-5 fill-current text-[#38bdf8]">
          <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.005-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.005-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
        </svg>
      ),
    },
    {
      num: '05',
      name: 'Node.js & Express',
      category: 'backend',
      role: 'High-Concurrency Runtime',
      status: 'Async Event-Driven APIs',
      icon: (
        <span className="font-mono font-bold text-xs text-[#539e43]">
          ⬢ Node
        </span>
      ),
    },
    {
      num: '06',
      name: 'PostgreSQL',
      category: 'backend',
      role: 'Relational Database Engine',
      status: 'ACID Compliant / JSONB',
      icon: (
        <span className="font-mono font-bold text-xs text-[#336791]">
          🐘 PG
        </span>
      ),
    },
    {
      num: '07',
      name: 'Supabase',
      category: 'backend',
      role: 'Realtime Backend & Auth',
      status: 'Row-Level Security & Edge Functions',
      icon: <Zap size={16} className="text-[#3ecf8e]" />,
    },
    {
      num: '08',
      name: 'Vercel & Docker',
      category: 'backend',
      role: 'Edge Global CDN & Containers',
      status: 'Zero-Downtime CI/CD',
      icon: <Layers size={16} className="text-black" />,
    },
    {
      num: '09',
      name: 'Autonomous AI Agents',
      category: 'ai',
      role: 'LLM Function Calling & Automations',
      status: 'Claude 3.7 / OpenAI GPT-4o',
      icon: <Cpu size={16} className="text-[#7028e0]" />,
    },
    {
      num: '10',
      name: 'WhatsApp Business API',
      category: 'ai',
      role: 'Direct Customer Communication',
      status: 'Automated CRM Triggers',
      icon: <Workflow size={16} className="text-[#25D366]" />,
    },
  ];

  const industries = [
    {
      name: 'Clinics & Healthcare',
      desc: 'Bespoke patient booking engines, automated WhatsApp reminders, and secure HIPAA-compliant records.',
      stack: ['Next.js', 'PostgreSQL', 'WhatsApp API', 'Tailwind CSS'],
    },
    {
      name: 'SaaS & Startups',
      desc: 'Multi-tenant cloud databases, JWT/OAuth authentication, Stripe subscription billing, and real-time dashboards.',
      stack: ['React', 'Node.js', 'Supabase', 'TypeScript'],
    },
    {
      name: 'E-commerce & Retail',
      desc: 'High-speed headless storefronts, real-time inventory management, automated invoices, and payment gateways.',
      stack: ['Next.js', 'PostgreSQL', 'Stripe', 'Vercel'],
    },
    {
      name: 'Construction & Real Estate',
      desc: 'Client portal pipelines, automated quote generators, milestone photo tracking, and CRM integrations.',
      stack: ['React', 'Node.js', 'Docker', 'AI Agents'],
    },
    {
      name: 'Logistics & Automotive',
      desc: 'Fleet telemetry status, automated dispatch workflows, inventory trackers, and maintenance scheduling.',
      stack: ['TypeScript', 'Supabase', 'Express', 'Tailwind CSS'],
    },
  ];

  const practices = [
    {
      num: '01',
      title: 'Bespoke Architecture',
      desc: 'Zero generic templates or page-builders. Every line of code is custom-engineered for your exact commercial workflow.',
    },
    {
      num: '02',
      title: 'Conversion-First UX',
      desc: 'Cinematic visual craft deliberately structured to turn casual visitors into high-ticket qualified inquiries.',
    },
    {
      num: '03',
      title: 'Clean, Strictly-Typed Code',
      desc: 'Production-tested TypeScript and modular component systems built to be easily maintained and expanded for years.',
    },
    {
      num: '04',
      title: 'Direct Founder Communication',
      desc: 'No middle managers or outsourced handoffs. You work directly with Adeel Qaiser from architectural discovery to deployment.',
    },
  ];

  const filteredTech =
    activeTab === 'all'
      ? technologies
      : technologies.filter((t) => t.category === activeTab);

  return (
    <section id="technology" className="bg-[#f3f1ea] text-[#180838] py-28 border-b border-[#180838]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#180838]/15 gap-4 text-xs font-mono tracking-widest text-[#645b77] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#180838]">08</span>
            <span>TECHNOLOGY & CAPABILITIES</span>
          </div>
          <div>THE STACK BEHIND THE WORK</div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-14 pb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-semibold text-5xl sm:text-6xl lg:text-[5.2rem] leading-[0.92] tracking-[-3.5px] uppercase text-[#180838]">
              THE STACK<br />
              BEHIND <span className="text-[#7028e0]">THE</span><br />
              WORK.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#524962] leading-relaxed max-w-md">
              From cinematic web experiences and SaaS platforms to autonomous AI workflows, XARKODE combines creative direction with battle-tested engineering to build digital ecosystems that scale.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-none transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-[#180838] text-white font-bold shadow-sm'
                      : 'bg-white/60 text-[#645b77] hover:bg-white hover:text-[#180838] border border-[#180838]/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Upgraded Tech Cards Grid with Architectural Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {filteredTech.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col justify-between p-5 rounded-none bg-white/80 border border-[#180838]/10 hover:border-[#7028e0]/60 hover:bg-white hover:shadow-[0_12px_30px_rgba(30,8,77,0.08)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Row: Number & Icon */}
              <div className="flex items-center justify-between pb-3 border-b border-[#180838]/10">
                <span className="text-xs font-mono font-bold text-[#736a88]">
                  {item.num}
                </span>
                <div className="w-7 h-7 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* Middle: Name & Role */}
              <div className="py-4 space-y-1">
                <h4 className="font-display font-extrabold text-lg text-[#180838] group-hover:text-[#7028e0] transition-colors flex items-center justify-between">
                  <span>{item.name}</span>
                  <ArrowUpRight size={14} className="text-[#736a88] group-hover:text-[#7028e0] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5" />
                </h4>
                <div className="text-[11px] text-[#554a67] font-medium leading-snug">
                  {item.role}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="pt-3 border-t border-[#180838]/10 text-[10px] font-mono tracking-wide text-[#7028e0] font-semibold truncate">
                • {item.status}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Industry Deep Dive Matrix */}
        <div className="mt-16 bg-white/80 border border-[#180838]/15 rounded-none p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#180838]/10 gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#7028e0] font-bold">
                DOMAIN SOLUTIONS
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#180838] tracking-tight">
                Architected for Your Industry
              </h3>
            </div>
            <div className="text-xs font-mono text-[#645b77]">
              SELECT A SECTOR TO VIEW ARCHITECTURE ↘
            </div>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap gap-2 pt-6">
            {industries.map((ind, idx) => (
              <button
                key={ind.name}
                onClick={() => setSelectedIndustry(idx)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-none transition-all cursor-pointer ${
                  selectedIndustry === idx
                    ? 'bg-[#7028e0] text-white font-bold shadow-sm'
                    : 'bg-black/[0.03] text-[#4d445e] hover:bg-black/[0.06] border border-[#180838]/10'
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Active Industry Panel */}
          <div className="mt-6 p-6 bg-[#f7f6f1] border border-[#180838]/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="text-base font-display font-bold text-[#180838]">
                {industries[selectedIndustry].name} Workflow
              </div>
              <p className="text-sm text-[#4d445e] leading-relaxed">
                {industries[selectedIndustry].desc}
              </p>
            </div>

            {/* Stack Pill Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#736a88] pr-2">
                CORE STACK:
              </span>
              {industries[selectedIndustry].stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-white text-[#180838] font-mono text-xs font-bold border border-[#180838]/15 shadow-2xs"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Architectural Engineering Standards Grid ("HOW WE WORK") */}
        <div className="mt-16 pt-12 border-t border-[#180838]/15">
          <div className="text-xs font-mono uppercase tracking-widest text-[#736a88] font-bold mb-8 flex items-center justify-between">
            <span>HOW WE WORK / ENGINEERING STANDARDS</span>
            <span>04 FOUNDATIONAL PILLARS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((prac) => (
              <div
                key={prac.num}
                className="p-6 bg-white/70 border border-[#180838]/10 rounded-none space-y-3 hover:border-[#7028e0]/40 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#180838]/10">
                  <span className="text-xl font-display font-black text-[#7028e0]">
                    {prac.num}
                  </span>
                  <CheckCircle2 size={16} className="text-[#7028e0]" />
                </div>
                <h4 className="font-display font-bold text-base text-[#180838]">
                  {prac.title}
                </h4>
                <p className="text-xs text-[#524962] leading-relaxed">
                  {prac.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
