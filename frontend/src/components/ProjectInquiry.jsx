import { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ProjectInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    email: '',
    businessName: '',
    budget: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildWhatsappUrl = (data = formData) => {
    const text = [
      `*New Project Inquiry — XarKode Website*`,
      `---------------------------------`,
      `👤 *Name*: ${data.name || 'Not provided'}`,
      `📱 *Phone / WhatsApp*: ${data.phone || 'Not provided'}`,
      `🛠️ *Requested Service*: ${data.service || 'Not specified'}`,
      data.businessName ? `🏢 *Business*: ${data.businessName}` : null,
      data.email ? `📧 *Email*: ${data.email}` : null,
      data.budget ? `💰 *Budget*: ${data.budget}` : null,
      data.details ? `📝 *Project Details*:\n${data.details}` : null,
      `---------------------------------`,
      `_Sent from xarkode.com contact form_`,
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/923015355509?text=${encodeURIComponent(text)}`;
  };

  const handleDirectWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service) {
      alert('Please fill in your Name, Phone/WhatsApp number, and select a Service.');
      return;
    }
    const url = buildWhatsappUrl();
    window.open(url, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const waUrl = buildWhatsappUrl();
    setLastWhatsappUrl(waUrl);

    // Auto open WhatsApp and show confirmation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="bg-[#ded4fc] text-[#1a0845] py-24 border-b border-[#1a0845]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#1a0845]/15 gap-4 text-xs font-mono tracking-widest text-[#5a4488] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#1a0845]">11</span>
            <span>START A PROJECT</span>
          </div>
          <div>DIRECT ROUTING TO ADEEL QAISER • WHATSAPP +92 301 5355509</div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 pt-16 items-start">
          {/* Left Column: Heading & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-display font-semibold text-5xl sm:text-6xl lg:text-[5rem] leading-[0.92] tracking-[-3.5px] uppercase text-[#1a0845]">
              HAVE A<br />
              PROJECT<br />
              <span className="text-[#641ae6]">WORTH</span><br />
              BUILDING?
            </h2>

            <p className="text-sm sm:text-base text-[#463273] leading-relaxed max-w-md">
              Tell us what you are trying to improve. Your inquiry is routed directly to founder Adeel Qaiser on WhatsApp and email for immediate response.
            </p>

            <div className="bg-white/60 p-5 rounded-none border border-[#1a0845]/15 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1a0845] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>DIRECT LINE TO FOUNDER</span>
              </div>
              <p className="text-xs text-[#523c82] leading-relaxed">
                Skip agency bureaucracy. Speak directly with the digital architect who will engineer and oversee your solution.
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/923015355509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1a0845] hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle size={15} className="text-[#25D366]" />
                  <span>+92 301 5355509 (Adeel Qaiser) ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-none p-6 sm:p-10 border border-[#1a0845]/15 shadow-[0_20px_50px_rgba(30,8,77,0.08)]">
              {submitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 rounded-none bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-[#1a0845]">
                      Inquiry Ready & Routed!
                    </h3>
                    <p className="text-sm text-[#463273] max-w-sm mx-auto mt-2">
                      Thank you <span className="font-bold text-[#1a0845]">{formData.name}</span>. Your project summary has been generated and forwarded to Adeel Qaiser.
                    </p>
                  </div>

                  {/* Fallback WhatsApp Button */}
                  <div className="pt-2 max-w-xs mx-auto space-y-2">
                    <a
                      href={lastWhatsappUrl || `https://wa.me/923015355509`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-none bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                    >
                      <MessageCircle size={16} />
                      <span>Open WhatsApp Chat Directly ↗</span>
                    </a>
                    <p className="text-[11px] font-mono text-[#634d8a]">
                      If WhatsApp didn't launch automatically, tap the button above.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1a0845]/10">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          service: '',
                          email: '',
                          businessName: '',
                          budget: '',
                          details: '',
                        });
                      }}
                      className="inline-flex items-center gap-2 rounded-none border border-[#1a0845]/20 bg-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#1a0845] hover:bg-neutral-100"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-bold text-[#1a0845] mb-1.5">
                        NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-none bg-purple-50/50 border border-purple-200/80 text-sm text-[#1a0845] focus:outline-none focus:ring-2 focus:ring-[#7028e0] focus:bg-white transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-bold text-[#1a0845] mb-1.5">
                        PHONE OR WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 03015355509"
                        className="w-full px-4 py-3 rounded-none bg-purple-50/50 border border-purple-200/80 text-sm text-[#1a0845] focus:outline-none focus:ring-2 focus:ring-[#7028e0] focus:bg-white transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: What do you need? */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider font-bold text-[#1a0845] mb-1.5">
                      WHAT DO YOU NEED? *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-none bg-purple-50/50 border border-purple-200/80 text-sm text-[#1a0845] focus:outline-none focus:ring-2 focus:ring-[#7028e0] focus:bg-white transition-all"
                    >
                      <option value="">Choose a service</option>
                      <option value="Web & App Development">Web & App Development</option>
                      <option value="SaaS Development & Cloud Architecture">SaaS Development & Cloud Architecture</option>
                      <option value="AI & Workflow Automations">AI & Workflow Automations</option>
                      <option value="Graphic & UI/UX Design">Graphic & UI/UX Design</option>
                      <option value="Digital Growth & Strategy">Digital Growth & Strategy</option>
                      <option value="Complete Digital Ecosystem">Complete Digital Ecosystem</option>
                    </select>
                  </div>

                  {/* Row 3: Email & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-bold text-[#1a0845] mb-1.5">
                        EMAIL (OPTIONAL)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-none bg-purple-50/50 border border-purple-200/80 text-sm text-[#1a0845] focus:outline-none focus:ring-2 focus:ring-[#7028e0] focus:bg-white transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-bold text-[#1a0845] mb-1.5">
                        BUSINESS NAME (OPTIONAL)
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your company or brand"
                        className="w-full px-4 py-3 rounded-none bg-purple-50/50 border border-purple-200/80 text-sm text-[#1a0845] focus:outline-none focus:ring-2 focus:ring-[#7028e0] focus:bg-white transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Row 4: Approximate Budget */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider font-bold text-[#1a0845] mb-1.5">
                      APPROXIMATE BUDGET (OPTIONAL)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-none bg-purple-50/50 border border-purple-200/80 text-sm text-[#1a0845] focus:outline-none focus:ring-2 focus:ring-[#7028e0] focus:bg-white transition-all"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>

                  {/* Row 5: Project Details */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider font-bold text-[#1a0845] mb-1.5">
                      PROJECT DETAILS (OPTIONAL)
                    </label>
                    <textarea
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell us what you are trying to improve or build."
                      className="w-full px-4 py-3 rounded-none bg-purple-50/50 border border-purple-200/80 text-sm text-[#1a0845] focus:outline-none focus:ring-2 focus:ring-[#7028e0] focus:bg-white transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Action Buttons: Dual WhatsApp & Submit */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="w-full py-4 rounded-none bg-[#25D366] hover:bg-[#20ba59] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <MessageCircle size={16} />
                      <span>Send to WhatsApp ↗</span>
                    </button>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-none bg-[#240d58] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#190840] transition-all flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(36,13,88,0.25)] cursor-pointer"
                    >
                      <Send size={15} />
                      <span>{loading ? 'Routing...' : 'Start a Project ↗'}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#634d8a] text-center pt-2">
                    Inquiries are sent directly to founder Adeel Qaiser (+92 301 5355509). Your data is private.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
