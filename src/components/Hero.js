import React from 'react';

const Hero = ({ setPage }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gentle-black leading-tight">
                Transform Your Business with Modern Solutions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Streamline your workflow, boost productivity, and unlock new possibilities with our innovative platform designed for the future.
              </p>
            </div>
            <button
              onClick={() => setPage('contact')}
              className="bg-lime text-gentle-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-lime/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Join Waitlist
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Hero Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;