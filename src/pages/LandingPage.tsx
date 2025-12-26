import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react';
export function LandingPage() {
  return <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Bar */}
      <nav className="w-full py-4 px-6 md:px-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center space-x-2 text-[#2563eb]">
          <div className="bg-[#2563eb] text-white w-8 h-8 rounded flex items-center justify-center font-bold text-xl">
            A
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#1e293b]">
            Alpha
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2563eb] to-[#8b5cf6] text-white py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Where Academic Minds <br /> Connect & Collaborate
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the premier community for students to publish research, share
            insights, and receive peer feedback across all disciplines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button size="lg" variant="accent" className="w-full shadow-lg shadow-orange-500/20" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Get Started for Free
              </Button>
            </Link>
            <Link to="/home" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#2563eb]">
                Browse Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-4">
              Why Students Choose Alpha
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Designed specifically for the academic journey, providing tools
              that help you grow as a writer and researcher.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-[#2563eb] rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                Academic Excellence
              </h3>
              <p className="text-[#64748b] leading-relaxed">
                Publish your papers, essays, and research findings in a
                professional environment designed for scholarly content.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-[#8b5cf6] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                Peer Review
              </h3>
              <p className="text-[#64748b] leading-relaxed">
                Get constructive feedback from fellow students and teaching
                assistants to improve your writing and arguments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-[#f97316] rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                Build Your Portfolio
              </h3>
              <p className="text-[#64748b] leading-relaxed">
                Create a public profile showcasing your best academic work to
                share with professors and future employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-[#2563eb] mb-2">
                10k+
              </div>
              <div className="text-[#64748b] font-medium">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#2563eb] mb-2">
                50+
              </div>
              <div className="text-[#64748b] font-medium">Universities</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#2563eb] mb-2">
                25k+
              </div>
              <div className="text-[#64748b] font-medium">
                Articles Published
              </div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#2563eb] mb-2">
                100k+
              </div>
              <div className="text-[#64748b] font-medium">Peer Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-[#1e293b] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to share your knowledge?
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Join thousands of students who are already publishing their work on
            Alpha.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="accent" className="min-w-[200px]">
              Create Free Account
            </Button>
          </Link>
          <p className="mt-6 text-sm text-slate-400">
            No credit card required. Free for all students.
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#0f172a] text-slate-400 py-8 px-6 text-center text-sm border-t border-slate-800">
        <p>
          &copy; {new Date().getFullYear()} Alpha Platform. All rights reserved.
        </p>
      </footer>
    </div>;
}