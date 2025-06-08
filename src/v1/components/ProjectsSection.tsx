import { Link } from "react-router-dom";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-[#7AECEC]/20 rounded-lg bg-[#0A0A0A] flex flex-col">
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
              alt="CubeSat project"
              className="rounded-lg mb-6 w-full h-56 object-cover border border-[#7AECEC]/10"
            />
            <h3 className="text-2xl font-bold mb-4 text-[#7AECEC]">CubeSat Development</h3>
            <p className="text-[#7AECEC]/80 mb-4">
              Our flagship 3U CubeSat project, designed for atmospheric research, technology demonstration, and student training in real-world space engineering.
            </p>
            <ul className="list-disc pl-5 text-[#7AECEC]/70 space-y-1 mb-2">
              <li>Full satellite design, integration, and testing by students</li>
              <li>Mission objectives include atmospheric data collection and technology validation</li>
              <li>Hands-on experience with space-grade hardware and software</li>
              <li>Collaboration with ISRO and academic mentors</li>
            </ul>
          </div>
          <div className="p-6 border border-[#7AECEC]/20 rounded-lg bg-[#0A0A0A] flex flex-col">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80"
              alt="Cansat project"
              className="rounded-lg mb-6 w-full h-56 object-cover border border-[#7AECEC]/10"
            />
            <h3 className="text-2xl font-bold mb-4 text-[#7AECEC]">Cansat Development</h3>
            <p className="text-[#7AECEC]/80 mb-4">
              Miniaturized satellite (Cansat) projects for rapid prototyping, student competitions, and subsystem validation before CubeSat integration.
            </p>
            <ul className="list-disc pl-5 text-[#7AECEC]/70 space-y-1 mb-2">
              <li>Design and launch of Cansats for national/international competitions</li>
              <li>Subsystem prototyping and testing in a cost-effective platform</li>
              <li>Training ground for new team members</li>
              <li>Data collection and telemetry experiments</li>
            </ul>
          </div>
          <div className="p-6 border border-[#7AECEC]/20 rounded-lg bg-[#0A0A0A] flex flex-col md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&q=80"
              alt="PAGOS ground station"
              className="rounded-lg mb-6 w-full h-56 object-cover border border-[#7AECEC]/10"
            />
            <h3 className="text-2xl font-bold mb-4 text-[#7AECEC]">PAGOS (Parikshit Ground Station)</h3>
            <p className="text-[#7AECEC]/80 mb-4">
              PAGOS is our custom-built ground station for satellite communication, tracking, and mission operations.
            </p>
            <ul className="list-disc pl-5 text-[#7AECEC]/70 space-y-1 mb-2">
              <li>UHF/VHF/S-band communication capability</li>
              <li>Automated satellite tracking and data downlink</li>
              <li>Remote command uplink and telemetry monitoring</li>
              <li>Supports both CubeSat and Cansat missions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
