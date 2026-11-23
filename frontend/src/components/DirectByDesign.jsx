import { ArrowUpRight } from 'lucide-react';

export default function DirectByDesign() {
  return (
    <section id="about" className="bg-[#f7f6f1] text-[#180838] py-24 border-b border-[#180838]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#180838]/15 gap-4 text-xs font-mono tracking-widest text-[#645b77] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#180838]">07</span>
            <span>ABOUT XARKODE</span>
          </div>
          <div>DIRECT BY DESIGN</div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-16 items-start">
          {/* Left Column: Huge Typography */}
          <div className="lg:col-span-6">
            <h2 className="font-display font-black text-6xl sm:text-7xl lg:text-[5.5rem] leading-[0.92] tracking-tighter uppercase text-[#180838]">
              DIRECT<br />
              BY<br />
              <span className="text-[#7028e0]">DESIGN.</span>
            </h2>
          </div>

          {/* Right Column: Founder & Architect Details */}
          <div className="lg:col-span-6 flex flex-col space-y-6 pt-2">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#7028e0] uppercase mb-2">
                FOUNDER & DIGITAL SOLUTIONS ARCHITECT
              </div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#180838] tracking-tight">
                Adeel Qaiser
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#4a405c] leading-relaxed">
              Adeel Qaiser leads XarKode&apos;s engineering, architecture, and digital-solutions work. Clients communicate directly with the founder responsible for understanding their business model, engineering the foundation beneath their digital growth, and overseeing execution.
            </p>

            <div className="border-l-2 border-[#7028e0] pl-4 py-1 text-sm font-medium text-[#180838]">
              Direct communication from planning through delivery.
            </div>

            <div className="pt-2 text-xs font-mono tracking-widest uppercase text-[#645b77]">
              WEB & APP &nbsp;/&nbsp; SAAS &nbsp;/&nbsp; AUTOMATION &nbsp;/&nbsp; GROWTH
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#7028e0] hover:text-[#521cb5] transition-colors"
              >
                <span>Start a conversation</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
