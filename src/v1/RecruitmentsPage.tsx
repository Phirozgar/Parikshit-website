import { Users, Target, Calendar, Mail, Download, X, Sparkles, Info } from "lucide-react";
import { useState, useEffect } from "react";

interface Subsystem {
  id: number;
  name: string;
  color: string;
  icon: string;
  challengeLink: string;
  subsystemId: string;
  pdfPath: string;
  hasChallenge: boolean;
}

export default function RecruitmentsPage() {
  const [hoveredSubsystem, setHoveredSubsystem] = useState<Subsystem | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isDialogPinned, setIsDialogPinned] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/tablet screen sizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const subsystems: Subsystem[] = [
    {
      id: 1,
      name: "ADCS",
      color: "from-orange-500 to-red-600",
      icon: "/assets/Subsystem_Logos/ADCS.png",
      challengeLink: "#propulsion-challenge",
      subsystemId: "adcs",
      pdfPath: "/assets/challenges/ADCS_Challenge.pdf",
      hasChallenge: true
    },
    {
      id: 2,
      name: "COMMS",
      color: "from-blue-500 to-indigo-600",
      icon: "/assets/Subsystem_Logos/COMMS.png",
      challengeLink: "#structures-challenge",
      subsystemId: "comms",
      pdfPath: "/assets/challenges/COMMS_Challenge.pdf",
      hasChallenge: true
    },
    {
      id: 3,
      name: "EPS",
      color: "from-green-500 to-teal-600",
      icon: "/assets/Subsystem_Logos/EPS.png",
      challengeLink: "#electronics-challenge",
      subsystemId: "eps",
      pdfPath: "/assets/challenges/EPS_Challenge.pdf",
      hasChallenge: true
    },
    {
      id: 4,
      name: "ODHS",
      color: "from-purple-500 to-pink-600",
      icon: "/assets/Subsystem_Logos/ODHS.png",
      challengeLink: "#recovery-challenge",
      subsystemId: "odhs",
      pdfPath: "/assets/challenges/ODHS_Challenge.pdf",
      hasChallenge: true
    },
    {
      id: 5,
      name: "PAYLOAD",
      color: "from-yellow-500 to-orange-600",
      icon: "/assets/Subsystem_Logos/PAYLOAD.png",
      challengeLink: "#payload-challenge",
      subsystemId: "payload",
      pdfPath: "/assets/challenges/PAYLOAD_Challenge.pdf",
      hasChallenge: true
    },
    {
      id: 6,
      name: "RESEARCH",
      color: "from-cyan-500 to-blue-600",
      icon: "/assets/Subsystem_Logos/RESEARCH.png",
      challengeLink: "#simulation-challenge",
      subsystemId: "research",
      pdfPath: "/assets/challenges/RESEARCH_Challenge.pdf",
      hasChallenge: false
    },
    {
      id: 7,
      name: "STMS",
      color: "from-gray-500 to-slate-600",
      icon: "/assets/Subsystem_Logos/STMS.png",
      challengeLink: "#manufacturing-challenge",
      subsystemId: "stms",
      pdfPath: "/assets/challenges/STMS_Challenge.pdf",
      hasChallenge: true
    },
    {
      id: 8,
      name: "Admin & OPS",
      color: "from-emerald-500 to-green-600",
      icon: "/assets/Subsystem_Logos/Admin & OPS.png",
      challengeLink: "#business-challenge",
      subsystemId: "admin",
      pdfPath: "/assets/challenges/Admin_OPS_Challenge.pdf",
      hasChallenge: true
    }
  ];

  const handleSubsystemClick = (subsystemName: string): void => {
    const mapToId: Record<string, string> = {
      "ADCS": "adcs",
      "COMMS": "comms",
      "EPS": "eps",
      "ODHS": "odhs",
      "PAYLOAD": "payload",
      "RESEARCH": "research",
      "STMS": "stms",
      "Admin & OPS": "admin"
    };

    const id = mapToId[subsystemName];
    if (id) {
      console.log(`Navigate to /subsystems?subsystem=${id}`);
    } else {
      console.warn("Unknown subsystem:", subsystemName);
    }
  };

  const calculateDialogPosition = (rect: DOMRect) => {
    const dialogWidth = 420; // Increased for premium feel
    const dialogHeight = 320;
    const padding = 20;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    let x = rect.right + 20;
    let y = rect.top;
    
    // Check if dialog would overflow right edge
    if (x + dialogWidth + padding > viewportWidth) {
      x = rect.left - dialogWidth - 20;
    }
    
    // Check if dialog would overflow bottom edge
    if (y + dialogHeight + padding > viewportHeight) {
      y = viewportHeight - dialogHeight - padding;
    }
    
    // Check if dialog would overflow top edge
    if (y < padding) {
      y = padding;
    }
    
    // Check if dialog would overflow left edge (fallback)
    if (x < padding) {
      x = viewportWidth / 2 - dialogWidth / 2;
      y = rect.bottom + 20;
    }
    
    return { x, y };
  };

  const handleMouseEnter = (subsystem: Subsystem, event: React.MouseEvent<HTMLDivElement>): void => {
    if (isMobile || isDialogPinned) return; // Skip hover effects on mobile or when dialog is pinned
    
    const rect = event.currentTarget.getBoundingClientRect();
    const position = calculateDialogPosition(rect);
    
    setMousePosition(position);
    setHoveredSubsystem(subsystem);
    setIsDialogVisible(true);
  };

  const handleMouseLeave = (): void => {
    if (isMobile || isDialogPinned) return; // Skip hover effects on mobile or when dialog is pinned
    
    setIsDialogVisible(false);
    setHoveredSubsystem(null);
  };

  const handleSubsystemCardClick = (subsystem: Subsystem, event: React.MouseEvent<HTMLDivElement>): void => {
    if (isMobile) {
      // On mobile, just navigate
      handleSubsystemClick(subsystem.name);
      return;
    }

    // On desktop, pin the dialog
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const position = calculateDialogPosition(rect);
    
    setMousePosition(position);
    setHoveredSubsystem(subsystem);
    setIsDialogVisible(true);
    setIsDialogPinned(true);
  };

  const closeDialog = (): void => {
    setIsDialogVisible(false);
    setIsDialogPinned(false);
    setHoveredSubsystem(null);
  };

  const handleDownloadPDF = (pdfPath: string, subsystemName: string, event: React.MouseEvent): void => {
    event.stopPropagation();
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${subsystemName}_Challenge.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageClick = (subsystemName: string, event: React.MouseEvent): void => {
    event.stopPropagation();
    handleSubsystemClick(subsystemName);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-16 relative">
      {/* Animated background particles for premium feel */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#7AECEC]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#7AECEC]/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#7AECEC]/25 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 bg-[#7AECEC]/10 px-4 py-2 rounded-full border border-[#7AECEC]/20">
            <Sparkles className="w-4 h-4 text-[#7AECEC]" />
            <span className="text-[#7AECEC] text-sm font-medium">Recruitments Open</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#7AECEC] mb-4 transition-colors duration-300 cursor-default bg-gradient-to-r from-[#7AECEC] to-[#7AECEC]/80 bg-clip-text text-transparent">
            Join Team Parikshit
          </h1>
          
          <p className="text-base md:text-lg text-[#7AECEC]/80 max-w-2xl mx-auto hover:text-[#7AECEC] transition-colors duration-300">
            Applications open for students interested in space technology and satellite development.
          </p>
          
          <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[#7AECEC] to-transparent"></div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* How to Join Section - Mobile First */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#7AECEC] mb-2">Ready to Join?</h2>
            <p className="text-[#7AECEC]/70 text-sm md:text-base">Two simple ways to become part of our space team</p>
          </div>
          
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
            {/* Interview Route */}
            <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] rounded-xl border border-[#7AECEC]/20 p-5 hover:border-[#7AECEC]/40 transition-all duration-500 relative group shadow-lg hover:shadow-[#7AECEC]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7AECEC]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#7AECEC]/10 rounded-full flex items-center justify-center group-hover:bg-[#7AECEC]/20 transition-colors group-hover:scale-110 duration-300">
                    <Users className="w-5 h-5 text-[#7AECEC]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Interview Route</h3>
                    <p className="text-xs text-[#7AECEC]/60">Standard pathway</p>
                  </div>
                </div>
                
                <div className="bg-[#0A0A0A]/50 rounded-md p-3 mb-3 border border-[#7AECEC]/10">
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-[#7AECEC]/80">Technical Domains</span>
                    <span className="text-white font-medium">6-7 months</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#7AECEC]/80">Admin & Ops</span>
                    <span className="text-white font-medium">3-4 months</span>
                  </div>
                </div>
                
                <p className="text-[#7AECEC]/70 text-sm">Submit application → Interview → Get selected</p>
              </div>
            </div>

            {/* Challenge Route */}
            <div className="bg-gradient-to-br from-[#7AECEC]/5 to-[#111111] rounded-xl border border-[#7AECEC]/30 p-5 hover:border-[#7AECEC]/50 transition-all duration-500 relative group shadow-xl hover:shadow-[#7AECEC]/20">
              <div className="absolute top-3 right-3">
                <span className="bg-gradient-to-r from-[#7AECEC] to-[#7AECEC]/80 text-black text-xs px-3 py-1 rounded-full font-medium shadow-lg">⚡ Fast Track</span>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#7AECEC]/20 rounded-full flex items-center justify-center group-hover:bg-[#7AECEC]/30 transition-colors group-hover:scale-110 duration-300">
                  <Target className="w-5 h-5 text-[#7AECEC]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Challenge Route</h3>
                  <p className="text-xs text-[#7AECEC]/80">Prove your skills</p>
                </div>
              </div>
              
              <div className="bg-[#7AECEC]/10 rounded-md p-3 mb-3 border border-[#7AECEC]/20">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="text-white">Duration</span>
                  <span className="text-[#7AECEC] font-medium">Much shorter</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white">Benefits</span>
                  <span className="text-[#7AECEC] font-medium">Skip tasks</span>
                </div>
              </div>
              
              <p className="text-white text-sm font-medium">Solve challenges → Show skills → Join faster</p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-6 bg-gradient-to-r from-[#7AECEC]/5 to-transparent rounded-xl border border-[#7AECEC]/20 p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#7AECEC]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-[#7AECEC] rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-white text-sm font-medium mb-1">Open to 1st & 2nd year students (all branches)</p>
                <p className="text-[#7AECEC]/70 text-xs">Follow our socials for deadlines & updates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process Overview */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#7AECEC] mb-2">Application Process</h2>
            <p className="text-[#7AECEC]/70 text-sm md:text-base max-w-2xl mx-auto">
              Learn about our selection process and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] rounded-xl border border-[#7AECEC]/20 p-5 hover:border-[#7AECEC]/30 transition-all duration-300 shadow-lg hover:shadow-[#7AECEC]/10">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-[#7AECEC]" />
                <h3 className="text-lg font-semibold text-[#7AECEC]">Eligibility</h3>
              </div>
              <p className="text-[#7AECEC]/80 text-sm">
                Open to 1st and 2nd year students from all branches.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] rounded-xl border border-[#7AECEC]/20 p-5 hover:border-[#7AECEC]/30 transition-all duration-300 shadow-lg hover:shadow-[#7AECEC]/10">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-[#7AECEC]" />
                <h3 className="text-lg font-semibold text-[#7AECEC]">Timeline</h3>
              </div>
              <p className="text-[#7AECEC]/80 text-sm">
                Follow our social media for updates and deadlines.
              </p>
            </div>
          </div>
        </section>

        {/* Subsystems Section */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#7AECEC] mb-2">Available Subsystems</h2>
            <p className="text-[#7AECEC]/70 text-sm md:text-base max-w-2xl mx-auto">
              Explore different technical areas and find your area of interest
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative">
            {subsystems.map((subsystem) => (
              <div
                key={subsystem.id}
                className="group bg-gradient-to-br from-[#111111] to-[#0A0A0A] rounded-xl border border-[#7AECEC]/20 hover:border-[#7AECEC]/40 transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-[#7AECEC]/20"
                onMouseEnter={(e) => handleMouseEnter(subsystem, e)}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => handleSubsystemCardClick(subsystem, e)}
              >
                <div className={`h-1.5 bg-gradient-to-r ${subsystem.color} shadow-sm`}></div>
                <div className="p-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7AECEC]/5 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-3 flex justify-center">
                      <div 
                        className="w-12 h-12 md:w-14 md:h-14 bg-[#7AECEC]/10 rounded-xl flex items-center justify-center group-hover:bg-[#7AECEC]/20 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                        onClick={(e) => handleImageClick(subsystem.name, e)}
                      >
                        <img 
                          src={subsystem.icon} 
                          alt={`${subsystem.name} logo`}
                          className="w-6 h-6 md:w-8 md:h-8 object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = target.parentNode?.querySelector('.icon-fallback') as HTMLElement;
                            if (fallback) {
                              fallback.style.display = 'flex';
                              fallback.textContent = subsystem.name.slice(0, 2);
                            }
                          }}
                        />
                        <div className="icon-fallback w-full h-full rounded-xl bg-[#7AECEC]/20 hidden items-center justify-center text-xs font-bold text-[#7AECEC]">
                          {subsystem.name.slice(0, 2)}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-base font-medium text-[#7AECEC] mb-2 group-hover:text-white transition-colors text-center">
                      {subsystem.name}
                    </h3>
                    
                    {/* Challenge availability indicator */}
                    {subsystem.hasChallenge ? (
                      <div 
                        className="flex items-center justify-center gap-1 text-[#7AECEC] text-xs group-hover:gap-2 transition-all group-hover:text-white cursor-pointer hover:bg-[#7AECEC]/10 rounded-lg py-1 px-2"
                        onClick={(e) => handleDownloadPDF(subsystem.pdfPath, subsystem.name, e)}
                      >
                        <span>Download Challenge</span>
                        <Download className="w-3 h-3 group-hover:animate-bounce" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-1 text-[#7AECEC]/60 text-xs py-1 px-2">
                        <Info className="w-3 h-3" />
                        <span>No Challenge Available</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge Submission Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-[#7AECEC]/10 via-[#7AECEC]/5 to-[#111111] rounded-xl border border-[#7AECEC]/30 p-5 md:p-6 shadow-xl backdrop-blur-sm relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7AECEC]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#7AECEC]/10 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#7AECEC]/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#7AECEC]" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-white">Challenge Submissions</h3>
              </div>
              
              <div className="bg-gradient-to-r from-[#0A0A0A]/80 to-[#111111]/60 rounded-lg p-4 border border-[#7AECEC]/20 backdrop-blur-sm">
                <p className="text-[#7AECEC]/90 text-sm md:text-base mb-3">
                  Ready to submit your recruitment challenge? Send your completed solutions to:
                </p>
                
                <div className="flex items-center gap-3 bg-[#7AECEC]/10 rounded-lg p-3 border border-[#7AECEC]/25">
                  <div className="w-8 h-8 bg-[#7AECEC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#7AECEC]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#7AECEC]/80 text-xs mb-1">Submission Email:</p>
                    <a 
                      href="mailto:recruitments.parikshit@gmail.com?subject=Recruitment Challenge Submission - [Your Subsystem]" 
                      className="text-[#7AECEC] hover:text-white font-medium text-sm md:text-base transition-colors hover:underline break-all"
                    >
                      recruitments.parikshit@gmail.com
                    </a>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="bg-gradient-to-r from-[#7AECEC] to-[#7AECEC]/80 text-black text-xs px-2 py-1 rounded-full font-medium">
                      Active
                    </span>
                  </div>
                </div>
                
                <div className="mt-3 text-[#7AECEC]/70 text-xs">
                  <p className="mb-1">📧 <strong>Subject format:</strong> "Recruitment Challenge Submission - [Subsystem Name]"</p>
                  <p>📎 Include all required files and documentation as specified in the challenge document</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Tips Section */}
        <section className="mb-12">          
          <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] rounded-xl border border-[#7AECEC]/20 p-5 md:p-6 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-medium text-[#7AECEC] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Application Tips
            </h3>
            <ul className="space-y-3">
              {[
                "Complete any provided assessment tasks to demonstrate your skills",
                "Express genuine interest in space technology and teamwork",
                "Mention any relevant projects or technical experience",
                "Be authentic in your application and during interviews",
                "Ask thoughtful questions about the team and projects"
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-[#7AECEC]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-[#7AECEC]/20 transition-colors">
                    <Target className="w-3 h-3 text-[#7AECEC]" />
                  </div>
                  <span className="text-[#7AECEC]/80 text-sm group-hover:text-[#7AECEC] transition-colors">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-br from-[#7AECEC]/10 via-[#7AECEC]/5 to-transparent rounded-xl border border-[#7AECEC]/20 p-5 md:p-6 shadow-xl backdrop-blur-sm">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#7AECEC]/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#7AECEC]" />
          </div>
          <h3 className="text-xl md:text-2xl font-medium text-[#7AECEC] mb-3">Questions?</h3>
          <p className="text-[#7AECEC]/80 mb-4 text-sm md:text-base">
            Have questions about the application process? Reach out to us at{" "}
            <a 
              href="mailto:parikshit.musat@gmail.com" 
              className="text-[#7AECEC] hover:underline break-all font-medium transition-colors"
            >
              parikshit.musat@gmail.com
            </a>
          </p>
          <p className="text-[#7AECEC]/60 text-xs md:text-sm">
            Stay updated with application dates and announcements through our social media channels
          </p>
        </section>
      </div>

      {/* Enhanced PDF Preview Dialog - Only shows on desktop */}
      {!isMobile && hoveredSubsystem && (
        <div 
          className={`fixed z-50 pointer-events-auto transition-all duration-300 ease-out ${
            isDialogVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] via-[#111111] to-[#0A0A0A] border border-[#7AECEC]/60 rounded-2xl shadow-2xl shadow-[#7AECEC]/30 w-[440px] backdrop-blur-xl relative overflow-hidden">
            {/* Subtle animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7AECEC]/15 via-transparent to-[#7AECEC]/15 rounded-2xl"></div>
            
            {/* Gentle glow effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-[#7AECEC]/20 to-[#7AECEC]/10 rounded-2xl blur-sm opacity-60"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="p-5 border-b border-[#7AECEC]/25 bg-gradient-to-r from-[#7AECEC]/8 to-transparent">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${hoveredSubsystem.color} shadow-md`}></div>
                  <div className="flex-1">
                    <h4 className="text-[#7AECEC] font-semibold text-lg tracking-tight">{hoveredSubsystem.name}</h4>
                    <p className="text-[#7AECEC]/70 text-sm">
                      {hoveredSubsystem.hasChallenge ? "Challenge Document Preview" : "Recruitment Information"}
                    </p>
                  </div>
                  {isDialogPinned && (
                    <button
                      onClick={closeDialog}
                      className="w-6 h-6 bg-[#7AECEC]/20 hover:bg-[#7AECEC]/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X className="w-3 h-3 text-[#7AECEC]" />
                    </button>
                  )}
                </div>
                {isDialogPinned && hoveredSubsystem.hasChallenge && (
                  <p className="text-[#7AECEC]/50 text-xs mt-2">Click and scroll to explore the document</p>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-4">
                {hoveredSubsystem.hasChallenge ? (
                  /* PDF Preview Section */
                  <div className="bg-gradient-to-br from-[#0A0A0A] to-[#111111] rounded-xl border border-[#7AECEC]/30 overflow-hidden shadow-lg">
                    <div className="relative">
                      <div className="h-64 overflow-y-auto scrollbar-thin scrollbar-track-[#111111] scrollbar-thumb-[#7AECEC]/30 hover:scrollbar-thumb-[#7AECEC]/50">
                        <iframe
                          src={`${hoveredSubsystem.pdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                          className="w-full h-full border-0 bg-white/98 min-h-[400px]"
                          title={`${hoveredSubsystem.name} Challenge Preview`}
                          scrolling="auto"
                          onError={() => {
                            console.log("PDF failed to load, showing fallback");
                          }}
                        />
                      </div>
                      
                      {/* Subtle gradient overlay for better readability */}
                      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#0A0A0A]/30 to-transparent pointer-events-none"></div>
                      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent pointer-events-none"></div>
                      
                      {/* Document type indicator */}
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white text-xs px-2.5 py-1 rounded-md font-medium shadow-lg">
                        PDF
                      </div>
                      
                      {/* Instructions based on state */}
                      {!isDialogPinned ? (
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[#7AECEC]/60 text-xs flex items-center gap-1 bg-[#0A0A0A]/80 px-2 py-1 rounded-md backdrop-blur-sm">
                          <div className="w-1 h-1 bg-[#7AECEC]/60 rounded-full"></div>
                          <span>Click card to pin & scroll</span>
                        </div>
                      ) : (
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[#7AECEC]/60 text-xs flex items-center gap-1 bg-[#0A0A0A]/80 px-2 py-1 rounded-md backdrop-blur-sm">
                          <div className="w-1 h-1 bg-[#7AECEC]/60 rounded-full animate-pulse"></div>
                          <span>Scroll to explore document</span>
                        </div>
                      )}
                      
                      {/* Download action */}
                      <div 
                        className="absolute bottom-2 right-2 bg-[#7AECEC]/20 hover:bg-[#7AECEC]/30 text-[#7AECEC] text-xs px-2 py-1 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1 backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadPDF(hoveredSubsystem.pdfPath, hoveredSubsystem.name, e);
                        }}
                      >
                        <Download className="w-3 h-3" />
                        <span>Download</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* No Challenge Message for RESEARCH */
                  <div className="bg-gradient-to-br from-[#0A0A0A] to-[#111111] rounded-xl border border-[#7AECEC]/30 p-6 text-center">
                    <div className="w-16 h-16 bg-[#7AECEC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Info className="w-8 h-8 text-[#7AECEC]/60" />
                    </div>
                    <h4 className="text-[#7AECEC] font-semibold text-lg mb-2">No Recruitment Challenge</h4>
                    <p className="text-[#7AECEC]/70 text-sm mb-4">
                      The {hoveredSubsystem.name} subsystem doesn't have a recruitment challenge at this time.
                    </p>
                    <div className="bg-[#7AECEC]/10 rounded-lg p-4 border border-[#7AECEC]/20">
                      <p className="text-[#7AECEC]/80 text-xs">
                        <strong>Apply through the interview route</strong><br />
                        Contact us for more information about joining this subsystem
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop to close pinned dialog */}
      {isDialogPinned && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={closeDialog}
        />
      )}
    </div>
  );
}