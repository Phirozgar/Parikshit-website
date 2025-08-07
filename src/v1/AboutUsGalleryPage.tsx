
import React, { useState, useRef, useEffect } from "react";

// All images from assets/gallery
const galleryImages = [
  { src: "/assets/gallery/image1.jpg", alt: "Gallery Image 1" },
  { src: "/assets/gallery/image2.jpg", alt: "Gallery Image 2" },
  { src: "/assets/gallery/image3.jpg", alt: "Gallery Image 3" },
  { src: "/assets/gallery/image4.jpg", alt: "Gallery Image 4" },
  { src: "/assets/gallery/image5.jpg", alt: "Gallery Image 5" },
  { src: "/assets/gallery/image6.jpg", alt: "Gallery Image 6" },
  { src: "/assets/gallery/image7.jpg", alt: "Gallery Image 7" },
  { src: "/assets/gallery/image8.jpg", alt: "Gallery Image 8" },
  { src: "/assets/gallery/image9.jpg", alt: "Gallery Image 9" },
  { src: "/assets/gallery/image10.jpg", alt: "Gallery Image 10" },
  { src: "/assets/gallery/image11.jpg", alt: "Gallery Image 11" },
  { src: "/assets/gallery/image12.jpg", alt: "Gallery Image 12" },
  { src: "/assets/gallery/image13.jpg", alt: "Gallery Image 13" },
  { src: "/assets/gallery/image14.jpg", alt: "Gallery Image 14" },
  { src: "/assets/gallery/image15.jpg", alt: "Gallery Image 15" },
  { src: "/assets/gallery/image16.jpg", alt: "Gallery Image 16" }
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
                  const isHoveredImg = hovered && hovered.col === col && (idx % images[col].length) === hovered.idx;
                  const isTranslucent = hovered && !(hovered.col === col && (idx % images[col].length) === hovered.idx);
                  return (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      className={`w-full h-64 object-cover rounded-lg shadow-lg border border-[#7AECEC]/20 cursor-pointer transition duration-300 ${isHoveredImg ? "z-50 border-2 border-[#7AECEC]" : ""} ${isTranslucent ? "opacity-30" : "opacity-100"}`}
                      onMouseEnter={() => setHovered({col, idx: idx % images[col].length})}
                    />
                  );
                })}
                {/* Show alt text below hovered image */}
                {hovered && hovered.col === col ? (
                  <div className="absolute left-0 right-0 flex justify-center" style={{top: `${(hovered.idx + images[col].length) * 16 + hovered.idx * 256}px`}}>
                    <p className="text-[#7AECEC] text-lg font-bold mt-4 bg-[#111111]/80 px-4 py-2 rounded-lg shadow-lg z-50">{images[col][hovered.idx].alt}</p>
                  </div>
                ) : null}
              </div>
            </div>
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
        .glass-blur {
          backdrop-filter: blur(12px);
          background: rgba(10,10,10,0.6);
        }
      `}</style>
    </div>
  );
}

export default AboutUsGalleryPage;
