export interface TeamMember {
  name: string;
  role: string;
  department?: string;
  image: string;
  github?: string;
  linkedin?: string;
}

export function getImagePath(name: string) {
  const first = name.split(" ")[0].toLowerCase();
  // Keep the same relative resolution so it works correctly from TeamPage
  return `../../assets/team-images/timages/${first}.jpg`;
}

export const allTeamMembers: TeamMember[] = [
  // ==========================================
  // EXECUTIVE BOARD
  // ==========================================
  {
    name: "Shrihar Pande",
    role: "System Engineer",
    image: getImagePath("Shrihar Pande")
  },
  {
    name: "Sudeeksha Bhattacharyya",
    role: "System Engineer",
    image: getImagePath("Sudeeksha Bhattacharyya"),
    linkedin: "sudeeksha-bhattacharyya",
    github: "Sudeeksha008"
  },
  {
    name: "Rachit Pradip Takate",
    role: "System Engineer",
    image: getImagePath("Rachit Takate"),
    linkedin: "bluejet",
    github: "bluejet007"
  },
  {
    name: "Roselin Maria T J",
    role: "System Admin",
    image: getImagePath("Roselin Maria")
  },

  // ==========================================
  // ODHS SUBSYSTEM
  // ==========================================
  {
    name: "Prathamesh Aggarwal",
    role: "ODHS Lead",
    image: getImagePath("Prathamesh")
  },
  {
    name: "Saloni Bagra",
    role: "ODHS Team Member",
    image: getImagePath("saloni")
  },
  {
    name: "Harshit Srivastava",
    role: "ODHS Team Member",
    image: getImagePath("Harshit")
  },
  {
    name: "Purnima Manda",
    role: "ODHS Team Member",
    image: getImagePath("purnima-manda"),
    linkedin: "purnima-manda-68b853395",
    github: "PurnimaM-0012"
  },
  {
    name: "Krishang Jain",
    role: "ODHS Team Member",
    image: getImagePath("Krishang")
  },
  {
    name: "Sirish Saraf",
    role: "ODHS Team Member",
    image: getImagePath("sirish"),
    linkedin: "sirish-saraf",
    github: "Siri-shh"
  },
  {
    name: "Abhinav Raj",
    role: "ODHS Team Member",
    image: getImagePath("abhinav")
  },
  {
    name: "Vamsi",
    role: "ODHS Team Member",
    image: getImagePath("vamsi")
  },

  // ==========================================
  // ADCS SUBSYSTEM
  // ==========================================
  {
    name: "Rushil Jindal",
    role: "ADCS Team Member",
    image: getImagePath("rushil")
  },
  {
    name: "Naviya Puvvada",
    role: "ADCS Team Member",
    image: getImagePath("naviya"),
    linkedin: "naviya-devi-sri-787288374"
  },
  {
    name: "Shreyash Ahlavat",
    role: "ADCS Team Member",
    image: getImagePath("shreyash"),
    linkedin: "shreyash-ahlavat-5aa3193aa",
    github: "shreyashahlavat"
  },
  {
    name: "Nischal Nori",
    role: "ADCS Lead",
    image: getImagePath("nischal-nori"),
    linkedin: "nischalnori"
  },
  {
    name: "Samika",
    role: "ADCS Team Member",
    image: getImagePath("Samika")
  },
  {
    name: "Ardra",
    role: "ADCS Team Member",
    image: getImagePath("Ardra")
  },

  // ==========================================
  // EPS SUBSYSTEM
  // ==========================================
  {
    name: "Jayanth Krish Ramakrishnan",
    role: "EPS Lead",
    image: getImagePath("Jayanth-Krish"),
    linkedin: "jayanth-krish"
  },
  {
    name: "Prakhar Agrawal",
    role: "EPS Lead",
    image: getImagePath("Prakhar")
  },
  {
    name: "Akshay Sai",
    role: "EPS Team Member",
    image: getImagePath("Akshay Sai"),
    linkedin: "akshay-sai-99b57a27a"
  },

  // ==========================================
  // COMMS SUBSYSTEM
  // ==========================================
  {
    name: "Nedheeish Khumaran",
    role: "COMMS Lead",
    image: getImagePath("nedheeish-khumaran"),
    linkedin: "nedheeish-khumaran-38002032a",
    github: "NedheeishKhumaran"
  },
  {
    name: "Om Kale",
    role: "COMMS Team Member",
    image: getImagePath("om-kale"),
    linkedin: "om-k4le"
  },
  {
    name: "Malla Aryaman Srinivas",
    role: "COMMS Team Member",
    image: getImagePath("aryaman")
  },

  // ==========================================
  // PAYLOAD SUBSYSTEM
  // ==========================================
  {
    name: "Rushat Yadav",
    role: "Payload Lead",
    image: getImagePath("Rushat")
  },
  {
    name: "Dev Tandon",
    role: "Payload Team Member",
    image: getImagePath("Dev")
  },
  {
    name: "Anshika Goyal",
    role: "Payload Team Member",
    image: getImagePath("Anshika")
  },
  {
    name: "Rahul Satyavaram",
    role: "Payload Team Member",
    image: getImagePath("rahul"),
    linkedin: "vasudeva-satyavaram-aa7492237",
    github: "vasudevasatyavaram-dev"
  },
  {
    name: "Suvan Mallaya",
    role: "Payload Team Member",
    image: getImagePath("suvan"),
    linkedin: "suvan-mallya-5542b739b",
    github: "catonkeyboard07"
  },

  // ==========================================
  // STMS SUBSYSTEM
  // ==========================================
  {
    name: "Radhika Sasindran",
    role: "STMS Lead",
    image: getImagePath("Radhika Sasindran")
  },
  {
    name: "Diti Arunkumar",
    role: "STMS Team Member",
    image: getImagePath("diti-arunkumar"),
    linkedin: "diti-arunkumar-452397349",
    github: "ditiarunkumar"
  },
  {
    name: "Vatsal Agarwal",
    role: "STMS Team Member",
    image: getImagePath("vatsal")
  },
  {
    name: "Diya Goel",
    role: "STMS Team Member",
    image: getImagePath("diya-goel")
  },
  {
    name: "Thrisha Manayill Sajith",
    role: "STMS Team Member",
    github: "thrisha-dotcom",
    linkedin: "../../me?trk=p_mwlite_feed-secondary_nav",
    image: getImagePath("Thrisha")
  },
  {
    name: "Gunturi Surya Sai Venkat Shanmukh",
    role: "STMS Team Member",
    github: "Shanmukh12074",
    linkedin: "gunturi-surya-sai-venkat-shanmukh-1588a8381",
    image: getImagePath("Gunturi")
  },
  {
    name: "Medha Murali Krishnan",
    role: "STMS Team Member",
    github: "medha-mk",
    linkedin: "medha-murali-krishnan-0b7b282a3",
    image: getImagePath("Medha")
  },

  // ==========================================
  // ADMINISTRATION & OPERATIONS
  // ==========================================
  {
    name: "Nandini Sah",
    role: "Administration Team Member",
    image: getImagePath("Nandini")
  },
  {
    name: "Mokshagna",
    role: "Administration Team Member",
    image: getImagePath("moksha")
  },
  {
    name: "Rishitha Kantevari",
    role: "Administration Team Member",
    image: getImagePath("Rishitha")
  },
  {
    name: "Arush Varun",
    role: "Administration Team Member",
    image: getImagePath("arush")
  },

  // ==========================================
  // FACULTY ADVISORS
  // ==========================================
  {
    name: "Dr. Balbir Singh",
    role: "Faculty Advisor",
    image: getImagePath("Balbir"),
    department: "Aeronautical Engineering"
  },
];
