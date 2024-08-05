"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

const Nav = () => {
    const pathname = usePathname();
    
    return  (
        <nav className="flex gap-8 text-accent-primary">
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path}
                        key={index}
                        className={`${
                            link.path === pathname && "text-accent-secondary border-b-2 border-accent-secondary"}
                            capitalize hover:text-accent-secondary transition-all
                        `}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    ) 
}

export default Nav 