import { useState } from 'react';
import { Send, Loader2, Mail, MessageCircle } from 'lucide-react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { Container, Reveal, Badge, Button } from './ui.jsx';
import { submitContact } from '../lib/api.js';
import { contactSocials } from '../data/content.js';
import useUIStore from '../store/useUIStore.js';

const socialIcons = {
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane,
  mail: Mail,
};

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const pushToast = useUIStore((s) => s.pushToast);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setStatus('loading');
    try {
      await submitContact(form);
      pushToast({ type: 'success', message: "Thanks — we'll reach out within 24 hours." });
      setForm(initialForm);
    } catch (err) {
      pushToast({
        type: 'error',
        message: err?.response?.data?.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="bg-ink-900 py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Badge>Contact form</Badge>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Let&rsquo;s Build <span className="text-gradient">Something</span>
              <br />
              Together.
            </h2>
            <p className="mt-4 max-w-sm text-sm text-muted-2 sm:text-base">Fill in the form and we&rsquo;ll reach out within 24 hours.</p>

            {/* Social links */}
            <div className="mt-8 flex flex-col gap-3">
              {contactSocials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 transition-all hover:border-brand-teal/30 hover:bg-brand-teal/5"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors group-hover:bg-brand-teal/10"
                      style={{ background: 'rgba(46,230,197,0.08)' }}
                    >
                      <Icon size={16} className="text-brand-teal" />
                    </span>
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-3xl glass-card-strong p-6 sm:p-8">
              {/* Subtle glow blob inside the form */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30 blur-3xl"
                style={{ background: 'linear-gradient(135deg, #2ee6c5, #3b82f6)' }}
              />

              <div className="relative grid gap-4">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-muted-2">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jacob Williams"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted backdrop-blur transition-colors focus:border-brand-teal/50 focus:bg-white/[0.06] focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-muted-2">Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="youremail@site.com"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted backdrop-blur transition-colors focus:border-brand-teal/50 focus:bg-white/[0.06] focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-muted-2">Message</span>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Your message (optional)"
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-muted backdrop-blur transition-colors focus:border-brand-teal/50 focus:bg-white/[0.06] focus:outline-none"
                  />
                </label>
              </div>

              <p className="mt-4 text-xs text-muted">
                By submitting, you agree to our <span className="cursor-pointer underline hover:text-muted-2">Terms</span> and{' '}
                <span className="cursor-pointer underline hover:text-muted-2">Privacy Policy</span>.
              </p>

              <div className="mt-5">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue px-6 py-3 text-sm font-bold text-ink-900 shadow-[0_8px_24px_-8px_rgba(46,230,197,0.5)] transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={15} className="animate-spin" /> Sending
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-white">
                        <Send size={12} strokeWidth={2.5} />
                      </span>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
