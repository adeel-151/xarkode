import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Button, Reveal } from '../components/ui.jsx';

const steps = [
  { id: 'service', title: 'What do you need?' },
  { id: 'budget', title: 'What is your budget?' },
  { id: 'timeline', title: 'How fast do you need it?' },
  { id: 'details', title: 'Your Details' }
];

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: ''
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const updateForm = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const calculateEstimate = () => {
    let base = 0;
    if (formData.service === 'Web Development') base += 5000;
    if (formData.service === 'App Development') base += 15000;
    if (formData.service === 'AI Automation') base += 10000;
    return `$${(base).toLocaleString()}`;
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <Container className="max-w-3xl">
        <Reveal>
          <div className="mb-12 text-center">
            <h1 className="font-display text-4xl font-extrabold text-white">Project Estimator</h1>
            <p className="mt-4 text-muted-2">Let's calculate the foundation for your digital growth.</p>
          </div>

          <div className="mb-8 flex justify-between">
            {steps.map((step, i) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 ${i <= currentStep ? 'border-brand-teal bg-brand-teal/20 text-brand-teal' : 'border-ink-600 bg-ink-800 text-muted-2'}`}>
                  {i + 1}
                </div>
                <span className="mt-2 text-xs font-semibold text-muted-2 hidden sm:block">{step.title}</span>
              </div>
            ))}
          </div>

          <div className="glass-card-strong relative overflow-hidden rounded-3xl p-8 shadow-2xl">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step1" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }}>
                  <h2 className="mb-6 text-2xl font-bold text-white">Select a Core Service</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {['Web Development', 'App Development', 'AI Automation', 'SEO & Marketing'].map((s) => (
                      <button key={s} onClick={() => updateForm('service', s)} className={`rounded-xl border p-6 text-left transition-all ${formData.service === s ? 'border-brand-teal bg-brand-teal/10' : 'border-ink-600 hover:border-ink-500 hover:bg-ink-800/50'}`}>
                        <h3 className="font-bold text-white">{s}</h3>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step2" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }}>
                  <h2 className="mb-6 text-2xl font-bold text-white">Select Your Budget Range</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {['$1k - $5k', '$5k - $15k', '$15k - $50k', '$50k+'].map((b) => (
                      <button key={b} onClick={() => updateForm('budget', b)} className={`rounded-xl border p-6 text-left transition-all ${formData.budget === b ? 'border-brand-teal bg-brand-teal/10' : 'border-ink-600 hover:border-ink-500 hover:bg-ink-800/50'}`}>
                        <h3 className="font-bold text-white">{b}</h3>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step3" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }}>
                  <h2 className="mb-6 text-2xl font-bold text-white">Project Timeline</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {['ASAP (Rush)', '1-2 Months', '3-6 Months', 'No Rush'].map((t) => (
                      <button key={t} onClick={() => updateForm('timeline', t)} className={`rounded-xl border p-6 text-left transition-all ${formData.timeline === t ? 'border-brand-teal bg-brand-teal/10' : 'border-ink-600 hover:border-ink-500 hover:bg-ink-800/50'}`}>
                        <h3 className="font-bold text-white">{t}</h3>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step4" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }}>
                  <h2 className="mb-6 text-2xl font-bold text-white">Final Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-muted-2">Name</label>
                      <input type="text" value={formData.name} onChange={(e) => updateForm('name', e.target.value)} className="w-full rounded-lg border border-ink-600 bg-ink-900 p-3 text-white focus:border-brand-teal focus:outline-none" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-muted-2">Email</label>
                      <input type="email" value={formData.email} onChange={(e) => updateForm('email', e.target.value)} className="w-full rounded-lg border border-ink-600 bg-ink-900 p-3 text-white focus:border-brand-teal focus:outline-none" />
                    </div>
                  </div>
                  
                  {formData.service && (
                    <div className="mt-8 rounded-xl border border-brand-teal/30 bg-brand-teal/5 p-6 text-center">
                      <p className="text-sm text-muted-2">Estimated Starting Price</p>
                      <h3 className="mt-2 text-4xl font-extrabold text-brand-teal">{calculateEstimate()}</h3>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex justify-between border-t border-ink-600 pt-6">
              <Button variant="dark" onClick={prevStep} disabled={currentStep === 0} icon={false}>Back</Button>
              {currentStep < steps.length - 1 ? (
                <Button onClick={nextStep} icon={false}>Continue</Button>
              ) : (
                <Button>Submit Request</Button>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
