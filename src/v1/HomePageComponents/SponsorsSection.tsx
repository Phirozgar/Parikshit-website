
interface Sponsor {
  name: string;
  logo: string;
  website: string;
  description: string;
}

const sponsorsData: Sponsor[] = [
  {
    name: "Ansys",
    logo: "/assets/Sponsor Logo/ansys_part_of_synopsys_wht.png",
    website: "https://www.ansys.com",
    description: "Industry-leading engineering simulation software used for structural, thermal, fluid, electromagnetic, and systems analysis."
  },
  {
    name: "ESATAN-TMS",
    logo: "/assets/Sponsor Logo/ESATANlogo.png",
    website: "https://www.esatan-tms.com",
    description: "A professional thermal modeling and thermal analysis software suite widely used in the aerospace and space industries."
  }
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 px-4 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-gugi mb-16 text-center text-[#7AECEC] tracking-widest drop-shadow-glow">
          OUR SPONSORS
        </h2>
        
        {/* Dynamic, centered flex-wrap layout which seamlessly accommodates any number of sponsors */}
        <div className="flex flex-wrap justify-center items-stretch gap-12 md:gap-20 max-w-5xl mx-auto">
          {sponsorsData.map((sponsor) => (
            <div 
              key={sponsor.name} 
              className="flex flex-col items-center text-center max-w-md w-full md:w-[45%] lg:w-[40%] px-4 group transition-all duration-300"
            >
              {/* Logo Area: Transparent wrapper with hover scale and brightness boost */}
              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mb-8 transition-transform duration-300 transform group-hover:scale-105"
                aria-label={`Visit ${sponsor.name} website`}
              >
                <div className="h-20 flex items-center justify-center transition-all duration-300">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} Logo`} 
                    className="max-h-full max-w-full object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
              </a>

              {/* Text Info */}
              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <h3 className="text-2xl font-orbitron font-semibold text-[#7AECEC] mb-3 tracking-wider transition-all duration-300 group-hover:text-white hover:underline underline-offset-4 decoration-[#7AECEC]/40">
                  {sponsor.name}
                </h3>
              </a>
              
              <p className="text-[#7AECEC]/80 leading-relaxed text-sm md:text-base flex-grow">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
