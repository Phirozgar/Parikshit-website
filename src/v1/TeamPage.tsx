import { Github, Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  department?: string;
  image: string;
  github?: string;
  linkedin?: string;
}

function getImagePath(name: string) {
  const first = name.split(" ")[0].toLowerCase();
  return `../../assets/team-images/timages/${first}.jpg`;
}

const allTeamMembers: TeamMember[] = [
  { name: "Shrihar Pande", role: "System Engineer", image: getImagePath("Shrihar Pande") },
  { name: "Sudeeksha Bhattacharyya", role: "System Engineer", image: getImagePath("Sudeeksha Bhattacharyya"), 
    linkedin: "sudeeksha-bhattacharyya", github: "Sudeeksha008" },
    { name: "Rachit Pradip Takate", role: "System Engineer", image: getImagePath("Rachit Takate"), linkedin: "bluejet", github: "bluejet007" },
  { name: "Roselin Maria T J", role: "System Admin", image: getImagePath("Roselin Maria") },

  { name: "S Visalakshi", role: "ADCS Lead", image: getImagePath("Visalakshi S") },
  { name: "Rushil Jindal", role: "ADCS Team Member", image: getImagePath("rushil") },
  { name: "Nedheeish Khumaran", role: "COMMS Lead", image: getImagePath("nedheeish-khumaran"), linkedin: "nedheeish-khumaran-38002032a", github: "NedheeishKhumaran" },
  { name: "Jayanth Krish Ramakrishnan", role: "EPS Lead", image: getImagePath("Jayanth-Krish"), linkedin: "jayanth-krish" },
  { name: "Prakhar Agrawal", role: "EPS Lead", image: getImagePath("Prakhar") },
  { name: "Radhika Sasindran", role: "STMS Lead", image: getImagePath("Radhika Sasindran") },
  { name: "Diti Arunkumar", role: "STMS Team Member", image: getImagePath("diti-arunkumar"), linkedin: "diti-arunkumar-452397349", github: "ditiarunkumar" },
  { name: "Vatsal Agarwal", role: "STMS Team Member", image: getImagePath("vatsal") },
  
  { name: "Diya Goel", role: "STMS Team Member", image: getImagePath("diya-goel") },
  { name: "Rushat Yadav", role: "Payload Lead", image: getImagePath("Rushat") },
  { name: "Phirozgar Irani", role: "Administration & Operations Lead", image: getImagePath("Phirozgar Irani"), linkedin: "phirozgarirani11", github: "Phirozgar"},
  { name: "Naviya Puvvada", role: "ADCS Team Member", image: getImagePath("naviya"), linkedin: "naviya-devi-sri-787288374" },
  { name: "Shreyash Ahlavat", role: "ADCS Team Member", image: getImagePath("shreyash"), linkedin: "shreyash-ahlavat-5aa3193aa", github: "shreyashahlavat" },

  { name: "Nischal Nori", role: "ADCS Team Member", image: getImagePath("nischal-nori"), linkedin: "nischalnori" },
  { name: "Samika", role: "ADCS Team Member", image: getImagePath("Samika") },
  { name: "Ardra", role: "ADCS Team Member", image: getImagePath("Ardra") },

  { name: "Akshay Sai", role: "EPS Team Member", image: getImagePath("Akshay Sai"), linkedin: "akshay-sai-99b57a27a" },

  { name: "Om Kale", role: "COMMS Team Member", image: getImagePath("om-kale"), linkedin: "om-k4le" },  

  { name: "Prathamesh Aggarwal", role: "ODHS Lead", image: getImagePath("Prathamesh") },
  { name: "Saloni Bagra", role: "ODHS Team Member", image: getImagePath("saloni") },
  { name: "Harshit Srivastava", role: "ODHS Team Member", image: getImagePath("Harshit") },
  { name: "Purnima Manda", role: "ODHS Team Member", image: getImagePath("purnima-manda"), linkedin: "purnima-manda-68b853395", github: "PurnimaM-0012" },
  { name: "Krishang Jain", role: "ODHS Team Member", image: getImagePath("Krishang") },

  { name: "Dev Tandon", role: "Payload Team Member", image: getImagePath("Dev") },
  { name: "Anshika Goyal", role: "Payload Team Member", image: getImagePath("Anshika") },
  { name: "Rahul Satyavaram", role: "Payload Team Member", image: getImagePath("rahul"), linkedin: "vasudeva-satyavaram-aa7492237", github: "vasudevasatyavaram-dev" },
  {name: "Suvan Mallaya", role: "Payload Team Member", image: getImagePath("suvan"), linkedin: "suvan-mallya-5542b739b", github: "catonkeyboard07"},

  { name: "Malla Aryaman Srinivas", role: "COMMS Team Member", image: getImagePath("aryaman") },
  { name: "Sirish Saraf", role: "ODHS Team Member", image: getImagePath("sirish"), linkedin: "sirish-saraf", github: "Siri-shh" },
  { name: "Abhinav Raj", role: "ODHS Team Member", image: getImagePath("abhinav") },
{ name: "Vamsi", role: "ODHS Team Member", image: getImagePath("vamsi") },
  { name: "Nandini Sah", role: "Administration Team Member", image: getImagePath("Nandini") },
  { name: "Mokshagna", role: "Administration Team Member", image: getImagePath("moksha") },
  { name: "Rishitha Kantevari", role: "Administration Team Member", image: getImagePath("Rishitha") },
  { name: "Arush Varun", role: "Administration Team Member", image: getImagePath("arush") },

  // Faculty Advisors
  { name: "Dr. Shreesha Chokkadi", role: "Faculty Advisor",image: getImagePath("Shreesha"),
    department: "Electrical & Instrumentation Engineering" },
  { name: "Dr. Balbir Singh", role: "Faculty Advisor", image: getImagePath("Balbir"),
    department: "Aeronautical Engineering" },
];

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
    <div className="bg-[#0A0A0A] rounded-lg overflow-hidden border border-[#7AECEC] group hover:border-white transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-gray-800">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="text-[#7AECEC] font-bold text-lg mb-1">
          {member.name}
        </h4>
        <p className="text-gray-400 text-sm mb-3">{member.role}</p>
        <div className="flex gap-3 justify-center">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
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
            {subsystemsWithLeads.map((subsystem, idx) => (
              <div key={idx} className="mb-20">
                <h3 className="text-3xl font-bold mb-8 text-[#7AECEC] text-center border-b border-[#7AECEC] pb-4 max-w-2xl mx-auto">
                  {subsystem.name}
                </h3>
                
                {/* Lead(s) */}
                <div className="mb-10">
                  <h4 className="text-xl font-semibold mb-6 text-white text-center">Lead</h4>
                  <div className="flex justify-center">
                    {subsystem.leads ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                        {subsystem.leads.map((lead, i) => (
                          <MemberCard key={i} member={lead} />
                        ))}
                      </div>
                    ) : subsystem.lead ? (
                      <div className="max-w-xs">
                        <MemberCard member={subsystem.lead} />
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Team Members */}
                {subsystem.members.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-white text-center">Team Members</h4>
                    <div className="flex justify-center">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
                        {subsystem.members.map((member, index) => (
                          <MemberCard key={index} member={member} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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