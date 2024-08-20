import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaLanguage, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAppwrite, SiMongodb, SiSentry, SiCloudinary } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";

export const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs />,
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Sentry",
      icon: <SiSentry />,
    },
    {
      name: "Cloudinary",
      icon: <SiCloudinary />,
    }
]

export const projectData = [
    {
        title: "Solari Finance",
        description:
            "Financial SaaS platform with secure authentication, multibank connections using Plaid, transaction history, in-app payment transfers using Dwolla and appliction performance monitoring and tracking using Sentry. Deployed on Vercel.",
        tags: ["React", "NextJS", "TypeScript", "Tailwind", "Appwrite", "Sentry"],
        imageUrl: "./assets/SolariDashboard.svg",
        live: "https://solari-finance.vercel.app/",
        github: "https://github.com/quinonesnn/solari-finance",
    },
    {
        title: "Twitter Clone",
        description:
        "Full-stack Twitter Clone using MERN with user authentication, user functionalities for posts, images, comments, likes, and notifications. Deployed on Render (first time launch will take a few minutes).",
        tags: ["React", "NextJS", "TypeScript", "Tailwind", "MongoDB", "Cloudinary"],
        imageUrl: "/assets/TwitterClone.png",
        live: "https://twitter-clone-boe7.onrender.com/",
        github: "https://github.com/quinonesnn/MERN-Twitter-Clone.git",
    },
]

export const socials = [
    {
        icon: <FaGithub/>,
        path: "https://github.com/quinonesnn"
    },
    {
        icon: <FaLinkedinIn/>,
        path: "http://linkedin.com/in/nick-quinones"
    }
]

export const links = [
    {
        name: "Projects",
        path: "#projects"
    },
    {
        name: "Resume",
        path: "#resume"
    },
    {
        name: "contact",
        path: "#contact"
    },
]

export const info = [
  {
    icon: <FaEnvelope />,
    fieldName: "Email",
    value: "quinonesnn@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    fieldName: "Location",
    value: "Orlando, FL",
  },
  {
    icon: <FaLanguage />,
    fieldName: "Languages",
    value: "English and Spanish",
  }
]

export const resume = [
  {
    title: "Student",
    location: "Deland, FL",
    company: "Stetson University",
    description: [
      "Graduated with a Bachelor of Science in Computer Science in May 2023. ",
      "Relevant Coursework: Software Development 1 & 2, Algorithm Analysis, Discrete Structures, Object Oriented Programming, Databases.",
      "Capstone Project: MoodHive, a self-care and mindfulness journaling platform using BERT NLP model for multi-label classification, specifically for emotion detection, to suggest personalized prompts and exercises based on user mood and mental state."
    ],
    icon: <GiGraduateCap />,
    date: "2019 - 2023",
  },
  {
    title: "Software Developer Intern",
    company: "Perry Man & Associates",
    location: "Deland, FL",
    description:[
      "Leveraged C# and various database technologies in practical internal applications, understanding the difference between MongoDB, MSSQL, SQLite, and Postgres.",
      "Created an application that runs SQL scripts to create users in a database with appropriate permissions based on user input. Utilized the Dapper NuGet package to handle variables without requiring explicit declaration in SQL.",
      "Utilized C# and Telnet to extract data not exposed through standard UI capabilities."
    ],
    icon: <FaCode />,
    date: "2021 - 2023",
  },
  {
    title: "Technical Support Specialist",
    company: "AssistRx",
    location: "Orlando, FL",
    description:[
      "Leveraged Jira and Salesforce to troubleshoot complex technical issues, manage support tickets, and ensure proper communication within a fast-paced software development environment. ",
      "Created a customized Python application for my team that streamlined the onboarding formatting process and sinificantly reduced the time to process certain cases by approximately 80%.",
      "Documented front-end and back-end application issues from first hand users for the iAssist platform in detail, collaberating with developers to create a fix."
    ],
    icon: <FaComputer />,
    date: "2023 - present",
  },
  {
    title: "IBM Full Stack Developer Certificate",
    company: "",
    location: "IBM",
    description:[
      "Furthered my experience in developing with front-end (HTML, CSS, JavaScript, React, Bootstrap) and back-end (Node.js, Python, Django) technologies, as well as cloud-native development (Docker, Kubernetes, OpenShift)",
      "Most impactful take away was learning about cloud-native applications by deploying and scaling them using Kubernetes, OpenShift, Docker, and serverless architectures.",
      "Learned the basics of CI/CD, DevOps, and AI integration."
    ],
    icon: <PiCertificateFill />,
    date: "2024",
    
  }
]