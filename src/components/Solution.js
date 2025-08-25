import React from 'react';

const Solution = () => {
  const solutions = [
    {

      title: "20x",
      subtitle: "Faster Activation",
      description: "Get creator content live in days, not months."
    },
    {

      title: "10x",
      subtitle: "ROI",
      description: "Meet business goals faster with the right content, creators, and execution."
    },
    {

      title: "0",
      subtitle: "Extra Headcount",
      description: "Outsource creator marketing ops to Koli AI agents."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="font-medium text-[64px] leading-[75px] text-gentle-black text-center">
          <h2 className="mb-4">Creator marketing ops automated,</h2>
          <h2>built for speed and ROI</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-black rounded-xl min-h-[20vh] border-l-4 border-[#7ED321] hover:border-[#7ED321] transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Main content section */}
              <div className="p-8 space-y-6">
                {/* Title with two parts */}
                <div className="space-y-2">
                  <h3 className="text-3xl">
                    <span className="text-[#7ED321]">{solution.title}</span>
                    <span className="text-[#DCDCDC]"> {solution.subtitle}</span>
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-[#ADADAD] leading-relaxed text-lg">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;