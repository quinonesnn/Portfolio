import React from 'react'
import Project from './Project'

import { projectData } from "@/lib/data";


const Projects2 = () => {
    return (
        <section className="container mx-auto">
            <div className="flex flex-col h-[100px] w-full xl:w-[48%] justify-items-center">
                <h1 className="text-5xl font-bold py-4">Projects</h1>
                <div className="border"></div> 
            </div>
            <div className='grid justify-items-center'>
              {projectData.map((project, index) => (
                  <React.Fragment key={index}>
                      <Project {...project} />
                  </React.Fragment>
              ))}
            </div>
        </section>
    )
}

export default Projects2