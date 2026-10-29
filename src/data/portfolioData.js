/**
 * PORTFOLIO DATA SOURCE
 * 
 * NOTE FOR CUSTOMIZATION:
 * All personal information, experience, projects, education, and skills
 * below are strictly pulled from `resume.pdf`.
 * To replace with your own details, edit the corresponding fields below.
 */

export const personalInfo = {
  // [CUSTOMIZE]: Your full name
  name: "AnanduKrishna J",
  
  // [CUSTOMIZE]: Professional titles / one-liner
  roles: [
    "Software Engineer",
    "React JS Developer",
    "Frontend Developer"
  ],
  heroTagline: "Software Engineer & Frontend Specialist crafting high-performance, scalable web applications with React.js.",
  
  // [CUSTOMIZE]: Contact Information
  location: "Trivandrum, India",
  phone: "+91 81380 91435",
  email: "mailme.anandukrishna@gmail.com",
  // [CUSTOMIZE]: Direct Message Form Delivery Endpoint
  // Uses FormSubmit to deliver messages straight into mailme.anandukrishna@gmail.com without opening external mail client.
  // On the first test submission, check your Gmail inbox (or spam) and click "Activate Form" once to approve.
  // Can also use Formspree: "https://formspree.io/f/YOUR_ID" or Web3Forms.
  formEndpoint: "https://formsubmit.co/ajax/mailme.anandukrishna@gmail.com",
  linkedin: "https://linkedin.com/in/anandukrishnaj",
  linkedinHandle: "linkedin.com/in/anandukrishnaj",
  github: "https://github.com/Anandu-krishna-j",
  githubHandle: "github.com/Anandu-krishna-j",
  
  // [CUSTOMIZE]: Link to download resume file (defaults to resume.pdf in workspace root)
  resumeUrl: "/resume.pdf",
  
  // [CUSTOMIZE]: Profile Photos (Processed studio portrait with background removed)
  heroImage: "/@fs/C:/Users/User/.gemini/antigravity/brain/134a6b8e-e78b-4dcf-9a0b-d31cf15e2fa7/anandu_hero_1793248132198.jpg",
  portraitCutout: "/@fs/C:/Users/User/.gemini/antigravity/brain/134a6b8e-e78b-4dcf-9a0b-d31cf15e2fa7/anandu_portrait_1793248095591.jpg",
  fallbackImage: "/anandu-hero.jpg",

  // Professional Summary from resume.pdf
  summary: "Innovative Software Engineer with 5.5 years of experience building high-performance front-end applications using React.js. Strong expertise in JavaScript, Redux Toolkit, Redux Saga, Context API, REST API integration, and performance optimization. Proven ability to deliver scalable, maintainable UI solutions in agile teams, mentor junior developers, and improve user experience through clean architecture and reusable components."
};

export const careerMetrics = [
  {
    value: "5.5+",
    label: "Years Experience",
    sublabel: "Specializing in React & Frontend ecosystem"
  },
  {
    value: "3+",
    label: "Enhancements / Sprint",
    sublabel: "Delivered consistently at Trois Infotech"
  },
  {
    value: "2",
    label: "Production Platforms",
    sublabel: "Built end-to-end at Devoskil Educare"
  },
  {
    value: "8+",
    label: "Featured Projects",
    sublabel: "Enterprise systems & web applications"
  }
];

