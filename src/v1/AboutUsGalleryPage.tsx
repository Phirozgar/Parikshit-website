import React, { useState, useEffect } from "react";

const galleryImages = [
  {
    src: "/assets/gimages/image5.jpg", //1
  },
  {
    src: "/assets/gimages/image2.jpg", //2
  },
  {
    src: "/assets/gimages/image14.jpg" //3
  },
  {
    src: "/assets/gimages/image4.jpg" //4
  },
  {
    src: "/assets/gimages/image1.jpg" //5
  },
  {
    src: "/assets/gimages/image11.jpg" //6
  },
  {
    src: "/assets/gimages/image12.jpg" //7
  },
  {
    src: "/assets/gimages/image3.jpg" //8
  },
  {
    src: "/assets/gimages/image6.jpg" //9
  },
  {
    src: "/assets/gimages/image7.jpg" //10
  },
  {
    src: "/assets/gimages/image10.jpg" //11
  },
  {
    src: "/assets/gimages/image16.jpg" //12
  },
  {
    src: "/assets/gimages/image8.jpg" //13
  },
  {
    src: "/assets/gimages/image13.jpg" //14
  },
  {
    src: "/assets/gimages/image15.jpg" //15
  },
  {
    src: "/assets/gimages/image9.jpg" //16
  }
];

function AboutUsGalleryPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with parallax effect */}
        <div 
          className="text-center mb-16 relative"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#7AECEC] mb-6 opacity-90">
            About Us: Gallery
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#7AECEC] to-transparent mx-auto mb-8"></div>
          <p className="text-[#7AECEC]/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore what we do at Parikshit: hands-on engineering, subsystem integration, and team collaboration. Here are some highlights from our journey.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative bg-[#111111] rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-[#7AECEC]/20 hover:shadow-2xl cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7AECEC]/0 via-[#7AECEC]/10 to-[#7AECEC]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-xl border border-[#7AECEC]/20 group-hover:border-[#7AECEC]/60 transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                  loading="lazy"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating background elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#7AECEC]/10 rounded-full animate-pulse"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Custom CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
}

export default AboutUsGalleryPage;