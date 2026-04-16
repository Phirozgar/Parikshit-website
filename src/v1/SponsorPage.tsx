import { useState } from "react";
import {
    Mail, Phone, Globe, Check, X,
    Satellite, GraduationCap, Megaphone, FlaskConical, Trophy,
    Building2, RadioTower, Rocket, FileText
  } from "lucide-react";

interface Package {
  tier: string;
  price: string;
  color: string;
  borderColor: string;
  shadowColor: string;
  textColor: string;
  bgAccent: string;
  badge?: string;
  benefits: {
    label: string;
    included: boolean;
  }[];
}

const packages: Package[] = [
  {
    tier: "Core",
    price: "₹50,000",
    color: "#4e9af1",
    borderColor: "border-[#4e9af1]/40",
    shadowColor: "shadow-[0_0_20px_rgba(78,154,241,0.15)]",
    textColor: "text-[#4e9af1]",
    bgAccent: "bg-[#4e9af1]/10",
    benefits: [
      { label: "Social Media", included: true },
      { label: "Website", included: true },
      { label: "Standees at Events", included: true },
      { label: "Merchandise", included: false },
      { label: "Mentions during Workshops / Competitions", included: false },
      { label: "Exclusive Social Media Content", included: false },
      { label: "Logo on CubeSat & CanSat", included: false },
    ],
  },
  {
    tier: "Signature",
    price: "₹1,00,000",
    color: "#a78bfa",
    borderColor: "border-[#a78bfa]/40",
    shadowColor: "shadow-[0_0_20px_rgba(167,139,250,0.15)]",
    textColor: "text-[#a78bfa]",
    bgAccent: "bg-[#a78bfa]/10",
    benefits: [
      { label: "Social Media", included: true },
      { label: "Website", included: true },
      { label: "Standees at Events", included: true },
      { label: "Merchandise", included: true },
      { label: "Mentions during Workshops / Competitions", included: false },
      { label: "Exclusive Social Media Content", included: false },
      { label: "Logo on CubeSat & CanSat", included: false },
    ],
  },
  {
    tier: "Pinnacle",
    price: "₹1,50,000",
    color: "#f0c040",
    borderColor: "border-[#f0c040]/50",
    shadowColor: "shadow-[0_0_30px_rgba(240,192,64,0.2)]",
    textColor: "text-[#f0c040]",
    bgAccent: "bg-[#f0c040]/10",
    badge: "Best Value",
    benefits: [
      { label: "Social Media", included: true },
      { label: "Website", included: true },
      { label: "Standees at Events", included: true },
      { label: "Merchandise", included: true },
      { label: "Mentions during Workshops / Competitions", included: true },
      { label: "Exclusive Social Media Content", included: true },
      { label: "Logo on CubeSat & CanSat", included: true },
    ],
  },
];

const stats = [
  { value: "48+", label: "Publications" },
  { value: "15+", label: "Years of Research" },
  { value: "20K+", label: "Global Student Reach" },
  { value: "2013", label: "Est. at MIT Manipal" },
];

const benefits = [
  {
    icon: Satellite,
    title: "Industry Collaboration",
    description:
      "Collaborate on student-led CubeSat and CanSat development. Engage with students building real-world systems using embedded platforms and single-board computers.",
  },
  {
    icon: GraduationCap,
    title: "Future Talent Pipeline",
    description:
      "Access a talent pool skilled in embedded systems, Linux-based development, and hardware–software integration. Connect early with next-generation space engineers.",
  },
  {
    icon: Megaphone,
    title: "Brand Visibility",
    description:
      "Your logo featured on CubeSat, CanSat, team merchandise, and competition displays. Exposure through events, workshops, and social media.",
  },
  {
    icon: Globe,
    title: "Community Outreach",
    description:
      "Reach 20,000+ global students through national-level competitions, technical workshops, and our growing outreach initiatives.",
  },
  {
    icon: FlaskConical,
    title: "Research Excellence",
    description:
      "Associate with 48+ publications across IEEE, IAC, and top global conferences. Your brand linked to nationally recognized student innovation.",
  },
  {
    icon: Trophy,
    title: "Mission Endorsement",
    description:
      "Be recognized as a key enabler of India's student space ecosystem — validated by ISRO Chairman, IN-SPACe Director, and NASA JPL scientists.",
  },
];

