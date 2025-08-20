import React from 'react';

const FinalCTA = ({ setPage }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gentle-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Turn creator marketing into a reliable growth machine 
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of forward-thinking companies who have already revolutionized their workflow with our platform.
        </p>
        <button
          onClick={() => setPage('contact')}
          className="bg-lime text-gentle-black px-10 py-4 rounded-lg text-xl font-semibold hover:bg-lime/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Join Waitlist Now
        </button>
        <p className="text-sm text-gray-400 mt-4">
          No credit card required • Free during beta
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;