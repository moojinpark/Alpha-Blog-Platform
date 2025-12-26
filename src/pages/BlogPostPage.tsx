import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Avatar } from '../components/ui/Avatar';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { CommentSection } from '../components/blog/CommentSection';
import { Share2, Bookmark, Heart, MoreHorizontal } from 'lucide-react';
export function BlogPostPage() {
  const {
    id
  } = useParams();
  // Mock Data for a single post
  const post = {
    title: 'The Future of Artificial Intelligence in Academic Research',
    subtitle: 'Exploring how large language models are transforming the way students and researchers approach literature review and data analysis.',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200&h=600',
    category: 'Technology',
    author: {
      name: 'Dr. Elena Rodriguez',
      role: 'PhD Candidate, Computer Science',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100'
    },
    publishedAt: 'Oct 24, 2023',
    readTime: '8 min read',
    content: `
      <p>The landscape of academic research is undergoing a seismic shift. With the advent of advanced Large Language Models (LLMs), the traditional methodologies of literature review, data synthesis, and even hypothesis generation are being reimagined.</p>
      
      <h2>The New Research Assistant</h2>
      <p>Imagine having a research assistant that has read every paper in your field, never sleeps, and can instantly synthesize connections between seemingly unrelated concepts. This is the promise of AI in academia. However, it comes with significant caveats regarding accuracy and hallucination.</p>
      
      <p>For students entering the field today, proficiency in AI tools is becoming as fundamental as statistical literacy. It's not about replacing human intellect, but augmenting it to reach new frontiers of discovery faster.</p>
      
      <blockquote>"AI won't replace researchers, but researchers who use AI will replace those who don't."</blockquote>
      
      <h2>Ethical Considerations</h2>
      <p>As we embrace these tools, we must also grapple with the ethical implications. Issues of plagiarism, authorship attribution, and the potential for bias in training data are critical conversations happening in university ethics boards across the globe.</p>
      
      <h3>Key Challenges:</h3>
      <ul>
        <li>Verifying AI-generated citations</li>
        <li>Maintaining critical thinking skills</li>
        <li>Data privacy and intellectual property</li>
      </ul>
      
      <p>The future belongs to those who can effectively collaborate with these digital intelligences while maintaining the rigorous standards of the scientific method.</p>
    `
  };
  return <Layout>
      <article className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <div className="mb-4">
            <Tag label={post.category} variant="category" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1e293b] mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-[#64748b] mb-8 leading-relaxed">
            {post.subtitle}
          </p>

          <div className="flex items-center justify-between border-y border-[#e2e8f0] py-6">
            <div className="flex items-center space-x-4">
              <Avatar src={post.author.avatar} size="lg" />
              <div>
                <div className="font-bold text-[#1e293b]">
                  {post.author.name}
                </div>
                <div className="text-sm text-[#64748b]">{post.author.role}</div>
              </div>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-[#1e293b] font-medium">
                {post.publishedAt}
              </div>
              <div className="text-sm text-[#64748b]">{post.readTime}</div>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-8 sticky top-20 bg-white/90 backdrop-blur p-2 rounded-lg z-10 border border-[#e2e8f0] shadow-sm">
          <div className="flex space-x-2">
            <Button variant="ghost" className="text-[#64748b] hover:text-[#ef4444]" leftIcon={<Heart className="w-5 h-5" />}>
              342
            </Button>
            <Button variant="ghost" className="text-[#64748b] hover:text-[#2563eb]" leftIcon={<Share2 className="w-5 h-5" />}>
              Share
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" className="text-[#64748b]" leftIcon={<Bookmark className="w-5 h-5" />}>
              Save
            </Button>
            <Button variant="ghost" className="text-[#64748b]">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img src={post.coverImage} alt={post.title} className="w-full h-auto object-cover" />
          <div className="bg-[#f8fafc] p-3 text-center text-sm text-[#64748b] italic">
            Photo by Unsplash
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none font-serif text-[#334155] leading-loose
            prose-headings:font-sans prose-headings:font-bold prose-headings:text-[#1e293b]
            prose-a:text-[#2563eb] prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-4 prose-blockquote:border-[#8b5cf6] prose-blockquote:bg-[#f8fafc] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
            prose-img:rounded-xl" dangerouslySetInnerHTML={{
        __html: post.content
      }} />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
          <div className="flex flex-wrap gap-2 mb-8">
            {['Artificial Intelligence', 'Research', 'Education', 'Future'].map(tag => <Tag key={tag} label={tag} variant="generic" />)}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="bg-[#f8fafc] rounded-xl p-8 mb-12 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
          <Avatar src={post.author.avatar} size="xl" />
          <div>
            <h3 className="text-xl font-bold text-[#1e293b] mb-2">
              About {post.author.name}
            </h3>
            <p className="text-[#64748b] mb-4">
              PhD Candidate specializing in Human-Computer Interaction.
              Passionate about making technology accessible and ethical. Editor
              at the University Tech Journal.
            </p>
            <Button variant="outline" size="sm">
              Follow Author
            </Button>
          </div>
        </div>

        {/* Comments */}
        <CommentSection />
      </article>
    </Layout>;
}