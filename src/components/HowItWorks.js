import React from 'react';

const HowItWorks = () => {

  const steps = [
    {
      title: "1. Create Campaign ",
      shortDesc: "Chat with Emily to launch campaign in minutes. ",
      fullDesc: "No more keyword hunts, hashtag searches, or sifting through 50+ nonsense categories. Just chat in your own words—like you’re talking to a creator marketing pro.",
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
      title: "2. Select Creators Ready to Collaborate",
      shortDesc: "Skip search and outreach, find creators already ready to collaborate with you.",
      fullDesc: "Come back to a shortlist of creators, already vetted and negotiated at transparent prices. Chat with Emily to analyze and compare candidates ready to collaborate. No more juggling emails, DMs, search tools, CRMs, and spreadsheets, and losing track along the way. Need a quick answer on a creator? Just ask Emily.",
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
      title: "3. Scale Performance",
      shortDesc: "Take going viral from luck to repeatable success.",
      fullDesc: "No more missing signals when it’s too late. Emily gives you real insights from creator content and engagement, curates the next cohort of top-performing creators, and builds viral content templates to multiply your reach.",
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
          <h2 className="text-3xl md:text-5xl text-gentle-black mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
          Meet Emily, your Koli campaign assistant. From sourcing creators to shaping strategy—done in just a few chats.
          </p>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-1 items-stretch ${
              index === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Text Content */}
              <div className={`w-full h-96 py-2 px-4 mx-2 lg:mx-4 flex flex-col justify-start ${
                index === 1 ? 'lg:col-start-2' : ''
              }`}>
                <div className="flex mb-4 pb-2 pl-4">
                  <h3 className="text-lg font-bold text-[#4A7C00] leading-loose">
                    {step.title}
                  </h3>
                </div>
                <div className="flex items-center mb-4 pb-2 pl-4">
                  <h3 className="text-3xl font-semibold text-gentle-black leading-tight">
                    {step.shortDesc}
                  </h3>
                </div>
                <p className="text-[#6B7280] leading-relaxed mb-4 pb-2 p-4 text-lg">
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