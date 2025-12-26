import React, { useId } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}
export function Input({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || useId();
  return <div className="w-full">
      {label && <label htmlFor={inputId} className="block text-sm font-medium text-[#1e293b] mb-1.5">
          {label}
        </label>}
      <input id={inputId} className={`
          w-full px-4 py-[12px] text-base
          bg-white border-2 rounded-lg transition-colors duration-200
          placeholder:text-[#94a3b8]
          focus:outline-none focus:ring-0
          ${error ? 'border-[#ef4444] focus:border-[#ef4444]' : 'border-[#e2e8f0] focus:border-[#2563eb] hover:border-[#cbd5e1]'}
          ${className}
        `} {...props} />
      {error && <p className="mt-1.5 text-sm text-[#ef4444]">{error}</p>}
      {helperText && !error && <p className="mt-1.5 text-sm text-[#64748b]">{helperText}</p>}
    </div>;
}