export const PROJECTS = [
  {
    id: 1,
    name: "StarEdu",
    company: "Alterra Academy",
    slug: "staredu",
    description: `StarEdu is an online learning platform for high school students and educators. 
		It offers tailored resources, income opportunities for teachers, and a vibrant community. 
		Empower your education journey with StarEdu.`,
    tech: ["React", "Tailwind CSS", "Golang", "Flutter", "MySQL"],
    thumbnail: "/staredu.webp",
    live: "https://staredu-desktop.netlify.app",
    images: [
      "Login",
      "Register",
      "Register-2",
      "Forgot Password",
      "Landing Page",
      "About Us",
      "Home Dashboard-Empty State",
      "Home Dashboard",
      "Manage Course Module",
      "Manage Course Module-2",
      "Manage Course Module-3",
      "Manage Course Module-4",
      "Manage Assignment",
      "Manage Learning Module",
      "Publish Course",
      "Manage Rating",
      "Manage Income",
      "Manage Income-2",
      "Manage Quiz",
      "Manage Student",
      "Chat",
      "Profile",
    ],
    documentation: "starEdu.md",
  },
  {
    id: 2,
    name: "SIKOTAKPOS",
    company: "Oceanography - ITB",
    slug: "sikotakpos",
    description: `SIKOTAKPOS is a system for ITB's Oceanography community that simplifies tracking 
	milestones for colloquiums, internships, and theses. It helps students stay organized, 
	meet deadlines, and allows lecturers to monitor progress and provide feedback.`,
    tech: ["Django", "Python", "Bootstrap", "PostgreSQL", "Heroku"],
    thumbnail: "/sikotakpos.webp",
    images: [
      "Login",
      "Register",
      "Reset Password",
      "Reset Password Confirmation",
      "Reset Password Success",
      "Homepage",
      "Jadwal Keseluruhan",
      "Jadwal Sidang Keseluruhan",
      "404 Error",
      "500 Error",
      "[MAHASISWA] Dashboard Mahasiswa",
      "[MAHASISWA] Complete Data Mahasiswa",
      "[MAHASISWA] Daftar Tahapan Khusus UTS Kolokium",
      "[MAHASISWA] Daftar Tahapan Selain UTS Kolokium",
      "[MAHASISWA] Daftar Tahapan",
      "[MAHASISWA] Kartu Kendali Bimbingan",
      "[MAHASISWA] Kartu Kendali Sidang",
      "[MAHASISWA] List Rekomendasi Dosen",
      "[MAHASISWA] Memilih Jadwal",
      "[MAHASISWA] Profil Mahasiswa",
      "[MAHASISWA] Update Profil Mahasiswa",
      "[DOSEN] Dashboard Dosen",
      "[DOSEN] Generate Token",
      "[DOSEN] Jadwal Bimbingan",
      "[DOSEN] Jadwal Keseluruhan",
      "[DOSEN] Jadwal Seminar",
      "[DOSEN] Memutuskan",
      "[DOSEN] Profil Dosen",
      "[DOSEN] Update Profil Dosen",
      "[KOOR] Dashboard Koor",
      "[KOOR] Daftar Dosen",
      "[KOOR] Daftar Mahasiswa",
      "[KOOR] Detail Dosen",
      "[KOOR] Detail Mahasiswa",
      "[KOOR] Edit Dosen",
      "[KOOR] Edit Mahasiswa",
      "[KOOR] Jadwal Keseluruhan",
      "[KOOR] List Menentukan Jadwal",
      "[KOOR] Menentukan Jadwal",
      "[KOOR] Menentukan Rentang",
      "[KOOR] Tambah Dosen",
    ],
    documentation: "sikotakpos.md",
  },
  {
    id: 3,
    name: "Dolphin's Job",
    company: "De Dolphin",
    slug: "de-dolphin",
    description: `A job posting application that facilitates the posting of job offers by users and enables 
    companies to receive and respond to these offers. This platform streamlines the job application process, 
    enhancing efficiency for both users and companies.`,
    tech: ["React", "Tailwind", "Python", "FastAPI", "PostgreSQL", "WebSocket"],
    thumbnail: "/de-dolphin.webp",
    images: [
      "Login",
      "Register",
      "Email Verification",
      "Profile Page",
      "Add Job",
      "Job Posted",
      "Job Posted-2",
      "Job Posted-3",
      "Job Posted-4",
      "Job Posted-5",
      "Job Delete",
      "Job Control Panel",
      "Job Control Panel-2",
      "Job Control Panel-3",
      "Job Comment",
      "Job Comment-2",
    ],
  },
  {
    id: 4,
    name: "ALSA LC USK",
    company: "Asian Law Students' Association - LC USK",
    slug: "alsa-lc-usk",
    description: `A company profile website for ALSA (Asian Law Students' Association) at Universitas Syiah Kuala. 
    This website effectively showcases the organization's board, events, alumni, publications, and merchandise.`,
    tech: ["React", "GraphQL", "Vercel"],
    thumbnail: "/alsa-lc-usk.webp",
    live: "https://alsa-unsyiah.vercel.app/",
    images: [
      "Home Page",
      "Home Page-2",
      "Home Page-3",
      "Board Director",
      "Board Director-2",
      "Internal Board",
      "Internal Board-2",
      "Alumnus Board",
      "Alumnus Board-2",
      "External Board",
      "External Board-2",
      "ICT Board",
      "ICT Board-2",
      "Academic Board",
      "Academic Board-2",
      "Moot Court Board",
      "Moot Court Board-2",
      "Funding Board",
      "Funding Board-2",
      "Event Page",
      "Alumni Page",
      "Alumni Page-2",
      "Publication Page",
      "Publication Page-2",
    ],
  },
  {
    id: 5,
    name: "Koas Helper",
    company: "KOAS RSUD Zainoel Abidin Aceh",
    slug: "koas-helper",
    description: `Improving the efficiency of lab test mapping for medical students at RSUD Zainoel Abidin Aceh. 
    Streamlining the process to enhance accuracy and effectiveness in patient care.`,
    tech: ["React", "Typescript", "Node.js", "GraphQL", "Vercel"],
    thumbnail: "/koas-helper.webp",
    live: "https://koas-helper.vercel.app",
    images: ["Homepage", "Mapping"],
    documentation: "koas-helper.md",
  },
  {
    id: 6,
    name: "LOTION",
    company: "Alterra Academy",
    slug: "lotion",
    description: `A sleek self-development to-do list app that combines task 
    management with personal growth features, including habit tracking and goal setting.`,
    tech: ["React", "Typescript", "HTML", "CSS", "GraphQL", "ApolloClient"],
    thumbnail: "/lotion.webp",
    live: "https://lotion-app.vercel.app/",
    images: [
      "Sign In",
      "Sign Up [Cant Submit]",
      "Sign Up [Can Submit]",
      "Home",
      "Home [With List]",
      "Create New Task [Initial]",
      "List Rename",
      "List Delete",
      "List Page [Initial]",
      "List Page [With Preview Panel]",
    ],
    documentation: "lotion.md",
  },
];

