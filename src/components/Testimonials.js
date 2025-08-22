import React, { useEffect, useRef } from 'react';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      feedback: "This platform completely transformed our workflow. We've seen a 40% increase in productivity since implementation.",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      feedback: "The integration was seamless and the support team is exceptional. Highly recommend for any growing business.",
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Operations Director",
      feedback: "Outstanding platform with incredible features. It's exactly what we needed to scale our marketing efficiently.",
      avatar: "ET"
    },
    {
      name: "David Park",
      role: "Founder",
      feedback: "Game-changing solution! The analytics and insights have helped us make better decisions faster than ever before.",
      avatar: "DP"
    },
    {
      name: "Lisa Wang",
      role: "VP Engineering",
      feedback: "Reliable, fast, and user-friendly. Our team adopted it immediately and we couldn't be happier with the results.",
      avatar: "LW"
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const allTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const cardWidth = 370; // 350px + 20px gap
    const totalWidth = testimonials.length * cardWidth;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 30);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-gentle-black mb-4">
            What Our Beta Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of satisfied customers who have transformed their business
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          className="overflow-hidden pb-6"
        >
          <div className="flex space-x-5 animate-scroll">
            {allTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 relative"
                style={{ width: '350px', height: '280px' }}
              >
                {/* Main testimonial text at top */}
                <div className="p-6 pb-20">
                  <p className="text-gray-700 leading-relaxed italic text-lg">
                    "{testimonial.feedback}"
                  </p>
                </div>
                
                {/* Author info at bottom right */}
                <div className="absolute bottom-0 right-0 p-6 flex items-center">
                  <div className="text-right mr-3">
                    <h4 className="font-semibold text-gentle-black text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="w-12 h-12 bg-lime/20 rounded-full flex items-center justify-center text-gentle-black font-semibold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
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