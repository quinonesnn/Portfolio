import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaLanguage } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAppwrite, SiMongodb, SiSentry, SiCloudinary } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

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
            "Financial SaaS platform with secure authentication, multibank connections using Plaid, transaction history, in-app payment transfers using Dwolla and appliction performance monitoring and tracking using Sentry",
        tags: ["React", "NextJS", "TypeScript", "Tailwind", "Appwrite", "Sentry"],
        imageUrl: "./assets/SolariDashboard.svg",
        live: "https://solari-finance.vercel.app/",
        github: "https://github.com/quinonesnn/solari-finance",
    },
    {
        title: "Twitter Clone",
        description:
        "Full-stack Twitter Clone using MERN with user authentication, user functionalities for posts, images, comments, likes, and notifications.",
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