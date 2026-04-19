export interface Paper {
    title: string;
    authors: string;
    year: number;
    venue: string;
    link: string;
}

const papers: Paper[] = [
    {
        title: "Orbital Dynamics and System Analysis of Nanosatellite in Decaying Orbit",
        authors: "Vedant Dubey, Avish Gupta, Shraddha Meda Sheshadri, Kanishk Ujjwal, Stephen Eric, Deeksha Sabhari Abhishek Avadhanam, Akash Kumar Singh, Chinmay Marathey, Ayush Goyal",
        year: 2020,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/9438350"
    },
    {
        title: "Complete Failure Analysis of Attitude Determination and Control Subsystem",
        authors: "Disha Gundecha, Nishant Gavhane, Vedant Dubey, Sahil Joshi, Pranav Karve, Abhishek Avadhanam, Akash Kumar Singh, Chinmay Marathey, Ayush Goyal",
        year: 2020,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/9438456"
    },
    {
        title: "Implementation of COTS components for CubeSat applications",
        authors: "Alakh Sethi, Varun Thakurta, Nanditha Gajanur, Bhagath Singh Cheela, Kshitij Sandeep Sadasivan, Raunak Hosangadi",
        year: 2017,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/7943808"
    },
    {
        title: "Ground system design for receiver-end RF communication in amateur band",
        authors: "Bhagath Singh Cheela; Nirav Annavarapu; Srinivasan N. Shalini; Paliwal Pranjal; Alakh Sethi; Varun Thakurta; Kshitij Sandeep Sadasivan; Hosangadi Raunak",
        year: 2017,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/7943920"
    },
    {
        title: "Design and analysis of antennas for a nano-satellite",
        authors: "Kshitij Sandeep Sadasivan; Srinivasan N. Shalini; Bhagath Singh Cheela; Nirav Annavarapu",
        year: 2017,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/7943809"
    },
    {
        title: "Design of thermal model and implementation of thermal solutions for nano satellite",
        authors: "Hemant Ganti; Anirudh P Kailaje; Aniketh Ajay Kumar; Akash Paliya; Arnav Saikia; Rohan Sonkusare; Atharva Tikle",
        year: 2017,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/abstract/document/7943622"
    },
    {
        title: "A proposed method for lossless image compression in nano-satellite systems",
        authors: "Yadava Deigant; Vora Akshat; Hosangadi Raunak; Paliwal Pranjal; Jain Avi",
        year: 2017,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/7943682"
    },
    {
        title: "A robust low power communications architecture for nano-satellites",
        authors: "Nirav Annavarapu; Bhagath Singh Cheela; Kshitij Sandeep Sadasivan",
        year: 2016,
        venue: "IEEE Aerospace Conference",
        link: "http://toc.proceedings.com/30787webtoc.pdf"
    },
    {
        title: "Calibration and characterization of a COTS thermal camera for space",
        authors: "Abhilasha Jain, Dhananjay Sahoo, BS R Sarvani, K. Sukumar, Ritvik Gupta, Adheesh Boratkar",
        year: 2016,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/abstract/document/7500657"
    },
    {
        title: "Promotion of Space Sciences at Undergraduate Level through the lessons learnt from Parikshit Student Satellite Model",
        authors: "Arnav Saikia",
        year: 2016,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-16/E1/IP/31800/"
    },
    {
        title: "Standard Framework to Increase Interest and Participation of lIndian High School and Undergraduate Students in Space Sciences",
        authors: "Arnav Saikia",
        year: 2016,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/paper/id/31796/abstract-pdf/IAC-16,E1,2,10,x31796.brief.pdf?2016-03-24.12:47:18"
    },
    {
        title: "Innovative small satellite structural concept for effective system integration",
        authors: "Arnav Saikia",
        year: 2016,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-16/E2/4/31785/"
    },
    {
        title: "Adaptive fault tolerant architecture for enhanced reliability of small satellites",
        authors: "K. Sukumar; Krishna Kinger; Thomas John; Ankur Dev; Kshitij Shashank",
        year: 2016,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/750060"
    },
    {
        title: "Using xPC Target to test the control system of a nano satellite",
        authors: "Krishna Kinger; Rajat Agarwal; Chandrasekhar Nagarajan; Bhavya Shahi; Varun Kashyap; Nikhil Gupta",
        year: 2016,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/abstract/document/7500664/similar#similar"
    },
    {
        title: "Memory architecture design for nano satellites",
        authors: "Nikhil Gupta; Bhavya Shahi",
        year: 2016,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/abstract/document/7500695"
    },
    {
        title: "Solar powered railway track monitoring system",
        authors: "Nanditha R Gajanur;, Apurva Singh; Aishwarya Jain",
        year: 2016,
        venue: "IEEE International Conference on Power and Renewable Energy",
        link: "https://ieeexplore.ieee.org/document/7871198"
    },
    {
        title: "Software in the loop test set-up of a tethered nano-satellite",
        authors: "Carina P Varun Kashyap; Naman Saxena; Smit Kamal; Revathi Ravula; Kaundu Rakesh",
        year: 2016,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/7500603"
    },
    {
        title: "Standard small satellite architecture for space microbiology",
        authors: "Arnav Saikia, Rohan Sonkusare, Atharva Tikle, Ravi Teja Varma Pericherla",
        year: 2015,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-15/A1/8/31611/"
    },
    {
        title: "Performance analysis of micrium RTOS in the computer of a nano satellite",
        authors: "Chandrasekhar Nagarajan; Krishna Kinger; Faraz Haider; Rajat Agarwal",
        year: 2015,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/abstract/document/7119042?section=abstract"
    },
    {
        title: "Efficient Control Algorithm for a Smart Solar Street Light",
        authors: "Abhilasha Jain; Chandrasekhar Nagarajan",
        year: 2015,
        venue: "IEEE International Conference on Next Generation Mobile Applications, Services and Technologies",
        link: "https://ieeexplore.ieee.org/document/7373272"
    },
    {
        title: "Active and passive protection of Low Earth Orbit satellites from space environmental effects",
        authors: "Yash Vardhan Gupta, B. Kapil Bharadwaj, Adheesh Boratkar, Akash Paliya, Shubhankar Dabak, Hemant Ganti",
        year: 2015,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-15/C2/6/31059/"
    },
    {
        title: "Control system design to counter the effect of tether ejection system of a nano-satelite",
        authors: "Raunaq Rakesh; Smit Kamal; Carina Pereira; Naman Saxena; Revathi Ravula; Faraz Haider; Siddharth Mayya; Karun Potty",
        year: 2015,
        venue: "International Conference on Advances in Computing, Communications and Informatics (ICACCI)",
        link: "https://ieeexplore.ieee.org/document/7275680"
    },
    {
        title: "Mechanism, ensuing dynamics and control of a polar low-earth orbit tethered nano-satellite",
        authors: "Raunaq Rakesh; Siddharth Mayya; Carina Pereira; Naman Saxena; Faraz Haider; Smit Kamal; Aditya Palta; Revathi Ravula; Karun Potty",
        year: 2015,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/7119062"
    },
    {
        title: "Design of a cubesat computer architecture using COTS hardware for terrestrial thermal imaging",
        authors: "Chandrasekhar Nagarajan; Rodney Gracian D'souza; Sukumar Karumuri; Krishna Kinger",
        year: 2014,
        venue: "IEEE International Conference on Aerospace Electronics and Remote Sensing Technology",
        link: "https://ieeexplore.ieee.org/document/7024379/similar#similar"
    },
    {
        title: "A Mobile Power Source Harnessed through Human Motion",
        authors: "Karun Arjun Potty; Chandrasekhar Nagarajan; Arya Menon",
        year: 2014,
        venue: "Texas Instruments India Educators' Conference",
        link: "https://ieeexplore.ieee.org/document/7899219"
    },
    {
        title: "LOTUS Standardized ESPA System for Hosted Payloads",
        authors: "Chrishma Singh-Derewa, Curtis Iwata, Srikanth Raviprasad, Mark Seymour",
        year: 2014,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-14/D1/7/23220/"
    },
    {
        title: "Aerothermodynamics and EDL Performance of an optimal design of manned Mars Ascent Vehicle: A Plan for Sending Humans to Mars",
        authors: "Balbir Singh, Jayakrishnan Radhakrishnan, Srikanth Raviprasad",
        year: 2014,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-14/D2/P/20933/"
    },
    {
        title: "Inland Test System For Satellite",
        authors: "Naman Vaidya, Ankit Agarwal",
        year: 2014,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-14/E2/1/21467/"
    },
    {
        title: "LOTUS (Lander/Orbiter Trans-Upper Stage) : Standardized ESPA Landing System",
        authors: "Chrishma Singh Derewa, Curtis lwata, Stott Fisher, Mark Seymour,Srikanth Raviprasad",
        year: 2014,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-14/A3/2D/23209/"
    },
    {
        title: "Conceptualization of Design Modifications in Re-Entry Vehicles Vectoring for Redirection of Plasma",
        authors: "Chrishma Singh-Derewa,Srikanth Raviprasad, Poonampreet Kaur Josan",
        year: 2014,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-14/A3/3C/27217/"
    },
    {
        title: "Robotic Arm To Clean Space Debris",
        authors: "Naman Vaidya,Ankit Agarwal",
        year: 2014,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/paper/id/21468/abstract-pdf/IAC-14,A6,P,26,x21468.brief.pdf?2014-08-25.12:13:0232)Chrishma"
    },
    {
        title: "LOTUS: Standardized ESPA Propulsion System",
        authors: "Chrishma Singh-Derewa, Curtis iwata, Scott Fisher, Srikanth Raviprasad, Mark Seymour",
        year: 2014,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-14/C4/5/23218/"
    },
    {
        title: "Descent modeling and attitude control of a tethered nano-satellite",
        authors: "Smit Kamal, Karun Potty, Chandrasekhar Nagarajan, Siddharth Mayya, Adheesh Boratkar",
        year: 2014,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/6836270"
    },
    {
        title: "Numerical study of active cooling techniques of a nano satellite using CFD for performance enhancement",
        authors: "Vignesh Chandrasekaran, Mollik Nayyar, Srikanth Raviprasad, Yash Vardhan Gupta",
        year: 2013,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-13/C2/7/18600/"
    },
    {
        title: "Design of Electric Power System of Parikshit Nano Satellite",
        authors: "Naman Vaidya, Aditya Shanker, Ankit Agarwal, Ananya Pramanik, Chandrasekhar Nagarajan, Ankur Dev, Thomas John",
        year: 2013,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-13/C3/P/19937/"
    },
    {
        title: "PROTECTION OF SPACECRAFT FROM SPACE ENVIRONMENTAL EFFECTS",
        authors: "Mollik Nayyar, Srikanth Raviprasad, Vignesh Chandrasekaran, Yash Vardhan Gupta",
        year: 2013,
        venue: "International Astronautical Congress",
        link: "https://www.researchgate.net/publication/288993934_Protection_of_spacecraft_from_space_environmental_effects"
    },
    {
        title: "Monitoring Storm time Relativistic Electron Enhancement in Low Earth Orbit on a Nanosatellite Platform",
        authors: "Pramit Dash, Rodney Gracian, Adheesh Boratkar, Pallavi Reddy, Soumitro Datta, Ishita Bisht",
        year: 2013,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-13/E2/3-V.4/19267/"
    },
    {
        title: "Design of smart antennas for nanosatellites",
        authors: "Arya Menon, Pramath Keny, Gaurav Mohta",
        year: 2013,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-13/B2/4/18567/"
    },
    {
        title: "Use of an active electrodynamic tether to provide a variable orbit for effective radiation modeling at different altitudes in the Low Earth Orbit",
        authors: "Ishaan Sood, Adheesh Boratkar, Rodney Gracian, Smit Kamal",
        year: 2013,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-13/B4/2/19918/"
    },
    {
        title: "Hyperspectral Thermal Imaging for Terrestrial Applications througha Nanosatellite",
        authors: "Rodney Gracian, Chrishma Singh-Derewa, Srikanth Raviprasad",
        year: 2013,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-13/B5/1/19288/"
    },
    {
        title: "Space Debris Removal",
        authors: "Prachee Priyadarshinee",
        year: 2012,
        venue: "International Astronautical Congress",
        link: "https://www.proceedings.com/content/017/017524webtoc.pdf"
    },
    {
        title: "Role of MEMS components for University sponsored Nano-satellite Applications",
        authors: "Sanket Dash, Siddharth Mayya",
        year: 2012,
        venue: "International Astronautical Congress",
        link: "https://www.proceedings.com/content/017/017524webtoc.pdf"
    },
    {
        title: "Micrometeoroid and Space Debris",
        authors: "Neeti Shetty, Jayant Uppal, Kautuk Sinha, Vignesh Chandrasekaran",
        year: 2011,
        venue: "International Astronautical Congress",
        link: "https://www.iafastro.org/assets/files/publications/iac-publications/IAC2011_FProgramme_final_20Sept.pdf"
    },
    {
        title: "Predicting the Solar Flare characteristics and its impact on the near earth phenomena using Radio Occultation Technique",
        authors: "Gourav Mahapatra, Sanket Dash",
        year: 2011,
        venue: "International Astronautical Congress",
        link: "https://www.iafastro.org/assets/files/publications/iac-publications/IAC2011_FProgramme_final_20Sept.pdf"
    },
    {
        title: "Efficient Space Weather Profiling Using a Microsatellite",
        authors: "Kanika Garg, Pramit Dash, Gourav Mahapatra, Nikhil Noronha, Sanket Dash",
        year: 2011,
        venue: "International Astronautical Congress",
        link: "https://www.iafastro.org/assets/files/publications/iac-publications/IAC2011_FProgramme_final_20Sept.pdf"
    },
    {
        title: "Artificial Gravity with electromagnets",
        authors: "Abhinab Choudhury",
        year: 2011,
        venue: "International Astronautical Congress",
        link: "https://iafastro.directory/iac/archive/browse/IAC-11/V/3/12140"
    },
    {
        title: "Processing of thermal satellite images using MATLAB",
        authors: "Kanishk Ujjwal, Shraddha Medha Sheshadri, Deeksha Shabari, Aarushi Dhanuka, Aprajita Singh",
        year: 2022,
        venue: "IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/9843260/"
    }
];

export default papers;
