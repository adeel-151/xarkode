import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import { blogPosts } from '../data/content.js';
import { Container, Reveal, Badge } from '../components/ui.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-32 pb-24 bg-ink-900">
        <h1 className="text-3xl font-bold text-white">Post not found</h1>
        <Link to="/blog" className="mt-4 text-brand-teal hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-ink-900 pt-32 pb-24">
      <Container className="max-w-3xl">
        <Reveal>
          <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-2 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to all posts
          </Link>
          
          <Badge className="!bg-brand-teal/10 !border-brand-teal/30 !text-brand-teal font-bold mb-6">
            {post.category}
          </Badge>
          
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 border-y border-white/5 py-4 mb-12">
            <div className="flex items-center gap-2 text-sm font-medium text-white/70">
              <User size={16} className="text-brand-teal" />
              {post.author}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/70">
              <Calendar size={16} className="text-brand-teal" />
              {post.date}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="w-full h-[400px] sm:h-[500px] overflow-hidden rounded-3xl mb-12 border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-brand-teal">
            <p className="text-xl leading-relaxed text-white/90 font-medium mb-8">
              {post.excerpt}
            </p>
            <div className="text-muted-2 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </Reveal>
      </Container>
    </article>
  );
}
