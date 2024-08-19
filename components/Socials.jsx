import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { socials } from "@/lib/data";

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