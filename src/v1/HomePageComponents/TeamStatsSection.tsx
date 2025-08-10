import { Users } from "lucide-react";

export function TeamStatsSection() {
  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-gugi mb-12 text-center">OUR TEAM</h2>
        <div className="mb-12">
          {/* First row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center bg-[#0A0A0A] flex flex-col items-center justify-center">
              <Users className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">25+ Members</h3>
              <p className="text-[#7AECEC]/80">A vibrant team of innovators, engineers, and researchers</p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center bg-[#0A0A0A] flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-2">8 Subsystems</h3>
              <p className="text-[#7AECEC]/80">ODHS, ADCS, EPS, COMMS, STMS, Payload, Research, Admin & Ops</p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center bg-[#0A0A0A] flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-2">80+ Alumni</h3>
              <p className="text-[#7AECEC]/80">Our alumni network spans 20+ top companies & research labs across the globe</p>
            </div>
          </div>
          
          {/* Second row - 1 centered card */}
          <div className="flex justify-center">
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center bg-[#0A0A0A] flex flex-col items-center justify-center w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">Connected to 20+ Companies</h3>
              <p className="text-[#7AECEC]/80">Our alumni network is at ISRO, DRDO, SpaceX, HAL, Boeing and leading tech firms</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="/team" className="inline-block px-8 py-3 bg-[#7AECEC] text-black font-bold rounded-full shadow hover:bg-white transition-colors text-lg">Meet the Full Team</a>
        </div>
      </div>
    </section>
  );
}