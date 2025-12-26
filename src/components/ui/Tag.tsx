import React from 'react';
interface TagProps {
  label: string;
  variant?: 'category' | 'generic' | 'outline';
  className?: string;
  onClick?: () => void;
}
export function Tag({
  label,
  variant = 'generic',
  className = '',
  onClick
}: TagProps) {
  const variants = {
    category: 'bg-[#eff6ff] text-[#2563eb] hover:bg-[#dbeafe]',
    generic: 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]',
    outline: 'bg-transparent border border-[#e2e8f0] text-[#64748b] hover:border-[#cbd5e1]'
  };
  return <span className={`
        inline-flex items-center justify-center
        px-3 py-1.5 rounded-md
        text-xs font-bold uppercase tracking-wide
        transition-colors duration-200
        ${variants[variant]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `} onClick={onClick}>
      {label}
    </span>;
}