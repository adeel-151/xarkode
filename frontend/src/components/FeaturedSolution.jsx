import { ArrowUpRight, Globe, Cloud, Bot, MessageSquare, CreditCard, BarChart3, ShieldCheck } from 'lucide-react';

export default function FeaturedSolution() {
  const operations = [
    { icon: <Globe size={16} />, title: 'High-Performance Web & Mobile Applications' },
    { icon: <Cloud size={16} />, title: 'Multi-Tenant SaaS Cloud Database & APIs' },
    { icon: <Bot size={16} />, title: 'Autonomous AI Workflow Agents (24/7)' },
    { icon: <MessageSquare size={16} />, title: 'WhatsApp & Omnichannel CRM Notification Engine' },
    { icon: <CreditCard size={16} />, title: 'Automated Billing & Secure Payment Gateways' },
    { icon: <BarChart3 size={16} />, title: 'Real-Time Telemetry & Conversion Analytics' },
    { icon: <ShieldCheck size={16} />, title: 'Enterprise-Grade Security & Automated Backups' },
  ];

  return (
    <section className="bg-[#160a33] text-white py-24 border-b border-purple-500/20 relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div 
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-35"
        style={{
          background: 'radial-gradient(circle, #7028e0 0%, #3b0764 50%, transparent 80%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4 text-xs font-mono tracking-widest text-purple-300 uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-white">06</span>
            <span>FEATURED ECOSYSTEM</span>
          </div>
          <div>UNIFIED DIGITAL INFRASTRUCTURE</div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-16 items-center">
          {/* Left Column: Heading & Explanation */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>DIGITAL INFRASTRUCTURE</span>
            </div>

            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-[4.8rem] leading-[0.92] tracking-tighter uppercase text-white">
              DIGITAL<br />
              SYSTEMS<br />
              <span className="text-[#a78bfa]">BUILT TO</span><br />
              SCALE.
            </h2>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed">
              We engineer complete digital ecosystems. From client-facing web and mobile applications to backend multi-tenant SaaS platforms and autonomous AI agents that eliminate manual drag.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-neutral-200 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.25)]"
              >
                <span>Explore the Digital Ecosystem</span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Right Column: System Architecture Diagram Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e0724]/90 border border-purple-500/30 rounded-none p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              {/* Architecture Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs font-mono uppercase tracking-wider text-purple-300">
                <span>XARKODE / ECOSYSTEM ARCHITECTURE</span>
                <span>CONNECTED OPERATIONS</span>
              </div>

              {/* Central Hub Node */}
              <div className="my-8 flex justify-center">
                <div className="bg-[#241052] border border-purple-400/40 rounded-none px-6 py-5 text-center shadow-[0_10px_30px_rgba(112,40,224,0.3)] max-w-sm w-full">
                  <div className="w-8 h-8 rounded-none bg-white text-[#160a33] font-bold font-display flex items-center justify-center mx-auto mb-2 text-sm shadow">
                    X
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">XarKode Digital Engine</h4>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-purple-300 mt-1">
                    UNIFIED DIGITAL OPERATIONS
                  </div>
                </div>
              </div>

              {/* Vertical Branch Connection Line */}
              <div className="flex justify-center -mt-4 mb-4">
                <div className="w-[1px] h-6 bg-gradient-to-b from-purple-400 to-white/20" />
              </div>

              {/* Operations Pillars List */}
              <div className="space-y-2.5">
                {operations.map((op, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3.5 p-3 rounded-none bg-white/[0.03] border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.06] transition-all text-xs sm:text-sm text-white/90"
                  >
                    <span className="text-purple-400">{op.icon}</span>
                    <span className="font-medium tracking-wide">{op.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
