import React, { useState } from "react";
import { ChevronRight, Users, Target, Calendar, Mail, ExternalLink } from "lucide-react";

export default function RecruitmentsPage() {
  const [selectedSubsystem, setSelectedSubsystem] = useState(null);

  const subsystems = [
    {
      id: 1,
      name: "ADCS",
      color: "from-orange-500 to-red-600",
      icon: "/assets/Subsystem_Logos/ADCS.png",
      challengeLink: "#propulsion-challenge"
    },
    {
      id: 2,
      name: "COMMS",
      color: "from-blue-500 to-indigo-600",
      icon: "/assets/Subsystem_Logos/COMMS.png",
      challengeLink: "#structures-challenge"
    },
    {
      id: 3,
      name: "EPS",
      color: "from-green-500 to-teal-600",
      icon: "/assets/Subsystem_Logos/EPS.png",
      challengeLink: "#electronics-challenge"
    },
    {
      id: 4,
      name: "ODHS",
      color: "from-purple-500 to-pink-600",
      icon: "/assets/Subsystem_Logos/ODHS.png",
      challengeLink: "#recovery-challenge"
    },
    {
      id: 5,
      name: "PAYLOAD",
      color: "from-yellow-500 to-orange-600",
      icon: "/assets/Subsystem_Logos/PAYLOAD.png",
      challengeLink: "#payload-challenge"
    },
    {
      id: 6,
      name: "RESEARCH",
      color: "from-cyan-500 to-blue-600",
      icon: "/assets/Subsystem_Logos/RESEARCH.png",
      challengeLink: "#simulation-challenge"
    },
    {
      id: 7,
      name: "STMS",
      color: "from-gray-500 to-slate-600",
      icon: "/assets/Subsystem_Logos/STMS.png",
      challengeLink: "#manufacturing-challenge"
    },
    {
      id: 8,
      name: "Admin & OPS",
      color: "from-emerald-500 to-green-600",
      icon: "/assets/Subsystem_Logos/Admin & OPS.png",
      challengeLink: "#business-challenge"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-16">
      {/* Simple Header Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#7AECEC] mb-6 hover:text-white transition-colors duration-300 cursor-default">
            Join Team Parikshit
          </h1>
          
          <p className="text-lg text-[#7AECEC]/80 max-w-2xl mx-auto hover:text-[#7AECEC] transition-colors duration-300">
            Applications open for students interested in space technology and satellite development.
          </p>
          
          {/* Subtle decorative line */}
          <div className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[#7AECEC] to-transparent hover:w-32 transition-all duration-500"></div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-24">
        {/* Recruitment Process Overview */}
        <section className="mb-16 pt-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-[#7AECEC] mb-3">Application Process</h2>
            <p className="text-[#7AECEC]/70 text-base max-w-2xl mx-auto">
              Learn about our selection process and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#111111] rounded-xl border border-[#7AECEC]/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[#7AECEC]" />
                <h3 className="text-lg font-semibold text-[#7AECEC]">Eligibility</h3>
              </div>
              <p className="text-[#7AECEC]/80">
                Open to 1st and 2nd year students from all branches.
              </p>
            </div>
            
            <div className="bg-[#111111] rounded-xl border border-[#7AECEC]/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-[#7AECEC]" />
                <h3 className="text-lg font-semibold text-[#7AECEC]">Timeline</h3>
              </div>
              <p className="text-[#7AECEC]/80">
                Follow our social media for updates and deadlines.
              </p>
            </div>
          </div>
        </section>

        {/* Common Information Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#7AECEC]/5 to-[#7AECEC]/10 rounded-2xl border border-[#7AECEC]/30 p-8">
            <h2 className="text-2xl font-semibold text-[#7AECEC] mb-6 text-center">
              How to Join the Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-[#7AECEC] mb-4">Entry Pathways</h3>
                <p className="text-[#7AECEC]/80 mb-4">
                  You can become a part of the team through one of the following routes:
                </p>
                <ul className="space-y-3 text-[#7AECEC]/80">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#7AECEC] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-[#7AECEC]">Via Interviews:</span> Submit your application and go through the standard interview process.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#7AECEC] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-[#7AECEC]">Via Recruitment Challenge:</span>  Solve domain-specific challenges to showcase your skills and fast-track your entry.
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-[#7AECEC] mb-4">Task Phase Duration</h3>
                <ul className="space-y-3 text-[#7AECEC]/80">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#7AECEC] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-[#7AECEC]">Technical Domains (Interview Route): </span> Typically spans one full semester.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#7AECEC] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-[#7AECEC]">Admin & Ops (Interview Route):</span> Generally lasts around 3 to 4 months.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#7AECEC] mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-[#7AECEC]">Recruitment Challenge Route:</span> Features a shorter task phase with select tasks waived — allowing for a quicker onboarding process.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Subsystems Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-[#7AECEC] mb-3">Available Subsystems</h2>
            <p className="text-[#7AECEC]/70 text-base max-w-2xl mx-auto">
              Explore different technical areas and find your area of interest
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subsystems.map((subsystem) => (
              <div
                key={subsystem.id}
                className="group bg-[#111111] rounded-xl border border-[#7AECEC]/20 hover:border-[#7AECEC]/40 transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedSubsystem(subsystem)}
              >
                <div className={`h-2 bg-gradient-to-r ${subsystem.color}`}></div>
                <div className="p-6">
                  <div className="mb-3">
                    <img 
                      src={subsystem.icon} 
                      alt={`${subsystem.name} icon`}
                      className="w-12 h-12 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-[#7AECEC] mb-2 group-hover:text-white transition-colors">
                    {subsystem.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[#7AECEC] text-sm group-hover:gap-3 transition-all">
                    <span>View Challenge</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Process Section */}
        <section className="mb-16">          
          <div className="bg-[#111111] rounded-xl border border-[#7AECEC]/20 p-8">
            <h3 className="text-2xl font-medium text-[#7AECEC] mb-6">Application Tips</h3>
            <ul className="space-y-3">
              {[
                "Complete any provided assessment tasks to demonstrate your skills",
                "Express genuine interest in space technology and teamwork",
                "Mention any relevant projects or technical experience",
                "Be authentic in your application and during interviews",
                "Ask thoughtful questions about the team and projects"
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#7AECEC] mt-0.5 flex-shrink-0" />
                  <span className="text-[#7AECEC]/80">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-[#7AECEC]/10 to-transparent rounded-2xl border border-[#7AECEC]/20 p-8">
          <Mail className="w-12 h-12 text-[#7AECEC] mx-auto mb-4" />
          <h3 className="text-2xl font-medium text-[#7AECEC] mb-4">Questions?</h3>
          <p className="text-[#7AECEC]/80 mb-6">
            Have questions about the application process? Reach out to us at{" "}
            <a 
              href="mailto:parikshitmanagement23@gmail.com" 
              className="text-[#7AECEC] hover:underline"
            >
              parikshitmanagement23@gmail.com
            </a>
          </p>
          <p className="text-[#7AECEC]/60 text-sm">
            Stay updated with application dates and announcements through our social media channels
          </p>
        </section>
      </div>
    </div>
  );
}