export const CONTACTS = [
  {
    id: 1,
    icon: "github",
    text: "saidNizamudin",
    link: "https://github.com/saidNizamudin",
  },
  {
    id: 2,
    icon: "envelope",
    text: "saidnizamudin@gmail.com",
    link: `mailto:saidnizamudin@gmail.com?
		subject=Let's%20Connect&body=I%20visited%20your%20web%20portfolio%20and%
		20I%20am%20interested%20in%20discussing%20%5Bspecific%20topic%20or%20opportunity
		%5D.%20I%20would%20appreciate%20the%20opportunity%20to%20connect%20with%20
		you%20further%20to%20explore%20potential%20collaboration%20or%20ask%20any%
		20questions%20I%20have.%0A%0ALooking%20forward%20to%20hearing%20from%20you.`,
  },
  {
    id: 3,
    icon: "linkedin",
    text: "Said Nizamudin",
    link: "https://www.linkedin.com/in/said-nizamudin-4b34aa1b3/",
  },
  {
    id: 4,
    icon: "whatsapp",
    text: "+6282165201341",
    link: "https://wa.me/6282165201341",
  },
  {
    id: 5,
    icon: "twitter",
    text: "bingboonk",
    link: "https://twitter.com/bingboonk",
  },
];

export const WORKS = [
  {
    id: 1,
    company: "Quantum Teknologi Nusantara",
    position: "Software Engineer",
    startDate: "Septtember 2024",
    endDate: "Present",
    location: "Remote",
    logo: "/quantum-logo.png",
    isBlackedOut: true,
    responsibilities: ["No Description Yet"],
  },
  {
    id: 2,
    company: "SML Technologies",
    position: "Software Engineer",
    startDate: "July 2023",
    endDate: "August 2024",
    location: "South Jakarta, Indonesia",
    logo: "/sml-logo.png",
    responsibilities: [
      `Developed Integrated Configuration Management (ICAM) for Telkomsel using Vue.js and Java,  with 7 main modules, 15+ pages, and a dashboard managing 200+ data entries across 40+ cities in Indonesia`,
      `Built Computerized Maintenance Management Systems (CMMS) for PT Bayan Resource using Vue.js and Java, featuring 12+ modules for asset monitoring and a dashboard managing 200+ assets`,
    ],
  },
  {
    id: 3,
    company: "OY! Indonesia",
    position: "Software Engineer Intern",
    startDate: "February 2022",
    endDate: "October 2022",
    location: "South Jakarta, Indonesia",
    logo: "/oy-logo.png",
    responsibilities: [
      `Integrated Xero Accounting Software with OY! Indonesia, successfully implementing the first integrated feature at OY!`,
      `Resolved 20+ critical bugs, implemented 10+ new features, fixed 300+ key errors for bilingual support and other 50+ error from Sentry, and managed OY!'s internal website for staff.`,
    ],
  },
  {
    id: 4,
    company: "Oceanography ITB",
    position: "Software Engineer",
    startDate: "January 2022",
    endDate: "April 2022",
    location: "Remote",
    logo: "/itb-logo.png",
    responsibilities: [
      `Developed SIKOTAKPOS, an information system for Oceanography ITB, supporting 10+ admins, 50+ lecturers, and 200+ students annually`,
      `Led a team of 5, managing the project from inception to deployment using Django Framework, PostgreSQL, and Heroku.`,
    ],
  },
];
