import { Users, Award, ChevronRight, Building2 } from "lucide-react";

function TeamPage() {
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
            "Visalakshi S",
            "Sudeeksha Battacharya",
            "Nischal Nori",
            "Samika",
            "Ardra",
          ],
        },
        {
          name: "EPS Team",
          members: ["Jayanth", "Prakhar"],
        },
        {
          name: "COMMS Team",
          members: ["Om", "Nithish Khumaran"],
        },
        {
          name: "Payload Team",
          members: ["Asna Kidvai", "Siddharta Chhauda", "Rushat"],
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
        <header className="bg-[#0A0A0A] text-[#7AECEC] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
              <Users className="mr-3" size={36} /> Our Team (pic in the bg)
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#7AECEC]">
              Team Overview
            </h2>
            <div className="bg-[rgb(30,30,30)] rounded-lg shadow-lg p-8 mb-12 border border-[#7AECEC]">
              <p className="text-lg mb-6 text-[#7AECEC]">
                Parikshit is powered by dedicated undergraduate students across
                multiple engineering disciplines, including Mechanical,
                Electrical, Software, Physics, and Data Science, supported by
                faculty mentors and industry advisors.
              </p>

              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="bg-[#0A0A0A] rounded-lg p-6 flex-1 border border-[#7AECEC]">
                  <h3 className="text-xl font-bold mb-3 text-[#7AECEC] flex items-center">
                    <Users className="mr-2" /> Team Composition
                  </h3>
                  <p className="text-[#7AECEC]">
                    Our team consists of over 40 undergraduate students from
                    various engineering disciplines working across 6 technical
                    subsystems and administrative roles.
                  </p>
                </div>

                <div className="bg-[#0A0A0A] rounded-lg p-6 flex-1 border border-[#7AECEC]">
                  <h3 className="text-xl font-bold mb-3 text-[#7AECEC] flex items-center">
                    <Award className="mr-2" /> Core Values
                  </h3>
                  <p className="text-[#7AECEC]">
                    Innovation, collaboration, hands-on learning, and mentorship
                    form the foundation of our team culture, driving our mission
                    forward.
                  </p>
                </div>

                <div className="bg-[#0A0A0A] rounded-lg p-6 flex-1 border border-[#7AECEC]">
                  <h3 className="text-xl font-bold mb-3 text-[#7AECEC] flex items-center">
                    <Building2 className="mr-2" /> Structure
                  </h3>
                  <p className="text-[#7AECEC]">
                    Our team operates with a hierarchical structure led by
                    student project directors and technical leads, with faculty
                    advisors providing guidance.
                  </p>
                </div>
              </div>
            </div>
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
                <div key={index} className="bg-[#0A0A0A] rounded-lg shadow-lg p-6 border border-[#7AECEC]">
                  <h3 className="text-xl font-bold mb-4 text-[#7AECEC]">
                    {dept.name}
                  </h3>
                  <ul className="space-y-2">
                    {dept.members.map((member, idx) => (
                      <li key={idx} className="flex items-center text-[#7AECEC]">
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
