import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BlogPostPage } from './pages/BlogPostPage';
import { EditorPage } from './pages/EditorPage';
import { ProfilePage } from './pages/ProfilePage';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ActivityPage } from './pages/ActivityPage';
export function App() {
  return <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Authenticated Routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/post/:id" element={<BlogPostPage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Fallback routes */}
        <Route path="/explore" element={<HomePage />} />
        <Route path="/community" element={<HomePage />} />
      </Routes>
    </Router>;
}