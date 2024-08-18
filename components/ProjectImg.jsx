"use client";

import React, { useState } from "react";

import Image from "next/image";

import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";


const ProjectImg = ({image}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>        
            <div className='cursor-zoom-in' onClick={() => setIsOpen(true)}>
                <Image 
                    src={image}
                    alt="Project I worked on"
                    quality={95}
                    width={452}
                    height={200}
                    className="sm:absolute relative sm:top-8 top-2 sm:-right-40 
                    flex justify-items-center w-[28.25rem] rounded-lg shadow-2xl
                    transition
                    sm:group-hover:scale-[1.07]
                    sm:group-hover:-translate-x-3
                    sm:group-hover:translate-y-3
                    sm:group-hover:-rotate-2

                    sm:group-even:group-hover:translate-x-3
                    sm:group-even:group-hover:translate-y-3
                    sm:group-even:group-hover:rotate-2

                    sm:group-even:right-[initial]
                    sm:group-even:-left-40"
                />
            </div>
            {isOpen && (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent
                        className="max-w-[90vw] max-h-[90vh] p-0 "
                    >
                        <div className="relative top-5 flex justify-center touch-pinch-zoom">
                            <Image
                                src={image}
                                alt="Expanded Image"
                                width={200}
                                height={200}
                                className="object-contain w-[88%] h-[88%] rounded-xl touch-pinch-zoom"
                                // style={{ aspectRatio: "200/200"}}
                            />
                            <DialogClose className="text-5xl"/>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </>
    )
}

export default ProjectImg