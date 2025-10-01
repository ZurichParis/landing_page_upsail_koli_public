const Interview = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Left side - Testimonial */}
          <div className="flex flex-col justify-center p-8 md:p-12 bg-[#7BCE20] md:col-span-3">
            <div className="space-y-1">
              <div className="text-5xl text-black">"</div>
              <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed pb-4">
                Our customers listen to influencers way more than ads. I just want fast results at good prices.
              </blockquote>
              <div className="pt-4 border-t border-white">
                <p className="font-semibold text-gray-900">Simon Bigot</p>
                <p className="text-sm text-gray-600">Co-founder, Avahome</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Video */}
          <div className="relative bg-white overflow-hidden md:min-h-full md:col-span-2">
            <video 
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
              controls
              autoPlay
              muted
              loop
            >
              <source src="https://res.cloudinary.com/dswailmr0/video/upload/v1759330515/avahome_testimonial_mbol7w.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;