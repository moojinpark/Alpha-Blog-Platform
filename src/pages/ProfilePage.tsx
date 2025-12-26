import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Avatar } from '../components/ui/Avatar';
import { Button } from '../components/ui/Button';
import { BlogCard, BlogPost } from '../components/blog/BlogCard';
import { MapPin, Link as LinkIcon, Calendar, Users, Star } from 'lucide-react';
const USER_POSTS: BlogPost[] = [{
  id: '1',
  title: 'The Future of Artificial Intelligence in Academic Research',
  excerpt: 'Exploring how large language models are transforming the way students and researchers approach literature review and data analysis.',
  coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200&h=600',
  category: 'Technology',
  author: {
    name: 'Dr. Elena Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100'
  },
  publishedAt: 'Oct 24, 2023',
  readTime: '8 min read',
  likes: 342,
  comments: 56
}, {
  id: '2',
  title: 'Machine Learning Algorithms Explained Simply',
  excerpt: 'Breaking down complex neural networks into understandable concepts for undergraduates.',
  coverImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400',
  category: 'Technology',
  author: {
    name: 'Dr. Elena Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100'
  },
  publishedAt: 'Sep 15, 2023',
  readTime: '12 min read',
  likes: 215,
  comments: 42
}];
export function ProfilePage() {
  return <Layout>
      <div className="max-w-[1000px] mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden mb-8">
          {/* Cover Banner */}
          <div className="h-48 bg-gradient-to-r from-[#2563eb] to-[#8b5cf6]"></div>

          <div className="px-8 pb-8">
            <div className="relative flex justify-between items-end -mt-16 mb-6">
              <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" size="xl" className="w-32 h-32 ring-4 ring-white" />
              <div className="flex space-x-3 mb-2">
                <Button variant="outline">Share</Button>
                <Button variant="primary">Edit Profile</Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Info Column */}
              <div className="md:w-1/3 space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-[#1e293b]">
                    Elena Rodriguez
                  </h1>
                  <p className="text-[#64748b]">@elenatech</p>
                  <p className="text-[#2563eb] font-medium mt-1">
                    PhD Candidate, Computer Science
                  </p>
                </div>

                <p className="text-[#334155] leading-relaxed">
                  Researching Human-Computer Interaction and AI ethics.
                  Passionate about making technology accessible. Editor at
                  University Tech Journal.
                </p>

                <div className="space-y-3 text-sm text-[#64748b]">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Stanford University
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="w-4 h-4 mr-2" />
                    <a href="#" className="text-[#2563eb] hover:underline">
                      elenarodriguez.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Joined September 2021
                  </div>
                </div>

                <div className="flex gap-6 border-t border-[#e2e8f0] pt-4">
                  <div className="text-center">
                    <div className="font-bold text-[#1e293b] text-lg">1.2k</div>
                    <div className="text-xs text-[#64748b] uppercase tracking-wide">
                      Followers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#1e293b] text-lg">450</div>
                    <div className="text-xs text-[#64748b] uppercase tracking-wide">
                      Following
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#1e293b] text-lg">15</div>
                    <div className="text-xs text-[#64748b] uppercase tracking-wide">
                      Posts
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="md:w-2/3">
                <div className="flex items-center space-x-6 border-b border-[#e2e8f0] mb-6">
                  <button className="pb-3 border-b-2 border-[#2563eb] text-[#2563eb] font-medium">
                    Published
                  </button>
                  <button className="pb-3 border-b-2 border-transparent text-[#64748b] hover:text-[#1e293b]">
                    Drafts
                  </button>
                  <button className="pb-3 border-b-2 border-transparent text-[#64748b] hover:text-[#1e293b]">
                    Saved
                  </button>
                </div>

                <div className="space-y-6">
                  {USER_POSTS.map(post => <BlogCard key={post.id} post={post} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
}