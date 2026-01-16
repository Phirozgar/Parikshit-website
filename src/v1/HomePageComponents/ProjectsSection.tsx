import { useState } from "react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  shortDescription: string;
  details: string[];
};

export function ProjectsSection() {
  const [activeProject, setActiveProject ] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "cubesat",
      title: "CubeSat Development",
      subtitle: "2U Student Mission",
      image: "/assets/Cubesat.webp",
      shortDescription: 
        "A 2U nanosatellite built by student for real orbital deploymeny.",
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
      shortDescription: 
        "A can-sized satellite for rapid prototyping and competitions.",
      details: [
        "Can-sized experimental satellite",
        "Payload testing & telemetry",
        "Real-world launch simulation"
      ]
    },
    // {
    //   id: "pagos",
    //   title: "PAGOS Ground Station",
    //   subtitle: "Parikshit Mission",
    //   image: "/assets/pagos.JPG",
    //   shortDescription: 
    //    "",
    //   details: [
    //     "Ground station details here",
    //     "Communication systems",
    //     "Data reception & processing"
    //   ]
    // }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-gugi mb-2 text-[#7AECEC]">
            PROJECTS
          </h2>
        </div>

        {/*PROJECT CARDS*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative overflow-hidden rounded-lg border border-[#7AECEC]/20 hover:border-[#7AECEC]/60 transition-all duration-500 text-left"
            >
              {/* Background Image */}
              <div className="relative h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Default content - always visible */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#7AECEC] text-lg font-semibold">
                    {project.subtitle}
                  </p>
                </div>

                {/* Hover overlay - slides up from bottom - only bottom half */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out flex flex-col justify-end p-8">
                  <div className="space-y-2 mb-4">
                    {project.details.map((detail, index) => (
                      <p key={index} className="text-gray-300 text-sm">
                        • {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs">
                    More on {project.title}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* MODAL */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-[#0A0A0A] max-w-xl w-full rounded-2xl border border-[#7AECEC]/30 p-6 relative animate-fade-in">
              {/* Close button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-4 text-[#7AECEC] text-2xl"
              >
                ✕
              </button>

              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-2xl font-bold text-[#7AECEC] mb-2">
                {activeProject.title}
              </h3>

              <p className="text-[#7AECEC]/80 mb-4">
                {activeProject.shortDescription}
              </p>

              <ul className="list-disc pl-5 text-[#7AECEC]/70 space-y-1">
                {activeProject.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}