import { HelpCircle } from "lucide-react";

export function FAQsSection() {
  return (
    <section id="faqs" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-gugi mb-12 text-center">FAQs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
            <HelpCircle className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">How can I join?</h3>
            <p className="text-[#7AECEC]/80">We welcome students from all engineering disciplines. Applications open each semester.</p>
          </div>
          <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
            <HelpCircle className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">What experience do I need?</h3>
            <p className="text-[#7AECEC]/80">Passion for space technology is key. Training provided for all skill levels.</p>
          </div>
          <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
            <HelpCircle className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">What projects can I work on?</h3>
            <p className="text-[#7AECEC]/80">You can contribute to CubeSat, Cansat, ground station, and research projects across engineering and science domains.</p>
          </div>
          <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
            <HelpCircle className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Is prior research experience required?</h3>
            <p className="text-[#7AECEC]/80">No, but curiosity and willingness to learn are essential. We provide mentorship and resources for new members.</p>
          </div>
          <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
            <HelpCircle className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">How is the team structured?</h3>
            <p className="text-[#7AECEC]/80">The team is organized into subsystems (ODHS, ADCS, EPS, COMMS, STMS, Payload, Admin) with leads and faculty advisors.</p>
          </div>
          <div className="p-6 border border-[#7AECEC]/20 rounded-lg">
            <HelpCircle className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">How can I contact the team?</h3>
            <p className="text-[#7AECEC]/80">Use the Join Us button or visit the Team page for contact details and application forms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
