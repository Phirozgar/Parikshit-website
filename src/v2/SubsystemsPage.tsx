import React, { useState } from 'react';
import { Code, FlaskRound as Flask, Cpu, Radio, Battery, Boxes } from 'lucide-react';

const SubsystemsPage = () => {
  const [activeSubsystem, setActiveSubsystem] = useState('odhs');
  
  const subsystems = [
    {
      id: 'odhs',
      name: 'Onboard Data Handling System (ODHS)',
      icon: <Code size={24} />,
      description: 'The brain of our satellite, processing commands and managing data flow between all subsystems.',
      details: [
        'Implements command processing and execution for satellite operations',
        'Manages data storage, processing, and transmission protocols',
        'Handles error detection and recovery mechanisms',
        'Provides system health monitoring and status reporting',
        'Coordinates timing and synchronization across all subsystems'
      ],
      components: [
        'Main Flight Computer (Radiation-hardened microcontroller)',
        'Data Storage Units (Flash memory arrays)',
        'Command & Data Handling Software',
        'System Monitoring Sensors',
        'Backup Processing Units'
      ],
      imageSrc: 'https://example.com/images/odhs.jpg'
    },
    {
      id: 'adcs',
      name: 'Attitude Determination & Control System (ADCS)',
      icon: <Cpu size={24} />,
      description: 'Responsible for determining and controlling the satellite\'s orientation in space.',
      details: [
        'Utilizes sensors to determine the satellite\'s current orientation',
        'Implements control algorithms to maintain desired orientation',
        'Controls reaction wheels and magnetorquers for precise positioning',
        'Ensures proper solar panel alignment for power generation',
        'Stabilizes the satellite after deployment from the launch vehicle'
      ],
      components: [
        'Sun Sensors and Star Trackers',
        'Magnetometers and Gyroscopes',
        'Reaction Wheels (3-axis control)',
        'Magnetorquers for momentum management',
        'ADCS Control Software'
      ],
      imageSrc: 'https://example.com/images/adcs.jpg'
    },
    {
      id: 'eps',
      name: 'Electrical & Power System (EPS)',
      icon: <Battery size={24} />,
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
        'Power Distribution Unit',
        'DC-DC Converters',
        'Power Management Controller'
      ],
      imageSrc: 'https://example.com/images/eps.jpg'
    },
    {
      id: 'comms',
      name: 'Communications Systems',
      icon: <Radio size={24} />,
      description: 'Enables reliable data transmission between the satellite and ground stations.',
      details: [
        'Establishes and maintains RF links with ground stations',
        'Implements data encoding and error correction protocols',
        'Manages uplink command reception and verification',
        'Handles downlink telemetry and mission data transmission',
        'Optimizes bandwidth usage for efficient communication'
      ],
      components: [
        'UHF/VHF Transceiver',
        'S-Band Transmitter for high-speed downlink',
        'RF Amplifiers and Filters',
        'Communication Antennas',
        'Modulation/Demodulation Systems'
      ],
      imageSrc: 'https://example.com/images/comms.jpg'
    },
    {
      id: 'scientific',
      name: 'Scientific Instruments',
      icon: <Flask size={24} />,
      description: 'Specialized equipment for conducting experiments and gathering scientific data.',
      details: [
        'Collects atmospheric composition data at various altitudes',
        'Monitors radiation levels in the upper atmosphere',
        'Captures imagery for climate pattern analysis',
        'Conducts technology demonstration experiments',
        'Gathers data for student-led research papers'
      ],
      components: [
        'Atmospheric Spectrometer',
        'Radiation Dosimeter',
        'Multispectral Camera System',
        'Temperature and Pressure Sensors',
        'Custom Experimental Payloads'
      ],
      imageSrc: 'https://example.com/images/scientific.jpg'
    },
    {
      id: 'stms',
      name: 'Structures, Thermal & Mechanics System (STMS)',
      icon: <Boxes size={24} />,
      description: 'Ensures satellite structural integrity and thermal stability in the harsh space environment.',
      details: [
        'Designs and manufactures the satellite structure to withstand launch forces',
        'Implements thermal control to maintain operational temperature ranges',
        'Manages deployment mechanisms for antennas and solar panels',
        'Conducts vibration and thermal vacuum testing',
        'Ensures compliance with CubeSat dimensional standards'
      ],
      components: [
        'Aluminum Alloy Frame Structure',
        'Thermal Insulation Materials',
        'Passive Thermal Control Elements',
        'Deployment Mechanisms',
        'Structural Reinforcements'
      ],
      imageSrc: 'https://example.com/images/stms.jpg'
    }
  ];
  
  const activeSystem = subsystems.find(sys => sys.id === activeSubsystem);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Satellite Subsystems</h1>
          <p className="text-xl max-w-3xl">
            Explore the technical subsystems that power our Parikshit satellite mission, each designed and built by student teams.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">Subsystem Overview</h2>
          <p className="text-lg mb-8">
            Our 3U CubeSat is comprised of six primary subsystems, each responsible for critical functions that ensure mission success. These subsystems work together seamlessly to enable our satellite to operate in the harsh environment of space.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {subsystems.map(system => (
              <button
                key={system.id}
                className={`p-4 rounded-lg flex flex-col items-center text-center transition ${
                  activeSubsystem === system.id 
                    ? 'bg-indigo-700 text-white shadow-lg' 
                    : 'bg-white text-indigo-900 shadow hover:shadow-md hover:bg-indigo-50'
                }`}
                onClick={() => setActiveSubsystem(system.id)}
              >
                <div className={`p-3 rounded-full mb-3 ${
                  activeSubsystem === system.id ? 'bg-indigo-600' : 'bg-indigo-100'
                }`}>
                  {system.icon}
                </div>
                <h3 className="font-bold text-sm">{system.name.split('(')[0]}</h3>
              </button>
            ))}
          </div>
        </section>

        {activeSystem && (
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                {activeSystem.icon}
              </div>
              <h2 className="text-3xl font-bold text-indigo-900">{activeSystem.name}</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-6">{activeSystem.description}</p>
                
                <h3 className="text-xl font-bold mb-4 text-indigo-800">Key Functions</h3>
                <ul className="space-y-2 mb-8">
                  {activeSystem.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold mb-4 text-indigo-800">Major Components</h3>
                <ul className="space-y-2">
                  {activeSystem.components.map((component, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">Subsystem Illustration</p>
                  <div className="bg-white p-4 rounded border border-gray-200 inline-block">
                    {/* This would be replaced with an actual image in production */}
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Image of {activeSystem.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-indigo-800">Development Status</h3>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Design Phase</span>
                    <span>Completed</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Prototype Development</span>
                    <span>In Progress</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Testing & Validation</span>
                    <span>In Progress</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Flight Readiness</span>
                    <span>Pending</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        <section>
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">System Integration</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg mb-6">
              All subsystems are designed to work together seamlessly, with standardized interfaces and communication protocols. Our system integration approach ensures that each component functions both independently and as part of the complete satellite system.
            </p>
            
            <div className="bg-indigo-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-indigo-800">Integration Testing</h3>
              <p>
                Regular integration tests are conducted to verify subsystem compatibility and overall system performance. These tests simulate various mission scenarios to ensure the satellite can handle all expected operational conditions.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3">Technical Documentation</h4>
                <p>
                  Each subsystem team maintains detailed technical documentation, including interface control documents (ICDs) that specify how subsystems interact with each other.
                </p>
              </div>
              
              <div className="flex-1 border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3">Weekly Integration Meetings</h4>
                <p>
                  Subsystem leads meet weekly to discuss integration challenges, resolve interface issues, and coordinate development timelines across teams.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SubsystemsPage;
