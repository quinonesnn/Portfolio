"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLanguage, FaPaperPlane } from "react-icons/fa";

import { motion } from "framer-motion";

import { sendEmail } from "@/actions/sendEmail";

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
  {
    icon: <FaLanguage />,
    fieldName: "Languages",
    value: "English and Spanish",
  }
]
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function submitContact(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget)
    await sendEmail(formData)

    setIsLoading(false)
  }

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className='py-8'
    >
      <div className="container mx-auto">
        <div className="flex flex-col h-[100px] w-full xl:w-[380px]">
          <h1 className="text-5xl font-bold text-accent-secondary py-4">Contact</h1>
          <div className="border border-accent-secondary"></div> 
        </div>
        <div className="flex flex-col xl:flex-row gap-[30px] min-h-[40vh]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form 
              onSubmit={submitContact}
              className="flex flex-col gap-6 p-10 bg-secondary rounded-xl"
            >
              <h3 className="text-4xl text-primary">
                Let's work together.
              </h3>
              <p className="text-accent-primary text-lg">
                Please contact me directly at {""}
                <a className="underline" href="mailto:quinonesnn@gmail">quinonesnn@gmail.com </a>
                or use the form below.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="senderName"
                  type="name"
                  placeholder="Name"
                  required
                  maxLength={50}
                />
                <Input
                  name="senderEmail"
                  type="email"
                  placeholder="Email"
                  required
                  maxLength={50}
                />
              </div>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Please type your message here"
                required
              />
              <Button 
                type="submit"
                disabled={isLoading}
                size="md" 
                className="flex items-center focus:scale-110 hover:scale-110 max-w-40 gap-2 group
                disabled:scale-100 disabled:cursor-not-allowed disabled:bg-opacity-75"
              >
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black"></div>
                ) : (
                  <>
                    Submit <FaPaperPlane className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
                  </>
                )}
              </Button>
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