const tableRows = [
  "Social Media",
  "Website",
  "Standees at Events",
  "Merchandise",
  "Mentions during Workshops / Competitions",
  "Exclusive Social Media Content",
  "Logo on CubeSat & CanSat",
];

const tableData = [
  [true, true, true, false, false, false, false],
  [true, true, true, true, false, false, false],
  [true, true, true, true, true, true, true],
];

function SponsorPage() {
  const [hoveredPkg, setHoveredPkg] = useState<string | null>(null);

  return (
    <div className="pt-16">
      <div className="min-h-screen bg-[#0A0A0A]">

        {/* ── HERO ── */}
        <header
          className="relative bg-cover bg-center h-[75vh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/assets/Team Photo 2025-26.jpg')",
            backgroundPosition: "center 60%",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          {/* teal glow blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#7AECEC]/5 blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-[#7AECEC] text-sm uppercase tracking-[0.25em] font-semibold mb-4 flex items-center justify-center gap-3">
              <span className="block w-8 h-px bg-[#7AECEC]" />
              Partner With Us
              <span className="block w-8 h-px bg-[#7AECEC]" />
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Fuel India's{" "}
              <span className="bg-gradient-to-r from-[#7AECEC] via-white to-[#7AECEC] bg-clip-text text-transparent">
                Space Future
              </span>
            </h1>
            <p className="text-xl text-[#7AECEC]/80 max-w-2xl mx-auto leading-relaxed">
              Partner with Parikshit — MIT Manipal's student satellite team
              mentored by ISRO and NASA experts. Your support propels real
              engineering into orbit.
            </p>
          </div>
        </header>

        {/* ── STATS STRIP ── */}
        <div className="border-y border-[#7AECEC]/20 bg-[#111111]">
          <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`text-center py-4 ${i !== 0 ? "border-l border-[#7AECEC]/20" : ""}`}
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#7AECEC] mb-1">
                    {s.value}
                  </div>
                  <div className="text-[#7AECEC]/50 text-xs uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-16">

          
          {/* ── WHY PARTNER ── */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-4 text-[#7AECEC] text-center">
              Why Partner With Us?
            </h2>
            <p className="text-[#7AECEC]/60 text-center mb-12 max-w-xl mx-auto">
              Parikshit is more than a student team — we're a nationally
              recognized innovation lab building real satellites.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-[#111111] rounded-lg border border-[rgba(122,236,236,0.2)] p-6 hover:border-[rgba(122,236,236,0.5)] hover:shadow-[0_0_15px_rgba(122,236,236,0.1)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[rgba(122,236,236,0.1)] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[rgba(122,236,236,0.15)] transition-colors">
  <b.icon className="w-6 h-6 text-[#7AECEC]" />
</div>
                  <h3 className="text-[#7AECEC] font-bold text-lg mb-3">{b.title}</h3>
                  <p className="text-[rgba(122,236,236,0.6)] text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── RECOGNITION HIGHLIGHT ── */}
          <section className="mb-20 bg-[#111111] rounded-lg border border-[rgba(122,236,236,0.2)] shadow-[0_0_20px_rgba(122,236,236,0.08)] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#7AECEC] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                  Nationally Recognized
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Validated by the{" "}
                  <span className="text-[#7AECEC]">Best in the World</span>
                </h2>
                <p className="text-[rgba(122,236,236,0.7)] leading-relaxed mb-6">
                  Our work has been reviewed and applauded by ISRO Chairman,
                  IN-SPACe Director, NASA JPL scientists, and DRDO defense
                  experts. Sponsoring Parikshit puts your brand at the center
                  of India's student space revolution.
                </p>
                <a
                  href="mailto:parikshit.mu@manipal.edu?subject=Sponsorship%20Enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7AECEC] to-[#5BCBCB] text-[#0A0A0A] font-bold rounded-full hover:shadow-[0_0_30px_rgba(122,236,236,0.4)] transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider"
                >
                  <Mail size={16} /> Get In Touch
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
  { label: "IPSC 2025", sub: "IIT Roorkee — Showcased to ISRO & IN-SPACe", icon: Building2 },
  { label: "CanSat Finale", sub: "National Qualifier — Featured on NBC24 News", icon: RadioTower },
  { label: "NASA JPL", sub: "Direct engagement with JPL scientists", icon: Rocket },
  { label: "48+ Papers", sub: "IEEE & IAC international publications", icon: FileText },
].map((card, i) => (
                  <div
                    key={i}
                    className="bg-[#0A0A0A] rounded-lg border border-[rgba(122,236,236,0.15)] p-5 hover:border-[rgba(122,236,236,0.35)] transition-colors"
                  >
                    <div className="w-12 h-12 bg-[rgba(122,236,236,0.1)] rounded-lg flex items-center justify-center mb-5">
  <card.icon className="w-6 h-6 text-[#7AECEC]" />
</div>
                    <p className="text-[#7AECEC] font-bold text-sm mb-1">{card.label}</p>
                    <p className="text-[rgba(122,236,236,0.5)] text-xs leading-snug">{card.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PACKAGES ── */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-4 text-[#7AECEC] text-center">
              Sponsorship Packages
            </h2>
            <p className="text-[#7AECEC]/60 text-center mb-12 max-w-xl mx-auto">
              Choose a tier that aligns with your goals. All packages include
              brand visibility and community exposure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg) => (
                <div
                  key={pkg.tier}
                  onMouseEnter={() => setHoveredPkg(pkg.tier)}
                  onMouseLeave={() => setHoveredPkg(null)}
                  className={`relative bg-[#111111] rounded-lg border ${pkg.borderColor} ${pkg.shadowColor} p-8 flex flex-col transition-all duration-300 ${
                    hoveredPkg === pkg.tier ? "scale-[1.02]" : ""
                  } ${pkg.tier === "Pinnacle" ? "border-[#f0c040]/50" : ""}`}
                >
                  {/* top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-lg"
                    style={{ background: pkg.color }}
                  />

                  {pkg.badge && (
                    <span
                      className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                      style={{
                        background: pkg.color,
                        color: pkg.tier === "Pinnacle" ? "#000" : "#fff",
                      }}
                    >
                      {pkg.badge}
                    </span>
                  )}

                  <p className={`text-xs font-bold uppercase tracking-[0.18em] mb-2 ${pkg.textColor}`}>
                    {pkg.tier} Sponsor
                  </p>
                  <p className="text-4xl font-bold text-white mb-1">{pkg.price}</p>
                  <p className="text-[#7AECEC]/40 text-xs mb-6">per year</p>

                  <div className="h-px bg-[#7AECEC]/10 mb-6" />

                  <ul className="space-y-3 flex-1">
                    {pkg.benefits.map((b) => (
                      <li key={b.label} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                            b.included
                              ? `${pkg.bgAccent}`
                              : "bg-white/5"
                          }`}
                          style={{ color: b.included ? pkg.color : "rgba(255,255,255,0.2)" }}
                        >
                          {b.included ? <Check size={12} /> : <X size={12} />}
                        </span>
                        <span
                          className={`text-sm leading-snug ${
                            b.included ? "text-[#7AECEC]/80" : "text-white/20"
                          }`}
                        >
                          {b.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:parikshit.mu@manipal.edu?subject=${pkg.tier}%20Sponsorship%20Enquiry`}
                    className="mt-8 block w-full text-center py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-200"
                    style={
                      pkg.tier === "Pinnacle"
                        ? { background: pkg.color, color: "#000" }
                        : {
                            background: "transparent",
                            border: `1px solid ${pkg.color}60`,
                            color: pkg.color,
                          }
                    }
                    onMouseEnter={(e) => {
                      if (pkg.tier !== "Pinnacle")
                        (e.currentTarget as HTMLAnchorElement).style.background =
                          pkg.color + "20";
                    }}
                    onMouseLeave={(e) => {
                      if (pkg.tier !== "Pinnacle")
                        (e.currentTarget as HTMLAnchorElement).style.background =
                          "transparent";
                    }}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-[#7AECEC] text-center">
              Compare Plans
            </h2>
            <div className="max-w-4xl mx-auto overflow-x-auto rounded-lg border border-[#7AECEC]/20 shadow-[0_0_20px_rgba(122,236,236,0.08)]">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#111111] border-b border-[#7AECEC]/20">
                    <th className="text-left px-6 py-5 text-[#7AECEC]/50 font-semibold uppercase tracking-wider text-xs w-1/2">
                      Benefit
                    </th>
                    {["Core", "Signature", "Pinnacle"].map((tier, i) => {
                      const colors = ["#4e9af1", "#a78bfa", "#f0c040"];
                      const prices = ["₹50,000", "₹1,00,000", "₹1,50,000"];
                      return (
                        <th key={tier} className="text-center px-4 py-5 font-bold">
                          <span style={{ color: colors[i] }} className="block text-sm uppercase tracking-widest">
                            {tier}
                          </span>
                          <span className="text-[#7AECEC]/30 text-xs font-normal">{prices[i]}</span>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, ri) => (
                    <tr
                      key={row}
                      className="border-b border-[#7AECEC]/10 last:border-none hover:bg-[#7AECEC]/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-[#7AECEC]/80 font-medium">{row}</td>
                      {tableData.map((col, ci) => (
                        <td key={ci} className="text-center px-4 py-4">
                          {col[ri] ? (
                            <Check
                              size={18}
                              className="mx-auto"
                              style={{ color: ["#4e9af1", "#a78bfa", "#f0c040"][ci] }}
                            />
                          ) : (
                            <span className="text-white/15 mx-auto block text-center">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>


          {/* ── CTA ── */}
          <section className="text-center mb-8">
            <div className="max-w-2xl mx-auto bg-[#111111] rounded-lg border border-[rgba(122,236,236,0.2)] shadow-[0_0_30px_rgba(122,236,236,0.08)] p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to{" "}
                <span className="bg-gradient-to-r from-[#7AECEC] via-white to-[#7AECEC] bg-clip-text text-transparent">
                  Launch Together?
                </span>
              </h2>
              <p className="text-[rgba(122,236,236,0.65)] mb-8 leading-relaxed">
                We're happy to discuss a partnership that fits your goals —
                including custom arrangements beyond our standard tiers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:parikshit.mu@manipal.edu?subject=Sponsorship%20Enquiry"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#7AECEC] to-[#5BCBCB] text-[#0A0A0A] font-bold rounded-full hover:shadow-[0_0_30px_rgba(122,236,236,0.5)] transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider"
                >
                  <Mail size={16} /> Email Us
                </a>
                <a
  href="/#projects"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[rgba(122,236,236,0.4)] text-[#7AECEC] font-bold rounded-full hover:border-[#7AECEC] hover:bg-[rgba(122,236,236,0.05)] transition-all duration-300 text-sm uppercase tracking-wider"
>
  <Globe size={16} /> Visit Projects
</a>
              </div>

              {/* contact details */}
              <div className="mt-10 pt-8 border-t border-[rgba(122,236,236,0.1)] grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[rgba(122,236,236,0.6)]">
                <a
                  href="tel:+919037744315"
                  className="flex items-center justify-center gap-2 hover:text-[#7AECEC] transition-colors"
                >
                  <Phone size={14} /> +91 90377 44315
                </a>
                <a
                  href="mailto:parikshit.mu@manipal.edu"
                  className="flex items-center justify-center gap-2 hover:text-[#7AECEC] transition-colors"
                >
                  <Mail size={14} /> parikshit.mu@manipal.edu               </a>
                <a
                  href="https://parikshitspace.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 hover:text-[#7AECEC] transition-colors"
                >
                  <Globe size={14} /> parikshitspace.in
                </a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default SponsorPage;