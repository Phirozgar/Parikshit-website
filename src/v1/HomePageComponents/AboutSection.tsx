export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">ABOUT US</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-[#7AECEC]/80 mb-6">
              Parikshit is a student-led initiative pushing the boundaries of space technology and research. Our team comprises passionate undergraduate students working together to design, build, and launch our own satellite.
            </p>
            <p className="text-lg text-[#7AECEC]/80">
              Through hands-on experience and mentorship from industry experts, we're developing the next generation of space engineers and scientists.
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
  );
}
