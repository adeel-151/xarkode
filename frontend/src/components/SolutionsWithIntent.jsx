import { ArrowUpRight, Code, LayoutGrid, Bot, Activity } from 'lucide-react';

export default function SolutionsWithIntent() {
  const capabilities = [
    {
      num: '01',
      icon: <Code size={18} className="text-[#7028e0]" />,
      name: 'Web Development',
      tagline: 'Websites that turn visitors into qualified inquiries',
      covers:
        'Modern, responsive, conversion-focused websites designed to strengthen business credibility, improve customer experience, and generate qualified inquiries.',
      outcome: 'More qualified inquiries',
    },
    {
      num: '02',
      icon: <LayoutGrid size={18} className="text-[#7028e0]" />,
      name: 'Custom Business Systems',
      tagline: 'Dashboards that run your operations',
      covers:
        'designed around real operational workflows, reporting requirements, bookings, customers, payments, and administration.',
      outcome: 'Easier business management',
    },
    {
      num: '03',
      icon: <Bot size={18} className="text-[#7028e0]" />,
      name: 'AI and Workflow Automation',
      tagline: 'Automation that handles the repetitive work',
      covers:
        'Practical automation for inquiries, follow-ups, reporting, reminders, internal processes, and repetitive business tasks.',
      outcome: 'Reduced overhead & zero lost leads',
    },
    {
      num: '04',
      icon: <Activity size={18} className="text-[#7028e0]" />,
      name: 'Digital Growth',
      tagline: 'Digital identity and growth campaigns',
      covers:
        'Digital strategy, campaign direction, social media content, and online experiences designed to help businesses attract attention and grow consistently.',
      outcome: 'Stronger digital credibility',
    },
  ];

  return (
    <section id="solutions" className="bg-[#f5f4ef] text-[#180838] py-24 border-b border-[#180838]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#180838]/15 gap-4 text-xs font-mono tracking-widest text-[#645b77] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#180838]">05</span>
            <span>CAPABILITIES</span>
          </div>
          <div>WHAT WE BUILD</div>
        </div>

        {/* Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-14 pb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.92] tracking-tighter uppercase text-[#180838]">
              SOLUTIONS<br />
              <span className="text-[#7028e0]">WITH INTENT.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#524962] leading-relaxed max-w-md">
              Design and technology connected to a business outcome—not a collection of features looking for a reason to exist.
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
              className="group grid grid-cols-1 lg:grid-cols-12 gap-4 py-7 items-center transition-colors hover:bg-black/[0.02] px-2 rounded-none"
            >
              {/* Number */}
              <div className="lg:col-span-1 text-xs font-mono font-bold text-[#736a88]">
                {cap.num}
              </div>

              {/* Capability Name & Mini-tagline */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded bg-purple-100 text-[#7028e0]">{cap.icon}</span>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-[#180838] group-hover:text-[#7028e0] transition-colors">
                    {cap.name}
                  </h4>
                </div>
                <div className="text-xs text-[#736a88] mt-1 font-mono">
                  {cap.tagline}
                </div>
              </div>

              {/* What it Covers */}
              <div className="lg:col-span-5 text-sm text-[#4d445e] leading-relaxed">
                {cap.covers}
              </div>

              {/* Primary Outcome */}
              <div className="lg:col-span-2 text-xs font-mono font-medium text-[#180838] bg-white/70 py-1.5 px-3 rounded-none border border-[#180838]/10 w-fit">
                {cap.outcome}
              </div>

              {/* Action Button */}
              <div className="lg:col-span-1 flex justify-end">
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full border border-[#180838]/15 flex items-center justify-center text-[#180838] group-hover:bg-[#7028e0] group-hover:text-white group-hover:border-[#7028e0] transition-all"
                  aria-label={`Inquire about ${cap.name}`}
                >
                  <ArrowUpRight size={16} />
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
