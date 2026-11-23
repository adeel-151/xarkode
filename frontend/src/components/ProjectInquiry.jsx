import { useState } from 'react';
import { Send, MessageCircle, CheckCircle2 } from 'lucide-react';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="bg-[#ded4fc] text-[#1a0845] py-24 border-b border-[#1a0845]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#1a0845]/15 gap-4 text-xs font-mono tracking-widest text-[#5a4488] uppercase">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#1a0845]">10</span>
            <span>START A PROJECT</span>
          </div>
          <div>TELL US WHAT YOU ARE TRYING TO IMPROVE</div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 pt-16 items-start">
          {/* Left Column: Heading & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-[5rem] leading-[0.92] tracking-tighter uppercase text-[#1a0845]">
              HAVE A<br />
              PROJECT<br />
              <span className="text-[#641ae6]">WORTH</span><br />
              BUILDING?
            </h2>

            <p className="text-sm sm:text-base text-[#463273] leading-relaxed max-w-md">
              Tell us what you are trying to improve. XarKode will help identify the right combination of strategy, design, development, and automation for your business.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#523c82]">
              <span className="w-2 h-2 rounded-full bg-[#7028e0]" />
              <span>SHARE YOUR REQUIREMENTS AND THE XARKODE TEAM WILL CONTACT YOU AS SOON AS POSSIBLE.</span>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/923424808876"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1a0845] hover:text-[#641ae6] transition-colors"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>Chat on WhatsApp ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean White Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-none p-6 sm:p-10 border border-[#1a0845]/15 shadow-[0_20px_50px_rgba(30,8,77,0.08)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-none bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-[#1a0845]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#463273] max-w-sm mx-auto">
                    Thank you. We will review your project details and reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-flex items-center gap-2 rounded-none bg-[#1a0845] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                  >
                    Submit Another Inquiry
                  </button>
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
                        placeholder="Your phone or WhatsApp number"
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
                      <option value="Web Development">Web Development</option>
                      <option value="Custom Business Systems">Custom Business Systems</option>
                      <option value="AI and Workflow Automation">AI and Workflow Automation</option>
                      <option value="Digital Growth & Identity">Digital Growth & Identity</option>
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
                      placeholder="Tell us what you are trying to improve."
                      className="w-full px-4 py-3 rounded-none bg-purple-50/50 border border-purple-200/80 text-sm text-[#1a0845] focus:outline-none focus:ring-2 focus:ring-[#7028e0] focus:bg-white transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-none bg-[#240d58] text-white font-display font-bold text-sm tracking-wide uppercase hover:bg-[#190840] transition-colors flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(36,13,88,0.25)]"
                    >
                      <Send size={15} />
                      <span>{loading ? 'Submitting...' : 'Start a Project'}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#634d8a] text-center pt-2">
                    Share your requirements and the XarKode team will contact you as soon as possible. Your details are kept private.
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
