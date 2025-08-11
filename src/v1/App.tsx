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
import { Mail } from "lucide-react";

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
        <JoinUsSection />
      </>
    );
  }

  // Common Footer Component
  function Footer() {
    return (
      <footer className="py-8 px-4 border-t border-[#7AECEC]/20">
        <div className="max-w-7xl mx-auto">
          {/* Questions Section Style Footer */}
          <div className="text-center bg-gradient-to-br from-[#7AECEC]/10 via-[#7AECEC]/5 to-transparent rounded-xl border border-[#7AECEC]/20 p-5 md:p-6 shadow-xl backdrop-blur-sm mb-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#7AECEC]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#7AECEC]" />
            </div>
            <h3 className="text-xl md:text-2xl font-medium text-[#7AECEC] mb-3">Questions?</h3>
            <p className="text-[#7AECEC]/80 mb-4 text-sm md:text-base">
              Have questions about Team Parikshit? Reach out to us at{" "}
              <a
                href="mailto:parikshit.musat@gmail.com"
                className="text-[#7AECEC] hover:underline break-all font-medium transition-colors"
              >
                parikshit.musat@gmail.com
              </a>
            </p>
            <p className="text-[#7AECEC]/60 text-xs md:text-sm mb-3">
              Stay updated with our latest projects and announcements through our social media channels
            </p>

            {/* Instagram Follow Section */}
            <a
              href="https://instagram.com/parikshitsatellite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7AECEC]/20 hover:bg-[#7AECEC]/30 text-[#7AECEC] text-sm md:text-base px-4 py-2 rounded-full font-medium transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5h8.5A4.25 4.25 0 0 1 20.5 7.75ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm5.25-8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              Follow us on Instagram @parikshitsatellite
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-[#7AECEC]/60 text-sm">
            <p>© 2025 PARIKSHIT. All rights reserved.</p>
          </div>
        </div>
      </footer>

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

    return (
      <nav className="fixed w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#7AECEC]/20 z-50">
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
                <button className="hover:text-white transition-colors bg-transparent" style={{ padding: 0, border: "none", background: "none" }} onClick={() => scrollToSection("faqs")}>FAQs</button>
                <Link 
                  to="/recruitments" 
                  className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#7AECEC] to-[#4ECDC4] text-black font-bold rounded-full hover:from-white hover:to-[#F0F0F0] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#7AECEC]/30 group overflow-hidden"
                >
                  <span className="relative z-10">RECRUITMENTS</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#7AECEC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen((open) => !open)} 
                className={`hamburger${isMenuOpen ? " active" : ""} w-8 h-8 flex flex-col justify-center items-center bg-transparent border-none cursor-pointer relative transition-all duration-300 hover:scale-110`} 
                aria-label="Toggle menu"
              >
                <span className={`bar w-6 h-0.5 bg-[#7AECEC] transition-all duration-300 ease-in-out absolute ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`bar w-6 h-0.5 bg-[#7AECEC] transition-all duration-300 ease-in-out absolute ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bar w-6 h-0.5 bg-[#7AECEC] transition-all duration-300 ease-in-out absolute ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Mobile menu */}
        <div className={`fixed top-16 left-0 right-0 bg-[#0D1117]/98 backdrop-blur-lg border-b border-[#7AECEC]/20 shadow-2xl z-45 lg:hidden transition-all duration-500 ease-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          <div className="px-6 py-8 bg-black/30">
            {/* Navigation Menu Container */}
            <div className="space-y-2">
              {[
                { to: "/", label: "HOME", delay: "0ms", icon: "🏠" },
                { to: "/team", label: "TEAM", delay: "50ms", icon: "👥" },
                { to: "/about-us", label: "ABOUT US", delay: "100ms", icon: "ℹ️" },
                { to: "/subsystems", label: "SUBSYSTEMS", delay: "150ms", icon: "⚙️" },
                { to: "/projects", label: "PROJECTS", delay: "200ms", icon: "🚧" },
                { to: "/research", label: "RESEARCH", delay: "250ms", icon: "🔬" }
              ].map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`mobile-nav-item group flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive(item.to) ? 'bg-[#7AECEC]/15 text-white border-l-4 border-[#7AECEC]' : 'text-[#7AECEC]'
                  }`}
                  style={{
                    animationDelay: isMenuOpen ? item.delay : '0ms',
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.3s ease-out ${item.delay}`
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl mr-4 transition-all duration-300">{item.icon}</span>
                  <span className="font-semibold tracking-wide">{item.label}</span>
                </Link>
              ))}
              
              <Link
                to="/#faqs"
                className="mobile-nav-item group flex items-center w-full px-4 py-3 rounded-xl text-left transition-all duration-300 text-[#7AECEC]"
                style={{
                  animationDelay: isMenuOpen ? '300ms' : '0ms',
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: 'all 0.3s ease-out 300ms'
                }}
                onClick={() => { 
                  setIsMenuOpen(false); 
                  // Navigate to home if not already there, then scroll to FAQs
                  if (window.location.pathname !== "/") {
                    navigate('/', { state: { scrollTo: 'faqs' } });
                  } else {
                    scrollToSection("faqs");
                  }
                }}
              >
                <span className="text-xl mr-4 transition-all duration-300">❓</span>
                <span className="font-semibold tracking-wide">FAQs</span>
              </Link>
            </div>
            
            {/* Recruitments Button */}
            <div className="mt-8 pt-6 border-t border-[#21262C]">
              <Link
                to="/recruitments"
                className="block w-full px-6 py-4 bg-gradient-to-r from-[#7AECEC] via-[#5BC5C5] to-[#4ECDC4] text-black rounded-2xl font-bold text-center transition-all duration-500 shadow-lg transform active:scale-[0.95] relative overflow-hidden"
                style={{
                  animationDelay: isMenuOpen ? '350ms' : '0ms',
                  transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: 'all 0.4s ease-out 350ms'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">🚀</span>
                  RECRUITMENTS
                  <span className="ml-2">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
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
        <div className={`transition-all duration-300 ${isMenuOpen ? 'blur-sm scale-95' : ''}`}>
          <AnimatedRoutes />
        </div>
        {/* Common Footer for all pages */}
        <Footer />
        <JoinUsModal open={showJoinModal} onClose={() => setShowJoinModal(false)} />
      </div>
    </Router>
  );
}

export default App;