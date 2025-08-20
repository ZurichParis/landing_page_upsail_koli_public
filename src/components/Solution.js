import React from 'react';

const Solution = () => {
  const solutions = [
    {

      title: "20x Faster",
      subtitle: "Activation",
      description: "Get creator content live in days, not months."
    },
    {

      title: "10x ROI",
      description: "Meet business goals faster with the right content, creators, and execution."
    },
    {

      title: "0 Extra",
      subtitle: "Headcount cost",
      description: "Outsource creator marketing ops to Koli AI agents."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gentle-black mb-8">
            Why Koli?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-7xl mx-auto">
          Koli flips the script. AI agents handle everything from creative direction and creator sourcing to outreach and campaign management.<br/> So you can launch faster, scale smarter, and see results — all without adding headcount.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Upper section with light transient color and title */}
              <div className="bg-gradient-to-br from-lime/20 to-green-100 h-40 p-8 text-center flex flex-col items-center justify-center space-y-4">
                <h3 className="font-semibold text-gentle-black font-bold text-4xl">
                  {solution.title}
                </h3>
                <h3 className="font-semibold text-gentle-black font-bold text-4xl">
                  {solution.subtitle}
                </h3>
              </div>
              {/* Lower section with white background and description */}
              <div className="bg-white p-8">
                <p className="text-gray-600 leading-relaxed text-xl">
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