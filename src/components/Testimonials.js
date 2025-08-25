import React, { useEffect, useRef } from 'react';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder",
      company: "AI SaaS",
      feedback: "I thought I needed to hire a vibe marketer. Now I’ll probably try Koli first.",
      avatar: "SC"
    },
    {
      name: "Emma Thompson",
      role: "Founder",
      company: "consumer app",
      feedback: "As a founder, I don’t want another dashboard. I want results. Koli feels like the product we’ve been waiting for—an AI campaign manager that does the heavy lifting.",
      avatar: "ET"
    },
    {
      name: "David Park",
      role: "VP Growth",
      company: "e-commerce brand",
      feedback: "The promise of Koli is huge. If it really delivers on automating sourcing, outreach, and performance insights, this could replace half the tools we juggle today.",
      avatar: "DP"
    },
    {
      name: "Lisa Wang",
      role: "CMO",
      company: "health & lifestyle brand",
      feedback: "Influencer platforms are everywhere, but they all require tons of manual work. Koli is the first idea that actually treats creator marketing like a repeatable growth engine. I can’t wait to try it.",
      avatar: "LW"
    },
    {
      name: "Lucas C",
      role: "Head of Growth",
      company: "consumer AI startup",
      feedback: "Koli feels like it should have existed yesterday. No tool I’ve seen brings creators, campaigns, and insights into one place with AI running the ops.",
      avatar: "LC"
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

    const interval = setInterval(scroll, 50);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-medium text-[32px] md:text-[64px] leading-[38px] md:leading-[75px] text-gentle-black mb-6">
            What early supporters are saying 
          </h2>
          <p className="font-medium text-[16px] md:text-[20px] leading-[22px] md:leading-[28px] text-gray-600 mx-auto max-w-4xl px-4">
            Why our community can’t wait for Koli
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
                    <h4 className="font-semibold text-gentle-black text-sm">{testimonial.role}</h4>
                    <p className="text-xs text-gray-600">{testimonial.company}</p>
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