import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // EmailJS configuration from environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are configured
    if (!serviceId || !templateId || !publicKey) {
      setError('Email service is not properly configured. Please contact support.');
      setIsLoading(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      message: formData.message,
      to_email: process.env.REACT_APP_COMPANY_EMAIL || 'your-email@example.com'
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-lime/20 to-green-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          <div className="space-y-8">
          
            <div>
              <h1 className="font-medium text-[32px] md:text-[64px] leading-[38px] md:leading-[75px] text-gentle-black mb-6">
                Turn Creator Marketing into Repeatable Success
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Be among the first to hire the first vibe creator marketer. We’ll notify you as soon as we’re ready to welcome you aboard.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-lime rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gentle-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gentle-black">Early access to Emily and enjoy results</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-lime rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gentle-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gentle-black">Free consultation session to answer all your creator marketing questions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-lime rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gentle-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gentle-black">Priority support during beta</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl shadow-xl p-8 w-full max-w-md bg-white">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gentle-black mb-2">
                      Get Early Access
                    </h2>
                    <p className="text-gray-600">
                      Tell us about yourself and join our exclusive waitlist
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all duration-200"
                        placeholder="Full Name"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all duration-200"
                        placeholder="Company (optional)"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent outline-none transition-all duration-200 resize-none"
                        placeholder="Tell us about your use case (optional)"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-lime text-gentle-black py-3 px-4 rounded-lg font-semibold hover:bg-lime/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gentle-black mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        'Join Waitlist'
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
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
                    onClick={() => navigate('/')}
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