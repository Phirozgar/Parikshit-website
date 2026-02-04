import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  image2: string;
  shortDescription: string;
  details: string[];
};

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const projects: Project[] = [
    {
      id: "cubesat",
      title: "CubeSat Development",
      subtitle: "2U Student Mission",
      image: "/assets/Cubesat.webp",
      image2: "/assets/CubeSat_Model.png",
      shortDescription: 
        "A 2U nanosatellite built by student for real orbital deployment.",
      details: [
        "Planned orbit: 500 km Polar LEO",
        "Thermal Earth imaging",
        "Sustainable deorbiting via electrodynamic tether"
      ]
    },
    {
      id: "cansat",
      title: "CanSat Development",
      subtitle: "Competition Mission",
      image: "/assets/Cansat.png",
      image2: "/assets/cansat4.png",
      shortDescription: 
        "A can-sized satellite for rapid prototyping and competitions.",
      details: [
        "Can-sized experimental satellite",
        "Payload testing & telemetry",
        "Real-world launch simulation"
      ]
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-gugi mb-2 text-[#7AECEC]">
            PROJECTS
          </h2>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setClickPosition({
                  x: rect.left + rect.width / 2,
                  y: rect.top + rect.height / 2
                });
                setActiveProject(project);
              }}
              className="group relative overflow-hidden rounded-lg border border-[#7AECEC]/40 hover:border-[#7AECEC] transition-all duration-500 text-left hover:shadow-lg hover:shadow-[#7AECEC]/20"
            >
              {/* Tech corner accents - responsive sizes */}
              <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[#7AECEC]/40 z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-[#7AECEC]/40 z-10"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-[#7AECEC]/40 z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[#7AECEC]/40 z-10"></div>

              {/* Background Image - responsive height */}
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
                
                {/* Default content - always visible */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8">
                  <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#7AECEC] to-transparent mb-3 sm:mb-4"></div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#7AECEC] text-xs sm:text-sm font-mono uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                  <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#7AECEC] to-transparent mt-3 sm:mt-4"></div>
                </div>

                {/* Hover overlay - slides up from bottom */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/98 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out flex flex-col justify-end p-4 sm:p-6">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-1 bg-[#7AECEC] rounded-full"></div>
                      <div className="text-xs text-[#7AECEC]/70 font-mono uppercase tracking-wider">Specifications</div>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#7AECEC]/30 to-transparent"></div>
                    </div>
                    <div className="space-y-2">
                      {project.details.map((detail, index) => (
                        <div key={index} className="flex items-start text-gray-300 text-xs sm:text-sm">
                          <div className="w-1.5 h-1.5 bg-[#7AECEC] rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-[#7AECEC]/30 to-transparent"></div>
                    <p className="text-[#7AECEC]/60 text-xs font-mono">VIEW MISSION</p>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#7AECEC]/30"></div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
              onClick={() => setActiveProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#0A0A0A] via-[#0d1117] to-[#0A0A0A] max-w-5xl w-full rounded-xl border border-[#7AECEC]/60 shadow-2xl shadow-[#7AECEC]/20 relative overflow-hidden max-h-[95vh] sm:max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
                initial={{ 
                  scale: 0.3,
                  x: clickPosition.x - window.innerWidth / 2,
                  y: clickPosition.y - window.innerHeight / 2,
                  opacity: 0
                }}
                animate={{ 
                  scale: 1,
                  x: 0,
                  y: 0,
                  opacity: 1
                }}
                exit={{ 
                  scale: 0.3,
                  x: clickPosition.x - window.innerWidth / 2,
                  y: clickPosition.y - window.innerHeight / 2,
                  opacity: 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                {/* Tech corner accents - responsive */}
                <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-[#7AECEC]/40"></div>
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-r-2 border-[#7AECEC]/40"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-l-2 border-[#7AECEC]/40"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-[#7AECEC]/40"></div>
                
                {/* Animated scan lines */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7AECEC]/20 to-transparent animate-pulse"></div>
                </div>
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'linear-gradient(#7AECEC 1px, transparent 1px), linear-gradient(90deg, #7AECEC 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>

                {/* Close button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-gray-400 hover:text-[#7AECEC] transition-colors duration-200 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded border border-[#7AECEC]/30 hover:border-[#7AECEC] hover:bg-[#7AECEC]/10 backdrop-blur-sm bg-black/50"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative flex flex-col md:flex-row overflow-y-auto max-h-[95vh] sm:max-h-[90vh]">
                  {/* LEFT SIDE - Image */}
                  <div className="md:w-2/5 relative">
                    <img
                      src={activeProject.image2}
                      alt={activeProject.title}
                      className="w-full h-64 sm:h-80 md:h-full md:min-h-[500px] object-cover md:border-r-2 border-[#7AECEC]/30"
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-[#0A0A0A]/50"></div>
                  </div>

                  {/* RIGHT SIDE - Content */}
                  <div className="md:w-3/5 p-4 sm:p-6 md:p-8 overflow-y-auto">
                    {/* Project Header */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-px flex-1 bg-gradient-to-r from-[#7AECEC]/50 to-transparent"></div>
                        <span className="text-xs text-[#7AECEC]/70 font-mono uppercase tracking-widest px-2">
                          {activeProject.subtitle}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                        {activeProject.title}
                      </h3>
                      
                      {/* Tech divider */}
                      <div className="flex items-center gap-2 my-3 sm:my-4">
                        <div className="w-2 h-2 bg-[#7AECEC] rounded-full animate-pulse"></div>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#7AECEC]/50 to-transparent"></div>
                      </div>
                    </div>

                    {/* Mission Brief */}
                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-[#7AECEC]/5 to-transparent border-l-2 border-[#7AECEC]/50">
                      <div className="text-xs text-[#7AECEC]/60 font-mono uppercase tracking-wider mb-2">Mission Brief</div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {activeProject.shortDescription}
                      </p>
                    </div>

                    {/* Technical Specifications */}
                    <div className="border border-[#7AECEC]/20 rounded-lg bg-gradient-to-br from-[#7AECEC]/5 to-transparent p-4 sm:p-5 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-1 bg-[#7AECEC] rounded-full"></div>
                        <h4 className="text-xs font-bold text-[#7AECEC] uppercase tracking-wider font-mono">
                          Technical Specifications
                        </h4>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#7AECEC]/30 to-transparent ml-2"></div>
                      </div>
                      
                      <div className="space-y-3">
                        {activeProject.details.map((d, i) => (
                          <div key={i} className="flex items-start group">
                            <div className="mt-1.5 mr-3 w-1.5 h-1.5 bg-[#7AECEC] rounded-full group-hover:scale-150 transition-transform flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm flex-1 group-hover:text-white transition-colors font-light">
                              {d}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom tech line */}
                    <div className="mt-4 sm:mt-6 flex items-center gap-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#7AECEC]/30 to-transparent"></div>
                      <div className="text-xs text-[#7AECEC]/40 font-mono">END TRANSMISSION</div>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#7AECEC]/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}