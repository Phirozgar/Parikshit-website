import { FlaskRound as Flask, BookOpen, Award } from "lucide-react";

export function ResearchHighlightsSection() {
  return (
    <section id="research" className="py-20 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-gugi mb-6 text-center text-[#7AECEC] tracking-widest drop-shadow-glow">RESEARCH & PUBLICATIONS</h2>
        <p className="text-lg text-[#7AECEC]/80 text-center mb-10 max-w-3xl mx-auto">
          Parikshit Student Satellite team contributes to global space research through peer-reviewed papers and technical innovation. Explore a selection of our latest research below.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Highlighted papers preview (first 3) */}
          <div className="bg-[#111111] border border-[#7AECEC]/20 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(122,236,236,0.2)] transition-shadow backdrop-blur-md">
            <h3 className="text-lg font-bold text-[#7AECEC] mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#7AECEC] rounded-full animate-pulse"></span>
              Orbital Dynamics and System Analysis of Nanosatellite in Decaying Orbit
            </h3>
            <p className="text-[#7AECEC]/70 mb-2 text-sm font-mono">Vedant Dubey, Avish Gupta, Shraddha Meda Sheshadri, ...</p>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2020 IEEE Aerospace Conference</span>
              <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2020</span>
            </div>
            <a href="http://toc.proceedings.com/59160webtoc.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#7AECEC] text-[#0A0A0A] font-bold rounded-full shadow hover:bg-white transition-colors text-center w-fit self-end">View Paper</a>
          </div>
          <div className="bg-[#111111] border border-[#7AECEC]/20 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(122,236,236,0.2)] transition-shadow backdrop-blur-md">
            <h3 className="text-lg font-bold text-[#7AECEC] mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#7AECEC] rounded-full animate-pulse"></span>
              Complete Failure Analysis of Attitude Determination and Control Subsystem
            </h3>
            <p className="text-[#7AECEC]/70 mb-2 text-sm font-mono">Disha Gundecha, Nishant Gavhane, Vedant Dubey, ...</p>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2021 IEEE Aerospace Conference</span>
              <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2020</span>
            </div>
            <a href="http://toc.proceedings.com/59160webtoc.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#7AECEC] text-[#0A0A0A] font-bold rounded-full shadow hover:bg-white transition-colors text-center w-fit self-end">View Paper</a>
          </div>
          <div className="bg-[#111111] border border-[#7AECEC]/20 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(122,236,236,0.2)] transition-shadow backdrop-blur-md">
            <h3 className="text-lg font-bold text-[#7AECEC] mb-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#7AECEC] rounded-full animate-pulse"></span>
              Implementation of COTS components for CubeSat applications
            </h3>
            <p className="text-[#7AECEC]/70 mb-2 text-sm font-mono">Alakh Sethi, Varun Thakurta, Nanditha Gajanur, ...</p>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2017 IEEE Aerospace Conference</span>
              <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2017</span>
            </div>
            <a href="https://ieeexplore.ieee.org/document/7943808" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#7AECEC] text-[#0A0A0A] font-bold rounded-full shadow hover:bg-white transition-colors text-center w-fit self-end">View Paper</a>
          </div>
        </div>
        <div className="text-center">
          <a href="/research" className="inline-block px-8 py-3 bg-[#7AECEC] text-black font-bold rounded-full shadow hover:bg-white transition-colors text-lg">View All Research</a>
        </div>
      </div>
    </section>
  );
}
