export default function Marquee() {
  const itemsTop = [
    'Web & App Development',
    'SaaS Development',
    'AI & Automations',
    'Graphic & UI/UX Design',
    'Digital Growth',
    'Cloud Architecture',
  ];

  const itemsBottom = [
    'Your Partner in the Digital Sphere',
    'High-Performance Web Experiences',
    'Scalable SaaS Systems',
    'Smart AI Workflows',
    'Visual Identities that Convert',
    'The Foundation Beneath Your Growth',
  ];

  return (
    <div className="w-full overflow-hidden select-none">
      {/* Top Track: White Background, Dark Purple Text */}
      <div className="bg-white py-2.5 sm:py-3.5 border-y border-black/10 overflow-hidden flex">
        <div className="flex animate-[marquee-scroll_25s_linear_infinite] whitespace-nowrap min-w-full shrink-0 items-center justify-around">
          {itemsTop.concat(itemsTop).map((item, idx) => (
            <div key={idx} className="flex items-center mx-3 sm:mx-6">
              <span className="font-display font-bold text-sm sm:text-xl tracking-tight text-[#3b0764] uppercase">
                {item}
              </span>
              <span className="text-[#7c3aed] text-base sm:text-2xl mx-3 sm:mx-6 font-bold">•</span>
            </div>
          ))}
        </div>
        <div className="flex animate-[marquee-scroll_25s_linear_infinite] whitespace-nowrap min-w-full shrink-0 items-center justify-around" aria-hidden="true">
          {itemsTop.concat(itemsTop).map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center mx-3 sm:mx-6">
              <span className="font-display font-bold text-sm sm:text-xl tracking-tight text-[#3b0764] uppercase">
                {item}
              </span>
              <span className="text-[#7c3aed] text-base sm:text-2xl mx-3 sm:mx-6 font-bold">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Track: Deep Royal Purple Background, White Text */}
      <div className="bg-[#1f0a4f] py-2.5 sm:py-3.5 overflow-hidden flex">
        <div className="flex animate-[marquee-scroll_28s_linear_infinite_reverse] whitespace-nowrap min-w-full shrink-0 items-center justify-around">
          {itemsBottom.concat(itemsBottom).map((item, idx) => (
            <div key={idx} className="flex items-center mx-3 sm:mx-6">
              <span className="font-display font-bold text-sm sm:text-xl tracking-tight text-white uppercase">
                {item}
              </span>
              <span className="text-[#a78bfa] text-base sm:text-2xl mx-3 sm:mx-6 font-bold">•</span>
            </div>
          ))}
        </div>
        <div className="flex animate-[marquee-scroll_28s_linear_infinite_reverse] whitespace-nowrap min-w-full shrink-0 items-center justify-around" aria-hidden="true">
          {itemsBottom.concat(itemsBottom).map((item, idx) => (
            <div key={`dup2-${idx}`} className="flex items-center mx-3 sm:mx-6">
              <span className="font-display font-bold text-sm sm:text-xl tracking-tight text-white uppercase">
                {item}
              </span>
              <span className="text-[#a78bfa] text-base sm:text-2xl mx-3 sm:mx-6 font-bold">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
