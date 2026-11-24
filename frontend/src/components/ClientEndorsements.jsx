import { ArrowUpRight, CheckCircle2, Quote, Star, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function ClientEndorsements() {
  const testimonials = [
    {
      sector: 'HEALTHCARE & CLINICAL WORKFLOW',
      metric: '+340%',
      metricLabel: 'Booking Velocity & Patient Retention',
      quote:
        'XarKode didn’t just build us software; they completely overhauled how our clinic operates. Patient no-shows dropped by 65% in the first 30 days thanks to the automated WhatsApp reminders and real-time scheduling dashboard.',
      clientName: 'Dr. Farooq Malik',
      clientRole: 'Medical Director & Founder',
      company: 'Apex Health Specialists',
      timeline: 'Custom Web System & WhatsApp Automation',
      verified: true,
    },
    {
      sector: 'B2B SAAS & CLOUD ARCHITECTURE',
      metric: '3 Weeks',
      metricLabel: 'Ahead of MVP Launch Schedule',
      quote:
        'Adeel is an exceptional digital solutions architect. Communicating directly with the person engineering the foundation beneath our platform eliminated months of agency bureaucracy. Our multi-tenant SaaS architecture scales effortlessly.',
      clientName: 'Hamza Tariq',
      clientRole: 'Chief Executive Officer',
      company: 'PropScale Cloud Technologies',
      timeline: 'Multi-Tenant SaaS & API Infrastructure',
      verified: true,
    },
    {
      sector: 'AI AUTOMATION & CRM INTEGRATION',
      metric: '14+ hrs',
      metricLabel: 'Saved Per Week on Inbound Lead Triage',
      quote:
        'The autonomous WhatsApp AI agent XarKode engineered handles over 400 inbound customer inquiries every night with zero human intervention, qualifying prospects and booking calendar calls with unprecedented accuracy.',
      clientName: 'Zubair Ahmed',
      clientRole: 'Head of Growth & Operations',
      company: 'Lumina Digital Retail',
      timeline: 'Autonomous WhatsApp AI Agent & CRM Workflow',
      verified: true,
    },
  ];

  const trustMetrics = [
    { label: 'DELIVERY RELIABILITY', value: '100%', detail: 'Milestones met on agreed scope' },
    { label: 'CLIENT SATISFACTION', value: '4.95 / 5.0', detail: 'Across all production builds' },
    { label: 'FOUNDER DIRECT ACCESS', value: '100%', detail: 'Zero junior account handlers' },
    { label: 'AVERAGE RESPONSE TIME', value: '< 2 Hours', detail: 'Rapid communication turnaround' },
  ];

  return (
    <section 
      id="endorsements" 
      className="bg-[#08070e] text-white py-24 border-b border-white/10 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 60% 50% at 20% 40%, rgba(112, 40, 224, 0.18) 0%, transparent 70%),
          radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)
        `,
      }}
    >
      {/* Ambient background blur spots */}
      <div 
        className="pointer-events-none absolute left-[-10%] top-[20%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-40"
        style={{ background: 'radial-gradient(circle, #7028e0 0%, #3b0764 70%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4 text-xs font-mono tracking-widest text-white/50 uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#a78bfa]">09</span>
            <span>CLIENT ENDORSEMENTS</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>MEASURED RESULTS • VERIFIED CLIENT REVIEWS</span>
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-14 pb-16 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-semibold text-[34px] sm:text-5xl lg:text-[5.5rem] leading-[38px] sm:leading-[0.92] tracking-[-1.5px] sm:tracking-[-3.5px] uppercase text-white break-words">
              PROOF IN<br />
              <span className="text-[#a78bfa]">PRODUCTION.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-md">
              We measure our work by the operational drag we eliminate and the revenue velocity we unlock. Hear directly from founders and operators who trusted XarKode to engineer their digital foundation.
            </p>
          </div>
        </div>

        {/* 3-Column Endorsements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {testimonials.map((item, index) => (
            <div
              key={item.clientName}
              className="bg-[#0f0c1c]/90 border border-white/10 rounded-none p-5 sm:p-8 flex flex-col justify-between backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-[#a78bfa]/50 hover:translate-y-[-2px] group"
            >
              <div className="space-y-6">
                {/* Card Top: Sector & Verified Badge */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-wider pb-4 border-b border-white/10 uppercase">
                  <span className="text-[#a78bfa] font-bold">{item.sector}</span>
                  <div className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck size={13} />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Primary Measured Metric Callout */}
                <div className="bg-[#18112c]/80 border border-white/[0.08] p-4 rounded-none space-y-1">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight flex items-baseline gap-2">
                    <span>{item.metric}</span>
                    <TrendingUp size={18} className="text-[#a78bfa]" />
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                    {item.metricLabel}
                  </div>
                </div>

                {/* Direct Quote */}
                <p className="text-sm text-white/80 leading-relaxed font-normal italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Profile / Attribution */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-1.5">
                <div className="font-display font-bold text-base text-white">
                  {item.clientName}
                </div>
                <div className="text-xs text-[#a78bfa] font-medium">
                  {item.clientRole} • {item.company}
                </div>
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider pt-1">
                  Scope: {item.timeline}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics Bar */}
        <div className="border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustMetrics.map((tm) => (
              <div key={tm.label} className="space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-[#a78bfa] uppercase">
                  {tm.label}
                </div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {tm.value}
                </div>
                <div className="text-xs text-white/50">
                  {tm.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-white/50">
          <div>READ CASE STUDIES OR DISCUSS YOUR SYSTEM REQUIREMENTS DIRECTLY.</div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#a78bfa] transition-colors"
          >
            <span>Book a Discovery Session with Adeel ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
