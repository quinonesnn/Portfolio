"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    fieldName: "Phone",
    value: "386-473-5724",
  },
  {
    icon: <FaEnvelope />,
    fieldName: "Email",
    value: "quinonesnn@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    fieldName: "Location",
    value: "Orlando, FL",
  },
]
const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-secondary rounded-xl">
              <h3 className="text-4xl text-primary">
                Let's work together.
              </h3>
              <p className="text-accent-primary">
                I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="name" placeholder="Name" />
                <Input type="email" placeholder="Email" />
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Please type your message here"
              />
              <Button size="md" className="max-w-40">Submit</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex gap-6 items-center"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-button
                     rounded-md flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-accent-secondary">{item.fieldName}</p>
                      <h3 className="text-xl">{item.value}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact