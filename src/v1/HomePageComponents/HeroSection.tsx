import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


export function HeroSection() {

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
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-bold text-white font-orbitron">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.3rem] 
                           tracking-wide sm:tracking-wider md:tracking-[0.35rem] font-bold">
              PARIKSHIT
            </div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                           mt-2 sm:mt-3 md:mt-4 text-[rgba(218,193,66,1)]">
              STUDENT SATELLITE
            </div>
          </h1>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <button 
              className="bg-[#7AECEC] text-black px-4 py-2 sm:px-6 sm:py-3 
                        rounded-full font-bold text-sm sm:text-base
                        hover:bg-white transition-colors flex items-center 
                        mx-auto shadow-lg hover:shadow-xl transform hover:scale-105
                        transition-all duration-300"
              >
                <Link to="/recruitments">
                  Recruitments Open
                </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}