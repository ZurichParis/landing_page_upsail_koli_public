import React from 'react';

const FinalCTA = ({ setPage }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-gentle-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="h-40 w-40 mx-auto mb-6">
          <img src="/logo.png" alt="Emily" className="w-full h-full object-contain rounded-xl" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-7xl mx-auto mb-6">
        Activate your growth machine. 
        </h2>
        <p className="text-xl text-[#6B7280] mb-8 max-w-2xl mx-auto">
        Koli is building the AI vibe marketing for everyone to reach their audience and get the attention they deserve.
        </p>
        <button
          onClick={() => setPage('contact')}
          className="custom-green-gradient text-white px-10 py-2 rounded-full text-lg font-semibold hover:opacity-90 hover:brightness-110 transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 hover:scale-105"
        >
          Join Waitlist
        </button>
        <p className="text-sm text-gray-400 mt-4">
        Get the early access to vibe creator marketing
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;