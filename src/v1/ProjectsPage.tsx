import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const projects = [
  {
    id: "cubesat",
    name: "CubeSat Development",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80",
    description:
      "Our flagship 2U CubeSat project, designed for atmospheric research, technology demonstration, and student training in real-world space engineering.",
    details: [
      "Full satellite design, integration, and testing by students",
      "Mission objectives include atmospheric data collection and technology validation",
      "Hands-on experience with space-grade hardware and software",
      "Collaboration with ISRO and academic mentors"
    ]
  },
  {
    id: "cansat",
    name: "Cansat Development",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80",
    description:
      "Miniaturized satellite (Cansat) projects for rapid prototyping, student competitions, and subsystem validation before CubeSat integration.",
    details: [
      "Design and launch of Cansats for national/international competitions",
      "Subsystem prototyping and testing in a cost-effective platform",
      "Training ground for new team members",
      "Data collection and telemetry experiments"
    ]
  },
  {
    id: "pagos",
    name: "PAGOS (Parikshit Ground Station)",
    image:
      "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&q=80",
    description:
      "PAGOS is our custom-built ground station for satellite communication, tracking, and mission operations.",
    details: [
      "UHF/VHF/S-band communication capability",
      "Automated satellite tracking and data downlink",
      "Remote command uplink and telemetry monitoring",
      "Supports both CubeSat and Cansat missions"
    ]
  }
];

function ProjectsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialProject = query.get("project") || projects[0].id;
  const [activeProject, setActiveProject] = useState(initialProject);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If query param changes, update active project
    setActiveProject(query.get("project") || projects[0].id);
  }, [location.search]);

  useEffect(() => {
    // Scroll to the project section on mount if navigated with query param
    if (location.search && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.search]);

  // Detailed content for each project
  const projectDetails: { [key: string]: {
    title: string;
    image: string;
    summary: string;
    mission: string;
    specs: string[];
    achievements: string[];
    learnMore: string;
  } } = {
    cubesat: {
      title: "CubeSat Development",
      image: "https://parikshitspace.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRoomImg.2ad541b2.jpg&w=3840&q=75",
      summary: `Parikshit is a 2U-class nanosatellite developed by undergraduate students at Manipal Institute of Technology, India, for launch on an ISRO vehicle. The mission aims to foster hands-on space engineering skills, advance student-led research, and contribute to India's growing space ecosystem. The satellite features a primary thermal imaging payload for Earth observation and a secondary electrodynamic tether for deorbiting demonstration.`,
      mission: `The mission is to push the boundaries of student-led space projects in India, providing a platform for interdisciplinary learning and innovation. The satellite will operate in a 500km polar low Earth orbit, collecting thermal imagery and testing new deorbiting technology.`,
      specs: [
        "Dimensions: 10 x 10 x 22.7 cm (2U CubeSat)",
        "Mass: 2.3 kg",
        "Orbit: 500 km Polar LEO",
        "Power: Li-ion battery, 20Wh, solar panels",
        "Attitude Control: Reaction wheel, torquerods, sun sensors, gyros, magnetometer",
        "Payloads: Thermal Imaging Camera (primary), Electrodynamic Tether (secondary)",
        "Onboard Data Handling: Custom firmware, in-house PCB design",
        "Communications: UHF/VHF, custom ground station (PAGOS)"
      ],
      achievements: [
        "All major subsystems (ADCS, ODHS, EPS, COMMS, STMS, Payload) designed and built in-house",
        "Collaboration with ISRO for launch and technical mentorship",
        "Development of a high-accuracy thermal imaging payload",
        "Integration of a deorbiting mechanism for responsible space operations",
        "Student team recognized for innovation and technical excellence"
      ],
      learnMore: "https://parikshitspace.in/"
    },
    cansat: {
      title: "Cansat Development",
      image: "https://parikshitspace.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcansat.2e2e2e2e.jpg&w=3840&q=75",
      summary: `Cansat projects serve as a rapid prototyping and training platform for new team members, allowing students to design, build, and launch miniaturized satellites in the form factor of a soda can. These projects are used for national and international competitions, subsystem validation, and hands-on learning.`,
      mission: `The Cansat initiative provides a cost-effective way to test new ideas, train students in satellite engineering, and validate subsystems before integration into the CubeSat. Cansats are launched to demonstrate telemetry, data collection, and recovery operations.`,
      specs: [
        "Form factor: Standard soda can (66mm diameter, 115mm height)",
        "Mass: ~300g",
        "Subsystems: Power, telemetry, sensors, recovery system",
        "Launch: Typically via model rocket or drone",
        "Data: Atmospheric, environmental, and telemetry data collection"
      ],
      achievements: [
        "Multiple successful launches in national/international competitions",
        "Subsystems prototyped and validated for CubeSat integration",
        "Hands-on training for new student members",
        "Development of custom PCBs and embedded software"
      ],
      learnMore: "https://parikshitspace.in/CANSAT"
    },
    pagos: {
      title: "PAGOS (Parikshit Ground Station)",
      image: "https://parikshitspace.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpagos.2e2e2e2e.jpg&w=3840&q=75",
      summary: `PAGOS is the custom-built ground station for the Parikshit mission, enabling reliable satellite communication, tracking, and mission operations. The ground station is designed and operated by students, supporting both CubeSat and Cansat missions.`,
      mission: `PAGOS provides UHF/VHF/S-band communication capability, automated satellite tracking, and remote command/telemetry operations. It is a critical part of the mission, ensuring data downlink and command uplink for all student satellite projects.`,
      specs: [
        "Frequency bands: UHF, VHF, S-band",
        "Antenna: Directional Yagi, rotator system for tracking",
        "Software: Custom data processing and tracking software",
        "Operations: Automated pass prediction, data logging, remote access",
        "Supports: Parikshit CubeSat, Cansat, and future missions"
      ],
      achievements: [
        "Fully student-designed and operated ground station",
        "Successful communication with test payloads and Cansats",
        "Integration with satellite tracking and data analysis tools",
        "Supports educational outreach and training"
      ],
      learnMore: "https://parikshitspace.in/subsystems/COMMS"
    }
  };

  const detail = projectDetails[activeProject];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#0A0A0A] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#7AECEC] mb-8">Our Projects</h1>
        <div className="flex justify-center mb-10 gap-4">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`px-6 py-2 rounded-full font-bold transition-colors border border-[#7AECEC]/30 focus:outline-none ${
                activeProject === project.id
                  ? "bg-[#7AECEC] text-[#0A0A0A] shadow-lg"
                  : "bg-[#111111] text-[#7AECEC] hover:bg-[#222]"
              }`}
              onClick={() => setActiveProject(project.id)}
            >
              {project.name}
            </button>
          ))}
        </div>
        {detail && (
          <section className="bg-[#111111] border border-[#7AECEC]/20 rounded-lg shadow-lg p-12 flex flex-col md:flex-row gap-12 items-center w-full">
            <img
              src={detail.image}
              alt={detail.title}
              className="rounded-lg mb-8 md:mb-0 w-full md:w-1/2 h-96 object-cover border border-[#7AECEC]/10"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#7AECEC] mb-4">{detail.title}</h2>
              <p className="text-[#7AECEC]/80 mb-4 text-lg">{detail.summary}</p>
              <h3 className="text-xl font-bold text-[#7AECEC] mt-6 mb-2">Mission</h3>
              <p className="text-[#7AECEC]/80 mb-4">{detail.mission}</p>
              <h3 className="text-xl font-bold text-[#7AECEC] mt-6 mb-2">Key Specifications</h3>
              <ul className="list-disc pl-5 text-[#7AECEC]/70 space-y-1 mb-4">
                {detail.specs.map((spec: string, idx: number) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>
              <h3 className="text-xl font-bold text-[#7AECEC] mt-6 mb-2">Achievements & Highlights</h3>
              <ul className="list-disc pl-5 text-[#7AECEC]/70 space-y-1 mb-4">
                {detail.achievements.map((ach: string, idx: number) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
              <a
                href={detail.learnMore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2 bg-[#7AECEC] text-[#0A0A0A] font-bold rounded-full shadow hover:bg-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;