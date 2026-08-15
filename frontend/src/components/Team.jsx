import { Container, Reveal } from './ui.jsx';
import { teamMembers } from '../data/content.js';

export default function Team() {
  return (
    <section className="bg-ink-900 py-24 sm:py-28">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-2 sm:text-base">
            The experts behind our digital growth, AI systems, and smart business solutions.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="group rounded-3xl glass-card-strong overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_16px_48px_-16px_rgba(46,230,197,0.15)]">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-extrabold text-white">{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mt-1">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-muted-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
