import React from "react";

export default function RecruitmentsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#7AECEC] mb-8 tracking-widest drop-shadow-glow">
          Join Parikshit: Recruitment Process
        </h1>
        <div className="bg-[#111111] rounded-xl shadow-lg border border-[#7AECEC]/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#7AECEC] mb-4">Who Can Apply?</h2>
          <p className="text-[#7AECEC]/80 mb-4">
            We welcome passionate students from ALL BRANCHES (1st & 2nd years) who are interested in space technology, engineering, research, and innovation. No prior experience is required, just curiosity and commitment!
          </p>
        </div>
        <div className="bg-[#0A0A0A] rounded-xl shadow border border-[#7AECEC]/10 p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#7AECEC] mb-4">Recruitment Timeline</h2>
          <ol className="list-decimal list-inside text-[#7AECEC]/80 space-y-2">
            <li><span className="font-bold text-[#7AECEC]">Applications Open:</span> At the start of each semester (mid-August or Jan-beginning) (watch our socials for announcements)</li>
            <li><span className="font-bold text-[#7AECEC]">Written Application:</span> Fill out the online form with your interests, background, and motivation.</li>
            <li><span className="font-bold text-[#7AECEC]">Shortlisting:</span> Applications are reviewed by the team leads.</li>
            <li><span className="font-bold text-[#7AECEC]">Interviews:</span> Shortlisted candidates are invited for interviews (technical and HR).</li>
            <li><span className="font-bold text-[#7AECEC]">Task-Phase:</span> Ongoing candidates have to finish given tasks within the given deadlines and advance in the task-phase</li>
            <li><span className="font-bold text-[#7AECEC]">Results:</span> Selected candidates are notified via WhatsApp/Email and added to the task-phase!</li>

          </ol>
        </div>
        <div className="bg-[#111111] rounded-xl shadow border border-[#7AECEC]/10 p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#7AECEC] mb-4">Tips for Applicants</h2>
          <ul className="list-disc list-inside text-[#7AECEC]/80 space-y-2">
            <li>Try solving our Recruitment challenges! They give you an edge in the recruitment process</li>
            <li>Show your passion for space, science, and teamwork.</li>
            <li>Highlight any relevant projects, skills, or experiences (not mandatory).</li>
            <li>Be honest and authentic in your application and interview.</li>
            <li>Ask questions! We value curiosity and a willingness to learn.</li>
          </ul>
        </div>
        <div className="bg-[#0A0A0A] rounded-xl shadow border border-[#7AECEC]/10 p-8">
          <h2 className="text-2xl font-bold text-[#7AECEC] mb-4">Contact & Updates</h2>
          <p className="text-[#7AECEC]/80 mb-2">For queries, email us at <a href="mailto: parikshitmanagement23@gmail.com" className="underline text-[#7AECEC]">parikshit@university.edu</a> or follow us on our social media for the latest updates on recruitments.</p>
        </div>
      </div>
    </div>
  );
}
