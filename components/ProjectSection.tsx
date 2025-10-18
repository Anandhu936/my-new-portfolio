"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectSection = () => {
    const items = [
        {
            title: "Pomodoro",
            img: "/photos/pomodoro.png",
            weburl: "https://anandhu936.github.io/my-pomodoro/",
            giturl: "https://github.com/Anandhu936/my-pomodoro",
        },
        {
            title: "Military time converter",
            img: "/photos/militarytime-converter.png",
            weburl: "https://anandhu936.github.io/military-time-converter/",
            giturl: "https://github.com/Anandhu936/military-time-converter",
        },
        {
            title: "Photography-blog",
            img: "/photos/blog.png",
            weburl: "https://photography-blog-gen9.vercel.app/",
            giturl: "https://github.com/Anandhu936/photography-blog",
        },
        {
            title: "Emi calculator",
            img: "/photos/emi.png",
            weburl: "https://anandhu936.github.io/emi-calculator/",
            giturl: "https://github.com/Anandhu936/emi-calculator",
        },
        {
            title: "Gym-website-demo",
            img: "/photos/gym-website.png",
            weburl: "https://anandhu936.github.io/gym-website/",
            giturl: "https://github.com/Anandhu936/gym-website",
        },
    ];

    return (
        <div id="work" className="w-full px-[10%] mx-auto">
            <h1 className="text-xl lg:text-3xl text-accent-foreground text-center mb-8 font-montserrat">
                WORK
            </h1>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 25,
                            delay: index * 0.2,
                        }}
                        className=" text-foreground border-[.5px] border-accent-foreground rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="p-1 md:p-4">
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="rounded-lg object-fill text-foreground "

                                    priority
                                />
                            </div>

                            <div className="p-4 text-center">
                                <h2 className="text-xl font-medium text-foreground mb-4">{item.title}</h2>
                                <div className="flex justify-center gap-4">
                                    <a
                                        href={item.giturl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-foreground rounded-full px-2 lg:px-5 py-1 lg:py-2 cursor-pointer text-[12px] lg:text-[16px] text-foreground hover:text-green-500 transition-all ease-in-out hover:border-gray-500"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={item.weburl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-foreground rounded-full px-2 lg:px-5 py-1 lg:py-2 cursor-pointer text-[12px] lg:text-[16px] text-foreground hover:text-green-500 transition-all ease-in-out hover:border-gray-500"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;
