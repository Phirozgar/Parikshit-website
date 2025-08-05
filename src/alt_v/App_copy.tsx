import { useState } from "react";
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
  BatteryFullIcon,
  Boxes,
  Compass,
  Building2,
} from "lucide-react";
import "./styles.css";

function App_copy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-container">
            <div className="nav-logo">
              <Satellite className="nav-logo-icon" />
              <span className="nav-logo-text">PARIKSHIT</span>
            </div>
            <div className="nav-links-container">
              <div className="nav-links"></div>
              <a href="" className="nav-link">
                HOME
              </a>
              <a href="#about" className="nav-link">
                ABOUT US
              </a>
              <a href="#subsystems" className="nav-link">
                SUBSYSTEMS
              </a>
              <a href="#projects" className="nav-link">
                PROJECTS
              </a>
              <a href="#research" className="nav-link">
                RESEARCH
              </a>
              <a href="#faqs" className="nav-link">
                FAQs
              </a>
              <a href="#team" className="nav-link">
                TEAM
              </a>
              <button className="nav-button">JOIN US</button>
            </div>
            <div className="mobile-menu-button">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="nav-logo-icon" />
                ) : (
                  <Menu className="nav-logo-icon" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="container">
            <a href="#home" className="nav-link">
              HOME
            </a>
            <a href="#about" className="nav-link">
              ABOUT US
            </a>
            <a href="#subsystems" className="nav-link">
              SUBSYSTEMS
            </a>
            <a href="#projects" className="nav-link">
              PROJECTS
            </a>
            <a href="#research" className="nav-link">
              RESEARCH
            </a>
            <a href="#faqs" className="nav-link">
              FAQs
            </a>
            <a href="#team" className="nav-link">
              TEAM
            </a>
            <button className="nav-button">JOIN US</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div>
              <h1 className="hero-title">PARIKSHIT STUDENT SATELLITE</h1>
              <p className="hero-description">
                Pioneering space exploration through student-led innovation and
                research.
              </p>
              <button className="nav-button">
                JOIN US <ChevronRight className="nav-logo-icon" />
              </button>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80"
                alt="Satellite in space"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ABOUT US</h2>
            <p className="section-description">
              Parikshit is a student-led initiative pushing the boundaries of
              space technology and research. Our team comprises passionate
              undergraduate students working together to design, build, and
              launch our own satellite.
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <p className="card-description">
                Through hands-on experience and mentorship from industry
                experts, we're developing the next generation of space engineers
                and scientists.
              </p>
            </div>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Team working on satellite"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subsystems Section */}
      <section id="subsystems" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">SUBSYSTEMS</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <Cpu className="card-icon" />
              <h3 className="card-title">ODHS</h3>
              <p className="card-description">
                Onboard Data Handling System for satellite command processing
                and data management.
              </p>
            </div>
            <div className="card">
              <Compass className="card-icon" />
              <h3 className="card-title">ADCS</h3>
              <p className="card-description">
                Attitude Determination & Control System for precise satellite
                orientation.
              </p>
            </div>
            <div className="card">
              <BatteryFullIcon className="card-icon" />
              <h3 className="card-title">EPS</h3>
              <p className="card-description">
                Electrical & Power System ensuring continuous power supply and
                distribution.
              </p>
            </div>
            <div className="card">
              <Rocket className="card-icon" />
              <h3 className="card-title">PAYLOAD</h3>
              <p className="card-description">
                Scientific instruments and experimental equipment for mission
                objectives.
              </p>
            </div>
            <div className="card">
              <Radio className="card-icon" />
              <h3 className="card-title">COMMS</h3>
              <p className="card-description">
                Communications Systems for reliable data transmission and ground
                station links.
              </p>
            </div>
            <div className="card">
              <Boxes className="card-icon" />
              <h3 className="card-title">STMS</h3>
              <p className="card-description">
                Structures, Thermal & Mechanics System for satellite integrity
                and temperature control.
              </p>
            </div>
            <div className="card">
              <Building2 className="card-icon" />
              <h3 className="card-title">ADMIN & Ops</h3>
              <p className="card-description">
                Administration and Operations managing project logistics and
                team coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">PROJECTS</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <h3 className="card-title">CubeSat Development</h3>
              <p className="card-description">
                Our flagship 3U CubeSat project, designed for atmospheric
                research and technology demonstration.
              </p>
              <img
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
                alt="CubeSat project"
                className="hero-image"
              />
            </div>
            <div className="card">
              <h3 className="card-title">Ground Station</h3>
              <p className="card-description">
                State-of-the-art ground station for satellite communication and
                control.
              </p>
              <img
                src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&q=80"
                alt="Ground station"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">RESEARCH</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <Flask className="card-icon" />
              <h3 className="card-title">Atmospheric Science</h3>
              <p className="card-description">
                Studying upper atmosphere composition and climate patterns.
              </p>
            </div>
            <div className="card">
              <BookOpen className="card-icon" />
              <h3 className="card-title">Publications</h3>
              <p className="card-description">
                Student-led research papers and conference presentations.
              </p>
            </div>
            <div className="card">
              <Award className="card-icon" />
              <h3 className="card-title">Achievements</h3>
              <p className="card-description">
                Recognition and awards for innovative space research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">FAQs</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <HelpCircle className="card-icon" />
              <h3 className="card-title">How can I join?</h3>
              <p className="card-description">
                We welcome students from all engineering disciplines.
                Applications open each semester.
              </p>
            </div>
            <div className="card">
              <HelpCircle className="card-icon" />
              <h3 className="card-title">What experience do I need?</h3>
              <p className="card-description">
                Passion for space technology is key. Training provided for all
                skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">OUR TEAM</h2>
          </div>
          <div className="card-grid">
            <div className="card">
              <Users className="card-icon" />
              <h3 className="card-title">50+ Members</h3>
              <p className="card-description">
                Dedicated students across multiple disciplines
              </p>
            </div>
            <div className="card">
              <Code className="card-icon" />
              <h3 className="card-title">Engineering</h3>
              <p className="card-description">
                Mechanical, Electrical, Software
              </p>
            </div>
            <div className="card">
              <Flask className="card-icon" />
              <h3 className="card-title">Research</h3>
              <p className="card-description">Physics, Data Science</p>
            </div>
            <div className="card">
              <Award className="card-icon" />
              <h3 className="card-title">Leadership</h3>
              <p className="card-description">Project Management, Mentorship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section id="join" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ready to Join the Mission?</h2>
            <p className="section-description">
              We're looking for passionate students interested in space
              technology, engineering, and research.
            </p>
          </div>
          <div className="card">
            <button className="nav-button">
              GET INVOLVED <ChevronRight className="nav-logo-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 PARIKSHIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App_copy;
