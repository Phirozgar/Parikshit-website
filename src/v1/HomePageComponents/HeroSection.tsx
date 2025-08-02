import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }} // Darkens the video to make text more readable
        >
          <source src="/assets/Background_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="items-center">
          <div>
            <h1 className="text-5xl md:text-6xl mb-6 tracking-wider font-bold text-white" 
                style={{ fontFamily: 'Orbitron' }}>
              PARIKSHIT | STUDENT SATELLITE
            </h1>
            <button className="bg-[#7AECEC] text-black px-8 py-3 rounded-full font-bold 
                             hover:bg-white transition-colors flex items-center">
              JOIN US <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}