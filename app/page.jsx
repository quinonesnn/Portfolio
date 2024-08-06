import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent-primary">Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br/> <span>Nick Quinones</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-secondary">
              I love my girlfriend! Shes the very best she makes me laugh, supports me and smells amazing!
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                size="lg"
                className="uppercase flex items-center gap-2"
                >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border rounded-full flex justify-center
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
  );
}
