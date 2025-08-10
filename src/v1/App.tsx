import RecruitmentsPage from "./RecruitmentsPage";
import AboutUsGalleryPage from "./AboutUsGalleryPage";
import { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
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

  // HomePage must be defined here so it can access setShowJoinModal
  function HomePage() {
    const location = useLocation();
    
    // Handle scrolling when navigated from another route
    useEffect(() => {
      console.log('HomePage useEffect triggered', location.state);
      if (location.state?.scrollTo) {
        console.log('Attempting to scroll to:', location.state.scrollTo);
        // Try multiple times with increasing delays to ensure DOM is ready
        const attempts = [100, 300, 500, 1000];
        attempts.forEach((delay, index) => {
          setTimeout(() => {
            const el = document.getElementById(location.state.scrollTo);
            console.log(`Attempt ${index + 1}: Element found:`, el);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              // Clear the state after successful scroll
              window.history.replaceState({}, '', '/');
            }
          }, delay);
        });
      }
    }, [location]);

    // Also handle URL hash on initial load
    useEffect(() => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        console.log('Hash detected on load:', hash);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 500);
      }
    }, []);

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

  // Navigation component that uses useLocation
  function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Scroll to HomePage section by id from any route
    function scrollToSection(sectionId: string) {
      console.log('scrollToSection called with:', sectionId);
      console.log('Current pathname:', window.location.pathname);
      
      if (window.location.pathname !== "/") {
        console.log('Navigating to home with scroll target');
        navigate('/', { state: { scrollTo: sectionId } });
        return;
      }
      
      console.log('Already on home, scrolling directly');
      const el = document.getElementById(sectionId);
      console.log('Element found:', el);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    
    // Helper function to determine if a link is active
    const isActive = (path: string) => location.pathname === path;
    
    // Active link styles
    const getNavLinkClass = (path: string, baseClasses = "hover:text-white transition-colors") => {
      return isActive(path) 
        ? `${baseClasses} text-white font-bold border-b-2 border-[#7AECEC] pb-1` 
        : baseClasses;
    };

    const getMobileNavLinkClass = (path: string, baseClasses = "block px-3 py-2 hover:text-white transition-colors") => {
      return isActive(path) 
        ? `${baseClasses} text-white font-bold bg-[#7AECEC]/10 rounded` 
        : baseClasses;
    };

    return (
      <nav className="fixed w-full bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#7AECEC]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src="/assets/icons/favicon.png" alt="Parikshit Logo" 
                  className="w-16 h-16 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:rotate-12" 
                />
              </Link>
            </div>
            <div className="hidden lg:block ">
              <div className="flex items-center space-x-6">
                <Link to="/team" className={getNavLinkClass("/team")}>TEAM</Link>
                <Link to="/about-us" className={getNavLinkClass("/about-us")}>ABOUT US</Link>
                <Link to="/subsystems" className={getNavLinkClass("/subsystems")}>SUBSYSTEMS</Link>
                <Link to="/projects" className={getNavLinkClass("/projects")}>PROJECTS</Link>
                <Link to="/research" className={getNavLinkClass("/research")}>RESEARCH</Link>
                <Link to="/recruitments" className={getNavLinkClass("/recruitments")}>RECRUITMENTS</Link>
                <button className="hover:text-white transition-colors bg-transparent" style={{ padding: 0, border: "none", background: "none" }} onClick={() => scrollToSection("faqs")}>FAQs</button>
                <button className="bg-[#7AECEC] text-black px-4 py-2 rounded-full font-bold hover:bg-white transition-colors" onClick={() => setShowJoinModal(true)}>JOIN US</button>
              </div>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen((open) => !open)} className={`hamburger${isMenuOpen ? " active" : ""} w-8 h-8 flex flex-col justify-between items-center bg-transparent border-none cursor-pointer`} aria-label="Toggle menu">
                <span className="bar w-6 h-0.3 bg-[#7AECEC] transition-all duration-300 ease-in-out"></span>
                <span className="bar w-6 h-0.3 bg-[#7AECEC] transition-all duration-300 ease-in-out"></span>
                <span className="bar w-6 h-0.3 bg-[#7AECEC] transition-all duration-300 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {(isMenuOpen || menuWasOpen) && (
          <div className={`nav-links lg:hidden ${isMenuOpen ? "mobile-nav-slide-in" : "mobile-nav-slide-out"}`} 
              onAnimationEnd={() => { if (!isMenuOpen) setMenuWasOpen(false); }}>
            <div className="px-4 pt-4 pb-6 bg-[#0D1117] border-b border-[#7AECEC]/20 rounded-b-lg shadow-xl">
              {/* Navigation Menu Container */}
              <div className="mobile-nav-container">
                <div className="space-y-1">
                  <Link 
                    to="/" 
                    className="mobile-nav-item group" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mobile-nav-indicator"></span>
                    <span className="mobile-nav-text">HOME</span>
                  </Link>
                  
                  <Link 
                    to="/team" 
                    className="mobile-nav-item group" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mobile-nav-indicator"></span>
                    <span className="mobile-nav-text">TEAM</span>
                  </Link>
                  
                  <Link 
                    to="/about-us" 
                    className="mobile-nav-item group" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mobile-nav-indicator"></span>
                    <span className="mobile-nav-text">ABOUT US</span>
                  </Link>
                  
                  <Link 
                    to="/subsystems" 
                    className="mobile-nav-item group" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mobile-nav-indicator"></span>
                    <span className="mobile-nav-text">SUBSYSTEMS</span>
                  </Link>
                  
                  <Link 
                    to="/projects" 
                    className="mobile-nav-item group" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mobile-nav-indicator"></span>
                    <span className="mobile-nav-text">PROJECTS</span>
                  </Link>
                  
                  <Link 
                    to="/research" 
                    className="mobile-nav-item group" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mobile-nav-indicator"></span>
                    <span className="mobile-nav-text">RESEARCH</span>
                  </Link>
                  
                  <Link 
                    to="/recruitments" 
                    className="mobile-nav-item group" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mobile-nav-indicator"></span>
                    <span className="mobile-nav-text">RECRUITMENTS</span>
                  </Link>
                  
                  <button 
                    className="mobile-nav-item group w-full text-left" 
                    onClick={() => { setIsMenuOpen(false); scrollToSection("faqs"); }}
                  >
                    <span className="mobile-nav-indicator"></span>
                    <span className="mobile-nav-text">FAQs</span>
                  </button>
                </div>
                
                {/* Join Us Button */}
                <div className="mt-6 pt-4 border-t border-[#21262C]">
                  <button 
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#7AECEC] to-[#5BC5C5] text-black rounded-lg font-bold hover:from-white hover:to-[#F0F0F0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]" 
                    onClick={() => { setIsMenuOpen(false); setShowJoinModal(true); }}
                  >
                    JOIN US
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  }

  function AnimatedRoutes() {
    const location = useLocation();
    useEffect(() => {
      // Always scroll to top on route change (but not when navigating with scroll state)
      if (!location.state?.scrollTo) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, [location.pathname, location.search]);
    
    return (
      <TransitionGroup>
        <CSSTransition key={location.pathname + location.search} classNames="fade" timeout={400}>
          <div className="fade-route">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/subsystems" element={<SubsystemsPage />} />
              <Route path="/about-us" element={<AboutUsGalleryPage />} />
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
        <Navigation />
        {/* Main Content */}
        <AnimatedRoutes />
        <JoinUsModal open={showJoinModal} onClose={() => setShowJoinModal(false)} />
      </div>
    </Router>
  );
}

export default App;