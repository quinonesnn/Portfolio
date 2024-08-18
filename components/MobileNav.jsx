"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
    {
        name: "Projects",
        path: "#projects"
    },
    {
        name: "Resume",
        path: "#resume"
    },
    {
        name: "contact",
        path: "#contact"
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Nick Q<span className="text-6xl">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center gap-8 items-center">
                    {links.map((link, index) => {
                        return (
                            <SheetClose asChild key={index}>
                                <Link 
                                    href={link.path}
                                    key={index}
                                    className={`${
                                        link.path === pathname && "border-b-2 "}
                                        text-xl capitalize transition-all
                                    `}
                                >
                                    {link.name}
                                </Link>
                            </SheetClose>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav