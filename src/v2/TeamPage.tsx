import { Users, Award, ChevronRight, Building2 } from 'lucide-react';

const TeamPageV2 = () => {
  // Team hierarchy data
  const teamHierarchy = [
    {
        role: 'Executive Board',
        members: [
          { name: 'Srishti Singh', department: 'System Engineer' },
          { name: 'Shashwat Harsh', department: 'System Engineer' },
          { name: 'Ankit Mishra', department: 'System Engineer' },
          { name: 'Nidhi Hegde', department: 'System Engineer' },
          { name: 'Swetha M R', department: 'System Admin' },
        ]
    },
    {
      role: 'Subsystem Leads',
      members: [
        { name: 'Rachit Takate', department: 'ODHS' },
        { name: 'Ankit Mishra', department: 'ADCS' },
        { name: 'Akshay Sai', department: 'EPS' },
        { name: 'Jayant Sharma', department: 'COMMS' },
        { name: '', department: 'STMS' },
        { name: 'Swetha M R', department: 'Administration' },
      ]
    },
    {
      role: 'Team Members',
      departments: [
        { 
          name: 'ODHS Team', 
          members: ['Rithika Salimath', 'Aanya Shantaram','Soham Singh', 'Nishitha', 'Prathamesh', 'Saloni'] 
        },
        { 
          name: 'ADCS Team', 
          members: ['Visalakshi S', 'Sudeeksha Battacharya', 'Nischal Nori', 'Samika', 'Ardra'] 
        },
        { 
          name: 'EPS Team', 
          members: ['Jayanth', 'Prakhar'] 
        },
        { 
          name: 'COMMS Team', 
          members: ['Om', 'Nithish Khumaran'] 
        },
        {
            name: 'Payload Team',
            members: ['Asna Kidvai', 'Siddharta Chhauda', 'Rushat']
        },
        { 
          name: 'STMS Team', 
          members: ['Radhika Sasindran'] 
        },
        { 
          name: 'Administration Team', 
          members: ['Phirozgar Irani'] 
        },
      ]
    },
    {
      role: 'Faculty Advisors',
      members: [
        { name: 'Dr. Shreesha Chokkadi', department: 'Electrical & Instrumentation Engineering' },
        { name: 'Dr. Balbir Singh', department: 'Aeronautical Engineering' },
        { name: 'Dr. Manikandan', department: 'Aeronautical Engineering' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 flex items-center">
            <Users className="mr-3" size={36} /> Our Team
          </h1>
          <p className="text-xl max-w-3xl">
            Meet the passionate students behind Parikshit satellite mission, working together to push the boundaries of space technology.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">Team Overview</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-lg mb-6 text-indigo-950">
              Parikshit is powered by dedicated undergraduate students across multiple engineering disciplines, including Mechanical, Electrical, Software, Physics, and Data Science, supported by faculty mentors and industry advisors.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="bg-indigo-50 rounded-lg p-6 flex-1">
                <h3 className="text-xl font-bold mb-3 text-indigo-800 flex items-center">
                  <Users className="mr-2" /> Team Composition
                </h3>
                <p className='text-indigo-950'>Our team consists of over 40 undergraduate students from various engineering disciplines working across 6 technical subsystems and administrative roles.</p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 flex-1">
                <h3 className="text-xl font-bold mb-3 text-indigo-800 flex items-center">
                  <Award className="mr-2" /> Core Values
                </h3>
                <p>Innovation, collaboration, hands-on learning, and mentorship form the foundation of our team culture, driving our mission forward.</p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 flex-1">
                <h3 className="text-xl font-bold mb-3 text-indigo-800 flex items-center">
                  <Building2 className="mr-2" /> Structure
                </h3>
                <p>Our team operates with a hierarchical structure led by student project directors and technical leads, with faculty advisors providing guidance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">Team Hierarchy</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 overflow-auto">
            <div className="min-w-[800px]">
              {/* Organizational Chart */}
              <div className="flex flex-col items-center">
                {/* Executive Board */}
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-indigo-900 text-white p-4 rounded-lg w-64 text-center mb-4">
                        <h3 className="font-bold">{teamHierarchy[0].role}</h3>
                    </div>
                  
                  <div className="w-3/4 h-1 bg-gray-400 mb-4"></div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    {teamHierarchy[0]?.members?.map((lead, index) => (
                      <div key={index} className="bg-indigo-600 text-white p-3 rounded-lg w-56 text-center">
                        <h4 className="font-bold">{lead.department}</h4>
                        <p>{lead.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="w-1 h-8 bg-gray-400"></div>

                {/* Subsystem Leads */}
                <div className="flex flex-col items-center mb-8">
                  <div className="bg-indigo-700 text-white p-4 rounded-lg w-64 text-center mb-4">
                    <h3 className="font-bold">{teamHierarchy[1].role}</h3>
                  </div>
                  
                  <div className="w-3/4 h-1 bg-gray-400 mb-4"></div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    {teamHierarchy[1]?.members?.map((lead, index) => (
                      <div key={index} className="bg-indigo-600 text-white p-3 rounded-lg w-56 text-center">
                        <h4 className="font-bold">{lead.department}</h4>
                        <p>{lead.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Team Members */}
                <div className="bg-indigo-500 text-white p-4 rounded-lg w-64 text-center mb-4">
                  <h3 className="font-bold">{teamHierarchy[2].role}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">Subsystem Team Members</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamHierarchy[2]?.departments?.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-indigo-800">{dept.name}</h3>
                <ul className="space-y-2">
                  {dept.members.map((member, idx) => (
                    <li key={idx} className="flex items-center">
                      <ChevronRight size={16} className="text-indigo-600 mr-2" />
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">Faculty Advisors</h2>
                      
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-indigo-800">{teamHierarchy[3].role}</h3>
              <ul className="space-y-4">
                {teamHierarchy[3]?.members?.map((advisor, index) => (
                  <li key={index} className="border-b border-gray-100 pb-3">
                    <p className="font-bold">{advisor.name}</p>
                    <p className="text-gray-600">{advisor.department}</p>
                  </li>
                ))}
              </ul>
            </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">Join Our Team</h2>
          <div className="bg-indigo-100 rounded-lg p-8">
            <p className="text-lg mb-6">
              We're always looking for passionate students interested in space technology, engineering, and research. Applications open each semester for new team members.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
              Apply to Join
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeamPageV2;
