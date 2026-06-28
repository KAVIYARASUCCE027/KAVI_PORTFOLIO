export const siteConfig = {
  name: "Kaviyarasu M",
  role: "Cloud & DevOps Engineer | AI Enthusiast",
  tagline:
    "Building scalable applications, cloud-native solutions, and AI-powered systems that make a difference.",
  email: "mkaviyarasu068@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/KAVIYARASUCCE027",
    linkedin: "https://www.linkedin.com/in/kaviyarasu-m-893aaa291/",
    leetcode: "https://leetcode.com/u/user4096B/",
  },
};

export const heroStats = [
  {
    label: "Projects Completed",
    value: 15,
    suffix: "+",
    icon: "rocket",
  },
  {
    label: "Years Learning",
    value: 3,
    suffix: "+",
    icon: "cloud",
  },
  {
    label: "Achievements",
    value: 10,
    suffix: "+",
    icon: "trophy",
  },
  {
    label: "Certifications",
    value: 5,
    suffix: "+",
    icon: "graduation",
  },
];

export const stats = [
  { label: "CGPA", value: "8.22", suffix: "" },
  { label: "LeetCode Problems", value: "555", suffix: "+" },
  { label: "CodeChef Problems", value: "300", suffix: "+" },
  { label: "Hackathons", value: "3", suffix: "+" },
];

export const education = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.E Computer and Communication Engineering",
    duration: "2023-2027",
    cgpa: "8.22",
    highlight: true,
  },
  {
    institution: "VVM Matric Higher Secondary School",
    degree: null,
    duration: "2022-2023",
    percentage: "88.8%",
    highlight: false,
  },
];

export const internship = {
  title: "DevOps and Site Reliability Engineering Intern",
  organization: "Rampex",
  year: "2025",
  description:
    "Hands-on experience in building scalable DevOps pipelines and managing Site Reliability Engineering tasks including CI/CD automation, Docker, Kubernetes, Terraform and monitoring with Prometheus and Grafana on AWS.",
  skills: ["AWS", "Terraform", "Docker", "Kubernetes"],
};

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", level: 85 },
      { name: "Java", level: 90 },
      { name: "Python", level: 88 },
    ],
  },
  {
    title: "Core CS",
    skills: [
      { name: "Data Structures and Algorithms", level: 92 },
      { name: "Operating Systems", level: 80 },
      { name: "DBMS", level: 82 },
    ],
  },
  {
    title: "Backend",
    skills: [{ name: "Spring Boot", level: 88 }],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    title: "Cloud and DevOps",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 82 },
      { name: "Jenkins", level: 80 },
      { name: "Prometheus", level: 78 },
      { name: "Grafana", level: 78 },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Linux", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "IntelliJ", level: 88 },
      { name: "Postman", level: 90 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI ASSIST WALK",
    description:
      "Designed and developed an AI-powered smart walking stick using edge AI and computer vision to detect real-time obstacles and potholes for visually impaired users.",
    techStack: ["MERN", "IoT", "OpenCV", "Pyttsx3"],
    gradient: "from-purple-600/20 to-cyan-600/20",
    accent: "purple",
    githubUrl: "https://github.com/KAVIYARASUCCE027/AI-ASSIST-WALK",
    liveUrl: "https://github.com/KAVIYARASUCCE027/AI-ASSIST-WALK",
  },
  {
    id: 2,
    title: "SNAP HIRE",
    description:
      "Built a Spring Boot-based hiring platform with ATS resume scoring and AWS S3 storage.",
    techStack: ["Spring Boot", "AWS", "S3"],
    gradient: "from-cyan-600/20 to-purple-600/20",
    accent: "cyan",
    githubUrl: "https://github.com/KAVIYARASUCCE027/SNAP-HIRE",
    liveUrl: "https://github.com/KAVIYARASUCCE027/SNAP-HIRE",
  },
  {
    id: 3,
    title: "Agentic kube chakra",
    description:
      "An Agentic AI platform for Kubernetes monitoring and analysis. Built with FastAPI, LangGraph, LangChain, and Google Gemini, this service provides intelligent CPU analysis and actionable recommendations for Kubernetes pods.",
    techStack: ["FastAPI", "LangGraph", "LangChain", "Gemini"],
    gradient: "from-purple-600/20 via-cyan-600/10 to-purple-600/20",
    accent: "purple",
    githubUrl: "https://github.com/KAVIYARASUCCE027/Agentic-Kube-Chakra",
    liveUrl: "https://github.com/KAVIYARASUCCE027/Agentic-Kube-Chakra",
  },
];

export const achievements = [
  {
    platform: "LeetCode",
    stats: [
      { label: "Maximum Rating", value: "1788" },
      { label: "Problems Solved", value: "555+" },
    ],
  },
  {
    platform: "CodeChef",
    stats: [
      { label: "Maximum Rating", value: "1204" },
      { label: "Problems Solved", value: "300+" },
    ],
  },
  {
    platform: "Hack4ChangeCharcha'24",
    stats: [
      {
        label: "Achievement",
        value: "31st Position among Top 40 teams out of 3000 registrations.",
      },
    ],
  },
  {
    platform: "Build With India",
    stats: [
      { label: "Achievement", value: "Top 5000 teams out of 25000 teams." },
    ],
  },
  {
    platform: "Freshathon'24",
    stats: [
      { label: "Achievement", value: "1st Place in Project Expo 2024." },
    ],
  },
];

export const certifications = [
  {
    title: "AWS cloud Practitioner essentials",
    issuer: "AWS",
    year: "2026",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    year: "2024",
  },
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "NPTEL",
    year: "2025",
  },
  {
    title: "Master Docker and Kubernetes",
    issuer: "Udemy",
    year: "2025",
  },
];

export const codingProfile = [
  { label: "LeetCode Rating", value: 1788 },
  { label: "CodeChef Rating", value: 1204 },
  { label: "Total Problems Solved", value: 855, suffix: "+" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#internship" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