export const skillsData = {
  categories: [
    {
      id: "all",
      name: "All Skills"
    },
    {
      id: "frontend",
      name: "Frontend"
    },
    {
      id: "state",
      name: "State Management"
    },
    {
      id: "backend",
      name: "Backend Exposure"
    },
    {
      id: "tools",
      name: "Tools"
    },
    {
      id: "ai",
      name: "AI & Developer Tools"
    },
    {
      id: "practices",
      name: "Engineering Practices"
    }
  ],
  items: [
    // Frontend
    { name: "React.js", category: "frontend", level: 95, highlight: true },
    { name: "Next.js", category: "frontend", level: 85, highlight: true },
    { name: "JavaScript (ES6+)", category: "frontend", level: 95, highlight: true },
    { name: "HTML5", category: "frontend", level: 95, highlight: false },
    { name: "CSS3", category: "frontend", level: 92, highlight: false },
    { name: "Tailwind CSS", category: "frontend", level: 90, highlight: true },
    { name: "Material UI (MUI)", category: "frontend", level: 88, highlight: false },
    { name: "Context API", category: "frontend", level: 92, highlight: false },

    // State Management
    { name: "Redux Toolkit", category: "state", level: 95, highlight: true },
    { name: "Redux Saga", category: "state", level: 90, highlight: true },
    { name: "Redux Thunk", category: "state", level: 85, highlight: false },

    // Backend Exposure
    { name: "Python Flask (REST API)", category: "backend", level: 82, highlight: true },
    { name: "Django (Basics)", category: "backend", level: 75, highlight: false },

    // Tools
    { name: "Git", category: "tools", level: 90, highlight: false },
    { name: "GitHub", category: "tools", level: 90, highlight: false },
    { name: "Postman", category: "tools", level: 88, highlight: false },
    { name: "Thunder Client", category: "tools", level: 85, highlight: false },
    { name: "VS Code", category: "tools", level: 95, highlight: false },
    { name: "Chrome DevTools", category: "tools", level: 92, highlight: false },

    // AI & Developer Tools
    { name: "ChatGPT", category: "ai", level: 92, highlight: true },
    { name: "Claude AI", category: "ai", level: 90, highlight: true },
    { name: "Codex", category: "ai", level: 88, highlight: false },
    { name: "Anti Gravity", category: "ai", level: 90, highlight: true },
    { name: "GitHub Copilot", category: "ai", level: 92, highlight: true },
    { name: "Cursor AI", category: "ai", level: 90, highlight: true },

    // Practices
    { name: "Agile/Scrum", category: "practices", level: 92, highlight: false },
    { name: "Component Reusability", category: "practices", level: 96, highlight: true },
    { name: "API Integration", category: "practices", level: 95, highlight: true },
    { name: "Debugging", category: "practices", level: 94, highlight: false },
    { name: "Code Review", category: "practices", level: 90, highlight: false }
  ]
};

