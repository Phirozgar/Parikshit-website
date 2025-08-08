import { useState } from "react";

// All images from assets/gallery
const galleryImages = [
  { src: "/assets/gallery/image1.jpg", alt: "Project showcase with dignitary visit" },
  { src: "/assets/gallery/image2.jpg", alt: "Explaining satellite subsystems at Space Day" },
  { src: "/assets/gallery/image3.jpg", alt: "Our Alumini" },
  { src: "/assets/gallery/image4.jpg", alt: "Board Meeting" },
  { src: "/assets/gallery/image5.jpg", alt: "Board 20XX-XX" },
  { src: "/assets/gallery/image6.jpg", alt: "Capturing a moment with the Parikshit crew" },
  { src: "/assets/gallery/image7.jpg", alt: "Team showcasing their work before the guest visit." },
  { src: "/assets/gallery/image8.jpg", alt: "Secured and Prepared" },
  { src: "/assets/gallery/image9.jpg", alt: "Where it all comes together" },
  { src: "/assets/gallery/image10.jpg", alt: "For the first impression" },
  { src: "/assets/gallery/image11.jpg", alt: "Hands-on synergy powering progress" },
  { src: "/assets/gallery/image12.jpg", alt: "One chapter in our ongoing journey" },
  { src: "/assets/gallery/image13.jpg", alt: "Unveiling the system's backbone" },
  { src: "/assets/gallery/image14.jpg", alt: "Presenting engineering modules to celebrate space innovation" },
  { src: "/assets/gallery/image15.jpg", alt: "Details from the lab bench" },
  { src: "/assets/gallery/image16.jpg", alt: "A snapshot of shared effort" },
  { src: "/assets/gallery/IITR.jpg", alt: "Team at the IPSC Conference at IIT Roorkee" }
];

// Distribute images evenly across 3 columns
const imagesCol1 = galleryImages.filter((_, i) => i % 3 === 0);
const imagesCol2 = galleryImages.filter((_, i) => i % 3 === 1);
const imagesCol3 = galleryImages.filter((_, i) => i % 3 === 2);

function AboutUsGalleryPage() {
  const [hovered, setHovered] = useState<{col: number, idx: number} | null>(null);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const images = [imagesCol1, imagesCol2, imagesCol3];
  
  // Glass effect overlay - reduced z-index to stay below nav
  const glassClass = hovered !== null ? "fixed inset-0 bg-[#0A0A0A]/60 backdrop-blur-lg z-30" : "";

  // Marquee animation duration (seconds)
  const marqueeDuration = 30;

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#7AECEC]/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-bold text-[#7AECEC] mb-8 tracking-tight">
            OUR <span className="text-white">JOURNEY</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7AECEC] to-white mx-auto mb-8"></div>
          <p className="text-base md:text-lg text-[#7AECEC]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            From late-night lab sessions to international conferences, witness the passion, 
            dedication, and innovation that drives <span className="font-bold text-[#7AECEC]">Parikshit</span> forward.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-[#7AECEC]/60 text-lg">Scroll to explore our story</p>
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-[#7AECEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 relative">
        {hovered !== null && <div className={glassClass}></div>}
        
        <div className="max-w-7xl mx-auto relative z-40">
          <h2 className="text-4xl font-bold text-center text-[#7AECEC] mb-6">Gallery</h2>
          <p className="text-[#7AECEC]/80 text-center mb-12 text-lg max-w-2xl mx-auto">
            Explore what we do at Parikshit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0,1,2].map(col => (
              <div
                key={col}
                className="relative w-full h-[900px] overflow-hidden flex flex-col items-center"
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className={`marquee-col${col} flex flex-col gap-4 w-full`}
                  style={{
                    animation: `marquee-${col} ${marqueeDuration}s linear infinite`,
                    animationPlayState: hovered ? "paused" : "running"
                  }}
                >
                  {[...images[col], ...images[col]].map((img, idx) => {
                    const originalIdx = idx % images[col].length;
                    const isHoveredImg = hovered && hovered.col === col && originalIdx === hovered.idx;
                    const isTranslucent = hovered && !isHoveredImg;
                    
                    return (
                      <div key={idx} className="relative">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className={`w-full h-64 object-cover rounded-lg shadow-lg border cursor-pointer transition-all duration-300 transform ${
                            isHoveredImg 
                              ? "border-2 border-[#7AECEC] shadow-[0_0_20px_rgba(122,236,236,0.3)] scale-105" 
                              : "border-[#7AECEC]/20"
                          } ${isTranslucent ? "opacity-30" : "opacity-100"}`}
                          onMouseEnter={() => setHovered({col, idx: originalIdx})}
                          onClick={() => setSelectedImage({src: img.src, alt: img.alt})}
                        />
                        
                        {/* Hover text overlay positioned on the image - reduced z-index */}
                        {isHoveredImg && (
                          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                            <div className="bg-[#111111]/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-2xl border border-[#7AECEC]/30 max-w-[90%]">
                              <p className="text-[#7AECEC] text-lg font-bold text-center">
                                {img.alt}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating background elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
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
      </section>

      {/* Image Overlay Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-[110] w-10 h-10 bg-[#7AECEC] hover:bg-white text-black rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image caption */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-sm rounded-lg p-4 border border-[#7AECEC]/30">
              <p className="text-[#7AECEC] text-lg font-semibold text-center">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes marquee-0 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-1 {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @keyframes marquee-2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
}

export default AboutUsGalleryPage;