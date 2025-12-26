import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Tag } from '../components/ui/Tag';
import { Avatar } from '../components/ui/Avatar';
import { Image, Type, List, Quote, Save, Eye, Settings, ChevronLeft } from 'lucide-react';
export function EditorPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPreview, setIsPreview] = useState(false);
  return <div className="min-h-screen bg-white flex flex-col">
      {/* Editor Header */}
      <header className="h-16 border-b border-[#e2e8f0] flex items-center justify-between px-6 sticky top-0 bg-white z-20">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost" size="sm" leftIcon={<ChevronLeft className="w-4 h-4" />}>
              Back
            </Button>
          </Link>
          <span className="text-sm text-[#64748b]">
            Draft in <strong>My Stories</strong>
          </span>
          <span className="text-xs text-[#94a3b8] px-2 py-1 bg-[#f1f5f9] rounded">
            Saved
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={() => setIsPreview(!isPreview)} leftIcon={<Eye className="w-4 h-4" />}>
            {isPreview ? 'Edit' : 'Preview'}
          </Button>
          <Button variant="accent" size="sm">
            Publish
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-5 h-5" />
          </Button>
          <Avatar size="sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" />
        </div>
      </header>

      {/* Main Editor Area */}
      <main className="flex-grow max-w-[900px] mx-auto w-full px-6 py-12">
        {isPreview ? <div className="prose prose-lg prose-slate max-w-none font-serif">
            <h1 className="font-sans font-bold text-[#1e293b] mb-4">
              {title || 'Untitled Story'}
            </h1>
            <div className="whitespace-pre-wrap">
              {content || 'Start writing your story...'}
            </div>
          </div> : <div className="space-y-6">
            {/* Cover Image Placeholder */}
            <div className="group relative w-full h-48 bg-[#f8fafc] border-2 border-dashed border-[#e2e8f0] rounded-xl flex flex-col items-center justify-center text-[#64748b] cursor-pointer hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
              <Image className="w-8 h-8 mb-2" />
              <span className="font-medium">Add Cover Image</span>
              <span className="text-xs mt-1">
                Drag & drop or click to upload
              </span>
            </div>

            {/* Title Input */}
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full text-4xl md:text-5xl font-bold text-[#1e293b] placeholder:text-[#cbd5e1] border-none focus:ring-0 px-0 bg-transparent font-sans" />

            {/* Toolbar */}
            <div className="flex items-center space-x-1 border-y border-[#e2e8f0] py-2 sticky top-16 bg-white z-10">
              <ToolbarButton icon={<Type className="w-4 h-4" />} />
              <ToolbarButton icon={<span className="font-bold serif">B</span>} />
              <ToolbarButton icon={<span className="italic serif">I</span>} />
              <div className="w-px h-4 bg-[#e2e8f0] mx-2"></div>
              <ToolbarButton icon={<Quote className="w-4 h-4" />} />
              <ToolbarButton icon={<List className="w-4 h-4" />} />
              <ToolbarButton icon={<Image className="w-4 h-4" />} />
            </div>

            {/* Content Textarea */}
            <textarea placeholder="Tell your story..." value={content} onChange={e => setContent(e.target.value)} className="w-full min-h-[500px] text-xl leading-relaxed text-[#334155] placeholder:text-[#cbd5e1] border-none focus:ring-0 px-0 bg-transparent font-serif resize-none" />
          </div>}
      </main>
    </div>;
}
function ToolbarButton({
  icon
}: {
  icon: React.ReactNode;
}) {
  return <button className="p-2 text-[#64748b] hover:text-[#2563eb] hover:bg-[#eff6ff] rounded transition-colors">
      {icon}
    </button>;
}