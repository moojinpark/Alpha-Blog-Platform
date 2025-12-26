import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-white border-t border-[#e2e8f0] py-12 mt-auto">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-[#2563eb] mb-4">
              <div className="bg-[#2563eb] text-white w-8 h-8 rounded flex items-center justify-center font-bold text-xl">
                A
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#1e293b]">
                Alpha
              </span>
            </Link>
            <p className="text-[#64748b] text-sm leading-relaxed">
              A community-driven platform where students can publish blog posts,
              share knowledge, and engage in meaningful academic discussions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#1e293b] mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li>
                <Link to="/" className="hover:text-[#2563eb]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-[#2563eb]">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-[#2563eb]">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/editor" className="hover:text-[#2563eb]">
                  Write
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1e293b] mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li>
                <a href="#" className="hover:text-[#2563eb]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563eb]">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563eb]">
                  Academic Integrity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563eb]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1e293b] mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#64748b] hover:text-[#2563eb] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#64748b] hover:text-[#2563eb] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#64748b] hover:text-[#2563eb] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e2e8f0] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#64748b]">
          <p>
            &copy; {new Date().getFullYear()} Alpha Platform. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">Built for students, by students.</p>
        </div>
      </div>
    </footer>;
}