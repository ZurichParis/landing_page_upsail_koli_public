import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
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
              <div className="font-medium text-[32px] md:text-[64px] leading-[38px] md:leading-[75px] text-gentle-black mb-6">
              The Creator Marketing OS  < br/> Built to Scale Startups
              </div>
              <h1 className="font-medium text-[16px] md:text-[20px] leading-[22px] md:leading-[28px] text-gray-600 mx-auto max-w-4xl px-4">
              Koli AI agents handle creator marketing operations, saving hundreds of hours, cutting costs, and helping founders and marketers capture attention and drive conversions fast.
              </h1>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="custom-green-gradient text-white px-10 py-2 rounded-full text-lg font-medium text-[20px] hover:opacity-90 hover:brightness-110 transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 hover:scale-105"
            >
              Join Private Beta
            </button>
          </div>
          <div className="flex justify-center mt-10">
          <div className="w-full max-w-5xl aspect-video bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
            <video 
              className="w-full h-full object-contain rounded-2xl"
              controls
              autoPlay
              muted
              loop
            >
              <source src="https://res.cloudinary.com/dswailmr0/video/upload/v1756136068/herovideo_lkmpvr.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;