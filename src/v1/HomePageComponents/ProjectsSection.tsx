import { Link } from "react-router-dom";

export function ProjectsSection() {
  const projects = [
    {
      id: "cubesat",
      title: "CubeSat Development",
      subtitle: "2U Student Mission",
      image: "/assets/Cubesat.webp",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects?project=${project.id}`}
              className="group relative overflow-hidden border border-[#7AECEC]/20 hover:border-[#7AECEC]/60 transition-all duration-300"
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
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}