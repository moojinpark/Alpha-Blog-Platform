import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  noPadding?: boolean;
}
export function Card({
  children,
  className = '',
  hoverEffect = false,
  noPadding = false,
  ...props
}: CardProps) {
  return <div className={`
        bg-white rounded-xl border border-[#e2e8f0]/50
        shadow-[0_2px_8px_rgba(0,0,0,0.08)]
        ${hoverEffect ? 'transition-all duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1' : ''}
        ${noPadding ? '' : 'p-6'}
        ${className}
      `} {...props}>
      {children}
    </div>;
}