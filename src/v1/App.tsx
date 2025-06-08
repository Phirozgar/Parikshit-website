import { useState, useEffect } from "react";
import {
  Rocket,
  Satellite,
  Users,
  Award,
  ChevronRight,
  Code,
  FlaskRound as Flask,
  BookOpen,
  HelpCircle,
  Cpu,
  Radio,
  Battery,
  Boxes,
  Compass,
  Building2,
} from "lucide-react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import SubsystemsPage from "./SubsystemsPage";
import TeamPage from "./TeamPage";
import ProjectsPage from "./ProjectsPage";
import ResearchPage from "./ResearchPage";
import TeamPageV2 from "../v2/TeamPage";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Add global smooth scroll behavior
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

function AnimatedRoutes() {
  const location = useLocation();
  useEffect(() => {
    // Always scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.search]);
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname + location.search} classNames="fade" timeout={400}>
        <div className="fade-route">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/subsystems" element={<SubsystemsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/team-v2" element={<TeamPageV2 />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/research" element={<ResearchPage />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuWasOpen, setMenuWasOpen] = useState(false);

  // Keep menu mounted for exit animation
  useEffect(() => {
    if (isMenuOpen) setMenuWasOpen(true);
  }, [isMenuOpen]);

  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] text-[#7AECEC] font-mono">
        {/* Navigation */}
        <nav className="fixed w-full bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#7AECEC]/20 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Satellite className="w-8 h-8" />
                  <span className="ml-2 text-xl font-bold">PARIKSHIT</span>
                </Link>
              </div>
              <div className="hidden lg:block ">
                <div className="flex items-center space-x-6">
                  <Link to="/" className="hover:text-white transition-colors">
                    HOME
                  </Link>
                  <Link
                    to="/team"
                    className="hover:text-white transition-colors"
                  >
                    TEAM
                  </Link>
                  <a
                    href="/#about"
                    className="hover:text-white transition-colors"
                  >
                    ABOUT US
                  </a>
                  <Link
                    to="/subsystems"
                    className="hover:text-white transition-colors"
                  >
                    SUBSYSTEMS
                  </Link>
                  <Link
                    to="/projects"
                    className="hover:text-white transition-colors"
                  >
                    PROJECTS
                  </Link>
                  <Link
                    to="/research"
                    className="hover:text-white transition-colors"
                  >
                    RESEARCH
                  </Link>
                  <a
                    href="/#faqs"
                    className="hover:text-white transition-colors"
                  >
                    FAQs
                  </a>

                  <button className="bg-[#7AECEC] text-black px-4 py-2 rounded-full font-bold hover:bg-white transition-colors">
                    JOIN US
                  </button>
                </div>
              </div>
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen((open) => !open)}
                  className={`hamburger${
                    isMenuOpen ? " active" : ""
                  } w-8 h-8 flex flex-col justify-between items-center bg-transparent border-none cursor-pointer`}
                  aria-label="Toggle menu"
                >
                  <span className="bar w-6 h-0.3 bg-[#7AECEC] transition-all duration-300 ease-in-out"></span>
                  <span className="bar w-6 h-0.3 bg-[#7AECEC] transition-all duration-300 ease-in-out"></span>
                  <span className="bar w-6 h-0.3 bg-[#7AECEC] transition-all duration-300 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {(isMenuOpen || menuWasOpen) && (
            <div
              className={`nav-links lg:hidden ${
                isMenuOpen ? "mobile-nav-slide-in" : "mobile-nav-slide-out"
              }`}
              onAnimationEnd={() => {
                if (!isMenuOpen) setMenuWasOpen(false);
              }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0A0A0A] border-b border-[#7AECEC]/20">
                <Link
                  to="/"
                  className="block px-3 py-2 hover:text-white transition-colors"
                >
                  HOME
                </Link>
                <Link
                  to="/team"
                  className="block px-3 py-2 hover:text-white transition-colors"
                >
                  TEAM
                </Link>
                <a
                  href="#about"
                  className="block px-3 py-2 hover:text-white transition-colors"
                >
                  ABOUT US
                </a>
                <Link
                  to="/subsystems"
                  className="block px-3 py-2 hover:text-white transition-colors"
                >
                  SUBSYSTEMS
                </Link>
                <Link
                  to="/projects"
                  className="block px-3 py-2 hover:text-white transition-colors"
                >
                  PROJECTS
                </Link>
                <Link
                  to="/research"
                  className="block px-3 py-2 hover:text-white transition-colors"
                >
                  RESEARCH
                </Link>
                <a
                  href="#faqs"
                  className="block px-3 py-2 hover:text-white transition-colors"
                >
                  FAQs
                </a>
                <button className="w-full text-left px-3 py-2 bg-[#7AECEC] text-black rounded-full font-bold hover:bg-white transition-colors">
                  JOIN US
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                PARIKSHIT STUDENT SATELLITE
              </h1>
              <p className="text-lg mb-8 text-[#7AECEC]/80">
                Pioneering space exploration through student-led innovation and
                research.
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
                Parikshit is a student-led initiative pushing the boundaries of
                space technology and research. Our team comprises passionate
                undergraduate students working together to design, build, and
                launch our own satellite.
              </p>
              <p className="text-lg text-[#7AECEC]/80">
                Through hands-on experience and mentorship from industry
                experts, we're developing the next generation of space engineers
                and scientists.
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
            <Link to="/subsystems?subsystem=odhs" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
              <Cpu className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">ODHS</h3>
              <p className="text-[#7AECEC]/80">
                Onboard Data Handling System for satellite command processing
                and data management.
              </p>
            </Link>
            <Link to="/subsystems?subsystem=adcs" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
              <Compass className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">ADCS</h3>
              <p className="text-[#7AECEC]/80">
                Attitude Determination & Control System for precise satellite
                orientation.
              </p>
            </Link>
            <Link to="/subsystems?subsystem=eps" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
              <Battery className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">EPS</h3>
              <p className="text-[#7AECEC]/80">
                Electrical & Power System ensuring continuous power supply and
                distribution.
              </p>
            </Link>
            <Link to="/subsystems?subsystem=payload" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
              <Rocket className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">PAYLOAD</h3>
              <p className="text-[#7AECEC]/80">
                Scientific instruments and experimental equipment for mission
                objectives.
              </p>
            </Link>
            <Link to="/subsystems?subsystem=comms" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
              <Radio className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">COMMS</h3>
              <p className="text-[#7AECEC]/80">
                Communications Systems for reliable data transmission and ground
                station links.
              </p>
            </Link>
            <Link to="/subsystems?subsystem=stms" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
              <Boxes className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">STMS</h3>
              <p className="text-[#7AECEC]/80">
                Structures, Thermal & Mechanics System for satellite integrity
                and temperature control.
              </p>
            </Link>
            <Link to="/subsystems?subsystem=admin" className="p-6 border border-[#7AECEC]/20 rounded-lg hover:bg-[#111111] transition-colors group cursor-pointer block">
              <Building2 className="w-12 h-12 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-bold mb-2">ADMIN & Ops</h3>
              <p className="text-[#7AECEC]/80">
                Administration and Operations managing project logistics and
                team coordination.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg bg-[#0A0A0A] flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
                alt="CubeSat project"
                className="rounded-lg mb-6 w-full h-56 object-cover border border-[#7AECEC]/10"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#7AECEC]">
                CubeSat Development
              </h3>
              <p className="text-[#7AECEC]/80 mb-4">
                Our flagship 3U CubeSat project, designed for atmospheric
                research, technology demonstration, and student training in
                real-world space engineering.
              </p>
              <ul className="list-disc pl-5 text-[#7AECEC]/70 space-y-1 mb-2">
                <li>Full satellite design, integration, and testing by students</li>
                <li>Mission objectives include atmospheric data collection and technology validation</li>
                <li>Hands-on experience with space-grade hardware and software</li>
                <li>Collaboration with ISRO and academic mentors</li>
              </ul>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg bg-[#0A0A0A] flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&q=80"
                alt="Cansat project"
                className="rounded-lg mb-6 w-full h-56 object-cover border border-[#7AECEC]/10"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#7AECEC]">
                Cansat Development
              </h3>
              <p className="text-[#7AECEC]/80 mb-4">
                Miniaturized satellite (Cansat) projects for rapid prototyping,
                student competitions, and subsystem validation before CubeSat
                integration.
              </p>
              <ul className="list-disc pl-5 text-[#7AECEC]/70 space-y-1 mb-2">
                <li>Design and launch of Cansats for national/international competitions</li>
                <li>Subsystem prototyping and testing in a cost-effective platform</li>
                <li>Training ground for new team members</li>
                <li>Data collection and telemetry experiments</li>
              </ul>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg bg-[#0A0A0A] flex flex-col md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&q=80"
                alt="PAGOS ground station"
                className="rounded-lg mb-6 w-full h-56 object-cover border border-[#7AECEC]/10"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#7AECEC]">
                PAGOS (Parikshit Ground Station)
              </h3>
              <p className="text-[#7AECEC]/80 mb-4">
                PAGOS is our custom-built ground station for satellite
                communication, tracking, and mission operations.
              </p>
              <ul className="list-disc pl-5 text-[#7AECEC]/70 space-y-1 mb-2">
                <li>UHF/VHF/S-band communication capability</li>
                <li>Automated satellite tracking and data downlink</li>
                <li>Remote command uplink and telemetry monitoring</li>
                <li>Supports both CubeSat and Cansat missions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center text-[#7AECEC] tracking-widest drop-shadow-glow">RESEARCH & PUBLICATIONS</h2>
          <p className="text-lg text-[#7AECEC]/80 text-center mb-10 max-w-3xl mx-auto">
            Parikshit Student Satellite team contributes to global space research through peer-reviewed papers and technical innovation. Explore a selection of our latest research below.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Highlighted papers preview (first 3) */}
            <div className="bg-[#111111] border border-[#7AECEC]/20 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(122,236,236,0.2)] transition-shadow backdrop-blur-md">
              <h3 className="text-lg font-bold text-[#7AECEC] mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#7AECEC] rounded-full animate-pulse"></span>
                Orbital Dynamics and System Analysis of Nanosatellite in Decaying Orbit
              </h3>
              <p className="text-[#7AECEC]/70 mb-2 text-sm font-mono">Vedant Dubey, Avish Gupta, Shraddha Meda Sheshadri, ...</p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2020 IEEE Aerospace Conference</span>
                <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2020</span>
              </div>
              <a href="http://toc.proceedings.com/59160webtoc.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#7AECEC] text-[#0A0A0A] font-bold rounded-full shadow hover:bg-white transition-colors text-center w-fit self-end">View Paper</a>
            </div>
            <div className="bg-[#111111] border border-[#7AECEC]/20 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(122,236,236,0.2)] transition-shadow backdrop-blur-md">
              <h3 className="text-lg font-bold text-[#7AECEC] mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#7AECEC] rounded-full animate-pulse"></span>
                Complete Failure Analysis of Attitude Determination and Control Subsystem
              </h3>
              <p className="text-[#7AECEC]/70 mb-2 text-sm font-mono">Disha Gundecha, Nishant Gavhane, Vedant Dubey, ...</p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2021 IEEE Aerospace Conference</span>
                <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2020</span>
              </div>
              <a href="http://toc.proceedings.com/59160webtoc.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#7AECEC] text-[#0A0A0A] font-bold rounded-full shadow hover:bg-white transition-colors text-center w-fit self-end">View Paper</a>
            </div>
            <div className="bg-[#111111] border border-[#7AECEC]/20 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(122,236,236,0.2)] transition-shadow backdrop-blur-md">
              <h3 className="text-lg font-bold text-[#7AECEC] mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#7AECEC] rounded-full animate-pulse"></span>
                Implementation of COTS components for CubeSat applications
              </h3>
              <p className="text-[#7AECEC]/70 mb-2 text-sm font-mono">Alakh Sethi, Varun Thakurta, Nanditha Gajanur, ...</p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2017 IEEE Aerospace Conference</span>
                <span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">2017</span>
              </div>
              <a href="https://ieeexplore.ieee.org/document/7943808" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-[#7AECEC] text-[#0A0A0A] font-bold rounded-full shadow hover:bg-white transition-colors text-center w-fit self-end">View Paper</a>
            </div>
          </div>
          <div className="text-center">
            <a href="/research" className="inline-block px-8 py-3 bg-[#7AECEC] text-black font-bold rounded-full shadow hover:bg-white transition-colors text-lg">View All Research</a>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">FAQs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <HelpCircle className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">What projects can I work on?</h3>
              <p className="text-[#7AECEC]/80">
                You can contribute to CubeSat, Cansat, ground station, and research projects across engineering and science domains.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <HelpCircle className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Is prior research experience required?</h3>
              <p className="text-[#7AECEC]/80">
                No, but curiosity and willingness to learn are essential. We provide mentorship and resources for new members.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <HelpCircle className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">How is the team structured?</h3>
              <p className="text-[#7AECEC]/80">
                The team is organized into subsystems (ODHS, ADCS, EPS, COMMS, STMS, Payload, Admin) with leads and faculty advisors.
              </p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
              <HelpCircle className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">How can I contact the team?</h3>
              <p className="text-[#7AECEC]/80">
                Use the Join Us button or visit the Team page for contact details and application forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">OUR TEAM</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Executive Board Preview */}
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center bg-[#0A0A0A] flex flex-col items-center justify-center">
              <Users className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">50+ Members</h3>
              <p className="text-[#7AECEC]/80">A vibrant team of innovators, engineers, and researchers</p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center bg-[#0A0A0A] flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-2">7 Subsystems</h3>
              <p className="text-[#7AECEC]/80">ODHS, ADCS, EPS, COMMS, STMS, Payload, Admin & Ops</p>
            </div>
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center bg-[#0A0A0A] flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-2">80+ Alumni</h3>
              <p className="text-[#7AECEC]/80">Our alumni network spans 20+ top companies & research labs across the globe</p>
            </div>
            {/* Team Stats Preview */}
            <div className="p-6 border border-[#7AECEC]/20 rounded-lg text-center bg-[#0A0A0A] flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold mb-2">Connected to 20+ Companies</h3>
              <p className="text-[#7AECEC]/80">Our alumni network is at ISRO, DRDO, SpaceX, HAL, Boeing and leading tech firms</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/team" className="inline-block px-8 py-3 bg-[#7AECEC] text-black font-bold rounded-full shadow hover:bg-white transition-colors text-lg">Meet the Full Team</a>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section id="join" className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Join the Mission?
          </h2>
          <p className="text-lg mb-8 text-[#7AECEC]/80 max-w-2xl mx-auto">
            We're looking for passionate students interested in space
            technology, engineering, and research.
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
    </>
  );
}

export default App;
