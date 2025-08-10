import { Users, Target, Calendar, Mail, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RecruitmentsPage() {
  const navigate = useNavigate();

  const subsystems = [
    {
      id: 1,
      name: "ADCS",
      color: "from-orange-500 to-red-600",
      icon: "/assets/Subsystem_Logos/ADCS.png",
      challengeLink: "#propulsion-challenge",
      subsystemId: "adcs"
    },
    {
      id: 2,
      name: "COMMS",
      color: "from-blue-500 to-indigo-600",
      icon: "/assets/Subsystem_Logos/COMMS.png",
      challengeLink: "#structures-challenge",
      subsystemId: "comms"
    },
    {
      id: 3,
      name: "EPS",
      color: "from-green-500 to-teal-600",
      icon: "/assets/Subsystem_Logos/EPS.png",
      challengeLink: "#electronics-challenge",
      subsystemId: "eps"
    },
    {
      id: 4,
      name: "ODHS",
      color: "from-purple-500 to-pink-600",
      icon: "/assets/Subsystem_Logos/ODHS.png",
      challengeLink: "#recovery-challenge",
      subsystemId: "odhs"
    },
    {
      id: 5,
      name: "PAYLOAD",
      color: "from-yellow-500 to-orange-600",
      icon: "/assets/Subsystem_Logos/PAYLOAD.png",
      challengeLink: "#payload-challenge",
      subsystemId: "payload"
    },
    {
      id: 6,
      name: "RESEARCH",
      color: "from-cyan-500 to-blue-600",
      icon: "/assets/Subsystem_Logos/RESEARCH.png",
      challengeLink: "#simulation-challenge",
      subsystemId: "research"
    },
    {
      id: 7,
      name: "STMS",
      color: "from-gray-500 to-slate-600",
      icon: "/assets/Subsystem_Logos/STMS.png",
      challengeLink: "#manufacturing-challenge",
      subsystemId: "stms"
    },
    {
      id: 8,
      name: "Admin & OPS",
      color: "from-emerald-500 to-green-600",
      icon: "/assets/Subsystem_Logos/Admin & OPS.png",
      challengeLink: "#business-challenge",
      subsystemId: "admin"
    }
  ];

  const handleSubsystemClick = (subsystemName: string) => {
  const mapToId: Record<string, string> = {
    "ADCS": "adcs",
    "COMMS": "comms",
    "EPS": "eps",
    "ODHS": "odhs",
    "PAYLOAD": "payload",
    "RESEARCH": "research",
    "STMS": "stms",
    "Admin & OPS": "admin"
  };

  const id = mapToId[subsystemName];
  if (id) {
    navigate(`/subsystems?subsystem=${id}`);
  } else {
    console.warn("Unknown subsystem:", subsystemName);
  }
};

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-16">
      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7AECEC] mb-4 transition-colors duration-300 cursor-default">
            Join Team Parikshit
          </h1>
          
          <p className="text-base md:text-lg text-[#7AECEC]/80 max-w-2xl mx-auto hover:text-[#7AECEC] transition-colors duration-300">
            Applications open for students interested in space technology and satellite development.
          </p>
          
          <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-[#7AECEC] to-transparent"></div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* How to Join Section - Mobile First */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#7AECEC] mb-2">Ready to Join?</h2>
            <p className="text-[#7AECEC]/70 text-sm md:text-base">Two simple ways to become part of our space team</p>
          </div>
          
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
            {/* Interview Route */}
            <div className="bg-[#111111] rounded-lg border border-[#7AECEC]/20 p-5 hover:border-[#7AECEC]/40 transition-all duration-300 relative group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#7AECEC]/10 rounded-full flex items-center justify-center group-hover:bg-[#7AECEC]/20 transition-colors">
                  <Users className="w-5 h-5 text-[#7AECEC]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Interview Route</h3>
                  <p className="text-xs text-[#7AECEC]/60">Standard pathway</p>
                </div>
              </div>
              
              <div className="bg-[#0A0A0A]/50 rounded-md p-3 mb-3">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="text-[#7AECEC]/80">Technical Domains</span>
                  <span className="text-white font-medium">6-7 months</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#7AECEC]/80">Admin & Ops</span>
                  <span className="text-white font-medium">3-4 months</span>
                </div>
              </div>
              
              <p className="text-[#7AECEC]/70 text-sm">Submit application → Interview → Get selected</p>
            </div>

            {/* Challenge Route */}
            <div className="bg-gradient-to-br from-[#7AECEC]/5 to-[#111111] rounded-lg border border-[#7AECEC]/30 p-5 hover:border-[#7AECEC]/50 transition-all duration-300 relative group">
              <div className="absolute top-3 right-3">
                <span className="bg-[#7AECEC] text-black text-xs px-2 py-1 rounded-full font-medium">⚡ Fast Track</span>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#7AECEC]/20 rounded-full flex items-center justify-center group-hover:bg-[#7AECEC]/30 transition-colors">
                  <Target className="w-5 h-5 text-[#7AECEC]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Challenge Route</h3>
                  <p className="text-xs text-[#7AECEC]/80">Prove your skills</p>
                </div>
              </div>
              
              <div className="bg-[#7AECEC]/10 rounded-md p-3 mb-3">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="text-white">Duration</span>
                  <span className="text-[#7AECEC] font-medium">Much shorter</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white">Benefits</span>
                  <span className="text-[#7AECEC] font-medium">Skip tasks</span>
                </div>
              </div>
              
              <p className="text-white text-sm font-medium">Solve challenges → Show skills → Join faster</p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-6 bg-[#7AECEC]/5 rounded-lg border border-[#7AECEC]/20 p-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#7AECEC]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-[#7AECEC] rounded-full"></div>
              </div>
              <div>
                <p className="text-white text-sm font-medium mb-1">Open to 1st & 2nd year students (all branches)</p>
                <p className="text-[#7AECEC]/70 text-xs">Follow our socials for deadlines & updates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process Overview */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#7AECEC] mb-2">Application Process</h2>
            <p className="text-[#7AECEC]/70 text-sm md:text-base max-w-2xl mx-auto">
              Learn about our selection process and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#111111] rounded-lg border border-[#7AECEC]/20 p-5 hover:border-[#7AECEC]/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-[#7AECEC]" />
                <h3 className="text-lg font-semibold text-[#7AECEC]">Eligibility</h3>
              </div>
              <p className="text-[#7AECEC]/80 text-sm">
                Open to 1st and 2nd year students from all branches.
              </p>
            </div>
            
            <div className="bg-[#111111] rounded-lg border border-[#7AECEC]/20 p-5 hover:border-[#7AECEC]/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-[#7AECEC]" />
                <h3 className="text-lg font-semibold text-[#7AECEC]">Timeline</h3>
              </div>
              <p className="text-[#7AECEC]/80 text-sm">
                Follow our social media for updates and deadlines.
              </p>
            </div>
          </div>
        </section>

        {/* Subsystems Section */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#7AECEC] mb-2">Available Subsystems</h2>
            <p className="text-[#7AECEC]/70 text-sm md:text-base max-w-2xl mx-auto">
              Explore different technical areas and find your area of interest
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {subsystems.map((subsystem) => (
              <div
                key={subsystem.id}
                className="group bg-[#111111] rounded-lg border border-[#7AECEC]/20 hover:border-[#7AECEC]/40 transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
                onClick={() => handleSubsystemClick(subsystem.name)}
              >
                <div className={`h-1.5 bg-gradient-to-r ${subsystem.color}`}></div>
                <div className="p-4">
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#7AECEC]/10 rounded-lg flex items-center justify-center group-hover:bg-[#7AECEC]/20 transition-colors">
                      <img 
                        src={subsystem.icon} 
                        alt={`${subsystem.name} logo`}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                        onError={(e) => {
                          // Fallback to text abbreviation if image fails to load
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.parentNode?.querySelector('.icon-fallback') as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                            fallback.textContent = subsystem.name.slice(0, 2);
                          }
                        }}
                      />
                      <div className="icon-fallback w-full h-full rounded-lg bg-[#7AECEC]/20 hidden items-center justify-center text-xs font-bold text-[#7AECEC]">
                        {subsystem.name.slice(0, 2)}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-[#7AECEC] mb-2 group-hover:text-white transition-colors text-center">
                    {subsystem.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-[#7AECEC] text-xs group-hover:gap-2 transition-all group-hover:text-white">
                    <span>Learn More</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Tips Section */}
        <section className="mb-12">          
          <div className="bg-[#111111] rounded-lg border border-[#7AECEC]/20 p-5 md:p-6">
            <h3 className="text-xl md:text-2xl font-medium text-[#7AECEC] mb-4">Application Tips</h3>
            <ul className="space-y-2">
              {[
                "Complete any provided assessment tasks to demonstrate your skills",
                "Express genuine interest in space technology and teamwork",
                "Mention any relevant projects or technical experience",
                "Be authentic in your application and during interviews",
                "Ask thoughtful questions about the team and projects"
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-[#7AECEC] mt-0.5 flex-shrink-0" />
                  <span className="text-[#7AECEC]/80 text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-[#7AECEC]/10 to-transparent rounded-lg border border-[#7AECEC]/20 p-5 md:p-6">
          <Mail className="w-10 h-10 md:w-12 md:h-12 text-[#7AECEC] mx-auto mb-3" />
          <h3 className="text-xl md:text-2xl font-medium text-[#7AECEC] mb-3">Questions?</h3>
          <p className="text-[#7AECEC]/80 mb-4 text-sm md:text-base">
            Have questions about the application process? Reach out to us at{" "}
            <a 
              href="mailto:parikshitmanagement23@gmail.com" 
              className="text-[#7AECEC] hover:underline break-all"
            >
              parikshitmanagement23@gmail.com
            </a>
          </p>
          <p className="text-[#7AECEC]/60 text-xs md:text-sm">
            Stay updated with application dates and announcements through our social media channels
          </p>
        </section>
      </div>
    </div>
  );
}