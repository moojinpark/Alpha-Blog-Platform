import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MessageSquare, ThumbsUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { Avatar } from '../ui/Avatar';
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  likes: number;
  comments: number;
}
interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}
export function BlogCard({
  post,
  featured = false
}: BlogCardProps) {
  return <Link to={`/post/${post.id}`} className="block h-full">
      <Card hoverEffect noPadding className={`h-full flex flex-col overflow-hidden ${featured ? 'md:flex-row' : ''}`}>
        {/* Image Section */}
        <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-64 md:h-auto' : 'h-48'}`}>
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          <div className="absolute top-4 left-4">
            <Tag label={post.category} variant="category" className="shadow-sm" />
          </div>
        </div>

        {/* Content Section */}
        <div className={`p-6 flex flex-col flex-grow ${featured ? 'md:w-1/2 justify-center p-8 md:p-12' : ''}`}>
          <div className="flex items-center space-x-2 text-xs text-[#64748b] mb-3">
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h3 className={`font-bold text-[#1e293b] mb-3 group-hover:text-[#2563eb] transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {post.title}
          </h3>

          <p className={`text-[#64748b] mb-6 line-clamp-3 ${featured ? 'text-lg' : 'text-sm'}`}>
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar src={post.author.avatar} size="sm" />
              <span className="text-sm font-medium text-[#1e293b]">
                {post.author.name}
              </span>
            </div>

            <div className="flex items-center space-x-4 text-[#64748b] text-xs font-medium">
              <div className="flex items-center">
                <ThumbsUp className="w-4 h-4 mr-1" />
                {post.likes}
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" />
                {post.comments}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>;
}