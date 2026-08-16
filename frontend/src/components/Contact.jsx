import { useState } from 'react';
import { Send, Loader2, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { Container, Reveal, Badge } from './ui.jsx';
import { submitContact } from '../lib/api.js';
import { contactSocials } from '../data/content.js';
import useUIStore from '../store/useUIStore.js';
import { motion } from 'framer-motion';

const socialIcons = {
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane,
  mail: Mail,
};

const initialForm = { name: '', email: '', company: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);
  const pushToast = useUIStore((s) => s.pushToast);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setStatus('loading');
    try {
      await submitContact(form);
      pushToast({ type: 'success', message: "Transmission received. We'll deploy a response shortly." });
      setForm(initialForm);
    } catch (err) {
      pushToast({
        type: 'error',
        message: err?.response?.data?.message || 'Signal lost. Please try again.',
      });
    } finally {
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="bg-ink-900 py-24 sm:py-32 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Deep cinematic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10 max-w-6xl">
        
        {/* Top Header & Availability Indicator */}
        <Reveal className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-positive/30 bg-positive/10 backdrop-blur-md mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-positive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-positive"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-positive">Systems Online &middot; Accepting Projects</span>
          </div>

          <h2 className="font-display text-5xl font-extrabold text-white sm:text-7xl mb-6 tracking-tight">
            Initiate <span className="text-gradient">Sequence</span>
          </h2>
          <p className="text-lg text-muted-2 max-w-2xl">
            Establish a secure connection with our engineering and growth team. Describe your objective, and we will orchestrate the solution.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Comms & Info */}
          <Reveal delay={0.1} className="flex flex-col gap-6">
            
            {/* Location Card */}
            <div className="glass-card-strong rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-full bg-ink-800 border border-ink-600 flex items-center justify-center text-brand-teal mb-6">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global HQ</h3>
              <p className="text-muted-2">4521 Maple Industrial Blvd<br/>Tampa, FL 33619</p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              {contactSocials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card-strong rounded-2xl p-6 flex flex-col items-center text-center justify-center gap-3 transition-all duration-300 hover:border-brand-teal/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(46,230,197,0.2)] group"
                  >
                    <Icon size={24} className="text-muted-2 group-hover:text-brand-teal transition-colors" />
                    <span className="text-sm font-semibold text-white/90 group-hover:text-white">{social.label}</span>
                  </a>
                );
              })}
            </div>
            
          </Reveal>

          {/* Right Column: Command Center Form */}
          <Reveal delay={0.2}>
            <div className="glass-card-strong rounded-3xl p-8 sm:p-12 border-white/10 relative shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between mb-8 border-b border-ink-600 pb-6">
                <h3 className="text-2xl font-bold text-white">Transmission Form</h3>
                <span className="text-xs font-mono text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">SECURE_CHANNEL</span>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${form.name || focusedField === 'name' ? '-top-2.5 text-xs bg-ink-800 px-2 text-brand-teal font-bold' : 'top-4 text-sm text-muted-2'}`}>
                      Commander Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={update('name')}
                      className={`w-full bg-ink-900/50 rounded-xl px-4 py-4 text-white border transition-all duration-300 outline-none ${focusedField === 'name' ? 'border-brand-teal shadow-[0_0_15px_rgba(46,230,197,0.15)]' : 'border-ink-600 hover:border-ink-500'}`}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${form.email || focusedField === 'email' ? '-top-2.5 text-xs bg-ink-800 px-2 text-brand-teal font-bold' : 'top-4 text-sm text-muted-2'}`}>
                      Secure Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={update('email')}
                      className={`w-full bg-ink-900/50 rounded-xl px-4 py-4 text-white border transition-all duration-300 outline-none ${focusedField === 'email' ? 'border-brand-teal shadow-[0_0_15px_rgba(46,230,197,0.15)]' : 'border-ink-600 hover:border-ink-500'}`}
                    />
                  </div>
                </div>

                {/* Company Input */}
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${form.company || focusedField === 'company' ? '-top-2.5 text-xs bg-ink-800 px-2 text-brand-teal font-bold' : 'top-4 text-sm text-muted-2'}`}>
                    Organization / Fleet (Optional)
                  </label>
                  <input
                    value={form.company}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    onChange={update('company')}
                    className={`w-full bg-ink-900/50 rounded-xl px-4 py-4 text-white border transition-all duration-300 outline-none ${focusedField === 'company' ? 'border-brand-teal shadow-[0_0_15px_rgba(46,230,197,0.15)]' : 'border-ink-600 hover:border-ink-500'}`}
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${form.message || focusedField === 'message' ? '-top-2.5 text-xs bg-ink-800 px-2 text-brand-teal font-bold' : 'top-4 text-sm text-muted-2'}`}>
                    Mission Objective / Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    onChange={update('message')}
                    className={`w-full bg-ink-900/50 rounded-xl px-4 py-4 text-white border transition-all duration-300 outline-none resize-none ${focusedField === 'message' ? 'border-brand-teal shadow-[0_0_15px_rgba(46,230,197,0.15)]' : 'border-ink-600 hover:border-ink-500'}`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full mt-4 group relative overflow-hidden rounded-xl bg-ink-800 border border-brand-teal p-[1px] transition-all hover:shadow-[0_0_20px_rgba(46,230,197,0.3)] disabled:opacity-60 disabled:pointer-events-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 via-brand-blue/20 to-brand-teal/20 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-3 rounded-xl bg-ink-900 px-8 py-5 transition-colors group-hover:bg-ink-800/80">
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin text-brand-teal" /> 
                        <span className="font-bold text-white tracking-wider uppercase text-sm">Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span className="font-bold text-white tracking-wider uppercase text-sm">Initiate Protocol</span>
                        <Send size={16} className="text-brand-teal group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
