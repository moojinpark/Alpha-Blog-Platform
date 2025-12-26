import React from 'react';
import { User } from 'lucide-react';
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}
export function Avatar({
  src,
  alt = 'User',
  size = 'md',
  className = ''
}: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-24 h-24'
  };
  return <div className={`relative inline-block rounded-full overflow-hidden bg-[#e2e8f0] ${sizes[size]} ${className}`}>
      {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-[#64748b]">
          <User className={size === 'xl' ? 'w-10 h-10' : 'w-5 h-5'} />
        </div>}
    </div>;
}