import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaLanguage, FaCode, } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAppwrite, SiMongodb, SiSentry, SiCloudinary, SiRedux, SiPrisma, SiAmazonec2, SiAwsamplify, SiAmazonrds } from "react-icons/si";
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
    },
    {
      name: "Redux",
      icon: <SiRedux />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
    },
    {
      name: "AWS EC2",
      icon: <SiAmazonec2 />,
    },
    {
      name: "AWS Amplify",
      icon: <SiAwsamplify />,
    },
    {
      name: "AWS RDS",
      icon: <SiAmazonrds />,
    }
]

export const projectData = [
    {
      title: "Stock UP",
      description:
          "Complete Full Stack Inventory Management Dashboard Application using Nextjs, Redux, Node, and AWS. State management is streamlined with Redux Toolkit. The backend is powered by Node.js, using Prisma as the ORM to facilitate database interactions. Integrating AWS services such as RDS for database management, EC2 for computing power, API Gateway for creating robust APIs, Amplify for frontend deployment, and S3 for storage solutions.",
      tags: ["NextJS", "Redux", "NodeJS", "Prisma", "AWS EC2", "AWS Amplify", "AWS RDS"],
      imageUrl: "/assets/stockup.png",
      live: "https://main.d3tcf1sixeb6j6.amplifyapp.com/dashboard",
      github: "https://github.com/quinonesnn/inventory-management",
    },
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
        name: "Experience",
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
      "Relevant Coursework: Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Machine Learning, Artificial Intelligence, Object-Oriented Programming, Statistics & Applications.",
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
      "Created a C# application that used Dapper NuGet ORM’s query-first approach to write SQL queries to create users in the Database with appropriate permissions based on user input.",
      "Utilized C# and Telnet to extract data from multiple off-site Linux devices used as an employee time clock at different office locations and created a dashboard that visually represented that data.",
      "Participated in high-level team meetings exposing me to real-world problems the company faced and their solutions."
    ],
    icon: <FaCode />,
    date: "2021 - 2023",
  },
  {
    title: "Technical Consultant",
    company: "AssistRx",
    location: "Orlando, FL",
    description:[
      "Scheduled and led meetings with providers and offices to showcase our iAssist SaaS solutions and it's value, answering questions and fostering a relationship to ensure client satisfaction and engagement.",
      "Improved existing, and identifying new, internal documentation, processes, and policies within the iAssist software, leveraging my expertise in full-stack development to understand and communicate the internal infrastructure of our SaaS.",
      "Built rapport with multiple Program and Customer Success managers and effectively assisted them with enterprise requests to maintain a proper service level agreement (SLA).",
      "Collaborated with cross-functional teams to troubleshoot complex technical issues, manage development tickets, and ensure proper communication within a fast-paced healthcare platform.",
      "Implemented a now-integrated custom Python application for my team that streamlined the onboarding formatting reducing processing time for onboarding by 60%."
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