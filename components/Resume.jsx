"use client";

import React, { useEffect, useState } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { resume } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";

const Resume = () => {
    const { theme } = useTheme();
    const { ref, inView } = useInView({
        threshold: 0
    });
    return (
        <section ref={ref}  id="resume" className="container mx-auto mt-28">
            <div className="flex flex-col h-[100px] w-full xl:w-[380px]">
                <h1 className="text-5xl font-bold py-4">Resume</h1>
                <div className="border"></div> 
            </div>
            <VerticalTimeline lineColor={theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)"}>
                {resume.map((item, index) => 
                    (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    background:
                                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                    boxShadow: "none",
                                    border: "1px solid rgba(0, 0, 0, 0.05)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem",
                                }}
                                contentArrowStyle={{
                                    borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background:
                                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                    color:
                                    theme === "light" ? "#4f46e5" : "#818cf8",
                                    fontSize: "1.5rem",
                                }}
                                visible={inView}
                            >
                                <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="flex flex-col decoration-indigo-600 underline-offset-2">
                                        <h3 className="font-semibold capitalize text-xl">{item.title}</h3>
                                        <p className="font-normal !mt-0 text-gray-400">{item.company} | {item.location}</p>              
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="!mt-1 !font-normal !text-lg text-gray-700 dark:text-white/75">
                                            {item.description.map((description, index) =>
                                                <li className='!list-disc' key={index}>
                                                    {description}
                                                </li>
                                            )}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                </Accordion>

                            </VerticalTimelineElement>
                        </React.Fragment>
                    )
                )}
            </VerticalTimeline>
        </section>
    )
}

export default Resume