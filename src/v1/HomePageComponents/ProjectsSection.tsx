import { Link } from "react-router-dom";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/projects?project=cubesat" className="p-6 border border-[#7AECEC]/20 rounded-lg bg-[#0A0A0A] flex flex-col items-center hover:shadow-lg transition-shadow">
            <img
              src="/assets/Cubesat.webp"
              alt="CubeSat project"
              className="rounded-lg mb-6 w-full h-56 object-cover border border-[#7AECEC]/10"
            />
            <h3 className="text-2xl font-bold text-[#7AECEC]">CubeSat Development</h3>
          </Link>
          <Link to="/projects?project=cansat" className="p-6 border border-[#7AECEC]/20 rounded-lg bg-[#0A0A0A] flex flex-col items-center hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80"
              alt="Cansat project"
              className="rounded-lg mb-6 w-full h-56 object-cover border border-[#7AECEC]/10"
            />
            <h3 className="text-2xl font-bold text-[#7AECEC]">Cansat Development</h3>
          </Link>
          <Link to="/projects?project=pagos" className="p-6 border border-[#7AECEC]/20 rounded-lg bg-[#0A0A0A] flex flex-col items-center hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&q=80"
              alt="PAGOS ground station"
              className="rounded-lg mb-6 w-full h-56 object-cover border border-[#7AECEC]/10"
            />
            <h3 className="text-2xl font-bold text-[#7AECEC]">PAGOS (Parikshit Ground Station)</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
