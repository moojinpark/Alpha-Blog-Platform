import React from 'react';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-[#2563eb] text-white hover:bg-[#1d4ed8] hover:-translate-y-0.5 shadow-sm hover:shadow-md focus:ring-[#2563eb]',
    secondary: 'bg-[#8b5cf6] text-white hover:bg-[#7c3aed] hover:-translate-y-0.5 shadow-sm hover:shadow-md focus:ring-[#8b5cf6]',
    accent: 'bg-[#f97316] text-white hover:bg-[#ea580c] hover:-translate-y-0.5 shadow-sm hover:shadow-md focus:ring-[#f97316]',
    outline: 'bg-transparent border-2 border-[#e2e8f0] text-[#64748b] hover:border-[#cbd5e1] hover:text-[#1e293b] focus:ring-[#e2e8f0]',
    ghost: 'bg-transparent text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1e293b]'
  };
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-[30px] py-[12px]',
    lg: 'text-lg px-8 py-4'
  };
  return <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} disabled={disabled || isLoading} {...props}>
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>;
}