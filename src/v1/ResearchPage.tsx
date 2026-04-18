import { useState } from "react";
import papers from "../data/papers";

function ResearchPage() {
	const [search, setSearch] = useState("");
	const [year, setYear] = useState("");
	const [venue, setVenue] = useState("");

	// Unique years and venues for dropdowns
	const years = Array.from(new Set(papers.map((p) => p.year))).sort((a, b) => b - a);
	const venues = Array.from(new Set(papers.map((p) => p.venue)));

	// Filtering logic
	const filtered = papers.filter((paper) => {
		const matchesSearch =
			paper.title.toLowerCase().includes(search.toLowerCase()) ||
			paper.authors.toLowerCase().includes(search.toLowerCase());
		const matchesYear = year ? String(paper.year) === year : true;
		const matchesVenue = venue ? paper.venue === venue : true;
		return matchesSearch && matchesYear && matchesVenue;
	});

	return (
		<div className="min-h-screen bg-[#0A0A0A] py-24 px-4">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-4xl font-bold text-center text-[#7AECEC] mb-6 tracking-widest drop-shadow-glow">Research & Publications</h1>
				<p className="text-lg text-[#7AECEC]/80 text-center mb-10 max-w-3xl mx-auto">
					Parikshit Student Satellite team has contributed to the global space research community through numerous
					peer-reviewed conference papers and journal articles. Explore our technical and educational research below.
				</p>
				{/* Space-themed filter/search bar */}
				<div className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-4 mb-12 bg-gradient-to-r from-[#111111] via-[#0A0A0A] to-[#111111] border border-[#7AECEC]/20 rounded-xl px-6 py-4 shadow-[0_0_24px_2px_rgba(122,236,236,0.08)]">
					<div className="flex-1 flex items-center gap-3 w-full min-w-0">
						<span className="text-[#7AECEC] text-lg font-mono mr-2">🔭</span>
						<input
							type="text"
							placeholder="Search by title or author..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="flex-1 bg-[#0A0A0A] border border-[#7AECEC]/30 rounded-full px-5 py-2 text-[#7AECEC] placeholder-[#7AECEC]/40 focus:outline-none focus:ring-2 focus:ring-[#7AECEC] transition min-w-0"
						/>
					</div>
					<div className="flex flex-wrap items-center gap-3 w-full md:w-auto min-w-0">
						<select
							value={year}
							onChange={(e) => setYear(e.target.value)}
							className="bg-[#0A0A0A] border border-[#7AECEC]/30 rounded-full px-4 py-2 text-[#7AECEC] focus:outline-none focus:ring-2 focus:ring-[#7AECEC] transition min-w-0"
						>
							<option value="">Year</option>
							{years.map((y) => (
								<option key={y} value={y}>{y}</option>
							))}
						</select>
						<select
							value={venue}
							onChange={(e) => setVenue(e.target.value)}
							className="bg-[#0A0A0A] border border-[#7AECEC]/30 rounded-full px-4 py-2 text-[#7AECEC] focus:outline-none focus:ring-2 focus:ring-[#7AECEC] transition min-w-0 max-w-xs truncate"
						>
							<option value="">Venue</option>
							{venues.map((v) => (
								<option key={v} value={v}>{v}</option>
							))}
						</select>
						{(search || year || venue) && (
							<button
								onClick={() => { setSearch(""); setYear(""); setVenue(""); }}
								className="ml-2 px-4 py-2 bg-[#7AECEC] text-[#0A0A0A] rounded-full font-bold shadow hover:bg-white transition-colors"
							>
								Clear
							</button>
						)}
					</div>
				</div>
				{/* Results */}
				<div className="grid md:grid-cols-2 gap-8">
					{filtered.length === 0 && (
						<div className="col-span-2 text-center text-[#7AECEC]/60 text-xl py-12">
							<span className="inline-block animate-pulse">No papers found 🚀</span>
						</div>
					)}
					{filtered.map((paper, idx) => (
						<div
							key={idx}
							className="relative group bg-[#0A0A0A]/70 border border-[#7AECEC]/30 rounded-2xl shadow-xl p-0 overflow-hidden flex flex-col min-h-[260px] transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_0_24px_2px_rgba(122,236,236,0.10)] hover:border-[#7AECEC] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#7AECEC]/10 before:to-[#0A0A0A]/60 before:opacity-80 before:pointer-events-none"
							style={{ perspective: 1000 }}
						>
							{/* Floating Title */}
							<div className="absolute top-0 left-0 w-full z-10 flex items-center px-8 pt-7 pb-3 bg-transparent pointer-events-none">
								<h2 className="text-lg md:text-xl font-bold text-[#7AECEC] tracking-wide drop-shadow-glow group-hover:drop-shadow-[0_0_4px_#7AECEC99] transition-all duration-300 whitespace-normal break-words">
									{paper.title}
								</h2>
							</div>
							{/* Card Content */}
							<div className="flex-1 flex flex-col justify-end px-8 pb-8 pt-28">
								<p className="text-[#7AECEC]/80 mb-2 text-sm font-mono line-clamp-2">{paper.authors}</p>
								<div className="flex flex-wrap items-center gap-2 mb-4">
									<span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">
										{paper.venue}
									</span>
									<span className="bg-[#7AECEC]/10 text-[#7AECEC] px-3 py-1 rounded-full text-xs font-semibold">
										{paper.year}
									</span>
								</div>
								<a
									href={paper.link}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-2 px-5 py-2 bg-[#7AECEC] text-[#0A0A0A] font-bold rounded-full shadow hover:bg-white transition-colors text-center w-fit self-end group-hover:scale-105 group-hover:shadow-[0_0_8px_#7AECEC99] duration-300"
								>
									View Paper
								</a>
							</div>
							{/* Softer Animated Glow Border */}
							<div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#7AECEC] group-hover:shadow-[0_0_16px_4px_#7AECEC33] transition-all duration-300"></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ResearchPage;