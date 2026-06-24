import { Github, Linkedin } from "lucide-react";
import { allTeamMembers, TeamMember } from "../data/team";

function TeamPage() {
  const executiveBoard = allTeamMembers.filter(
    (m) => m.role === "System Engineer" || m.role === "System Admin"
  );
  
  const facultyAdvisors = allTeamMembers.filter(
    (m) => m.role === "Faculty Advisor"
  );

  const subsystemsWithLeads = [
    {
      name: "ODHS",
      lead: allTeamMembers.find((m) => m.role === "ODHS Lead"),
      members: allTeamMembers.filter((m) => m.role === "ODHS Team Member"),
    },
    {
      name: "ADCS",
      lead: allTeamMembers.find((m) => m.role === "ADCS Lead"),
      members: allTeamMembers.filter((m) => m.role === "ADCS Team Member"),
    },
    {
      name: "EPS",
      leads: allTeamMembers.filter((m) => m.role === "EPS Lead"),
      members: allTeamMembers.filter((m) => m.role === "EPS Team Member"),
    },
    {
      name: "COMMS",
      lead: allTeamMembers.find((m) => m.role === "COMMS Lead"),
      members: allTeamMembers.filter((m) => m.role === "COMMS Team Member"),
    },
    {
      name: "Payload",
      lead: allTeamMembers.find((m) => m.role === "Payload Lead"),
      members: allTeamMembers.filter((m) => m.role === "Payload Team Member"),
    },
    {
      name: "STMS",
      lead: allTeamMembers.find((m) => m.role === "STMS Lead"),
      members: allTeamMembers.filter((m) => m.role === "STMS Team Member"),
    },
    {
      name: "Administration & Operations",
      lead: allTeamMembers.find((m) => m.role === "Administration & Operations Lead"),
      members: allTeamMembers.filter((m) => m.role === "Administration Team Member"),
    },
  ];

  const MemberCard = ({ member }: { member: TeamMember }) => (
    <div className="w-[160px] sm:w-[240px] bg-[#0A0A0A] rounded-lg overflow-hidden border border-[#7AECEC] group hover:border-white transition-all duration-300 flex flex-col">
      <div className="aspect-square overflow-hidden bg-gray-800">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 sm:p-4 text-center flex-grow flex flex-col justify-between">
        <div>
          <h4 className="text-[#7AECEC] font-bold text-sm sm:text-lg mb-1 leading-snug line-clamp-2">
            {member.name}
          </h4>
          {(member.role === "System Engineer" || member.role === "System Admin") && (
            <p className="text-gray-400 text-xs sm:text-sm mb-3">{member.role}</p>
          )}
        </div>
        <div className="flex gap-3 justify-center mt-auto">
          <a
            href={member.github ? `https://github.com/${member.github}` : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${member.github ? "text-[#7AECEC] hover:text-white" : "text-gray-600 cursor-not-allowed"}`}
            tabIndex={member.github ? 0 : -1}
            aria-disabled={!member.github}
          >
            <Github size={20} />
          </a>
          <a
            href={member.linkedin ? `https://linkedin.com/in/${member.linkedin}` : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${member.linkedin ? "text-[#7AECEC] hover:text-white" : "text-gray-600 cursor-not-allowed"}`}
            tabIndex={member.linkedin ? 0 : -1}
            aria-disabled={!member.linkedin}
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16">
      <div className="min-h-screen bg-[#0A0A0A]">
        <header
          className="relative bg-cover bg-center h-[75vh] flex items-center justify-center"
          style={{
            backgroundImage: "url('/assets/Team Photo 2025-26.jpg')",
            backgroundPosition: "center 60%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-6xl font-bold text-white mb-4">Our Team</h1>
            <p className="text-xl text-[#7AECEC] max-w-2xl mx-auto">
              Meet the brilliant minds behind Parikshit - a diverse team of
              engineers, researchers, and innovators working together to push
              the boundaries of space technology.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          {/* Executive Board */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-[#7AECEC] text-center">
              Executive Board
            </h2>
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
                {executiveBoard.map((member, index) => (
                  <MemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </section>

          {/* Subsystems with Leads */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-16 text-[#7AECEC] text-center">
              Our Subsystems
            </h2>
            {subsystemsWithLeads.map((subsystem, idx) => {
              const hasLeads = (subsystem.leads && subsystem.leads.length > 0) || !!subsystem.lead;
              return (
                <div key={idx} className="mb-20">
                  <h3 className="text-3xl font-bold mb-8 text-[#7AECEC] text-center border-b border-[#7AECEC] pb-4 max-w-2xl mx-auto">
                    {subsystem.name}
                  </h3>
                  
                  {/* Lead(s) */}
                  {hasLeads && (
                    <div className="mb-10">
                      <h4 className="text-xl font-semibold mb-6 text-white text-center">Lead</h4>
                      <div className="flex justify-center">
                        {subsystem.leads ? (
                          <div className="flex flex-wrap justify-center gap-6 max-w-2xl">
                            {subsystem.leads.map((lead, i) => (
                              <MemberCard key={i} member={lead} />
                            ))}
                          </div>
                        ) : subsystem.lead ? (
                          <div className="flex justify-center">
                            <MemberCard member={subsystem.lead} />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  )}

                  {/* Team Members */}
                  {subsystem.members.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold mb-6 text-white text-center">Team Members</h4>
                      <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
                          {subsystem.members.map((member, index) => (
                            <MemberCard key={index} member={member} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </section>

          {/* Faculty Advisors */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-[#7AECEC] text-center">
              Faculty Advisors
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                {facultyAdvisors.map((advisor, index) => (
                  <div
                    key={index}
                    className="bg-[#0A0A0A] rounded-lg shadow-lg p-8 border border-[#7AECEC] flex flex-col items-center text-center"
                  >
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-[#7AECEC]"
                    />
                    <h3 className="text-xl font-bold mb-2 text-[#7AECEC]">
                      {advisor.name}
                    </h3>
                    <p className="text-white mb-2">{advisor.role}</p>
                    {advisor.department && (
                      <p className="text-gray-400 text-sm">{advisor.department}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default TeamPage;