export interface Paper {
    title: string;
    authors: string;
    year: number;
    venue: string;
    link: string;
}

const papers: Paper[] = [
    {
        //1
        title: "Orbital Dynamics and System Analysis of Nanosatellite in Decaying Orbit",
        authors: "Vedant Dubey, Avish Gupta, Shraddha Meda Sheshadri, Kanishk Ujjwal, Stephen Eric, Deeksha Sabhari Abhishek Avadhanam, Akash Kumar Singh, Chinmay Marathey, Ayush Goyal",
        year: 2020,
        venue: "2020 IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/9438350"
    },
    {
        //2
        title: "Complete Failure Analysis of Attitude Determination and Control Subsystem",
        authors: "Disha Gundecha, Nishant Gavhane, Vedant Dubey, Sahil Joshi, Pranav Karve, Abhishek Avadhanam, Akash Kumar Singh, Chinmay Marathey, Ayush Goyal",
        year: 2020,
        venue: "2021 IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/9438456"
    },
    {
        //3
        title: "Implementation of COTS components for CubeSat applications",
        authors: "Alakh Sethi, Varun Thakurta, Nanditha Gajanur, Bhagath Singh Cheela, Kshitij Sandeep Sadasivan, Raunak Hosangadi",
        year: 2017,
        venue: "2017 IEEE Aerospace Conference",
        link: "https://ieeexplore.ieee.org/document/7943808"
    },
    {
        //4
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

export default papers;