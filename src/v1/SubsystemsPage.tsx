import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

function SubsystemsPage() {
  const [activeSubsystem, setActiveSubsystem] = useState('adcs');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const heroRef = useRef<HTMLElement>(null);

  // Check if device is mobile (screen width < 768px)
  const isMobile = () => window.innerWidth < 768;

  // Handle URL parameters for direct subsystem navigation
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const subsystemParam = urlParams.get('subsystem');
    if (subsystemParam) {
      setActiveSubsystem(subsystemParam);
      setHasUserInteracted(true); // User came from external link, allow scrolling
      // Small delay to ensure the page is loaded before scrolling
      setTimeout(() => {
        const ref = cardRefs.current[subsystemParam];
        if (ref && typeof ref.scrollIntoView === 'function' && isMobile()) {
          ref.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      }, 500);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Only scroll to subsystem if user has interacted with the page AND is on mobile
    if (!hasUserInteracted || !isMobile()) return;
    
    const ref = cardRefs.current[activeSubsystem];
    if (ref && typeof ref.scrollIntoView === 'function') {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }, [activeSubsystem, hasUserInteracted]);

  const scrollToContent = () => {
    const heroHeight = heroRef.current?.offsetHeight || 0;
    window.scrollTo({
      top: heroHeight - 100,
      behavior: 'smooth'
    });
  };

  const subsystems = [
    {
      id: 'adcs',
      name: 'Attitude Determination & Control System (ADCS)',
      iconSrc: '/assets/Subsystem_Logos/ADCS.png',
      description: 'Responsible for determining and controlling the satellite\'s orientation in space.',
      details: [
        'Stabilizes the satellite after deployment from the launch vehicle',
        'Utilizes sensors to determine the satellite\'s current orientation',
        'Implements control algorithms to maintain desired orientation',
        'Controls actuators for precise positioning'
      ],
      components: [
        'Sensors - Sun sensors, Magnetometers, IMU',
        'Actuators - Magnetorquers',
        'Controllers - B-dot, PD',
        'Algorithms - QuEST, EKF, MEKF, Orbit Propagator'
      ],
      imageSrc: '/assets/subsystem_images/adcs.png'
    },
    {
      id: 'comms',
      name: 'Communications and Ground Station Subsystem',
      iconSrc: '/assets/Subsystem_Logos/COMMS.png',
      description: 'Serves as the primary space-to-ground link, enabling reliable telemetry, tracking, and command (TT&C) operations.',
      details: [
        'RF Link Establishment: Maintains high-reliability line-of-sight communications during ground station passes.',
        'Command Verification: Receives, decodes, and validates incoming uplink telecommands.',
        'Telemetry & Data Downlink: Transmits real-time satellite health telemetry and high-rate payload data.',
        'Bandwidth & Link Optimization: Maximizes spectral efficiency and throughput to optimize link budget performance.'
      ],
      components: [
        'UHF/VHF Transceivers',
        'Amplifiers & Filters',
        'Communications Antennas & Antenna Arrays',
        'Digital Modulation & Demodulation'
      ],
      imageSrc: '/assets/subsystem_images/comms.png'
    },
    {
      id: 'eps',
      name: 'Electrical & Power System (EPS)',
      iconSrc: '/assets/Subsystem_Logos/EPS.png',
      description: 'Generates, stores, and distributes electrical power to all satellite subsystems.',
      details: [
        'Generates power through high-efficiency solar panels',
        'Stores energy in lithium-ion battery packs for eclipse periods',
        'Regulates and distributes power to all subsystems',
        'Implements power management algorithms to optimize usage',
        'Provides protection against power anomalies and failures'
      ],
      components: [
        'Solar Panels (Triple-junction GaAs cells)',
        'Battery Pack (Li-ion cells with protection circuits)',
        'Load switches',
        'DC-DC Converters',
        'Power Management Controller'
      ],
      imageSrc: '/assets/subsystem_images/eps.png'
    },
    {
      id: 'odhs',
      name: 'Onboard Data Handling System (ODHS)',
      iconSrc: '/assets/Subsystem_Logos/ODHS.png',
      description: 'The brain of our satellite, processing commands and managing data flow between all subsystems.',
      details: [
        'Implements command processing and execution for satellite operations',
        '⁠Manages data collection, processing and storage',
        'Handles system health monitoring and status reporting',
        'Facilitates interboard communication and coordination of all software'
      ],
      components: [
        'OnBoard Computer',
        'Real-time Operating System',
        'Payload data and telemetry storage',
        'Sensor Interfaces & Firmware',
        'Control Software'
      ],
      imageSrc: '/assets/subsystem_images/odhs.png'
    },
    {
      id: 'payload',
      name: 'Payload Subsystem',
      iconSrc: '/assets/Subsystem_Logos/PAYLOAD.png',
      description: 'The payload of a satellite refers to the primary equipment or instruments it carries to perform its intended mission. It is the functional part that delivers the satellite\'s purpose, unlike support systems like power or propulsion.',
      details: [
        'Manages primary mission instrumentation and sensors',
        'Processes and stores scientific data collection',
        'Controls experiment scheduling and execution',
        'Monitors payload health and performance metrics',
        'Maintains calibration of scientific instruments'
      ],
      components: [
        'A Thermal Camera (Primary payload) ',
        'Electrodynamic Tether (Secondary payload)'
      ],
      imageSrc: '/assets/subsystem_images/payload.png'
    },
/*
    {
      id: 'research',
      name: 'Research Subsystem',
      iconSrc: '/assets/Subsystem_Logos/RESEARCH.png',
      description: 'The Research Subsystem is dedicated to advancing the frontiers of student-led space research, driving innovation and technical excellence across all mission domains.',
      details: [
        'Conducts original research in satellite engineering, space systems, and mission operations',
        'Publishes peer-reviewed papers in international conferences and journals',
        'Develops and tests novel algorithms for attitude control, communications, and data handling',
        'Designs and validates new payload concepts and experimental platforms',
        'Promotes a culture of scientific inquiry and technical documentation within the team',
        'Collaborates with academic and industry partners for joint research initiatives',
        'Mentors students in research methodology and technical writing'
      ],
      components: [
        'Research Paper Authoring & Review Group',
        'Algorithm Development Team',
        'Payload Experimentation Unit',
        'Technical Documentation & Knowledge Base',
        'Conference & Publication Outreach',
        'Student Research Mentorship Program'
      ],
      imageSrc: '/assets/subsystem_images/research.png'
    },
*/
    {
      id: 'stms',
      name: 'Structures, Thermal & Mechanics System (STMS)',
      iconSrc: '/assets/Subsystem_Logos/STMS.png',
      description: 'Ensures the satellite\'s structural integrity, thermal stability, and reliable operation of its mechanical and deployment mechanisms throughout the mission',
      details: [
        'Designs and manufactures the satellite structure to withstand launch forces',
        'Maintains structural and thermal stability during space operations',
        'Designs and integrates mechanical and deployment mechanisms for antennas and other deployable components',
        'Manages heat transfer and passive thermal control through material selection, surface finishes, coatings, and component placement',
        'Designs and verifies the satellite structure to withstand launch loads, vibration, and the mechanical environment encountered during the mission'
      ],
      components: [
        'Aluminum Alloy Primary & Secondary Structure',
        'Mechanical & Deployment Mechanisms',
        'Subsystem Mounting Rails, Brackets & Interfaces',
        'Solar Panel Structural Mounts',
        'Passive Thermal Control Elements',
        'Structural Reinforcements & Load-Bearing Interfaces'
      ],
      imageSrc: '/assets/subsystem_images/stms.png'
    },
    {
      id: 'admin',
      name: 'Admin & Operations',
      iconSrc: '/assets/Subsystem_Logos/Admin & OPS.png',
      description: 'Manages mission operations, ground control, and administrative functions of the satellite program.',
      details: [
        'website maintenance and updation ',
        'Reach out to companies and sponsors for partnerships',
        'Do outreach for Parikshit inside and outside college',
        '⁠Handle social media pages and graphic design',
        'Handle permissions and negotiations with whichever organizations we are affiliated with - university, space agencies, sponsors, etc'
      ],
      components: [
        
      ],
      imageSrc: '/assets/subsystem_images/admin.png'
    }
  ];
  
  const activeSystem = subsystems.find(sys => sys.id === activeSubsystem);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/Backgorund_subsystemspage.jpeg"
            alt="Space background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#7AECEC] via-white to-[#7AECEC] bg-clip-text text-transparent leading-tight">
            Satellite Subsystems
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-[#7AECEC]/80 max-w-4xl mx-auto font-light">
            Engineering Excellence in Space
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-[#7AECEC]/60 max-w-3xl mx-auto leading-relaxed">
            Explore the technical subsystems that power our Parikshit satellite mission, each designed and built by student teams pushing the boundaries of space technology.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToContent}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#7AECEC] to-[#5BCBCB] text-[#0A0A0A] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(122,236,236,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            Explore Subsystems
            <ChevronDown size={20} className="ml-2 group-hover:animate-bounce" />
          </button>

          {/* Stats/Numbers */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7AECEC] mb-2">7</div>
              <div className="text-[#7AECEC]/60 text-sm uppercase tracking-wider">Subsystems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7AECEC] mb-2">2U</div>
              <div className="text-[#7AECEC]/60 text-sm uppercase tracking-wider">CubeSat</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7AECEC] mb-2">25+</div>
              <div className="text-[#7AECEC]/60 text-sm uppercase tracking-wider">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7AECEC] mb-2">∞</div>
              <div className="text-[#7AECEC]/60 text-sm uppercase tracking-wider">Innovation</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#7AECEC]/60" />
        </div>

        {/* Side decorative elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#7AECEC] to-transparent" />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#7AECEC] to-transparent" />
      </section>

      {/* Rest of the page content */}
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#7AECEC] text-center">Subsystem Overview</h2>
          <p className="text-lg mb-8 text-[rgba(122,236,236,0.8)] text-center max-w-3xl mx-auto leading-relaxed">
            Our 2U CubeSat is comprised of seven primary subsystems, each responsible for critical functions that ensure mission success. These subsystems work together seamlessly to enable our satellite to operate in the harsh environment of space.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-6xl mx-auto">
            {subsystems.map(system => (
              <button
                key={system.id}
                ref={el => { cardRefs.current[system.id] = el; }}
                className={`p-4 rounded-lg flex flex-col items-center text-center transition flex-1 min-w-[100px] sm:min-w-[120px] max-w-[150px] ${
                  activeSubsystem === system.id 
                    ? 'bg-[#7AECEC] text-[#0A0A0A] shadow-[0_0_10px_rgba(122,236,236,0.5)]' 
                    : 'bg-[#111111] text-[#7AECEC] border border-[rgba(122,236,236,0.2)] hover:shadow-[0_0_10px_rgba(122,236,236,0.2)] hover:border-[rgba(122,236,236,0.4)]'
                }`}
                onClick={() => {
                  setHasUserInteracted(true);
                  setActiveSubsystem(system.id);
                }}
              >
                <div className={`p-3 rounded-full mb-3 flex items-center justify-center ${
                  activeSubsystem === system.id ? 'bg-[#0A0A0A]' : 'bg-[rgba(122,236,236,0.1)]'
                }`}>
                  <img 
                    src={system.iconSrc} 
                    alt={`${system.name} icon`}
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                    style={{
                      filter: activeSubsystem === system.id 
                        ? 'brightness(0) saturate(100%) invert(61%) sepia(53%) saturate(372%) hue-rotate(140deg) brightness(94%) contrast(91%)' 
                        : 'brightness(0) saturate(100%) invert(61%) sepia(53%) saturate(372%) hue-rotate(140deg) brightness(94%) contrast(91%)'
                    }}
                    onError={(e) => {
                      // Fallback to a simple colored div if image fails to load
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentNode?.querySelector('.icon-fallback') as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div 
                    className={`icon-fallback w-6 h-6 rounded border-2 ${
                      activeSubsystem === system.id ? 'border-[#7AECEC]' : 'border-current'
                    } hidden`}
                  />
                </div>
                <h3 className="hidden md:block font-bold text-xs">{system.name.split('(')[0].trim()}</h3>
              </button>
            ))}
          </div>
        </section>

        {activeSystem && (
          <section className="bg-[#111111] rounded-lg shadow-[0_0_10px_rgba(122,236,236,0.2)] border border-[rgba(122,236,236,0.2)] p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-[rgba(122,236,236,0.1)] p-3 rounded-full mr-4 flex items-center justify-center">
                <img 
                  src={activeSystem.iconSrc} 
                  alt={`${activeSystem.name} icon`}
                  className="w-6 h-6 object-contain"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(61%) sepia(53%) saturate(372%) hue-rotate(140deg) brightness(94%) contrast(91%)'
                  }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentNode?.querySelector('.icon-fallback') as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="icon-fallback w-6 h-6 rounded border-2 border-[#7AECEC] hidden" />
              </div>
              <h2 className="text-3xl font-bold text-[#7AECEC]">{activeSystem.name}</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-6 text-[rgba(122,236,236,0.8)]">{activeSystem.description}</p>
                
                <h3 className="text-xl font-bold mb-4 text-[#7AECEC]">Key Functions</h3>
                <ul className="space-y-2 mb-8">
                  {activeSystem.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-[rgba(122,236,236,0.1)] text-[#7AECEC] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-[rgba(122,236,236,0.8)]">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Only show Major Components if there are any */}
                {activeSystem.components.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold mb-4 text-[#7AECEC]">Major Components</h3>
                    <ul className="space-y-2">
                      {activeSystem.components.map((component, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-[#7AECEC] rounded-full mr-3"></div>
                          <span className="text-[rgba(122,236,236,0.8)]">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

              </div>
              
              <div className="bg-[#0A0A0A] rounded-lg p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={activeSystem.imageSrc}
                  alt={activeSystem.name}
                  className="w-full h-80 object-cover rounded border border-[rgba(122,236,236,0.2)]"
                />
              </div>

            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default SubsystemsPage;