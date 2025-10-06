import React from 'react';

const HowItWorks = () => {

  const steps = [
    {
      title: "1. Create Campaign ",
      shortDesc: "Chat with Emily to launch campaign in minutes. ",
      fullDesc: "No more keyword hunts, hashtag searches, or sifting through 50+ nonsense categories. Just chat in your own words—like you’re talking to a creator marketing pro.",
      illustration: (
        <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100">
          <img 
            src="https://i.ibb.co/DPL5tygC/howitworks1.gif"
            alt="How it works illustration 1"
            className="w-full h-full object-cover rounded-xl transition-opacity duration-300"
            style={{ 
              width: '100%',
              height: '101%',
              objectFit: 'cover'
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
      )
    },
    {
      title: "2. Activate Creators",
      shortDesc: "Skip search and outreach, activate creators ready to collaborate with you.",
      fullDesc: "Come back to a shortlist of creators, vetted and negotiated at transparent prices. No more juggling emails, DMs, search tools, CRMs, and spreadsheets. Need a quick answer on a creator? Just ask Emily.",
      illustration: (
        <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100">
          <img 
            src="https://i.ibb.co/bgZ3n5sc/howitworks2.gif"
            alt="How it works illustration 2"
            className="w-full h-full object-cover rounded-xl transition-opacity duration-300"
            style={{ 
              width: '100%',
              height: '101%',
              objectFit: 'cover'
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
      )
    },
    {
      title: "3. Scale Performance",
      shortDesc: "Take going viral from luck to repeatable success.",
      fullDesc: "No more missing signals. Emily gives you real insights from creator content and engagement, curates the next cohort of top-performing creators and replicates the viral content.",
      illustration: (
        <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100">
          <img 
            src="https://i.ibb.co/j9Z43gDs/howitworks3.gif"
            alt="How it works illustration"
            className="w-full h-full object-cover rounded-xl transition-opacity duration-300"
            style={{ 
              width: '100%',
              height: '101%',
              objectFit: 'cover'
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-medium text-[32px] md:text-[64px] leading-[38px] md:leading-[75px] text-gentle-black mb-6">
            How it works
          </h2>
          <p className="font-medium text-[16px] md:text-[20px] leading-[22px] md:leading-[28px] text-gray-600 mx-auto max-w-4xl px-4">
            Meet Emily, your Koli campaign assistant. From sourcing creators to shaping strategy—done in just a few chats.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20 max-w-5xl mx-auto px-4">
          {steps.map((step, index) => (
            <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 ${
              index === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Text Content */}
              <div className={`w-full min-h-[350px] md:min-h-[450px] py-4 px-2 md:px-4 flex flex-col justify-start ${
                index === 1 ? 'lg:col-start-2' : ''
              }`}>
                <div className="flex mb-4 pb-2 pl-2 md:pl-4">
                  <h3 className="text-base md:text-lg font-bold text-[#4A7C00] leading-loose">
                    {step.title}
                  </h3>
                </div>
                <div className="flex items-center mb-4 pb-2 pl-2 md:pl-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gentle-black leading-tight">
                    {step.shortDesc}
                  </h3>
                </div>
                <p className="text-[#6B7280] leading-relaxed mb-4 pb-2 p-2 md:p-4 text-base md:text-lg">
                  {step.fullDesc}
                </p>
              </div>

              {/* Video/GIF Section */}
              <div className={`w-full h-[300px] md:h-[450px] flex items-center justify-center mx-auto ${
                index === 1 ? 'lg:col-start-1' : ''
              }`}>
                <div className="w-full h-full max-w-lg">
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