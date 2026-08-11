import { Link } from "react-router-dom";

export function SubsystemsSection() { 
  return (
    <section id="subsystems" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-12 text-center font-gugi">SUBSYSTEMS</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          <Link to="/subsystems?subsystem=adcs" className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <img 
              src="/assets/Subsystem_Logos/ADCS.png" 
              alt="ADCS icon" 
              className="w-12 h-12 mb-4 mx-auto group-hover:brightness-110 transition-all object-contain"
            />
            <h3 className="text-xl font-bold mb-2">ADCS</h3>
            <p className="hidden md:block text-[#7AECEC]/80 text-sm">Attitude Determination & Control Subsystem</p>
          </Link>

          <Link to="/subsystems?subsystem=comms" className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <img 
              src="/assets/Subsystem_Logos/COMMS.png" 
              alt="COMMS icon" 
              className="w-12 h-12 mb-4 mx-auto group-hover:brightness-110 transition-all object-contain"
            />
            <h3 className="text-xl font-bold mb-2">COMMS</h3>
            <p className="hidden md:block text-[#7AECEC]/80 text-sm">Communications and Ground Station Subsystem</p>
          </Link>

          <Link to="/subsystems?subsystem=eps" className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <img 
              src="/assets/Subsystem_Logos/EPS.png" 
              alt="EPS icon" 
              className="w-12 h-12 mb-4 mx-auto group-hover:brightness-110 transition-all object-contain"
            />
            <h3 className="text-xl font-bold mb-2">EPS</h3>
            <p className="hidden md:block text-[#7AECEC]/80 text-sm">Electrical & Power Subsystem</p>
          </Link>

          <Link to="/subsystems?subsystem=odhs" className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <img 
              src="/assets/Subsystem_Logos/ODHS.png" 
              alt="ODHS icon" 
              className="w-12 h-12 mb-4 mx-auto group-hover:brightness-110 transition-all object-contain"
            />
            <h3 className="text-xl font-bold mb-2">ODHS</h3>
            <p className="hidden md:block text-[#7AECEC]/80 text-sm">Onboard Data Handling Subsystem</p>
          </Link>

          <Link to="/subsystems?subsystem=payload" className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <img 
              src="/assets/Subsystem_Logos/PAYLOAD.png" 
              alt="PAYLOAD icon" 
              className="w-14 h-14 mb-4 mx-auto group-hover:brightness-110 transition-all object-contain"
            />
            <h3 className="text-xl font-bold mb-2">PAYLOAD</h3>
            <p className="hidden md:block text-[#7AECEC]/80 text-sm">Payload Subsystem</p>
          </Link>

          {/* <Link to="/subsystems?subsystem=research" className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <img 
              src="/assets/Subsystem_Logos/RESEARCH.png" 
              alt="RESEARCH icon" 
              className="w-12 h-12 mb-4 mx-auto group-hover:brightness-110 transition-all object-contain"
            />
            <h3 className="text-xl font-bold mb-2">RESEARCH</h3>
            <p className="hidden md:block text-[#7AECEC]/80 text-sm">Research Subsystem</p>
          </Link> */}

          <Link to="/subsystems?subsystem=stms" className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <img 
              src="/assets/Subsystem_Logos/STMS.png" 
              alt="STMS icon" 
              className="w-12 h-12 mb-4 mx-auto group-hover:brightness-110 transition-all object-contain"
            />
            <h3 className="text-xl font-bold mb-2">STMS</h3>
            <p className="hidden md:block text-[#7AECEC]/80 text-sm">Structures, Thermals & Mechanics System</p>
          </Link>

          <Link to="/subsystems?subsystem=admin" className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer flex flex-col items-center text-center">
            <img 
              src="/assets/Subsystem_Logos/Admin & OPS.png" 
              alt="Admin & OPS icon" 
              className="w-12 h-12 mb-4 mx-auto group-hover:brightness-110 transition-all object-contain"
            />
            <h3 className="text-xl font-bold mb-2">ADMIN</h3>
            <p className="hidden md:block text-[#7AECEC]/80 text-sm">Administration and Operations Subsystem</p>
          </Link>
        </div>
      </div>
    </section>
  );
}