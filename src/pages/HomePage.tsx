import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { BlogCard, BlogPost } from '../components/blog/BlogCard';
import { Tag } from '../components/ui/Tag';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
// Mock Data
const FEATURED_POST: BlogPost = {
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
};
const RECENT_POSTS: BlogPost[] = [{
  id: '2',
  title: 'Sustainable Architecture: Building for Tomorrow',
  excerpt: 'A deep dive into eco-friendly materials and energy-efficient designs that are shaping modern campus buildings.',
  coverImage: 'https://images.unsplash.com/photo-1518005020951-ecc8e54333b0?auto=format&fit=crop&q=80&w=600&h=400',
  category: 'Architecture',
  author: {
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
  },
  publishedAt: 'Oct 22, 2023',
  readTime: '5 min read',
  likes: 128,
  comments: 23
}, {
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
}, {
  id: '6',
  title: 'Creative Writing: Finding Your Voice',
  excerpt: 'Exercises and prompts to help literature students develop their unique narrative style.',
  coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600&h=400',
  category: 'Arts',
  author: {
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
  },
  publishedAt: 'Oct 12, 2023',
  readTime: '7 min read',
  likes: 156,
  comments: 28
}];
const CATEGORIES = ['Technology', 'Science', 'Arts', 'Economics', 'Wellness', 'Architecture', 'History', 'Law'];
export function HomePage() {
  return <Layout fullWidth>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#8b5cf6] text-white py-20 md:py-28 px-5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Share Knowledge.
            <br />
            Inspire Discovery.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Alpha is the premier community for students to publish research,
            share insights, and collaborate across disciplines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/editor">
              <Button size="lg" variant="accent" className="w-full sm:w-auto shadow-lg shadow-orange-500/20">
                Start Writing
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#2563eb]">
                Explore Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-12">
        {/* Featured Post */}
        <section className="mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="text-[#f97316]" />
            <h2 className="text-2xl font-bold text-[#1e293b]">
              Featured Story
            </h2>
          </div>
          <BlogCard post={FEATURED_POST} featured />
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Feed */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#1e293b]">
                Latest Articles
              </h2>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-[#2563eb] bg-blue-50">
                  All
                </Button>
                <Button variant="ghost" size="sm">
                  Popular
                </Button>
                <Button variant="ghost" size="sm">
                  Recent
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RECENT_POSTS.map(post => <BlogCard key={post.id} post={post} />)}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            {/* Categories */}
            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-sm">
              <h3 className="font-bold text-[#1e293b] mb-4">Discover Topics</h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => <Tag key={cat} label={cat} variant="generic" className="cursor-pointer hover:bg-[#e2e8f0]" />)}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0]">
              <h3 className="font-bold text-[#1e293b] mb-2">Weekly Digest</h3>
              <p className="text-sm text-[#64748b] mb-4">
                Get the best student writing delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input type="email" placeholder="student@university.edu" className="w-full px-4 py-2 rounded-lg border border-[#e2e8f0] focus:border-[#2563eb] focus:outline-none text-sm" />
                <Button variant="primary" className="w-full text-sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>;
}