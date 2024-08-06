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
                    className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute top-1 mix-blend-multiply'
                >
                    <Image
                        src="/assets/Headshot.png"
                        alt=""
                        priority
                        quality={100}
                        fill
                        className="object-contain"
                    />
                </motion.div>
            
                <motion.svg 
                    className="w-[316px] xl:w-[516px] h-[316px] xl:h-[516px]"
                    fill="transparent"
                    viewBox="0 0 505 505"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* 1:12:00 */}
                    <motion.circle 
                        cx="259" 
                        cy="259"
                        r="257"
                        stroke="#30392D"
                        strokeWidth="6"
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