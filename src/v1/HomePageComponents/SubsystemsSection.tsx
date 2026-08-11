import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function SubsystemsSection() {
  const subsystems = [
    { id: "adcs", name: "ADCS", full: "Attitude Determination & Control Subsystem", icon: "/assets/Subsystem_Logos/ADCS.png" },
    { id: "comms", name: "COMMS", full: "Communications and Ground Station Subsystem", icon: "/assets/Subsystem_Logos/COMMS.png" },
    { id: "eps", name: "EPS", full: "Electrical & Power Subsystem", icon: "/assets/Subsystem_Logos/EPS.png" },
    { id: "odhs", name: "ODHS", full: "Onboard Data Handling Subsystem", icon: "/assets/Subsystem_Logos/ODHS.png" },
    { id: "payload", name: "PAYLOAD", full: "Payload Subsystem", icon: "/assets/Subsystem_Logos/PAYLOAD.png" },
    { id: "stms", name: "STMS", full: "Structures, Thermals & Mechanics System", icon: "/assets/Subsystem_Logos/STMS.png" },
    { id: "admin", name: "ADMIN", full: "Administration and Operations Subsystem", icon: "/assets/Subsystem_Logos/Admin & OPS.png" },
  ];

  return (
    <section id="subsystems" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-12 text-center font-gugi">SUBSYSTEMS</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {subsystems.map((sub, idx) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <Link
                to={`/subsystems?subsystem=${sub.id}`}
                className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer flex flex-col items-center text-center h-full"
              >
                <img
                  src={sub.icon}
                  alt={`${sub.name} icon`}
                  className="w-12 h-12 mb-4 mx-auto group-hover:brightness-110 transition-all object-contain"
                />
                <h3 className="text-xl font-bold mb-2">{sub.name}</h3>
                <p className="hidden md:block text-[#7AECEC]/80 text-sm">{sub.full}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}