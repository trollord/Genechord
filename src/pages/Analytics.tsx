import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, LogOut } from 'lucide-react';

const ANALYTICS_PASSWORD = 'Genechord@123';
const AUTH_STORAGE_KEY = 'genechord_analytics_auth';
const DASHBOARD_URL =
  'https://datastudio.google.com/embed/reporting/8ac70c99-26fc-46b6-b062-c4cd0f5e1a50/page/mXg0F';

const Analytics = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ANALYTICS_PASSWORD) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setError('');
      setPasswordInput('');
    } else {
      setError('Incorrect password. Please try again.');
      setPasswordInput('');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 via-white to-primary-50 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-purple-100"
        >
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#603084] to-[#CB5498] flex items-center justify-center mb-4">
              <Lock className="text-white" size={28} />
            </div>
            <h1 className="font-display text-2xl font-bold text-gray-900 mb-1">
              Restricted Access
            </h1>
            <p className="text-gray-500 text-sm text-center">
              Enter the password to view the analytics dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Password"
                autoFocus
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-[#603084] focus:outline-none focus:ring-2 focus:ring-[#603084]/20 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-red-600"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#603084] to-[#CB5498] text-white font-semibold hover:opacity-90 transition"
            >
              Unlock Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#603084] font-display text-xl font-bold">Gene</span>
          <span className="text-[#CB5498] font-display text-xl font-bold">chord</span>
          <span className="text-gray-400 mx-2">|</span>
          <span className="text-gray-700 font-medium">Analytics</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
        >
          <LogOut size={16} />
          Lock
        </button>
      </div>

      <div className="w-full h-[calc(100vh-57px)]">
        <iframe
          title="Genechord Analytics Dashboard"
          src={DASHBOARD_URL}
          className="w-full h-full border-0"
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
};

export default Analytics;
