import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub/>,
        path: "https://github.com/quinonesnn"
    },
    {
        icon: <FaLinkedinIn/>,
        path: "http://linkedin.com/in/nick-quinones"
    }
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index)=> {
                return (
                    <Button variant="icon" size="sm" key={index}>
                        <Link href={item.path} key={index}>
                            {item.icon}
                        </Link>
                    </Button>
                )
            })}
        </div>
    )
}

export default Socials