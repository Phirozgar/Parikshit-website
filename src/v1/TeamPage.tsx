import { Github, Linkedin } from "lucide-react";

// Add type for team member data
interface TeamMember {
  name: string;
  role: string;
  department?: string;
  image: string;
  github?: string;
  linkedin?: string;
}

function getImagePath(name: string) {
  // Use first name, lowercase, for image file
  const first = name.split(" ")[0].toLowerCase();
  return `../../assets/team-images/timages/${first}.jpg`;
}

// All team members and faculty as TeamMember objects
const allTeamMembers: TeamMember[] = [
  // Executive Board
  { name: "Srishti Singh", role: "System Engineer", image: getImagePath("Srishti Singh"), 
    github: "flyash07", linkedin: "srishti~singh" },
  { name: "Shashwat Harsh", role: "System Engineer", image: getImagePath("Shashwat Harsh"),
    github: "shashwat-harsh", linkedin: "shashwat-harsh" },
  { name: "Ankit Mishra", role: "System Engineer", image: getImagePath("Ankit Mishra"),
    github: "ankit-mishra", linkedin: "ankit-mishra" },
  { name: "Nidhi Hegde", role: "System Engineer", image: getImagePath("Nidhi Hegde"),
    github: "nidhi-hegde", linkedin: "nidhi-mhegde" },
  { name: "Swetha M R", role: "System Admin", image: getImagePath("Swetha M R"),
    github: "swetha-m-r", linkedin: "swetha-m-r" },

  // Subsystem Leads
  { name: "Rachit Takate", role: "ODHS Lead", image: getImagePath("Rachit Takate"), linkedin: "bluejet", github: "bluejet007" },
  // { name: "Ankit Mishra", role: "ADCS Lead Member", image: getImagePath("Ankit Mishra"),
  //   github: "ankit-mishra", linkedin: "ankit-mishra" },
  { name: "Akshay Sai", role: "EPS Lead", image: getImagePath("Akshay Sai"), linkedin: "akshay-sai-99b57a27a" },
  { name: "Jayant Sharma", role: "COMMS Lead", image: getImagePath("Jayant Sharma") },
  { name: "Shrihar Pande", role: "Payload Lead", image: getImagePath("Shrihar Pande"),
    github: "Shrihar Pande", linkedin: "Shrihar Pande" },
  { name: "Roselin Maria", role: "Payload Lead", image: getImagePath("Roselin Maria"),
    github: "Roselin Maria", linkedin: "Roselin Maria" },
  // { name: "Swetha M R", role: "Administration Lead Member", image: getImagePath("Swetha M R"),
  //   github: "swetha-m-r", linkedin: "swetha-m-r" },

  // ADCS Team
  { name: "Visalakshi S", role: "ADCS Team Member", image: getImagePath("Visalakshi S") },
  { name: "Sudeeksha Bhattacharyya", role: "ADCS Team Member", image: getImagePath("Sudeeksha Bhattacharyya"), linkedin: "sudeeksha-bhattacharyya", github: "Sudeeksha008" },
  { name: "Nischal Nori", role: "ADCS Team Member", image: getImagePath("nischal-nori"), linkedin: "nischalnori" },
  { name: "Samika", role: "ADCS Team Member", image: getImagePath("Samika") },
  { name: "Ardra", role: "ADCS Team Member", image: getImagePath("Ardra") },

  // EPS Team
  { name: "Akshay Sai", role: "EPS Team Member", image: getImagePath("Akshay Sai"), linkedin: "akshay-sai-99b57a27a" },
  { name: "Jayanth Krish", role: "EPS Team Member", image: getImagePath("Jayanth-Krish"), linkedin: "jayanth-krish" },
  { name: "Prakhar ", role: "EPS Team Member", image: getImagePath("Prakhar ") },

  // COMMS Team
  { name: "Nidhi Hegde", role: "COMMS Team Member", image: getImagePath("Nidhi Hegde"),
    github: "nidhi-hegde", linkedin: "nidhi-mhegde" },
  { name: "Om Kale", role: "COMMS Team Member", image: getImagePath("om-kale"), linkedin: "om-k4le" },
  { name: "Nedheeish Khumaran", role: "COMMS Team Member", image: getImagePath("Nedheeish Khumaran"), github: "NedheeishKhumaran" },

  // ODHS Team
  { name: "Rachit Takate", role: "ODHS Team Member", image: getImagePath("Rachit"), linkedin: "bluejet", github: "bluejet007" },
  { name: "Rithika Salimath", role: "ODHS Team Member", image: getImagePath("Rithika Salimath") },
  { name: "Aanya Shantaram", role: "ODHS Team Member", image: getImagePath("Aanya Shantaram") },
  { name: "Soham Singh", role: "ODHS Team Member", image: getImagePath("Soham Singh") },
  { name: "Nishitha", role: "ODHS Team Member", image: getImagePath("Nishitha") },
  { name: "Prathamesh", role: "ODHS Team Member", image: getImagePath("Prathamesh") },
  { name: "Saloni", role: "ODHS Team Member", image: getImagePath("Saloni") },
  { name: "Harshit Srivastava", role: "ODHS Team Member", image: getImagePath("Harshit") },
  { name: "Krishang Jain", role: "ODHS Team Member", image: getImagePath("Krishang") },


  // Payload Team
  { name: "Shrihar Pande", role: "Payload Team Member", image: getImagePath("Shrihar Pande") },
  { name: "Roselin Maria", role: "Payload Team Member", image: getImagePath("Roselin Maria") },
  { name: "Asna Kidvai", role: "Payload Team Member", image: getImagePath("Asna Kidvai") },
  { name: "Siddharta Chhauda", role: "Payload Team Member", image: getImagePath("Siddharta Chhauda") },
  { name: "Rushat", role: "Payload Team Member", image: getImagePath("Rushat") },
  { name: "Dev", role: "Payload Team Member", image: getImagePath("Dev") },
  { name: "Anshika", role: "Payload Team Member", image: getImagePath("Anshika") },

  // STMS Team
  { name: "Radhika Sasindran", role: "STMS Team Member", image: getImagePath("Radhika Sasindran") },

  // Administration Team
  { name: "Phirozgar Irani", role: "Administration Team Member", image: getImagePath("Phirozgar Irani"), linkedin: "phirozgarirani11", github: "Phirozgar"},
  { name: "Nandini Sah", role: "Administration Team Member", image: getImagePath("Nandini Sah") },
  { name: "Rishitha Kantevari", role: "Administration Team Member", image: getImagePath("Rishitha Kantevari") },

  // Faculty Advisors
  { name: "Dr. Shreesha Chokkadi", role: "Faculty Advisor",image: getImagePath("Shreesha Chokkadi"),
    department: "Electrical & Instrumentation Engineering" },
  { name: "Dr. Balbir Singh", role: "Faculty Advisor", image: getImagePath("Balbir Singh"),
    department: "Aeronautical Engineering" },
  { name: "Dr. Manikandan", role: "Faculty Advisor", image: getImagePath("Manikandan"),
    department: "Aeronautical Engineering" },
];

