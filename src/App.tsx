import React, { useState } from 'react';
import { 
  Rocket, 
  Satellite, 
  Users, 
  Award, 
  ChevronRight, 
  Menu, 
  X, 
  Code, 
  FlaskRound as Flask, 
  BookOpen, 
  HelpCircle, 
  Cpu, 
  Radio, 
  Battery, 
  Boxes, 
  Compass, 
  Wrench,
  Building2
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#7AECEC] font-mono">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#7AECEC]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Satellite className="w-8 h-8" />
              <span className="ml-2 text-xl font-bold">PARIKSHIT</span>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center space-x-6">
                <a href="#home" className="hover:text-white transition-colors">HOME</a>
                <a href="#about" className="hover:text-white transition-colors">ABOUT US</a>
                <a href="#subsystems" className="hover:text-white transition-colors">SUBSYSTEMS</a>
                <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
                <a href="#research" className="hover:text-white transition-colors">RESEARCH</a>
                <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
                <a href="#team" className="hover:text-white transition-colors">TEAM</a>
                <button className="bg-[#7AECEC] text-black px-4 py-2 rounded-full font-bold hover:bg-white transition-colors">
                  JOIN US
                </button>
              </div>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#7AECEC]">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0A0A0A] border-b border-[#7AECEC]/20">
              <a href="#home" className="block px-3 py-2 hover:text-white transition-colors">HOME</a>
              <a href="#about" className="block px-3 py-2 hover:text-white transition-colors">ABOUT US</a>
              <a href="#subsystems" className="block px-3 py-2 hover:text-white transition-colors">SUBSYSTEMS</a>
              <a href="#projects" className="block px-3 py-2 hover:text-white transition-colors">PROJECTS</a>
              <a href="#research" className="block px-3 py-2 hover:text-white transition-colors">RESEARCH</a>
              <a href="#faqs" className="block px-3 py-2 hover:text-white transition-colors">FAQs</a>
              <a href="#team" className="block px-3 py-2 hover:text-white transition-colors">TEAM</a>
              <button className="w-full text-left px-3 py-2 bg-[#7AECEC] text-black rounded-full font-bold hover:bg-white transition-colors">
                JOIN US
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">PARIKSHIT STUDENT SATELLITE</h1>
              <p className="text-lg mb-8 text-[#7AECEC]/80">
                Pioneering space exploration through student-led innovation and research.
              </p>
              <button className="bg-[#7AECEC] text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors flex items-center">
                JOIN US <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80"
                alt="Satellite in space"
                className="rounded-lg shadow-2xl shadow-[#7AECEC]/20"
              />
              <div className="absolute inset-0 border-2 border-[#7AECEC]/20 rounded-lg -translate-x-4 -translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">ABOUT US</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-[#7AECEC]/80 mb-6">
                Parikshit is a student-led initiative pushing the boundaries of space technology and research. Our team comprises passionate undergraduate students working together to design, build, and launch our own satellite.
              </p>
              <p className="text-lg text-[#7AECEC]/80">
                Through hands-on experience and mentorship from industry experts, we're developing the next generation of space engineers and scientists.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Team working on satellite"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subsystems Section */}
      <section id="subsystems" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">SUBSYSTEMS</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group">
              <Cpu className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">ODHS</h3>
              <p className="text-[#7AECEC]/80">
                Onboard Data Handling System for satellite command processing and data management.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group">
              <Compass className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">ADCS</h3>
              <p className="text-[#7AECEC]/80">
                Attitude Determination & Control System for precise satellite orientation.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group">
              <Battery className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">EPS</h3>
              <p className="text-[#7AECEC]/80">
                Electrical & Power System ensuring continuous power supply and distribution.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group">
              <Rocket className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">PAYLOAD</h3>
              <p className="text-[#7AECEC]/80">
                Scientific instruments and experimental equipment for mission objectives.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group">
              <Radio className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">COMMS</h3>
              <p className="text-[#7AECEC]/80">
                Communications Systems for reliable data transmission and ground station links.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group">
              <Boxes className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">STMS</h3>
              <p className="text-[#7AECEC]/80">
                Structures, Thermal & Mechanics System for satellite integrity and temperature control.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group">
              <Building2 className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">ADMIN & Ops</h3>
              <p className="text-[#7AECEC]/80">
                Administration and Operations managing project logistics and team coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">CubeSat Development</h3>
              <p className="text-[#7AECEC]/80 mb-4">
                Our flagship 3U CubeSat project, designed for atmospheric research and technology demonstration.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
                alt="CubeSat project"
                className="rounded-lg"
              />
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ground Station</h3>
              <p className="text-[#7AECEC]/80 mb-4">
                State-of-the-art ground station for satellite communication and control.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&q=80"
                alt="Ground station"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">RESEARCH</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <Flask className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Atmospheric Science</h3>
              <p className="text-[#7AECEC]/80">
                Studying upper atmosphere composition and climate patterns.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <BookOpen className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Publications</h3>
              <p className="text-[#7AECEC]/80">
                Student-led research papers and conference presentations.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Achievements</h3>
              <p className="text-[#7AECEC]/80">
                Recognition and awards for innovative space research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">FAQs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <HelpCircle className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">How can I join?</h3>
              <p className="text-[#7AECEC]/80">
                We welcome students from all engineering disciplines. Applications open each semester.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <HelpCircle className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">What experience do I need?</h3>
              <p className="text-[#7AECEC]/80">
                Passion for space technology is key. Training provided for all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">OUR TEAM</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center">
              <Users className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">50+ Members</h3>
              <p className="text-[#7AECEC]/80">
                Dedicated students across multiple disciplines
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center">
              <Code className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Engineering</h3>
              <p className="text-[#7AECEC]/80">
                Mechanical, Electrical, Software
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center">
              <Flask className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-[#7AECEC]/80">
                Physics, Data Science
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center">
              <Award className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Leadership</h3>
              <p className="text-[#7AECEC]/80">
                Project Management, Mentorship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section id="join" className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Join the Mission?</h2>
          <p className="text-lg mb-8 text-[#7AECEC]/80 max-w-2xl mx-auto">
            We're looking for passionate students interested in space technology, engineering, and research.
          </p>
          <button className="bg-[#7AECEC] text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors inline-flex items-center">
            GET INVOLVED <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#7AECEC]/20">
        <div className="max-w-7xl mx-auto text-center text-[#7AECEC]/60">
          <p>© 2025 PARIKSHIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;