import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}
export function Layout({
  children,
  fullWidth = false
}: LayoutProps) {
  return <div className="min-h-screen flex flex-col bg-[#f8fafc] font-sans text-[#1e293b]">
      <Header />
      <main className={`flex-grow pt-16 ${fullWidth ? '' : 'max-w-[1200px] mx-auto px-5 md:px-10 w-full py-8'}`}>
        {children}
      </main>
      <Footer />
    </div>;
}