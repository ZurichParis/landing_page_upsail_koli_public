import React from 'react';

const Hero = ({ setPage }) => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex bg-gray-100 rounded-full px-1 py-1 my-6">
                <div className="bg-black text-white rounded-full px-4 py-2">New</div>
                <div className="bg-transparent px-2 py-2">Creator-first growth engine</div>
              </div>
              <h1 className="md:text-5xl lg:text-8xl text-gentle-black leading-tight">
              The AI vibe marketer for creator collabs.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed md:max-w-5xl lg:max-w-8xl mx-auto">
              Koli AI agents do the grind of creator marketing, so founders and marketing leaders can focus on driving viral growth with confidence. Join the waitlist for early access.
              </p>
            </div>
            <button
              onClick={() => setPage('contact')}
              className="custom-green-gradient text-white px-10 py-2 rounded-full text-lg font-semibold hover:opacity-90 hover:brightness-110 transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 hover:scale-105"
            >
              Join Waitlist
            </button>
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-full max-w-5xl h-[60vh] bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
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