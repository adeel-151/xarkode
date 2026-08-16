import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Reveal, Badge } from '../components/ui.jsx';
import { blogPosts } from '../data/content.js';

export default function Blog() {
  return (
    <div className="min-h-screen bg-ink-900 pt-32 pb-24">
      <Container>
        <Reveal className="mb-16 text-center">
          <Badge className="!bg-brand-teal/10 !border-brand-teal/30 !text-brand-teal font-bold mb-4">Insights & Engineering</Badge>
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-6xl">
            Our <span className="text-gradient">Thinking</span>
          </h1>
          <p className="mt-4 text-muted-2 text-lg">Strategies and deep dives on digital growth and AI systems.</p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link to={`/blog/${post.slug}`} className="group block h-full overflow-hidden rounded-3xl border border-white/5 bg-ink-800 transition-all hover:border-brand-teal/30 hover:bg-ink-800/80">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-ink-900/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-2">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <h2 className="mb-3 font-display text-2xl font-bold text-white transition-colors group-hover:text-brand-teal line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="mb-6 text-sm text-white/70 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-brand-teal">
                    Read Article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
