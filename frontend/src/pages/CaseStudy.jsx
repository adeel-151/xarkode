import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { portfolio } from '../data/content.js';
import { Container, Reveal, Badge } from '../components/ui.jsx';

export default function CaseStudy() {
  const { projectId } = useParams();
  const project = portfolio.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-32 pb-24">
        <h1 className="text-3xl font-bold text-white">Project not found</h1>
        <Link to="/" className="mt-4 text-brand-teal hover:underline">Return home</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-ink-900 pt-24 pb-24">
      {/* Hero Header */}
      <header className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.client} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
        </div>
        <Container className="relative z-10 flex h-full flex-col justify-end pb-16">
          <Link to="/portfolio" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-2 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to all work
          </Link>
          <Reveal>
            <Badge className="!bg-brand-teal/10 !border-brand-teal/30 !text-brand-teal font-bold mb-4">{project.date}</Badge>
            <h1 className="font-display text-5xl font-extrabold text-white sm:text-7xl lg:text-[5rem] tracking-tight mb-6">
              {project.client}
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed font-medium">
              {project.description}
            </p>
          </Reveal>
        </Container>
      </header>

      <Container className="mt-16">
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-16">
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-bold text-white mb-6">The Challenge</h2>
              <div className="prose prose-invert prose-lg max-w-none text-muted-2">
                <p>{project.challenge || 'No challenge description provided for this case study yet.'}</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="font-display text-3xl font-bold text-white mb-6">Our Solution</h2>
              <div className="prose prose-invert prose-lg max-w-none text-muted-2">
                <p>{project.solution || 'No solution description provided for this case study yet.'}</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass-card-strong p-8 rounded-3xl border border-white/5">
                <h3 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle2 className="text-brand-teal" size={28} />
                  Tech Stack Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {(project.techStack || ['React', 'Node.js', 'Tailwind']).map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-ink-600 bg-ink-800 text-sm font-medium text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar Metrics */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <Reveal delay={0.4}>
                <h3 className="font-display text-xl font-bold text-white mb-6">The Impact</h3>
                
                <div className="space-y-4">
                  {/* Hero Metric */}
                  <div className="glass-card-strong p-6 rounded-2xl border border-brand-teal/30 bg-brand-teal/5">
                    <span className="block text-4xl font-extrabold text-brand-teal mb-2">{project.statValue}</span>
                    <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">{project.statLabel}</span>
                  </div>

                  {/* Secondary Metrics */}
                  {(project.results || []).map((result, idx) => (
                    <div key={idx} className="glass-card p-6 rounded-2xl border border-ink-600 bg-ink-800/50">
                      <span className="block text-2xl font-bold text-white mb-1">{result.value}</span>
                      <span className="text-xs font-semibold text-muted-2 uppercase tracking-widest">{result.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