export const experienceData = [
  {
    role: "Software Engineer",
    company: "Trois Infotech",
    location: "Trivandrum, India",
    period: "Aug 2023 – Present",
    current: true,
    description: "Collaborated in an agile team delivering scalable React applications and performance enhancements.",
    highlights: [
      "Collaborated with a 5-member team to deliver 3+ front-end enhancements per sprint, meeting timelines consistently.",
      "Built scalable React applications using Redux Toolkit and Redux Saga to optimize state flow and performance.",
      "Designed responsive UI screens with MUI and Tailwind CSS, improving consistency and reducing development time.",
      "Mentored junior developers via reviews and best-practice guidance, improving overall quality.",
      "Researched and proposed new UI features and libraries to strengthen usability and scalability.",
      "Implemented reusable component libraries and UI patterns, reducing duplicate code and accelerating feature delivery.",
      "Improved application performance using memoization, lazy loading, and optimized API integration for faster page loads."
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Redux Saga",
      "Tailwind CSS",
      "Material UI (MUI)",
      "Agile/Scrum",
      "Performance Optimization"
    ]
  },
  {
    role: "React JS Developer",
    company: "Devoskil Educare Pvt. Ltd.",
    location: "Trivandrum, India",
    period: "Apr 2021 – Jul 2023",
    current: false,
    description: "Led technical frontend development and delivered full-stack production platforms.",
    highlights: [
      "Developed and delivered 2 production-ready platforms using React.js, Context API, and Flask REST APIs.",
      "Integrated REST APIs and improved data handling between frontend and backend systems.",
      "Led a small team, providing technical direction and ensuring sprint deliverables on time.",
      "Enhanced UI responsiveness and maintainability through reusable components and clean architecture."
    ],
    technologies: [
      "React.js",
      "Context API",
      "Python Flask (REST API)",
      "REST API Integration",
      "Team Leadership",
      "Component Architecture"
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Thomas Aerospace",
    location: "Trivandrum, India",
    period: "Oct 2020 – Mar 2021",
    current: false,
    description: "Built web modules and desktop tools with Flask and Python Kivy.",
    highlights: [
      "Developed full-stack web modules using Python Flask, with responsive UIs in HTML/CSS/JavaScript.",
      "Created desktop applications using Python Kivy to support client-specific workflows.",
      "Handled database operations and optimized queries to improve application reliability and response time.",
      "Collaborated with cross-functional teams to debug, optimize, and deliver stable releases.",
      "Assisted in deploying Flask applications and maintaining version control using Git."
    ],
    technologies: [
      "Python Flask",
      "HTML/CSS/JavaScript",
      "Python Kivy",
      "Database Operations",
      "Git"
    ]
  }
];

export const educationData = [
  {
    degree: "B.Sc. Computer Science",
    institution: "University of Kerala",
    location: "Trivandrum, India",
    period: "Jun 2017 – Mar 2020",
    details: "Foundational computer science principles, data structures, algorithms, and software development methodologies."
  },
  {
    degree: "Higher Secondary",
    institution: "Govt Model BHSS",
    location: "Trivandrum, India",
    period: "Jun 2015 – Mar 2017",
    details: "Higher secondary education with a strong focus on mathematics and science."
  }
];

export const projectsData = [
  {
    id: "ameneye",
    title: "AmenEye – Video Management System",
    year: "2024",
    type: "Enterprise System",
    category: "enterprise",
    status: "Production Ready",
    summary: "Video management and streaming interface with high-performance playback, filtering, and access controls.",
    bullets: [
      "Developed key UI modules using React.js, Redux Toolkit, Redux Saga, REST APIs.",
      "Implemented scalable flows for listing, filtering, playback, and access-controlled screens.",
      "Improved performance through memoization, pagination, and efficient API caching."
    ],
    technologies: ["React.js", "Redux Toolkit", "Redux Saga", "REST APIs", "API Caching", "Memoization"],
    featured: true
  },
  {
    id: "kswmp",
    title: "Kerala Solid Waste Management Project (KSWMP)",
    year: "2024",
    type: "Public Sector / Governance",
    category: "enterprise",
    status: "Active Deployment",
    summary: "Large-scale reporting and tracking dashboards built for public infrastructure and operational workflows.",
    bullets: [
      "Built dashboards and reporting screens using React.js, Redux Toolkit, Redux Saga.",
      "Improved usability for large-scale data entry and tracking workflows."
    ],
    technologies: ["React.js", "Redux Toolkit", "Redux Saga", "Dashboards", "Data Entry Workflows"],
    featured: true
  },
  {
    id: "surveillance-ai",
    title: "Surveillance AI – Real-time Monitoring UI",
    year: "2023",
    type: "AI & Monitoring System",
    category: "enterprise",
    status: "Enterprise Integration",
    summary: "Real-time AI monitoring dashboard for live camera streams, instantaneous alerts, and activity event logs.",
    bullets: [
      "Integrated AI monitoring outputs into dashboards with React.js.",
      "Designed responsive interfaces for alerts, camera feeds, and activity logs."
    ],
    technologies: ["React.js", "AI Integration", "Real-time Feeds", "Activity Logs", "Alert UI"],
    featured: true
  },
  {
    id: "hrms",
    title: "HRMS – Human Resource Management System",
    year: "2023",
    type: "Enterprise SaaS",
    category: "enterprise",
    status: "Deployed System",
    summary: "Comprehensive human resource portal managing employee lifecycles, structured forms, and KPI reporting views.",
    bullets: [
      "Developed employee lifecycle screens using React.js, Tailwind CSS.",
      "Created reusable forms, table components, and KPI views for HR reporting."
    ],
    technologies: ["React.js", "Tailwind CSS", "Reusable Components", "KPI Analytics", "Forms"],
    featured: true
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    year: "2022",
    type: "Personal Project",
    category: "personal",
    status: "Completed",
    summary: "Streaming entertainment platform recreation featuring dynamic movie catalogue, categorization, and search.",
    bullets: [
      "Built Netflix-style UI using React.js with component-based architecture.",
      "Integrated movie APIs for trending, categories, and search results.",
      "Implemented responsive layout and smooth client-side navigation."
    ],
    technologies: ["React.js", "REST APIs", "Component Architecture", "Client-Side Routing", "Responsive Design"],
    featured: false
  },
  {
    id: "movers-management",
    title: "Movers Management System",
    year: "2021",
    type: "Personal Project",
    category: "personal",
    status: "Completed",
    summary: "Logistics and relocation platform handling customer bookings, shipment tracking, and automated billing.",
    bullets: [
      "Created logistics workflow platform using Python Django.",
      "Implemented booking, tracking, customer management, and invoice generation.",
      "Ensured data accuracy using ORM validations and structured forms."
    ],
    technologies: ["Python Django", "ORM Validations", "Invoice Generation", "Tracking Workflow"],
    featured: false
  },
  {
    id: "school-management",
    title: "School Management System",
    year: "2020",
    type: "Personal Project",
    category: "personal",
    status: "Completed",
    summary: "Operations management platform tracking academic schedules, student fees, and role-based faculty workflows.",
    bullets: [
      "Developed school operations system using HTML, CSS, JavaScript, Django.",
      "Implemented student records, fee tracking, timetable, and staff workflows.",
      "Added search/filter, export reports, and role-specific dashboards."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Python Django", "Export Reports", "Filter Systems"],
    featured: false
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    year: "2019",
    type: "Personal Project",
    category: "personal",
    status: "Completed",
    summary: "CRUD employee administration portal with relational data modeling, attendance logging, and secure access.",
    bullets: [
      "Built a CRUD employee portal using HTML, CSS, JavaScript, Django.",
      "Implemented onboarding, attendance tracking, and role-based access.",
      "Designed relational database models and authentication with Django admin controls."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Django", "Relational Databases", "RBAC Authentication"],
    featured: false
  }
];

