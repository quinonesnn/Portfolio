import { Button } from "@/components/ui/button";
import { FiFile } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Link from "next/link";

const data = {
    title: "Full Stack Developer",
    description: "Highly motivated full-stack developer with a Bachelor of Science in Computer Science and a portfolio of personal projects. I enjoy building sites and apps with React (Next.js).",
    resumePath: "/resume.pdf",
}

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent-primary">{data.title}</span>
            <h1 className="h1 mb-6">
              Hello I'm <br/> <span>Nick Quinones</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-accent-secondary">
              {data.description}
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button size="lg">
                    <Link href="assets/resume.pdf" className="uppercase flex items-center gap-2" download prefetch={false}>
                      <span>View Resume</span>
                      <FiFile className="text-xl"/>
                    </Link>
                  </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border rounded-full flex justify-center text-2xl
                  items-center border-secondary text-secondary bg-primary hover:bg-accent-secondary
                  hover:text-primary hover:border-primary hover:transition-all duration-500"/>
              </div>
            </div>
            {/* photo */}
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero