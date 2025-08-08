export function AboutSection() {
  return (
    <section id="about" className="min-h-[70vh] flex items-center py-20 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-12 text-center font-gugi">ABOUT US</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-base text-[#7AECEC]/80 mb-6">
              Parikshit is a student satellite team founded in 2013 at Manipal Institute of Technology, India. 
              We are developing <span className="font-bold">a 2U-Class Nanosatellite</span> for launch aboard an <span className="font-bold">ISRO vehicle</span>, 
              with all subsystems designed in-house.
            </p>
            <p className="text-base text-[#7AECEC]/80 mb-6">
              Our satellite features a <span className="font-bold">high-accuracy thermal imaging payload</span> and 
              an <span className="font-bold">experimental deorbiting mechanism</span>, built for 
              a <span className="font-bold">Polar Low Earth Orbit</span>.
            </p>
            <p className="text-base text-[#7AECEC]/80 mb-6">
              We’re proud to be on <span className="font-bold">ISRO’s trail</span>, with some of our components tested 
              by <span className="font-bold">NASA</span>, and our journey guided by mentorship from top industry experts. 
              Our seniors have represented the team at global conventions, where they met astronauts 
              like <span className="font-bold">Sunita Williams</span> and <span className="font-bold">Rakesh Sharma</span>.
            </p>
            <p className="text-base text-[#7AECEC]/80 mb-6">
              <span className="font-bold">Mission</span>: 
              Advancing student-led space innovation and nurturing India’s next generation of space engineers.
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/gimages/image3.jpg"
              alt="Team working on satellite"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
