"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast"

import { sendEmail } from "@/actions/sendEmail";
import { info } from "@/lib/data";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast()


  async function submitContact(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget)
    const { myMessage, theirMessage, error} = await sendEmail(formData)

    if (error) {
      toast({title: error, variant:"destructive"})
    } else {
      toast({title: "Email sent!", variant:"success"})
      e.target.reset()
    }
    
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
          <h1 className="text-5xl font-bold py-4">Contact</h1>
          <div className="border"></div> 
        </div>
        <div className="flex flex-col xl:flex-row gap-[30px] min-h-[40vh]">
          {/* form */}
          <div className=" bg-gray-200 border-black/5 rounded-lg dark:bg-white/10
          xl:w-[54%] order-2 xl:order-none">
            <form 
              onSubmit={submitContact}
              className="flex flex-col gap-6 p-10 rounded-xl"
            >
              <h3 className="text-4xl underline decoration-indigo-600 underline-offset-4">
                Let's work together.
              </h3>
              <p className="text-lg">
                Please contact me directly at {""}
                <a className="underline decoration-indigo-600 underline-offset-4" href="mailto:quinonesnn@gmail">quinonesnn@gmail.com </a>
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
                    <div className="flex items-center justify-center">
                      <div className="text-[28px] text-indigo-600 dark:text-indigo-400">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="">{item.fieldName}</p>
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