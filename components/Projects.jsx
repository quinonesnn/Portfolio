"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, MouseEvent } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

import { ImArrowUpRight2, ImGithub } from "react-icons/im";

import { HiCursorClick } from "react-icons/hi";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import SliderBtn from "@/components/SliderBtn";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Solari Finance",
    description: "Financial SaaS platform with secure authentication, multibank connections using Plaid, transaction history, in-app payment transfers using Dwolla, appliction performance monitoring and tracking using Sentry,and responsive design with plans to integrate budgeting tools.",
    stack: [
      { name: "Next.js"}, { name: "TypeScript"}, { name: "Appwrite"},
    ],
    image: "/assets/SolariDashboard.jpg",
    live: "https://solari-finance.vercel.app/sign-in",
    github: "https://github.com/quinonesnn/solari-finance",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Future Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      { name: "Next.js"}, { name: "JavaScript"}, { name: "Css 3"},
    ],
    image: "/assets/SolariDashboard.jpg",
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
    image: "/assets/SolariDashboard.jpg",
    live: "",
    github: "",
  }
]

const MAGNIFIER_SIZE = 175;
const ZOOM_LEVEL = 1.5;

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [isOpen, setIsOpen] = useState(false);
  // Hover over Image Mouse Zoom
  const [zoomable, setZoomable] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0, mouseX: 0, mouseY: 0 });

  const handleSlideChange = (swiper) => {
    // get curr slide idx
    const currentIdx = swiper.activeIndex;
    // update project state based on current slide idx
    setProject(projects[currentIdx]);
  }

  // Event handlers
    const handleMouseEnter = (e) => {
        let element = e.currentTarget;
        let { width, height } = element.getBoundingClientRect();
        setImageSize({ width, height });
        setZoomable(true);
        updatePosition(e);
    };

    const handleMouseLeave = (e) => {
        setZoomable(false);
        updatePosition(e);
    };

    const handleMouseMove = (e) => {
        updatePosition(e);
    };

    const updatePosition = (e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - left;
        let y = e.clientY - top;
        setPosition({
            x: -x * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
            y: -y * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
            mouseX: x - (MAGNIFIER_SIZE / 2),
            mouseY: y - (MAGNIFIER_SIZE / 2),
        });
    };

  return (
    <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="min-h-[80vh] flex flex-col justify-center  py-12 xl:px-0 rounded-3xl"
    >
      <div className="container mx-auto">
        <div className="flex flex-col h-[100px] w-full xl:w-[48%]">
          <h1 className="text-5xl font-bold py-4">Projects</h1>
          <div className="border"></div> 
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline number */}
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none
                transition-all duration-500 capitalize"
              >
                {project.title}
              </h2>
              <div>
                {/* project category */}
                <p className="">{project.category}</p>
                {/* project description */}
                <p className="">{project.description}</p>
              </div>
              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-xl">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger 
                        className="w-[70px] h-[70px] rounded-full flex justify-center items-center group"
                      >
                        <ImArrowUpRight2
                          className="text-3xl"
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
                        className="w-[70px] h-[70px] rounded-fullflex justify-center items-center group"
                      >
                        <ImGithub
                          className="text-3xl group-hover:text-accent-secondary"
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
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/5 hover:bg-black/10 z-10">
                        <div
                          className="h-[480px] flex justify-center items-center opacity-0 hover:opacity-60"
                        >
                          <HiCursorClick className="cursor-pointertext-5xl z-15"
                          />
                        </div>
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
                  <DialogContent 
                    className="max-w-[90vw] max-h-[90vh] p-0"
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                  >
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt="Expanded Image"
                        width={800}
                        height={600}
                        className="object-contain w-full h-full"
                        style={{ aspectRatio: "800/600", objectFit: "cover" }}
                      />
                      <div
                          style={{
                              backgroundPosition: `${position.x}px ${position.y}px`,
                              backgroundImage: `url(${project.image})`,
                              backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
                              backgroundRepeat: 'no-repeat',
                              display: zoomable ? 'block' : 'none',
                              top: `${position.mouseY}px`,
                              left: `${position.mouseX}px`,
                              width: `${MAGNIFIER_SIZE}px`,
                              height: `${MAGNIFIER_SIZE}px`,
                          }}
                          className={`z-50 border-4 rounded-full pointer-events-none absolute border-gray-500`}
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
                btnStyles="text-[22px] w-[44px] h-[44px] flex
                justify-center items-center transition-center"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects