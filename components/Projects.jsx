"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import SliderBtn from "@/components/SliderBtn";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Solari Finance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      { name: "React"}, { name: "TypeScript"}, { name: "AppWrite"},
    ],
    image: "/assets/SolariDashboard.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "NFT Marketplace",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      { name: "Next.js"}, { name: "JavaScript"}, { name: "Css 3"},
    ],
    image: "/assets/Headshot.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "NFT Marketplace",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      { name: "Next.js"}, { name: "JavaScript"}, { name: "Css 3"},
    ],
    image: "/assets/Headshot.png",
    live: "",
    github: "",
  }
]


const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isOpen, setIsOpen] = useState(false)

  const handleSlideChange = (swiper) => {
    
    // get curr slide idx
    const currentIdx = swiper.activeIndex;
    // update project state based on current slide idx
    setProject(projects[currentIdx]);
  }

  return (
    <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , transition: { delay: 0.5, duration: 0.5, ease: "easeIn" } }}
        className="min-h-[80vh] flex flex-col justify-center  py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline number */}
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none group-hover:text-button
                transition-all duration-500 capitalize"
              >
                {project.category} Project
              </h2>
              {/* project description */}
              <p className="text-accent-secondary">{project.description}</p>
              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-xl text-button">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-accent-secondary"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger 
                        className="w-[70px] h-[70px] rounded-full bg-accent-secondary flex justify-center items-center group"
                      >
                        <BsArrowUpRight
                          className="text-primary text-3xl group-hover:text-accent-secondary"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Repo Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger 
                        className="w-[70px] h-[70px] rounded-full bg-accent-secondary flex justify-center items-center group"
                      >
                        <BsGithub
                          className="text-primary text-3xl group-hover:text-accent-secondary"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) =>{
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div 
                      className="h-[460px] relative group flex justify-center items-center bg-secondary
                      cursor-pointer"
                      onClick={() => setIsOpen(true)}
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                      </div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {isOpen && (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt="Expanded Image"
                        width={800}
                        height={600}
                        className="object-contain w-full h-full"
                        style={{ aspectRatio: "800/600", objectFit: "cover" }}
                      />
                      <DialogClose className="text-3xl"/>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
              {/* slider buttons */}
              <SliderBtn 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0
                z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-button hover:bg-accent-button text-primary text-[22px] w-[44px] h-[44px] flex
                justify-center items-center transition-center"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work