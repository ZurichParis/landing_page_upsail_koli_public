import React, { useState } from 'react';

const Contact = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <button
              onClick={() => setPage('home')}
              className="flex items-center text-gray-600 hover:text-gentle-black transition-colors mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gentle-black mb-6">
                Join the Waitlist
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Be among the first to experience our revolutionary platform. We'll notify you as soon as we're ready to welcome you aboard.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-lime rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gentle-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gentle-black">Early access to all features</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-lime rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gentle-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gentle-black">Priority support during beta</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-lime rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gentle-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gentle-black">Special launch pricing</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gentle-black mb-2">
                      Get Early Access
                    </h2>
                    <p className="text-gray-600">
                      Enter your email to join our exclusive waitlist
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gentle-black mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-lime text-gentle-black py-3 px-4 rounded-lg font-semibold hover:bg-lime/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Join Waitlist
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-lime" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gentle-black mb-2">
                    You're All Set!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for joining our waitlist. We'll be in touch soon with exciting updates!
                  </p>
                  <button
                    onClick={() => setPage('home')}
                    className="text-lime hover:text-lime/80 font-medium transition-colors"
                  >
                    Return to Home
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;