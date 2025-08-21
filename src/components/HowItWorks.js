import React from 'react';

const HowItWorks = () => {

  const steps = [
    {
      title: "Create Campaign ",
      shortDesc: "Get started in minutes",
      fullDesc: "Chat with Emily to set up your campaign objectives, target audience, and content strategy.",
      illustration: (
        <div className="w-full h-full rounded-xl">
          <img 
            src="/Scene-1.gif" 
            alt="Create Campaign illustration"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      )
    },
    {
      title: "Select Creators Ready to Collaborate",
      shortDesc: "You choose the vibe, we find the creators.",
      fullDesc: "Browse vetted and negotiated creators at transparent prices. Let Emily analyze and compare candidates.",
      illustration: (
        <div className="w-full h-full rounded-xl">
          <img 
            src="/Scene-2.gif" 
            alt="Select Creators illustration"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      )
    },
    {
      title: "Scale Viral Growth",
      shortDesc: "Monitor your campaign performance in real-time.",
      fullDesc: "View detailed metrics, surface viral content. Let Koli curate the next cohort of similar top-performing creators and viral content template to multiply virality.",
      illustration: (
        <div className="w-full h-full rounded-xl">
          <img 
            src="/Scene-3.gif" 
            alt="Scale Viral Growth illustration"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gentle-black mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
          Koli helps you connect with 420M+ creators across Instagram, Tiktok, YouTube and Linkedin, in a few clicks.
          </p>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-1 items-stretch ${
              index === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Text Content */}
              <div className={`w-full h-96 p-4 mx-2 lg:mx-4 flex flex-col justify-center ${
                index === 1 ? 'lg:col-start-2' : ''
              }`}>
                <div className="flex items-center mb-4 border-l-2 border-lime pb-2 pl-4 bg-lime/10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gentle-black leading-loose">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {step.fullDesc}
                </p>
              </div>

              {/* Illustration */}
              <div className={`w-64 sm:w-80 md:w-96 lg:w-[400px] xl:w-[500px] h-auto flex items-center justify-center mx-auto ${
                index === 1 ? 'lg:col-start-1' : ''
              }`}>
                <div className="w-full h-full max-w-md">
                  {step.illustration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;