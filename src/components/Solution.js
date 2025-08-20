import React from 'react';

const Solution = () => {
  const solutions = [
    {

      title: "Lightning Fast",
      description: "Experience unprecedented speed with our optimized platform that processes data in real-time, ensuring you never miss a beat."
    },
    {

      title: "Secure & Reliable",
      description: "Built with enterprise-grade security and 99.9% uptime guarantee. Your data is protected with advanced encryption and monitoring."
    },
    {

      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows. Our API-first approach makes setup quick and maintenance effortless."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gentle-black mb-4">
            Why Choose Our Solution?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Upper section with light transient color and title */}
              <div className="bg-gentle-black h-40 p-8 text-center flex items-center justify-center">
                <h3 className="text-xl font-semibold text-[#BFFF00]">
                  {solution.title}
                </h3>
              </div>
              {/* Lower section with white background and description */}
              <div className="bg-white p-8">
                <p className="text-gray-600 leading-relaxed">
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