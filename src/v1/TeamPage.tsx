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

function TeamPage() {
  // Team member data with social links and images
  const executiveBoard: TeamMember[] = [
    {
      name: "Srishti Singh",
      role: "System Engineer",
      image: "/team/srishti.jpg", // You'll need to add these images
      github: "srishti-singh",
      linkedin: "srishti-singh",
    },
    {
      name: "Shashwat Harsh",
      role: "System Engineer",
      image: "/team/shashwat.jpg",
      github: "shashwat-harsh",
      linkedin: "shashwat-harsh",
    },
    {
      name: "Ankit Mishra",
      role: "System Engineer",
      image: "/team/ankit.jpg",
      github: "ankit-mishra",
      linkedin: "ankit-mishra",
    },
    {
      name: "Nidhi Hegde",
      role: "System Engineer",
      image: "/team/nidhi.jpg",
      github: "nidhi-hegde",
      linkedin: "nidhi-hegde",
    },
    {
      name: "Swetha M R",
      role: "System Admin",
      image: "/team/swetha.jpg",
      github: "swetha-m-r",
      linkedin: "swetha-m-r",
    },
  ];

  // Team hierarchy data
  const teamHierarchy = [
    {
      role: "Executive Board",
      members: [
        { name: "Srishti Singh", department: "System Engineer" },
        { name: "Shashwat Harsh", department: "System Engineer" },
        { name: "Ankit Mishra", department: "System Engineer" },
        { name: "Nidhi Hegde", department: "System Engineer" },
        { name: "Swetha M R", department: "System Admin" },
      ],
    },
    {
      role: "Subsystem Leads",
      members: [
        { name: "Rachit Takate", department: "ODHS" },
        { name: "Ankit Mishra", department: "ADCS" },
        { name: "Akshay Sai", department: "EPS" },
        { name: "Jayant Sharma", department: "COMMS" },
        { name: "", department: "STMS" },
        { name: "Swetha M R", department: "Administration" },
      ],
    },
    {
      role: "Team Members",
      departments: [
        {
          name: "ODHS Team",
          members: [
            "Rachit Takate",
            "Rithika Salimath",
            "Aanya Shantaram",
            "Soham Singh",
            "Nishitha",
            "Prathamesh",
            "Saloni",
          ],
        },
        {
          name: "ADCS Team",
          members: [
            "Ankit Mishra",
            "Visalakshi S",
            "Sudeeksha Battacharya",
            "Nischal Nori",
            "Samika",
            "Ardra",
          ],
        },
        {
          name: "EPS Team",
          members: ["Akshay Sai", "Jayanth", "Prakhar"],
        },
        {
          name: "COMMS Team",
          members: ["Jayant Sharma", "Nidhi Hegde", "Om", "Nithish Khumaran"],
        },
        {
          name: "Payload Team",
          members: [
            "Shrihar Pande",
            "Roselin Maria",
            "Asna Kidvai",
            "Siddharta Chhauda",
            "Rushat",
          ],
        },
        {
          name: "STMS Team",
          members: ["Radhika Sasindran"],
        },
        {
          name: "Administration Team",
          members: ["Phirozgar Irani"],
        },
      ],
    },
    {
      role: "Faculty Advisors",
      members: [
        {
          name: "Dr. Shreesha Chokkadi",
          department: "Electrical & Instrumentation Engineering",
        },
        { name: "Dr. Balbir Singh", department: "Aeronautical Engineering" },
        { name: "Dr. Manikandan", department: "Aeronautical Engineering" },
      ],
    },
  ];

  return (
    <div className="pt-16">
      <div className="min-h-screen bg-[#0A0A0A]">
        {/* Hero Section with Background Image */}
        <header
          className="relative bg-cover bg-center h-[60vh] flex items-center"
          style={{
            backgroundImage: "url('/team/team-photo.jpg')", // Add your team photo
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
          {/* Meet Our Team Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-[#7AECEC] text-center">
              Meet Our Team
            </h2>

            {/* Executive Board */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-[#7AECEC] border-b border-[#7AECEC] pb-2">
                Executive Board
              </h3>
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
                      <p className="text-gray-400 text-sm mb-3">
                        {member.role}
                      </p>
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
            </div>

            {/* Individual Teams */}
            {teamHierarchy[2]?.departments?.map((dept, index) => (
              <div key={index} className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-[#7AECEC] border-b border-[#7AECEC] pb-2">
                  {dept.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {dept.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0A0A0A] rounded-lg overflow-hidden border border-[#7AECEC] group hover:border-white transition-all duration-300"
                    >
                      <div className="aspect-square overflow-hidden bg-gray-800">
                        <img
                          src={`/team/placeholder.jpg`} // Add placeholder image
                          alt={member}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-[#7AECEC] font-bold text-lg mb-1">
                          {member}
                        </h4>
                        <p className="text-gray-400 text-sm mb-3">
                          {dept.name} Member
                        </p>
                        <div className="flex gap-3">
                          <a
                            href="#"
                            className="text-[#7AECEC] hover:text-white transition-colors"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href="#"
                            className="text-[#7AECEC] hover:text-white transition-colors"
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

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#7AECEC]">
              Team Hierarchy
            </h2>

            <div className="bg-[#0A0A0A] rounded-lg shadow-lg p-8 overflow-auto border border-[#7AECEC]">
              <div className="min-w-[800px]">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center mb-8">
                    <div className="bg-[#0A0A0A] text-[#7AECEC] p-4 rounded-lg w-64 text-center mb-4 border border-[#7AECEC]">
                      <h3 className="font-bold">{teamHierarchy[0].role}</h3>
                    </div>

                    <div className="w-3/4 h-1 bg-[#7AECEC] mb-4"></div>

                    <div className="flex flex-wrap justify-center gap-4">
                      {teamHierarchy[0]?.members?.map((lead, index) => (
                        <div
                          key={index}
                          className="bg-[#0A0A0A] text-[#7AECEC] p-3 rounded-lg w-56 text-center border border-[#7AECEC]"
                        >
                          <h4 className="font-bold">{lead.department}</h4>
                          <p>{lead.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-1 h-8 bg-[#7AECEC]"></div>

                  <div className="flex flex-col items-center mb-8">
                    <div className="bg-[#0A0A0A] text-[#7AECEC] p-4 rounded-lg w-64 text-center mb-4 border border-[#7AECEC]">
                      <h3 className="font-bold">{teamHierarchy[1].role}</h3>
                    </div>

                    <div className="w-3/4 h-1 bg-[#7AECEC] mb-4"></div>

                    <div className="flex flex-wrap justify-center gap-4">
                      {teamHierarchy[1]?.members?.map((lead, index) => (
                        <div
                          key={index}
                          className="bg-[#0A0A0A] text-[#7AECEC] p-3 rounded-lg w-56 text-center border border-[#7AECEC]"
                        >
                          <h4 className="font-bold">{lead.department}</h4>
                          <p>{lead.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#0A0A0A] text-[#7AECEC] p-4 rounded-lg w-64 text-center mb-4 border border-[#7AECEC]">
                    <h3 className="font-bold">{teamHierarchy[2].role}</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#7AECEC]">
              Subsystem Team Members
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamHierarchy[2]?.departments?.map((dept, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0A] rounded-lg shadow-lg p-6 border border-[#7AECEC]"
                >
                  <h3 className="text-xl font-bold mb-4 text-[#7AECEC]">
                    {dept.name}
                  </h3>
                  <ul className="space-y-2">
                    {dept.members.map((member, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-[#7AECEC]"
                      >
                        <ChevronRight
                          size={16}
                          className="text-[#7AECEC] mr-2"
                        />
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#7AECEC]">
              Faculty Advisors
            </h2>

            <div className="bg-[#0A0A0A] rounded-lg shadow-lg p-6 border border-[#7AECEC]">
              <h3 className="text-xl font-bold mb-4 text-[#7AECEC]">
                {teamHierarchy[3].role}
              </h3>
              <ul className="space-y-4">
                {teamHierarchy[3]?.members?.map((advisor, index) => (
                  <li key={index} className="border-b border-[#7AECEC] pb-3">
                    <p className="font-bold text-[#7AECEC]">{advisor.name}</p>
                    <p className="text-[#7AECEC]">{advisor.department}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

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
