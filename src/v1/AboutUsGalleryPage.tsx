import React from "react";

const galleryImages = [
  {
    src: "/assets/ChatGPT Image Apr 1, 2025, 11_46_54 PM.png",
    alt: "Team working on satellite hardware"
  },
  {
    src: "/assets/ChatGPT Image Apr 2, 2025, 04_04_39 PM.png",
    alt: "Subsystem integration session"
  }
  // Add more images here as needed
];

function AboutUsGalleryPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#7AECEC] mb-10">About Us: Gallery</h1>
        <p className="text-[#7AECEC]/80 text-center mb-8 text-lg max-w-2xl mx-auto">
          Explore what we do at Parikshit: hands-on engineering, subsystem integration, and team collaboration. Here are some highlights from our journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="bg-[#111111] rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover mb-4 border border-[#7AECEC]/20"
              />
              <p className="text-[#7AECEC]/70 text-center px-4 pb-4">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUsGalleryPage;
