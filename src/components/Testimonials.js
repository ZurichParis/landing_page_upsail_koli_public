import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      feedback: "This platform completely transformed our workflow. We've seen a 40% increase in productivity since implementation.",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      feedback: "The integration was seamless and the support team is exceptional. Highly recommend for any growing business.",
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Operations Director",
      company: "Global Solutions",
      feedback: "Outstanding platform with incredible features. It's exactly what we needed to scale our operations efficiently.",
      avatar: "ET"
    },
    {
      name: "David Park",
      role: "Founder",
      company: "InnovateLab",
      feedback: "Game-changing solution! The analytics and insights have helped us make better decisions faster than ever before.",
      avatar: "DP"
    },
    {
      name: "Lisa Wang",
      role: "VP Engineering",
      company: "CloudTech",
      feedback: "Reliable, fast, and user-friendly. Our team adopted it immediately and we couldn't be happier with the results.",
      avatar: "LW"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gentle-black mb-4">
            What Our Beta Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of satisfied customers who have transformed their business
          </p>
        </div>
        
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6" style={{ width: 'max-content' }}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
                style={{ width: '350px' }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lime/20 rounded-full flex items-center justify-center text-gentle-black font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gentle-black">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>
                <div className="flex mt-4 text-lime">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;