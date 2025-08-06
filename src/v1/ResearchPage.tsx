import React, { useState } from "react";

const papers = [
	{
		title: "Orbital Dynamics and System Analysis of Nanosatellite in Decaying Orbit",
		authors: "Vedant Dubey, Avish Gupta, Shraddha Meda Sheshadri, Kanishk Ujjwal, Stephen Eric, Deeksha Sabhari Abhishek Avadhanam, Akash Kumar Singh, Chinmay Marathey, Ayush Goyal",
		year: 2020,
		venue: "2020 IEEE Aerospace Conference",
		link: "http://toc.proceedings.com/59160webtoc.pdf"
	},
	{
		title: "Complete Failure Analysis of Attitude Determination and Control Subsystem",
		authors: "Disha Gundecha, Nishant Gavhane, Vedant Dubey, Sahil Joshi, Pranav Karve, Abhishek Avadhanam, Akash Kumar Singh, Chinmay Marathey, Ayush Goyal",
		year: 2020,
		venue: "2021 IEEE Aerospace Conference",
		link: "http://toc.proceedings.com/59160webtoc.pdf"
	},
	{
		title: "Implementation of COTS components for CubeSat applications",
		authors: "Alakh Sethi, Varun Thakurta, Nanditha Gajanur, Bhagath Singh Cheela, Kshitij Sandeep Sadasivan, Raunak Hosangadi",
		year: 2017,
		venue: "2017 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/document/7943808"
	},
	{
		title: "Ground system design for receiver-end RF communication in amateur band",
		authors: "Bhagath Singh Cheela, Nirav Annavarapu, Srinivasan N. Shalini, Paliwal Pranjal, Alakh Sethi, Varun Thakurta, Kshitij Sandeep Sadasivan, Hosangadi Raunak",
		year: 2017,
		venue: "2017 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/document/7943920"
	},
	{
		title: "Design and analysis of antennas for a nano-satellite",
		authors: "Kshitij Sandeep Sadasivan, Srinivasan N. Shalini, Bhagath Singh Cheela, Nirav Annavarapu",
		year: 2017,
		venue: "2017 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/document/7943809"
	},
	{
		title: "Design of thermal model and implementation of thermal solutions for nano satellite",
		authors: "Hemant Ganti, Anirudh P Kailaje, Aniketh Ajay Kumar, Akash Paliya, Arnav Saikia, Rohan Sonkusare, Atharva Tikle",
		year: 2017,
		venue: "2017 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/abstract/document/7943622"
	},
	{
		title: "A proposed method for lossless image compression in nano-satellite systems",
		authors: "Yadava Deigant, Vora Akshat, Hosangadi Raunak, Paliwal Pranjal, Jain Avi",
		year: 2017,
		venue: "2017 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/document/7943682"
	},
	{
		title: "A robust low power communications architecture for nano-satellites",
		authors: "Nirav Annavarapu, Bhagath Singh Cheela, Kshitij Sandeep Sadasivan",
		year: 2016,
		venue: "2016 IEEE Aerospace Conference",
		link: "http://toc.proceedings.com/30787webtoc.pdf"
	},
	{
		title: "Calibration and characterization of a COTS thermal camera for space",
		authors: "Abhilasha Jain, Dhananjay Sahoo, BS R Sarvani, K. Sukumar, Ritvik Gupta, Adheesh Boratkar",
		year: 2016,
		venue: "2016 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/abstract/document/7500657"
	},
	{
		title: "Promotion of Space Sciences at Undergraduate Level through the lessons learnt from Parikshit Student Satellite Model",
		authors: "Arnav Saikia",
		year: 2016,
		venue: "International Astronautical Congress – 2016",
		link: "https://iafastro.directory/iac/archive/browse/IAC-16/E1/IP/31800/"
	},
	{
		title: "Standard Framework to Increase Interest and Participation of Indian High School and Undergraduate Students in Space Sciences",
		authors: "Arnav Saikia",
		year: 2016,
		venue: "International Astronautical Congress – 2016",
		link: "https://iafastro.directory/iac/paper/id/31796/abstract-pdf/IAC-16,E1,2,10,x31796.brief.pdf?2016-03-24.12:47:18"
	},
	{
		title: "Innovative small satellite structural concept for effective system integration",
		authors: "Arnav Saikia",
		year: 2016,
		venue: "International Astronautical Congress – 2016",
		link: "https://iafastro.directory/iac/archive/browse/IAC-16/E2/4/31785/"
	},
	{
		title: "Adaptive fault tolerant architecture for enhanced reliability of small satellites",
		authors: "K. Sukumar, Krishna Kinger, Thomas John, Ankur Dev, Kshitij Shashank",
		year: 2016,
		venue: "2016 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/document/750060"
	},
	{
		title: "Using xPC Target to test the control system of a nano satellite",
		authors: "Krishna Kinger, Rajat Agarwal, Chandrasekhar Nagarajan, Bhavya Shahi, Varun Kashyap, Nikhil Gupta",
		year: 2016,
		venue: "2016 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/abstract/document/7500664/similar#similar"
	},
	{
		title: "Memory architecture design for nano satellites",
		authors: "Nikhil Gupta, Bhavya Shahi",
		year: 2016,
		venue: "2016 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/abstract/document/7500695"
	},
	{
		title: "Solar powered railway track monitoring system",
		authors: "Nanditha R Gajanur, Apurva Singh, Aishwarya Jain",
		year: 2016,
		venue: "2016 IEEE International Conference on Power and Renewable Energy",
		link: "https://ieeexplore.ieee.org/document/7871198"
	},
	{
		title: "Software in the loop test set-up of a tethered nano-satellite",
		authors: "Carina P Varun Kashyap, Naman Saxena, Smit Kamal, Revathi Ravula, Kaundu Rakesh",
		year: 2016,
		venue: "2016 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/document/7500603"
	},
	{
		title: "Standard small satellite architecture for space microbiology",
		authors: "Arnav Saikia, Rohan Sonkusare, Atharva Tikle, Ravi Teja Varma Pericherla",
		year: 2015,
		venue: "International Astronautical Congress – 2015",
		link: "https://iafastro.directory/iac/archive/browse/IAC-15/A1/8/31611/"
	},
	{
		title: "Performance analysis of micrium RTOS in the computer of a nano satellite",
		authors: "Chandrasekhar Nagarajan, Krishna Kinger, Faraz Haider, Rajat Agarwal",
		year: 2015,
		venue: "2015 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/abstract/document/7119042?section=abstract"
	},
	{
		title: "Efficient Control Algorithm for a Smart Solar Street Light",
		authors: "Abhilasha Jain, Chandrasekhar Nagarajan",
		year: 2015,
		venue: "9th IEEE International Conference on Next Generation Mobile Applications, Services and Technologies",
		link: "https://ieeexplore.ieee.org/document/7373272"
	},
	{
		title: "Active and passive protection of Low Earth Orbit satellites from space environmental effects",
		authors: "Yash Vardhan Gupta, B. Kapil Bharadwaj, Adheesh Boratkar, Akash Paliya, Shubhankar Dabak, Hemant Ganti",
		year: 2015,
		venue: "2016 International Astronautical Congress",
		link: "https://iafastro.directory/iac/archive/browse/IAC-15/C2/6/31059/"
	},
	{
		title: "Verification and Validation of CubeSat Inertial Sensors",
		authors: "Raunaq Rakesh, Smit Kamal, Carina Pereira, Naman Saxena, Revathi Ravula, Faraz Haider, Siddharth Mayya, Karun Potty",
		year: 2015,
		venue: "2015 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/document/7119344"
	},
	{
		title: "Design and Validation of a Small Satellite Thermal Control System",
		authors: "Akshay Kumar, Arun S, Shikha B, Ankur Dev, Akash Kumar",
		year: 2015,
		venue: "2015 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/document/7119001"
	},
	{
		title: "Design and testing of a high performance miniature propulsion system for a nanosatellite",
		authors: "Shubham Soni, Faraz Haider, Abhilasha Jain, Naveen Mahajan, Nikhil Gupta",
		year: 2015,
		venue: "2015 IEEE Aerospace Conference",
		link: "https://ieeexplore.ieee.org/document/7119018"
	}
];

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