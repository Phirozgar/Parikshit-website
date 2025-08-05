import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
  Building2,
} from "lucide-react";
import TeamPage from "./TeamPage";
import SubsystemsPage from "./SubsystemsPage";

function App2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        {/* Navigation Header */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Rocket className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">
                    Parikshit
                  </span>
                </Link>
              </div>
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/team"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </Link>
                <Link
                  to="/subsystems"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Subsystems
                </Link>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#research"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Research
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-indigo-600 focus:outline-none"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/team"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Team
                </Link>
                <Link
                  to="/subsystems"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Subsystems
                </Link>
                <a
                  href="#projects"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Projects
                </a>
                <a
                  href="#research"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Research
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/team" element={<TeamPage />} />
          <Route path="/subsystems" element={<SubsystemsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Your existing home page content
function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pioneering space exploration through student-led innovation and
                research.
              </h1>
              <p className="text-xl mb-8">
                Parikshit is a student-led initiative pushing the boundaries of
                space technology and research. Our team comprises passionate
                undergraduate students working together to design, build, and
                launch our own satellite.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#about"
                  className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-bold hover:bg-indigo-100 transition"
                >
                  Learn More
                </a>
                <a
                  href="#join"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-900 transition"
                >
                  Join Our Team
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Satellite className="w-64 h-64 text-white opacity-90" />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About Parikshit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through hands-on experience and mentorship from industry experts,
              we're developing the next generation of space engineers and
              scientists.
            </p>
          </div>

          {/* Subsystems Grid - Now links to the Subsystems page */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Link
              to="/subsystems"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Onboard Data Handling System
              </h3>
              <p className="text-gray-600">
                for satellite command processing and data management.
              </p>
              <div className="mt-4 flex items-center text-indigo-600 font-medium">
                <span>Learn more</span>
                <ChevronRight size={16} className="ml-1" />
              </div>
            </Link>

            <Link
              to="/subsystems"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Attitude Determination & Control System
              </h3>
              <p className="text-gray-600">
                for precise satellite orientation.
              </p>
              <div className="mt-4 flex items-center text-indigo-600 font-medium">
                <span>Learn more</span>
                <ChevronRight size={16} className="ml-1" />
              </div>
            </Link>

            <Link
              to="/subsystems"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Battery className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Electrical & Power System
              </h3>
              <p className="text-gray-600">
                ensuring continuous power supply and distribution.
              </p>
              <div className="mt-4 flex items-center text-indigo-600 font-medium">
                <span>Learn more</span>
                <ChevronRight size={16} className="ml-1" />
              </div>
            </Link>

            <Link
              to="/subsystems"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Flask className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Scientific instruments
              </h3>
              <p className="text-gray-600">
                and experimental equipment for mission objectives.
              </p>
              <div className="mt-4 flex items-center text-indigo-600 font-medium">
                <span>Learn more</span>
                <ChevronRight size={16} className="ml-1" />
              </div>
            </Link>

            <Link
              to="/subsystems"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Radio className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Communications Systems
              </h3>
              <p className="text-gray-600">
                for reliable data transmission and ground station links.
              </p>
              <div className="mt-4 flex items-center text-indigo-600 font-medium">
                <span>Learn more</span>
                <ChevronRight size={16} className="ml-1" />
              </div>
            </Link>

            <Link
              to="/subsystems"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Boxes className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Structures, Thermal & Mechanics System
              </h3>
              <p className="text-gray-600">
                for satellite integrity and temperature control.
              </p>
              <div className="mt-4 flex items-center text-indigo-600 font-medium">
                <span>Learn more</span>
                <ChevronRight size={16} className="ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Developing cutting-edge space technology and conducting meaningful
              research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-indigo-900 flex items-center justify-center">
                <Satellite className="w-24 h-24 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  3U CubeSat
                </h3>
                <p className="text-gray-600 mb-4">
                  Our flagship 3U CubeSat project, designed for atmospheric
                  research and technology demonstration.
                </p>
                <a
                  href="#"
                  className="text-indigo-600 font-medium flex items-center"
                >
                  <span>View Project</span>
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-indigo-800 flex items-center justify-center">
                <Radio className="w-24 h-24 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ground Station
                </h3>
                <p className="text-gray-600 mb-4">
                  State-of-the-art ground station for satellite communication
                  and control.
                </p>
                <a
                  href="#"
                  className="text-indigo-600 font-medium flex items-center"
                >
                  <span>View Project</span>
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-indigo-700 flex items-center justify-center">
                <Compass className="w-24 h-24 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Atmospheric Research
                </h3>
                <p className="text-gray-600 mb-4">
                  Studying upper atmosphere composition and climate patterns.
                </p>
                <a
                  href="#"
                  className="text-indigo-600 font-medium flex items-center"
                >
                  <span>View Project</span>
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Now links to the Team page */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate students working together to push the boundaries of
              space technology.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Our Team
                </h3>
                <p className="text-gray-600 mb-6">
                  We welcome students from all engineering disciplines.
                  Applications open each semester.
                </p>
                <p className="text-gray-600 mb-6">
                  Passion for space technology is key. Training provided for all
                  skill levels.
                </p>
                <Link
                  to="/team"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition inline-block"
                >
                  Meet Our Team
                </Link>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-indigo-100 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    Dedicated students
                  </h4>
                  <p className="text-gray-700">across multiple disciplines</p>
                </div>
                <div className="bg-indigo-100 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">
                    Engineering
                  </h4>
                  <p className="text-gray-700">
                    Mechanical, Electrical, Software
                  </p>
                </div>
                <div className="bg-indigo-100 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Sciences</h4>
                  <p className="text-gray-700">Physics, Data Science</p>
                </div>
                <div className="bg-indigo-100 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Leadership</h4>
                  <p className="text-gray-700">
                    Project Management, Mentorship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We're looking for passionate students interested in space
              technology, engineering, and research.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Rocket className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-xl font-bold">Parikshit</span>
              </div>
              <p className="mt-2 text-gray-400">
                Pioneering space exploration through student-led innovation.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 Parikshit. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm mr-4"
              >
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App2;
