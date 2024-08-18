import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
    return (
        <header className="py-8 xl:py-12">
            {/* logo */}
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-4xl font-semibold hover:text-indigo-400">
                    Nick Q
                    <span className="text-6xl text-indigo-600 dark:text-indigo-400">.</span>
                </h1>
                {/* desktop nav and hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="#contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header