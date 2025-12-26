import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { ArrowLeft } from 'lucide-react';
export function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/home');
    }, 1000);
  };
  return <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <Link to="/" className="flex items-center justify-center space-x-2 text-[#2563eb] mb-6 hover:opacity-80 transition-opacity">
          <div className="bg-[#2563eb] text-white w-8 h-8 rounded flex items-center justify-center font-bold text-xl">
            A
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-[#1e293b]">
            Alpha
          </span>
        </Link>
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e293b]">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-[#64748b]">
          Join the community of academic writers and researchers
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="py-8 px-4 shadow sm:rounded-lg sm:px-10 bg-white border border-slate-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input label="Full Name" type="text" placeholder="Jane Doe" value={name} onChange={e => setName(e.target.value)} required />

            <Input label="Email address" type="email" placeholder="student@university.edu" value={email} onChange={e => setEmail(e.target.value)} required />

            <Input label="Password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />

            <Input label="Confirm Password" type="password" placeholder="••••••••" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />

            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input id="terms" name="terms" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#2563eb] focus:ring-[#2563eb]" required />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-[#64748b]">
                  I agree to the{' '}
                  <a href="#" className="text-[#2563eb] hover:text-[#1d4ed8]">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-[#2563eb] hover:text-[#1d4ed8]">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-full justify-center" disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-[#64748b]">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link to="/login" className="font-medium text-[#2563eb] hover:text-[#1d4ed8]">
                Sign in
              </Link>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-[#64748b] hover:text-[#1e293b] flex items-center justify-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </div>
    </div>;
}