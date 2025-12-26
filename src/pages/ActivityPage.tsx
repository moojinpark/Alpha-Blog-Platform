import React from 'react';
import { Layout } from '../components/layout/Layout';
import { BlogCard } from '../components/blog/BlogCard';
import { Heart, MessageSquare, History } from 'lucide-react';
// Mock Data (Reusing structure from HomePage)
const LIKED_POSTS = [{
  id: '3',
  title: 'Mental Health Strategies for Finals Week',
  excerpt: 'Practical tips and psychological techniques to manage stress and maintain peak performance during exam season.',
  coverImage: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=600&h=400',
  category: 'Wellness',
  author: {
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
  },
  publishedAt: 'Oct 20, 2023',
  readTime: '6 min read',
  likes: 456,
  comments: 89
}, {
  id: '5',
  title: 'Understanding Quantum Computing Basics',
  excerpt: 'A beginner-friendly guide to qubits, superposition, and entanglement for computer science students.',
  coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600&h=400',
  category: 'Science',
  author: {
    name: 'Alex Thompson',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100'
  },
  publishedAt: 'Oct 15, 2023',
  readTime: '10 min read',
  likes: 189,
  comments: 32
}];
const COMMENTED_POSTS = [{
  id: '1',
  title: 'The Future of Artificial Intelligence in Academic Research',
  excerpt: 'Exploring how large language models are transforming the way students and researchers approach literature review and data analysis.',
  coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200&h=600',
  category: 'Technology',
  author: {
    name: 'Dr. Elena Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100'
  },
  publishedAt: 'Oct 24, 2023',
  readTime: '8 min read',
  likes: 342,
  comments: 56
}, {
  id: '4',
  title: 'The Evolution of Modern Economics',
  excerpt: 'Analyzing the shift from traditional Keynesian models to behavioral economics in undergraduate curriculum.',
  coverImage: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=600&h=400',
  category: 'Economics',
  author: {
    name: 'Michael Chang',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100'
  },
  publishedAt: 'Oct 18, 2023',
  readTime: '12 min read',
  likes: 210,
  comments: 45
}];
export function ActivityPage() {
  return <Layout>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-12">
        <div className="flex items-center space-x-3 mb-10">
          <div className="p-3 bg-blue-100 rounded-lg text-[#2563eb]">
            <History className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#1e293b]">My Activity</h1>
            <p className="text-[#64748b]">
              Track your interactions and engagement history
            </p>
          </div>
        </div>

        {/* Liked Posts Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-slate-200">
            <Heart className="w-5 h-5 text-[#f97316]" />
            <h2 className="text-2xl font-bold text-[#1e293b]">Liked Posts</h2>
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full ml-2">
              {LIKED_POSTS.length}
            </span>
          </div>

          {LIKED_POSTS.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LIKED_POSTS.map(post => <BlogCard key={post.id} post={post} />)}
            </div> : <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center text-slate-500">
              <p>You haven't liked any posts yet.</p>
            </div>}
        </section>

        {/* Commented Posts Section */}
        <section>
          <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-slate-200">
            <MessageSquare className="w-5 h-5 text-[#8b5cf6]" />
            <h2 className="text-2xl font-bold text-[#1e293b]">
              Commented Posts
            </h2>
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full ml-2">
              {COMMENTED_POSTS.length}
            </span>
          </div>

          {COMMENTED_POSTS.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {COMMENTED_POSTS.map(post => <BlogCard key={post.id} post={post} />)}
            </div> : <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center text-slate-500">
              <p>You haven't commented on any posts yet.</p>
            </div>}
        </section>
      </div>
    </Layout>;
}