"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { ImArrowUpRight2 } from "react-icons/im";
import { SiTailwindcss, SiNextdotjs, SiAppwrite} from "react-icons/si"
import { BiLogoTypescript } from "react-icons/bi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  info: [
    {
      fieldName: "Name",
      value: "Nick Quinones",
    },
        {
      fieldName: "Phone",
      value: "386-473-5724",
    },
        {
      fieldName: "Experience",
      value: "2 years",
    },
        {
      fieldName: "Email",
      value: "quinonesnn@gmail.com",
    },
        {
      fieldName: "Languages",
      value: "English, Spanish",
    },
  ]
}

const experience = {
  icon: "/",
  title: "My Experience",
  items: [
    {
      company: "AssistRx",
      position: "Technical Support Specialist",
      duration: "2023 - Present",
      description: [
        "Decreased time required to perform routine tasks by over 70% and average support ticket time by 50% through training 2 new hires, delegating tasks, and documenting processes and procedures in detail.",
        "Created a customized Python application that streamlined the onboarding formatting process and significantly reduced the time to process cases by approximately 80%.",
      ],
    },
    {
      company: "Perry Man & Associates",
      position: "Software Developer Intern",
      duration: "2021 - 2023",
      description: [
        "Leveraged C# and various database technologies in practical internal applications, understanding the difference between MongoDB, MSSQL, SQLite, and Postgres.",
        "Created an application that runs SQL scripts to create users in a database with appropriate permissions based on user input. Utilized the Dapper NuGet package to handle variables without requiring explicit declaration in SQL.",
        "Utilized C# and Telnet to extract data not exposed through standard UI capabilities.",
      ],
    },
  ]
}

const education = {
  icon: "/",
  title: "My Education",
  items: [
    {
      institution: "Stetson University",
      degree: "Bachelor of Science, Computer Science",
      duration: "2019 - 2023",
      link:"",
      isLink: 0
    },
    {
      institution: "IBM",
      degree: "Full Stack Developer Certificate",
      duration: "2024",
      link:"https://coursera.org/verify/professional-cert/NIQIK15VXN19",
      isLink: 1
    },
  ]
}

const skills = {
  title: "My Skills",
  items: [
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
  ]
}
const Resume = () => {
  return (
    <motion.div
        id="resume"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className='min-h-[50vh] flex items-center justify-center py-16 xl:py-0'
    >
      <div className="container mx-auto">
        <div className="flex flex-col h-[100px] w-full xl:w-[380px]">
          <h1 className="text-5xl font-bold py-4">Resume</h1>
          <div className="border"></div> 
        </div>
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex max-[500px]:flex-wrap xl:flex-col w-full xl:max-w-[380px] xl:py-8 mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            {/* <TabsTrigger value="about">About Me</TabsTrigger> */}
          </TabsList>

          <div className="min-h-[40vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className=" py-6 px-10 rounded-xl
                          flex flex-col  items-center lg:items-start gap-1"
                        >
                          <span className="">{item.company} | {item.duration}</span>
                          <h3 className=" text-2xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex flex-col gap-3">
                            {item.description.map((item, index) => (
                              <div key={index} className="flex flex-row relative">
                                {/* dot */}
                                <span className="w-[10px] h-[10px] absolute top-2 rounded-full"></span>
                                <p className="text-lg ml-5 text-left">{item}</p>
                              </div>
                            ))}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className=" py-6 px-10 rounded-xl
                          flex flex-col items-center lg:items-start gap-1"
                        >
                          <span className="">{item.duration}</span>
                          <h3 className="text-2xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex flex-col gap-3">
                            {/* dot */}
                            <div className="flex flex-row relative">
                              <span className="w-[10px] h-[10px] absolute top-2 rounded-full"></span>
                              <p className=" ml-5 text-left">{item.institution}</p>
                            </div>
                          </div>
                          {item.isLink == 1 && (
                            <div className="relative w-[100%]">
                              <div className="absolute right-0 bottom-1">
                                <Link href={item.link}>
                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger 
                                        className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full bg-button hover:bg-accent-button flex justify-center items-center group "
                                      >
                                        <ImArrowUpRight2
                                          className=" text-2xl "
                                        />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>Certification Check</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </Link>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((skill, index) => {
                    return(
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger 
                              className="w-full h-[150px] rounded-xl flex
                              justify-center items-center group"
                            >
                              <div className="text-6xl group-hover:text-button  transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            {/* <TabsContent value="about" className="bg-accent-primary text-accent-secondary rounded-xl p-6 w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-xl mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 text-xl">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="font-bold">{item.fieldName}</span>
                        <p className="">{item.value}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent> */}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume