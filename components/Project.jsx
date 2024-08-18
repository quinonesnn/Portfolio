"use client";

import React, { useRef } from "react";
import ProjectImg from "@/components/ProjectImg";
import { motion, useScroll, useTransform } from "framer-motion";

import { skills } from "@/lib/data";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import Link from "next/link";

import { ImArrowUpRight2, ImGithub } from "react-icons/im";



const Project = ({
  title,
  description,
  tags,
  imageUrl,
  live,
  github,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mx-auto justify-center group mb-3 sm:mb-8 last:mb-0"
    >
      <section 
        className="bg-gray-200 max-w-[56rem] border-black/5 rounded-lg overflow-hidden 
        sm:pr-8 relative hover:bg-gray-300 flex flex-col transition
        sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div 
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
          flex flex-col h-full sm:group-even:ml-[18rem] order-2 sm:order-1"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
          </p>
          <ul className="flex gap-1 my-3">
            {skills.map((skill, index) => {
              return(
                <React.Fragment key={index}>
                  {tags.includes(skill.name) &&
                    <li>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger 
                            className="w-[35px] h-[35px] gap-1 flex transition ease-in-out
                            justify-center items-center group hover:text-indigo-600 hover:-translate-y-3 hover:delay-100 hover:scale-120"
                          >                          
                            <div className="text-2xl">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  }
                </React.Fragment>
              )
            })}
          </ul>
          <div className="flex gap-3">
            <Link href={live}>
              <Button className="gap-2 z-0">
                View Live Site
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </span>
              </Button>
            </Link>
            <Link href={github}>
              <Button variant="icon" size="sm">
                <ImGithub />
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-5 flex justify-center order-1 sm:order-2">
          <ProjectImg image={imageUrl} />
        </div>
      </section>
    </motion.div>
  )
}

export default Project