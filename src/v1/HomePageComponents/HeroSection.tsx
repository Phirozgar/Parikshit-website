import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              PARIKSHIT STUDENT SATELLITE
            </h1>
            <p className="text-lg mb-8 text-[#7AECEC]/80">
              Pioneering space exploration through student-led innovation and research.
            </p>
            <button className="bg-[#7AECEC] text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors flex items-center">
              JOIN US <ChevronRight className="ml-2" />
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80"
              alt="Satellite in space"
              className="rounded-lg shadow-2xl shadow-[#7AECEC]/20"
            />
            <div className="absolute inset-0 border-2 border-[#7AECEC]/20 rounded-lg -translate-x-4 -translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
