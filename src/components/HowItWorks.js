import React, { useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Sign Up & Onboard",
      shortDesc: "Get started in minutes",
      fullDesc: "Create your account and complete our streamlined onboarding process. Our guided setup helps you configure your workspace and connect your existing tools in just a few clicks.",
      illustration: (
        <div className="w-full h-64 bg-gradient-to-br from-lime/20 to-green-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-lime/40 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gentle-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <p className="text-gentle-black font-medium">User Registration</p>
          </div>
        </div>
      )
    },
    {
      title: "Configure Your Workflow",
      shortDesc: "Customize to your needs",
      fullDesc: "Set up your custom workflows, automation rules, and team permissions. Our intelligent system learns from your preferences and suggests optimizations to maximize efficiency.",
      illustration: (
        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gentle-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gentle-black font-medium">Workflow Configuration</p>
          </div>
        </div>
      )
    },
    {
      title: "Launch & Scale",
      shortDesc: "Go live and grow",
      fullDesc: "Launch your optimized workflow and watch your productivity soar. Our platform scales with your business, providing real-time analytics and insights to help you make data-driven decisions.",
      illustration: (
        <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gentle-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-gentle-black font-medium">Growth & Analytics</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gentle-black mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get up and running in three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-full p-6 text-left transition-all duration-200 ${
                    activeStep === index 
                      ? 'bg-lime/10 border-l-4 border-lime' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gentle-black mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.shortDesc}
                      </p>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeStep === index 
                        ? 'bg-lime text-gentle-black' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                </button>
                {activeStep === index && (
                  <div className="px-6 pb-6 pt-2 bg-white border-l-4 border-lime">
                    <p className="text-gray-700 leading-relaxed">
                      {step.fullDesc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="transition-all duration-300">
              {steps[activeStep].illustration}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;