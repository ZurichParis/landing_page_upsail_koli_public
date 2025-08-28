import React, { useState, useEffect } from 'react';
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder",
      company: "AI SaaS",
      feedback: "I thought I needed to hire a vibe marketer. Now I'll probably try Koli first.",
      avatar: "SC"
    },
    {
      name: "Emma Thompson",
      role: "Founder",
      company: "consumer app",
      feedback: "As a founder, I don't want another dashboard. I want results. Koli feels like the product we've been waiting for—an AI campaign manager that does the heavy lifting.",
      avatar: "ET"
    },
    {
      name: "David Park",
      role: "VP Growth",
      company: "e-commerce brand",
      feedback: "The promise of Koli is huge. If it really delivers on automating sourcing, outreach, and performance insights, this could replace half the tools we juggle today.",
      avatar: "DP"
    },
    {
      name: "Lisa Wang",
      role: "CMO",
      company: "health & lifestyle brand",
      feedback: "Influencer platforms are everywhere, but they all require tons of manual work. Koli is the first idea that actually treats creator marketing like a repeatable growth engine. I can't wait to try it.",
      avatar: "LW"
    },
    {
      name: "Lucas C",
      role: "Head of Growth",
      company: "consumer AI startup",
      feedback: "Koli feels like it should have existed yesterday. No tool I've seen brings creators, campaigns, and insights into one place with AI running the ops.",
      avatar: "LC"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

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
    <main className="min-h-screen bg-gradient-to-b from-[#FCFCF9] to-[#F5F5F2]">
      <div className="flex justify-center py-4">
        <button onClick={() => navigate('/')} className='font-[900] text-[28px] p-4'> 
          Koli 
        </button>
      </div>
      <div className="flex items-center justify-center pt-4">
        <div className="w-full max-w-5xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* Form Section - Left Side */}
              <div className="flex-1 p-6 lg:p-10">
                {!isSubmitted ? (
                  <>
                    <div className="mb-3">
                      <p className="font-[700] text-[18px] text-[#4A7C00]">
                        Join waitlist
                      </p>
                      <p className="text-[#0A0A0A] font-[500] text-[26px] py-4">
                        Be among the first to hire the vibe creator marketer.
                      </p>
                    </div>

                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label className="block font-[400] text-[16px] text-[#6B7280] mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 placeholder:font-[200] placeholder:text-[16px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-lime outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block font-[400] text-[16px] text-[#6B7280] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 placeholder:font-[200] placeholder:text-[16px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-lime outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block font-[400] text-[16px] text-[#6B7280] mb-2">
                          Company (optional)
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 placeholder:font-[200] placeholder:text-[16px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-lime outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block font-[400] text-[16px] text-[#6B7280] mb-2">
                          Anything you'd like us to know? (optional)
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-3 py-2 placeholder:font-[200] placeholder:text-[16px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-lime outline-none transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                          placeholder="How do you plan to use our creator marketing platform?"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full text-white bg-black font-[200] text-[16px] py-2 px-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gentle-black mr-3"></div>
                            Sending...
                          </div>
                        ) : (
                          'Join Waitlist'
                        )}
                      </button>
                    </form>

                    <p className="font-[200] text-[12px] text-gray-500 text-center mt-6">
                    We’ll notify you as soon as we’re ready to welcome you aboard.
                    </p>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-[#4A7C00] rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-3xl text-gentle-black mb-4">
                        You're All Set!
                      </h3>
                      <p className="text-gray-600 mb-8 text-[16px] font-[400]">
                        Thank you for joining our waitlist. We'll be in touch soon with exciting updates!
                      </p>
                      <button
                        onClick={() => navigate('/')}
                        className="text-[#4A7C00] hover:[#8ACCA5] font-medium transition-colors text-lg"
                      >
                        Return to Home
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Testimonial/Benefits Section - Right Side */}
              <div className="flex-1 custom-green-gradient rounded-2xl p-8 lg:p-12 text-white flex flex-col justify-center relative" >
                <div className="space-y-8">
                  {/* Testimonial Card */}
                  <div className="rounded-xl bg-white shadow-lg text-gray-800 max-w-sm mx-auto relative overflow-hidden" style={{ minHeight: '400px' }}>
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 p-8 transition-all duration-700 ease-in-out transform ${
                          index === currentTestimonial 
                            ? 'opacity-100 translate-x-0' 
                            : index < currentTestimonial 
                              ? 'opacity-0 -translate-x-full' 
                              : 'opacity-0 translate-x-full'
                        }`}
                      >
                        <div className="mb-6">
                          <svg className="w-8 h-8 text-[#4A7C00] mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                          </svg>
                          <p className="text-gray-600 italic leading-relaxed mb-6" style={{ minHeight: '120px' }}>
                            {testimonial.feedback}"
                          </p>
                        </div>
                        
                        <div className="flex items-center">
                          <div>
                            <div className="font-semibold text-gray-800">{testimonial.role}</div>
                            <div className="text-sm text-gray-500">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Progress indicator dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleDotClick(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                            index === currentTestimonial ? 'bg-[#81CB9F]' : 'bg-gray-200'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;