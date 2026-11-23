export default function BrandManifesto() {
  return (
    <section className="bg-[#f5f4ef] text-[#180838] py-24 border-b border-[#180838]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#180838]/15 gap-4 text-xs font-mono tracking-widest text-[#645b77] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#180838]">02</span>
            <span>BRAND MANIFESTO</span>
          </div>
          <div>STRATEGY / DESIGN / ENGINEERING / AUTOMATION</div>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-16 items-start">
          {/* Giant Manifesto Headline */}
          <div className="lg:col-span-8">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] leading-[0.92] tracking-tighter uppercase text-[#180838]">
              XARKODE IS NOT<br />
              HERE TO<br />
              BUILD<br />
              ANOTHER<br />
              <span className="text-[#7028e0]">FORGETTABLE</span><br />
              WEBSITE.
            </h2>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2 space-y-8">
            <div className="text-right hidden lg:block text-xs font-mono uppercase tracking-widest text-[#645b77]">
              ATTENTION &nbsp;/&nbsp; TRUST &nbsp;/&nbsp; MOMENTUM
            </div>

            <div className="bg-white/60 p-6 sm:p-8 rounded-none border border-[#180838]/10 space-y-4 shadow-sm backdrop-blur-sm">
              <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#7028e0]">
                A DIGITAL STUDIO FOR BUSINESSES WITH SOMEWHERE TO GO.
              </div>
              <p className="text-sm sm:text-base text-[#473e58] font-normal leading-relaxed">
                We combine strategy, design, engineering, and automation to build digital systems that help businesses earn attention, establish trust, and operate better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
