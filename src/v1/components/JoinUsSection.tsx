import { ChevronRight } from "lucide-react";

export function JoinUsSection() {
  return (
    <section id="join" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Join the Mission?</h2>
        <p className="text-lg mb-8 text-[#7AECEC]/80 max-w-2xl mx-auto">
          We're looking for passionate students interested in space technology, engineering, and research.
        </p>
        <button className="bg-[#7AECEC] text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors inline-flex items-center">
          GET INVOLVED <ChevronRight className="ml-2" />
        </button>
      </div>
    </section>
  );
}
