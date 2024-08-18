"use client";

import Link from "next/link";
import { links } from "../lib/data";

const Nav = () => {    
    return  (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path}
                        key={index}
                        className="capitalize transition-all text-xl hover:text-indigo-400 hover:scale-110 hover:underline underline-offset-4"
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    ) 
}

export default Nav 