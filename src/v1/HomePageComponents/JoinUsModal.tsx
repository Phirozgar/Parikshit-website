import { useState } from "react";

export function JoinUsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", branch: "", year: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/60 transition-all duration-300 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      aria-hidden={!open}
    >
      <div
        className={`relative bg-[#0A0A0A] border-2 border-[#7AECEC] rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 transition-transform duration-500 ${open ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-8 opacity-0'}`}
        style={{ boxShadow: '0 0 40px 0 #7AECEC33' }}
      >
        <button
          className="absolute top-3 right-3 text-[#7AECEC] hover:text-white text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 rounded-full bg-[#7AECEC]/20 flex items-center justify-center mb-4 animate-bounce">
              <svg width="32" height="32" fill="#7AECEC" viewBox="0 0 24 24"><path d="M20.285 6.709l-11.024 11.025-5.546-5.547 1.414-1.414 4.132 4.132 9.611-9.611z"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#7AECEC] mb-2">Thank you!</h3>
            <p className="text-[#7AECEC]/80 text-center">Your interest has been recorded.<br />We'll reach out soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
            <h2 className="text-2xl font-bold text-[#7AECEC] mb-2 text-center">Join Parikshit</h2>
            <p className="text-[#7AECEC]/80 text-center mb-4">Fill in your details and we’ll get in touch!</p>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg border border-[#7AECEC]/30 bg-[#111] text-[#7AECEC] placeholder-[#7AECEC]/40 focus:outline-none focus:ring-2 focus:ring-[#7AECEC]"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg border border-[#7AECEC]/30 bg-[#111] text-[#7AECEC] placeholder-[#7AECEC]/40 focus:outline-none focus:ring-2 focus:ring-[#7AECEC]"
            />
            <input
              type="text"
              name="branch"
              value={form.branch}
              onChange={handleChange}
              required
              placeholder="Branch / Department"
              className="w-full px-4 py-2 rounded-lg border border-[#7AECEC]/30 bg-[#111] text-[#7AECEC] placeholder-[#7AECEC]/40 focus:outline-none focus:ring-2 focus:ring-[#7AECEC]"
            />
            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-[#7AECEC]/30 bg-[#111] text-[#7AECEC] focus:outline-none focus:ring-2 focus:ring-[#7AECEC]"
            >
              <option value="">Year of Study</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="PG">PG/Other</option>
            </select>
            <button
              type="submit"
              className="w-full bg-[#7AECEC] text-black font-bold py-2 rounded-lg hover:bg-white transition-colors mt-2 shadow-lg"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
