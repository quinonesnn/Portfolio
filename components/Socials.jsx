import Link from "next/link";
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
                    <Link href={item.path} key={index} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials