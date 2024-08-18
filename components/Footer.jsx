import React from 'react'
import Nav from './Nav'

const Footer = () => {
    return (
        <div 
            className='relative h-[400px]'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-full w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
            <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-full w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
            <div className='fixed bottom-0 h-[400px] w-full'>
                <div className=' py-8 px-12 h-full w-full flex flex-col justify-between'>
                    <Nav />
                    <div className='flex items-end'>
                        <h1 className='text-[14vw] leading-[0.8] mt-10'>
                            Nick Q
                            <span className=" text-indigo-600">.</span>
                        </h1>
                        <p className='leading-[0.8]'>©copyright 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer