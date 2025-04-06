'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real implementation, this would connect to a backend API
    // For now, simulate a successful submission after a short delay
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto relative z-10">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full blur-sm opacity-0 transition duration-300 ${focused ? 'opacity-50' : ''}`}></div>
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full px-5 py-3.5 border-0 rounded-full focus:ring-0 bg-white/90 dark:bg-black/40 backdrop-blur-sm relative z-10 transition-all duration-300 shadow-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Your email address"
              />
              {email && (
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sky-600 z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3.5 px-6 border-0 rounded-full text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 font-medium disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-sm"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                <span>Join the Waitlist</span>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center p-8 bg-white/90 dark:bg-black/40 backdrop-blur-sm rounded-2xl shadow-sm transform transition-all animate-fadeIn">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Thank you for joining our waitlist</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            We'll notify you when Skyble X is ready to launch.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 px-4 py-2 text-sm text-sky-600 dark:text-sky-400 hover:underline focus:outline-none"
          >
            Submit another email
          </button>
        </div>
      )}
    </div>
  );
} 