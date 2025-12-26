import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bell, PenSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/home'
  }, {
    name: 'Explore',
    path: '/explore'
  }, {
    name: 'Community',
    path: '/community'
  }, {
    name: 'Activity',
    path: '/activity'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className={`
        fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300
        ${isScrolled ? 'shadow-md bg-[#2563eb]/95 backdrop-blur-sm' : 'bg-[#2563eb]'}
      `}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center space-x-2 text-white group">
          <div className="bg-white text-[#2563eb] w-8 h-8 rounded flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="text-xl font-extrabold tracking-tight">Alpha</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.name} to={link.path} className={`
                text-sm font-medium transition-opacity
                ${isActive(link.path) ? 'text-white opacity-100' : 'text-white/80 hover:opacity-100'}
              `}>
              {link.name}
            </Link>)}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-white/80 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-white/80 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#f97316] rounded-full ring-2 ring-[#2563eb]"></span>
          </button>
          <div className="h-6 w-px bg-white/20 mx-2"></div>
          <Link to="/editor">
            <Button variant="accent" size="sm" leftIcon={<PenSquare className="w-4 h-4" />}>
              Write
            </Button>
          </Link>
          <Link to="/profile">
            <Avatar size="sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" className="ring-2 ring-white/30 hover:ring-white transition-all cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map(link => <Link key={link.name} to={link.path} className="text-[#1e293b] font-medium py-2 px-4 rounded-lg hover:bg-[#f8fafc]" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>)}
          <div className="h-px bg-gray-100 my-2"></div>
          <Link to="/editor" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="primary" className="w-full justify-center">
              Start Writing
            </Button>
          </Link>
          <Link to="/profile" className="flex items-center space-x-3 px-4 py-2 text-[#1e293b] font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            <Avatar size="sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" />
            <span>My Profile</span>
          </Link>
        </div>}
    </header>;
}