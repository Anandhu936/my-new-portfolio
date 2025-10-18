"use client"
import { navItems } from "@/lib/constants";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="max-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* {logo} */}
                    <div className="flex items-center justify-center">
                        <h1 className="text-xl lg:text-4xl font-clicker-script font-medium  text-foreground">

                            <span className="">Portfolio</span>
                        </h1>

                    </div>

                    {/* {desktop navigation} */}
                    <div className="hidden md:flex   items-center space-x-4">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className=" font-montserrat text-sm lg:text-md font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">{item.name}</Link>
                        ))}
                        <ThemeToggle />
                    </div>
                    <MobileNavigation />

                </div>
            </div>
        </nav>
    );
}