function TeamPage() {
  // Group members by role for display
  const executiveBoard = allTeamMembers.filter(
    (m) => m.role === "System Engineer" || m.role === "System Admin"
  );
  const subsystemLeads = allTeamMembers.filter((m) => m.role.endsWith("Lead"));
  const facultyAdvisors = allTeamMembers.filter(
    (m) => m.role === "Faculty Advisor"
  );
  // Group by team for team members
  const teamGroups = [
    {
      name: "ODHS Team",
      members: allTeamMembers.filter((m) => m.role === "ODHS Team Member"),
    },
    {
      name: "ADCS Team",
      members: allTeamMembers.filter((m) => m.role === "ADCS Team Member"),
    },
    {
      name: "EPS Team",
      members: allTeamMembers.filter((m) => m.role === "EPS Team Member"),
    },
    {
      name: "COMMS Team",
      members: allTeamMembers.filter((m) => m.role === "COMMS Team Member"),
    },
    {
      name: "Payload Team",
      members: allTeamMembers.filter((m) =>m.role === "Payload Team Member"),
    },
    {
      name: "STMS Team",
      members: allTeamMembers.filter((m) => m.role === "STMS Team Member"),
    },
    {
      name: "Administration Team",
      members: allTeamMembers.filter((m) => m.role === "Administration Team Member"),
    },
  ];

  return (
    <div className="pt-16">
      <div className="min-h-screen bg-[#0A0A0A]">
        {/* Hero Section with Background Image */}
        <header
          className="relative bg-cover bg-center h-[60vh] flex items-center"
          style={{
            backgroundImage: "/assets/Team Photo.jpg')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-6xl font-bold text-white mb-4">Our Team</h1>
            <p className="text-xl text-[#7AECEC] max-w-2xl">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {executiveBoard.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0A] rounded-lg overflow-hidden border border-[#7AECEC] group hover:border-white transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-[#7AECEC] font-bold text-lg mb-1">
                      {member.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                    <div className="flex gap-3">
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
              ))}
            </div>
          </section>

          {/* Subsystem Leads */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-[#7AECEC] text-center">
              Subsystem Leads
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {subsystemLeads.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0A] rounded-lg overflow-hidden border border-[#7AECEC] group hover:border-white transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-[#7AECEC] font-bold text-lg mb-1">
                      {member.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                    <div className="flex gap-3">
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
              ))}
            </div>
          </section>

          {/* Team Members by Group */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-[#7AECEC] text-center">
              Team Members
            </h2>
            {teamGroups.map((group, idx) => (
              <div key={idx} className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-[#7AECEC] border-b border-[#7AECEC] pb-2">
                  {group.name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {group.members.map((member, index) => (
                    <div
                      key={index}
                      className="bg-[#0A0A0A] rounded-lg overflow-hidden border border-[#7AECEC] group hover:border-white transition-all duration-300"
                    >
                      <div className="aspect-square overflow-hidden bg-gray-800">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-[#7AECEC] font-bold text-lg mb-1">
                          {member.name}
                        </h4>
                        <p className="text-gray-400 text-sm mb-3">
                          {group.name} Member
                        </p>
                        <div className="flex gap-3">
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
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Faculty Advisors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#7AECEC]">
              Faculty Advisors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyAdvisors.map((advisor, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0A] rounded-lg shadow-lg p-6 border border-[#7AECEC] flex flex-col items-center"
                >
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-32 h-32 object-cover rounded-full mb-4 border border-[#7AECEC]"
                  />
                  <h3 className="text-xl font-bold mb-2 text-[#7AECEC]">
                    {advisor.name}
                  </h3>
                  <p className="text-[#7AECEC] mb-1">{advisor.role}</p>
                  {advisor.department && (
                    <p className="text-[#7AECEC]">{advisor.department}</p>
                  )}
                  <div className="flex gap-3 mt-2">
                    <a
                      href={advisor.github ? `https://github.com/${advisor.github}` : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors ${advisor.github ? "text-[#7AECEC] hover:text-white" : "text-gray-600 cursor-not-allowed"}`}
                      tabIndex={advisor.github ? 0 : -1}
                      aria-disabled={!advisor.github}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={advisor.linkedin ? `https://linkedin.com/in/${advisor.linkedin}` : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors ${advisor.linkedin ? "text-[#7AECEC] hover:text-white" : "text-gray-600 cursor-not-allowed"}`}
                      tabIndex={advisor.linkedin ? 0 : -1}
                      aria-disabled={!advisor.linkedin}
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default TeamPage;
