import { Link } from "react-router-dom";

export function ProjectsSection() {
  const projects = [
    {
      id: "cubesat",
      title: "CubeSat Development",
      image: "/assets/Cubesat.webp",
    },
    {
      id: "cansat",
      title: "Cansat Development",
      image: "/assets/Cansat.png",
    },
    // {
    //   id: "pagos",
    //   title: "PAGOS (Parikshit Ground Station)",
    //   image: "/assets/pagos.JPG",
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
              className="group relative bg-[#0A0A0A] overflow-hidden border border-[#7AECEC]/20 hover:border-[#7AECEC]/60 transition-all duration-300"
            >
              {/* Image container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-40"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#7AECEC] mb-2">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}