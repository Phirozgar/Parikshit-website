import React, { useState, useRef, useEffect } from "react";

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
  { src: "/assets/gallery/image13.jpg", alt: "Unveiling the system’s backbone" },
  { src: "/assets/gallery/image14.jpg", alt: "Presenting engineering modules to celebrate space innovation" },
  { src: "/assets/gallery/image15.jpg", alt: "Details from the lab bench" },
  { src: "/assets/gallery/image16.jpg", alt: "A snapshot of shared effort" }
];

// Distribute images evenly across 3 columns
const imagesCol1 = galleryImages.filter((_, i) => i % 3 === 0);
const imagesCol2 = galleryImages.filter((_, i) => i % 3 === 1);
const imagesCol3 = galleryImages.filter((_, i) => i % 3 === 2);

function AboutUsGalleryPage() {
  const [hovered, setHovered] = useState<{col: number, idx: number} | null>(null);
  const images = [imagesCol1, imagesCol2, imagesCol3];
  
  // Glass effect overlay
  const glassClass = hovered !== null ? "fixed inset-0 bg-[#0A0A0A]/60 backdrop-blur-lg z-40" : "";

  // Marquee animation duration (seconds)
  const marqueeDuration = 18;

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-20 px-4 relative">
      {hovered !== null && <div className={glassClass}></div>}
      
      <div className="max-w-7xl mx-auto relative z-50">
        <h1 className="text-4xl font-bold text-center text-[#7AECEC] mb-10">About Us: Gallery</h1>
        <p className="text-[#7AECEC]/80 text-center mb-8 text-lg max-w-2xl mx-auto">
          Explore what we do at Parikshit: hands-on engineering, subsystem integration, and team collaboration. Here are some highlights from our journey.
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
                      />
                      
                      {/* Hover text overlay positioned on the image */}
                      {isHoveredImg && (
                        <div className="absolute inset-0 flex items-center justify-center z-[60] pointer-events-none">
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
      </div>
      
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