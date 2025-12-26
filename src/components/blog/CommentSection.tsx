import React, { useState } from 'react';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { ThumbsUp, MessageSquare, MoreHorizontal } from 'lucide-react';
interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  replies?: Comment[];
}
const MOCK_COMMENTS: Comment[] = [{
  id: '1',
  author: {
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
  },
  content: 'This is a fantastic analysis of the subject. I particularly agreed with your point about the methodology. Have you considered how this applies to smaller sample sizes?',
  createdAt: '2 hours ago',
  likes: 12,
  replies: [{
    id: '2',
    author: {
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100'
    },
    content: 'Great question Sarah! I think for smaller sample sizes we need to adjust the confidence intervals accordingly.',
    createdAt: '1 hour ago',
    likes: 4
  }]
}, {
  id: '3',
  author: {
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
  },
  content: 'Really helpful resource for my thesis. Thanks for sharing!',
  createdAt: '5 hours ago',
  likes: 8
}];
export function CommentSection() {
  const [commentText, setCommentText] = useState('');
  return <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
      <h3 className="text-2xl font-bold text-[#1e293b] mb-8">Discussion (3)</h3>

      {/* Comment Input */}
      <div className="flex gap-4 mb-10">
        <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" />
        <div className="flex-grow">
          <textarea value={commentText} onChange={e => setCommentText(e.target.value)} placeholder="Add to the discussion..." className="w-full p-4 border-2 border-[#e2e8f0] rounded-xl focus:border-[#2563eb] focus:outline-none min-h-[100px] resize-y mb-3" />
          <div className="flex justify-end">
            <Button disabled={!commentText.trim()}>Post Comment</Button>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-8">
        {MOCK_COMMENTS.map(comment => <CommentItem key={comment.id} comment={comment} />)}
      </div>
    </div>;
}
function CommentItem({
  comment,
  isReply = false
}: {
  comment: Comment;
  isReply?: boolean;
}) {
  return <div className={`flex gap-4 ${isReply ? 'ml-12 mt-6 pl-6 border-l-2 border-[#e2e8f0]' : ''}`}>
      <Avatar src={comment.author.avatar} size={isReply ? 'sm' : 'md'} />
      <div className="flex-grow">
        <div className="bg-[#f8fafc] p-4 rounded-xl rounded-tl-none">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="font-bold text-[#1e293b] mr-2">
                {comment.author.name}
              </span>
              <span className="text-xs text-[#64748b]">
                {comment.createdAt}
              </span>
            </div>
            <button className="text-[#94a3b8] hover:text-[#1e293b]">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[#334155] leading-relaxed">{comment.content}</p>
        </div>

        <div className="flex items-center gap-4 mt-2 ml-2">
          <button className="flex items-center space-x-1 text-xs font-medium text-[#64748b] hover:text-[#2563eb]">
            <ThumbsUp className="w-3 h-3" />
            <span>{comment.likes} Likes</span>
          </button>
          <button className="flex items-center space-x-1 text-xs font-medium text-[#64748b] hover:text-[#2563eb]">
            <MessageSquare className="w-3 h-3" />
            <span>Reply</span>
          </button>
        </div>

        {comment.replies && comment.replies.map(reply => <CommentItem key={reply.id} comment={reply} isReply />)}
      </div>
    </div>;
}