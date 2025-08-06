import { Github, Linkedin, ChevronRight } from "lucide-react";

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
  {
    name: "Srishti Singh",
    role: "System Engineer",
    image: getImagePath("Srishti Singh"),
    github: "srishti-singh",
    linkedin: "srishti-singh",
  },
  {
    name: "Shashwat Harsh",
    role: "System Engineer",
    image: getImagePath("Shashwat Harsh"),
    github: "shashwat-harsh",
    linkedin: "shashwat-harsh",
  },
  {
    name: "Ankit Mishra",
    role: "System Engineer",
    image: getImagePath("Ankit Mishra"),
    github: "ankit-mishra",
    linkedin: "ankit-mishra",
  },
  {
    name: "Nidhi Hegde",
    role: "System Engineer",
    image: getImagePath("Nidhi Hegde"),
    github: "nidhi-hegde",
    linkedin: "nidhi-hegde",
  },
  {
    name: "Swetha M R",
    role: "System Admin",
    image: getImagePath("Swetha M R"),
    github: "swetha-m-r",
    linkedin: "swetha-m-r",
  },

  // Subsystem Leads
  {
    name: "Rachit Takate",
    role: "ODHS Lead",
    image: getImagePath("Rachit Takate"),
  },
  {
    name: "Ankit Mishra",
    role: "ADCS Lead",
    image: getImagePath("Ankit Mishra"),
    github: "ankit-mishra",
    linkedin: "ankit-mishra",
  },
  { name: "Akshay Sai", role: "EPS Lead", image: getImagePath("Akshay Sai") },
  {
    name: "Jayant Sharma",
    role: "COMMS Lead",
    image: getImagePath("Jayant Sharma"),
  },
  {
    name: "Swetha M R",
    role: "Administration Lead",
    image: getImagePath("Swetha M R"),
    github: "swetha-m-r",
    linkedin: "swetha-m-r",
  },

  // ODHS Team
  {
    name: "Rithika Salimath",
    role: "ODHS Team",
    image: getImagePath("Rithika Salimath"),
  },
  {
    name: "Aanya Shantaram",
    role: "ODHS Team",
    image: getImagePath("Aanya Shantaram"),
  },
  {
    name: "Soham Singh",
    role: "ODHS Team",
    image: getImagePath("Soham Singh"),
  },
  { name: "Nishitha", role: "ODHS Team", image: getImagePath("Nishitha") },
  { name: "Prathamesh", role: "ODHS Team", image: getImagePath("Prathamesh") },
  { name: "Saloni", role: "ODHS Team", image: getImagePath("Saloni") },

  // ADCS Team
  {
    name: "Visalakshi S",
    role: "ADCS Team",
    image: getImagePath("Visalakshi S"),
  },
  {
    name: "Sudeeksha Battacharya",
    role: "ADCS Team",
    image: getImagePath("Sudeeksha Battacharya"),
  },
  {
    name: "Nischal Nori",
    role: "ADCS Team",
    image: getImagePath("Nischal Nori"),
  },
  { name: "Samika", role: "ADCS Team", image: getImagePath("Samika") },
  { name: "Ardra", role: "ADCS Team", image: getImagePath("Ardra") },

  // EPS Team
  { name: "Jay", role: "EPS Team", image: getImagePath("Jay") },
  { name: "Prakhar", role: "EPS Team", image: getImagePath("Prakhar") },

  // COMMS Team
  {
    name: "Nidhi Hegde",
    role: "COMMS Team",
    image: getImagePath("Nidhi Hegde"),
    github: "nidhi-hegde",
    linkedin: "nidhi-hegde",
  },
  { name: "Om", role: "COMMS Team", image: getImagePath("Om") },
  {
    name: "Nithish Khumaran",
    role: "COMMS Team",
    image: getImagePath("Nithish Khumaran"),
  },

  // Payload Team
  {
    name: "Shrihar Pande",
    role: "Payload Team",
    image: getImagePath("Shrihar Pande"),
  },
  {
    name: "Roselin Maria",
    role: "Payload Team",
    image: getImagePath("Roselin Maria"),
  },
  {
    name: "Asna Kidvai",
    role: "Payload Team",
    image: getImagePath("Asna Kidvai"),
  },
  {
    name: "Siddharta Chhauda",
    role: "Payload Team",
    image: getImagePath("Siddharta Chhauda"),
  },
  { name: "Rushat", role: "Payload Team", image: getImagePath("Rushat") },

  // STMS Team
  {
    name: "Radhika Sasindran",
    role: "STMS Team",
    image: getImagePath("Radhika Sasindran"),
  },

  // Administration Team
  {
    name: "Phirozgar Irani",
    role: "Administration Team",
    image: getImagePath("Phirozgar Irani"),
  },
  {
    name: "Nandini Sah",
    role: "Administration Team",
    image: getImagePath("Nandini Sah"),
  },
  {
    name: "Rishitha Kantevari",
    role: "Administration Team",
    image: getImagePath("Rishitha Kantevari"),
  },

  // Faculty Advisors
  {
    name: "Dr. Shreesha Chokkadi",
    role: "Faculty Advisor",
    department: "Electrical & Instrumentation Engineering",
    image: getImagePath("Shreesha Chokkadi"),
  },
  {
    name: "Dr. Balbir Singh",
    role: "Faculty Advisor",
    department: "Aeronautical Engineering",
    image: getImagePath("Balbir Singh"),
  },
  {
    name: "Dr. Manikandan",
    role: "Faculty Advisor",
    department: "Aeronautical Engineering",
    image: getImagePath("Manikandan"),
  },
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
      members: allTeamMembers.filter((m) => m.role === "ODHS Team"),
    },
    {
      name: "ADCS Team",
      members: allTeamMembers.filter((m) => m.role === "ADCS Team"),
    },
    {
      name: "EPS Team",
      members: allTeamMembers.filter((m) => m.role === "EPS Team"),
    },
    {
      name: "COMMS Team",
      members: allTeamMembers.filter((m) => m.role === "COMMS Team"),
    },
    {
      name: "Payload Team",
      members: allTeamMembers.filter((m) => m.role === "Payload Team"),
    },
    {
      name: "STMS Team",
      members: allTeamMembers.filter((m) => m.role === "STMS Team"),
    },
    {
      name: "Administration Team",
      members: allTeamMembers.filter((m) => m.role === "Administration Team"),
    },
  ];

  return (
    <div className="pt-16">
      <div className="min-h-screen bg-[#0A0A0A]">
        {/* Hero Section with Background Image */}
        <header
          className="relative bg-cover bg-center h-[60vh] flex items-center"
          style={{
            backgroundImage: "url('/team/team-photo.jpg')",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                      {member.github && (
                        <a
                          href={`https://github.com/${member.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7AECEC] hover:text-white transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${member.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7AECEC] hover:text-white transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                </div>
              ))}
            </div>
          </section>

          {/* Join Our Team */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#7AECEC]">
              Join Our Team
            </h2>
            <div className="bg-[#0A0A0A] rounded-lg p-8 border border-[#7AECEC]">
              <p className="text-lg mb-6 text-[#7AECEC]">
                We're always looking for passionate students interested in space
                technology, engineering, and research. Applications open each
                semester for new team members.
              </p>
              <button className="bg-[#7AECEC] text-[#0A0A0A] px-6 py-3 rounded-lg font-bold hover:bg-[#69d4d4] transition">
                Apply to Join
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default TeamPage;
