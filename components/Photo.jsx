'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
    return (
        <div className='w-full h-full relative'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1,
                    transition: { delay: .2, duration: 0.4, ease: "easeIn" }
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1,
                        transition: { delay: .2, duration: 0.4, ease: "easeOut" }
                    }}
                    className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute top-1'
                >
                    <Image
                        src="/assets/Headshot2.png"
                        alt=""
                        priority
                        quality={100}
                        fill
                        className="object-contain"
                    />
                </motion.div>
            
                <motion.svg 
                    className="w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]"
                    fill="transparent"
                    viewBox="0 0 550 550"
                    overflow="visible"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle 
                        cx="50%" 
                        cy="50%"
                        r="53%"
                        stroke="#6366f1"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120,360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo