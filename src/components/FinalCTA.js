import React from 'react';

const FinalCTA = ({ setPage }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-gentle-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="h-40 w-40 mx-auto mb-6">
          <img src="/logo.png" alt="Emily" className="w-full h-full object-contain rounded-xl" />
        </div>
        <h2 className="font-medium text-[64px] leading-[75px] text-gentle-black text-center mb-6">
        Activate your growth machine. 
        </h2>
        <p className="font-medium text-[20px] leading-[28px] text-gray-600 mx-auto max-w-4xl mb-6">
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