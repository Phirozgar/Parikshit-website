import { ChevronRight } from "lucide-react";
import { JoinUsModal } from "./JoinUsModal";
import { useState } from "react";

export function HeroSection() {
  const [showJoinModal, setShowJoinModal ] =useState(false);

  return (
    <section id="home" className="relative min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/assets/Background_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        <div className="absolute top-[225px] left-1/2 -translate-x-1/2 text-center">
          <h1 className="md:text-6xl tracking-wider font-bold text-white" 
              style={{ fontFamily: 'Orbitron' }}>
            <div className="text-6xl text-[rgb(6,131,189)]">PARIKSHIT</div>
            <div className="text-4xl mt-4 text-[rgb(213,185,41)]">STUDENT SATELLITE</div>
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-32">
            <button className="bg-[#7AECEC] text-black px-6 py-3 rounded-full font-bold
                              hover:bg-white transition-colors flex items-center"
                              onClick={() => setShowJoinModal(true)}
                              >
              JOIN US<ChevronRight className="ml-0.5" />
            </button>
          </div>
        </div>
      </div>

      <JoinUsModal open={showJoinModal} onClose={() => setShowJoinModal(false)} />
    </section>
  );
}