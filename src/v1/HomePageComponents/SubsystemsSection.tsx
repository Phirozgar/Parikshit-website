import { Cpu, Compass, Battery, Rocket, Radio, Boxes, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export function SubsystemsSection() { 
  return (
    <section id="subsystems" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">SUBSYSTEMS</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-8 gap-5">
          <Link to="/subsystems?subsystem=odhs" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
            <Cpu className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">ODHS</h3>
            <p className="text-[#7AECEC]/80">Onboard Data Handling Subsystem</p>
          </Link>
          <Link to="/subsystems?subsystem=adcs" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
            <Compass className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">ADCS</h3>
            <p className="text-[#7AECEC]/80">Attitude Determination & Control Subsystem</p>
          </Link>
          <Link to="/subsystems?subsystem=eps" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
            <Battery className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">EPS</h3>
            <p className="text-[#7AECEC]/80">Electrical & Power Subsystem</p>
          </Link>
          <Link to="/subsystems?subsystem=payload" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
            <Rocket className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">PAYLOAD</h3>
            <p className="text-[#7AECEC]/80">Payload Subsystem</p>
          </Link>
          <Link to="/subsystems?subsystem=comms" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
            <Radio className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">COMMS</h3>
            <p className="text-[#7AECEC]/80">Communications and Ground Station Subsystem</p>
          </Link>
          <Link to="/subsystems?subsystem=stms" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
            <Boxes className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">STMS</h3>
            <p className="text-[#7AECEC]/80">Structures, Thermals & Mechanics System</p>
          </Link>
          <Link to="/subsystems?subsystem=admin" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
            <Building2 className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">ADMIN</h3>
            <p className="text-[#7AECEC]/80">Administration and Operations Subsystem</p>
          </Link>
          <Link to="/subsystems?subsystem=admin" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
            <Building2 className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">RESEARCH</h3>
            <p className="text-[#7AECEC]/80">Research Subsystem</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
