import RecruitmentsPage from "./RecruitmentsPage";
import { useState, useEffect } from "react";
{/* import { Satellite } from "lucide-react"; */}
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import SubsystemsPage from "./SubsystemsPage";
import TeamPage from "./TeamPage";
import ProjectsPage from "./ProjectsPage";
import ResearchPage from "./ResearchPage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HeroSection } from "./HomePageComponents/HeroSection";
import { AboutSection } from "./HomePageComponents/AboutSection";
import { SubsystemsSection } from "./HomePageComponents/SubsystemsSection";
import { ProjectsSection } from "./HomePageComponents/ProjectsSection";
import { ResearchHighlightsSection } from "./HomePageComponents/ResearchHighlightsSection";
import { FAQsSection } from "./HomePageComponents/FAQsSection";
import { TeamStatsSection } from "./HomePageComponents/TeamStatsSection";
import { JoinUsSection } from "./HomePageComponents/JoinUsSection";
import { JoinUsModal } from "./HomePageComponents/JoinUsModal";

// Add global smooth scroll behavior
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuWasOpen, setMenuWasOpen] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  // Scroll to HomePage section by id from any route
  function scrollToSection(sectionId: string) {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // HomePage must be defined here so it can access setShowJoinModal
  function HomePage() {
    return (
      <>
        <HeroSection />
        <AboutSection />
        <SubsystemsSection />
        <ProjectsSection />
        <ResearchHighlightsSection />
        <FAQsSection />
        <TeamStatsSection />
        <JoinUsSection onJoinUs={() => setShowJoinModal(true)} />
        <footer className="py-8 px-4 border-t border-[#7AECEC]/20">
          <div className="max-w-7xl mx-auto text-center text-[#7AECEC]/60">
            <p>© 2025 PARIKSHIT. All rights reserved.</p>
          </div>
        </footer>
      </>
    );
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
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/recruitments" element={<RecruitmentsPage />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }

  // Keep menu mounted for exit animation
  useEffect(() => {
    if (isMenuOpen) setMenuWasOpen(true);
  }, [isMenuOpen]);

  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] text-[#7AECEC] font-sans">
        {/* Navigation */}
        <nav className="fixed w-full bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#7AECEC]/20 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  {/*<Satellite className="w-8 h-8" />*/}
                  <img src="/assets/icons/favicon.png" alt="Parikshit Logo" className="w-12 h-12" />
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
                  <button
                    className="hover:text-white transition-colors bg-transparent"
                    style={{ padding: 0, border: "none", background: "none" }}
                    onClick={() => scrollToSection("about")}
                  >
                    ABOUT US
                  </button>
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
                  <Link
                    to="/recruitments"
                    className="hover:text-white transition-colors"
                  >
                    RECRUITMENTS
                  </Link>
                  <button
                    className="hover:text-white transition-colors bg-transparent"
                    style={{ padding: 0, border: "none", background: "none" }}
                    onClick={() => scrollToSection("faqs")}
                  >
                    FAQs
                  </button>
                  <button
                    className="bg-[#7AECEC] text-black px-4 py-2 rounded-full font-bold hover:bg-white transition-colors"
                    onClick={() => setShowJoinModal(true)}
                  >
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
                <button
                  className="block px-3 py-2 hover:text-white transition-colors w-full text-left bg-transparent"
                  style={{ padding: 0, border: "none", background: "none" }}
                  onClick={() => { setIsMenuOpen(false); scrollToSection("about"); }}
                >
                  ABOUT US
                </button>
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
                <Link
                  to="/recruitments"
                  className="block px-3 py-2 hover:text-white transition-colors"
                >
                  RECRUITMENTS
                </Link>
                <button
                  className="block px-3 py-2 hover:text-white transition-colors w-full text-left bg-transparent"
                  style={{ padding: 0, border: "none", background: "none" }}
                  onClick={() => { setIsMenuOpen(false); scrollToSection("faqs"); }}
                >
                  FAQs
                </button>
                <button className="w-full text-left px-3 py-2 bg-[#7AECEC] text-black rounded-full font-bold hover:bg-white transition-colors" onClick={() => { setIsMenuOpen(false); setShowJoinModal(true); }}>
                  JOIN US
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <AnimatedRoutes />
        <JoinUsModal open={showJoinModal} onClose={() => setShowJoinModal(false)} />
      </div>
    </Router>
  );
}

export default App;
