import { ArrowUpRight, Code, Cloud, Bot, Palette, TrendingUp } from 'lucide-react';

export default function SolutionsWithIntent() {
  const capabilities = [
    {
      num: '01',
      icon: <Code size={18} className="text-[#7028e0]" />,
      name: 'Web & App Development',
      tagline: 'High-performance, cinematic web & mobile experiences',
      covers:
        'Modern responsive web applications, iOS and Android mobile apps, e-commerce platforms, PWAs, and custom portals engineered for speed, conversion, and fluid interaction.',
      outcome: 'High conversion & engagement',
    },
    {
      num: '02',
      icon: <Cloud size={18} className="text-[#7028e0]" />,
      name: 'SaaS Development',
      tagline: 'End-to-end cloud platforms & architecture',
      covers:
        'Complete Software as a Service architecture, scalable multi-tenant databases, secure REST/GraphQL API integrations, subscription billing systems, and cloud deployment.',
      outcome: 'Enterprise-grade scalability',
    },
    {
      num: '03',
      icon: <Bot size={18} className="text-[#7028e0]" />,
      name: 'AI & Automation Systems',
      tagline: 'Smart workflows that eliminate manual work',
      covers:
        'Practical custom AI tools, autonomous agents, automated customer inquiry handling, instant WhatsApp/email triggers, CRM pipelines, and cross-platform data integration.',
      outcome: 'Hundreds of hours saved',
    },
    {
      num: '04',
      icon: <Palette size={18} className="text-[#7028e0]" />,
      name: 'Graphic & UI/UX Design',
      tagline: 'Premium visual identities that captivate and convert',
      covers:
        'Brand identity, cinematic UI/UX design systems, motion graphics, and interactive design that establish immediate digital credibility and premium visual authority.',
      outcome: 'Unrivaled brand authority',
    },
    {
      num: '05',
      icon: <TrendingUp size={18} className="text-[#7028e0]" />,
      name: 'Digital Growth',
      tagline: 'Predictable digital expansion & reach',
      covers:
        'Full-funnel digital strategy, conversion rate optimization, campaign architecture, and online experiences designed to help modern businesses scale consistently.',
      outcome: 'Predictable scaling & leads',
    },
  ];

  return (
    <section id="services" className="bg-[#f5f4ef] text-[#180838] py-24 border-b border-[#180838]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#180838]/15 gap-4 text-xs font-mono tracking-widest text-[#645b77] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#180838]">05</span>
            <span>SERVICES & CAPABILITIES</span>
          </div>
          <div>WHAT WE ENGINEER</div>
        </div>

        {/* Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-14 pb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-semibold text-[34px] sm:text-6xl lg:text-[5.5rem] leading-[38px] sm:leading-[0.92] tracking-[-1.5px] sm:tracking-[-3.5px] uppercase text-[#180838] break-words">
              SERVICES<br />
              <span className="text-[#7028e0]">WITH INTENT.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#524962] leading-relaxed max-w-md">
              We connect your digital presence, automate your workflows, and build the infrastructure that keeps your business scaling.
            </p>
          </div>
        </div>

        {/* Capabilities Table / Rows */}
        <div className="border-t border-[#180838]/15 divide-y divide-[#180838]/15">
          {/* Table Header (Desktop) */}
          <div className="hidden lg:grid grid-cols-12 gap-4 py-4 text-xs font-mono uppercase tracking-wider text-[#736a88]">
            <div className="col-span-1">NO.</div>
            <div className="col-span-3">CAPABILITY</div>
            <div className="col-span-5">WHAT IT COVERS</div>
            <div className="col-span-2">PRIMARY OUTCOME</div>
            <div className="col-span-1 text-right">ACTION</div>
          </div>

          {/* Table Rows */}
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 py-5 sm:py-7 items-start lg:items-center transition-colors hover:bg-black/[0.02] px-2 rounded-none"
            >
              {/* Number (Desktop) */}
              <div className="hidden lg:block lg:col-span-1 text-xs font-mono font-bold text-[#736a88]">
                {cap.num}
              </div>

              {/* Capability Name & Mini-tagline */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2.5">
                  <span className="lg:hidden text-xs font-mono font-bold text-[#7028e0]">{cap.num}</span>
                  <span className="p-1 rounded-none bg-purple-100 text-[#7028e0]">{cap.icon}</span>
                  <h4 className="font-display font-bold text-base sm:text-xl text-[#180838] group-hover:text-[#7028e0] transition-colors">
                    {cap.name}
                  </h4>
                </div>
                <div className="text-[11px] sm:text-xs text-[#736a88] mt-1 font-mono">
                  {cap.tagline}
                </div>
              </div>

              {/* What it Covers */}
              <div className="lg:col-span-5 text-xs sm:text-sm text-[#4d445e] leading-relaxed">
                {cap.covers}
              </div>

              {/* Primary Outcome */}
              <div className="lg:col-span-2 text-xs font-mono font-medium text-[#180838] bg-white/70 py-1.5 px-3 rounded-none border border-[#180838]/10 w-fit">
                {cap.outcome}
              </div>

              {/* Action Button */}
              <div className="lg:col-span-1 flex justify-start lg:justify-end pt-1 lg:pt-0">
                <a
                  href="#contact"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-none border border-[#180838]/15 flex items-center justify-center text-[#180838] group-hover:bg-[#7028e0] group-hover:text-white group-hover:border-[#7028e0] transition-all"
                  aria-label={`Inquire about ${cap.name}`}
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Discuss Project Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[#645b77]">
          <div>Not sure which direction fits?</div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-bold text-[#180838] hover:text-[#7028e0] transition-colors"
          >
            <span>Discuss your project</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
