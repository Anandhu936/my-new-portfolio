"use client"
import React from "react";
import Image from "next/image";
import TextChanger from "./TextChanger";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {

    const resumeUrl =
        "/photos/Anandhu-CV.pdf";

    return (
        <>
            <div id="home" className="flex justify-center bg-gray-200 dark:bg-slate-950 py-30">
                <div className="w-full xl:w-[1200px]">
                    <div className=" lg:grid lg:grid-cols-2 lg:gap-0 gap-6 ">
                        <motion.div
                            className="flex justify-center lg:order-2"
                            initial={{ opacity: 0, y: 50 }} // starts hidden & slightly below
                            whileInView={{ opacity: 1, y: 0 }} // fades in & moves up smoothly
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                duration: 0.8, // smoother timing
                                ease: "easeOut", // natural easing
                                delay: 0.3, // small delay for nicer flow
                            }}
                        >
                            {/* your content here */}


                            <div className="relative w-60 h-60 lg:w-[440px] lg:h-[440px] mt-0 lg:mt-20">
                                <Image
                                    src="/photos/hero.jpg"
                                    alt="Photographer Profile"
                                    fill
                                    className="
                            rounded-full object-cover border-2 border-gray-800
                            shadow-[0_0_25px_rgba(255,100,100,0.5)]
                            dark:shadow-[0_0_25px_rgba(100,150,255,0.7)]
                            transition-all duration-500
                             "
                                    priority
                                />
                            </div>
                        </motion.div>
                        <motion.div className=" flex flex-col align-middle justify-center items-center gap-0 lg:gap-3 mt-[30px] lg:mt-[70px]    "
                            initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.8, }}>
                            <p className="text-[14px] lg:text-[24px] text-foreground ">Hello , I&apos;m</p>
                            <h1 className="text-2xl lg:text-4xl xl:text-5xl text-foreground font-semibold  font-sans">
                                <TextChanger />
                            </h1>
                             <p className="text-xl lg:text-4xl font-serif  text-green-500">
                                MEP Engineer
                            </p>
                            <div className="flex gap-[20px] mt-[10px] lg:mt-0">
                                <a
                                    href={resumeUrl}
                                    download="Anandhu-CV.pdf"
                                    className="border-2 border-accent-foreground rounded-full px-5 py-2 text-foreground hover:text-green-500 transition-all"
                                >
                                    Download CV
                                </a>

                                <Link href="#contact" className="border-2 border-accent-foreground rounded-full px-5 py-2 text-foreground hover:text-green-500 transition-all">
                                    Contact Info
                                </Link>
                            </div>
                            <div className="flex gap-5 mt-[20px] lg:mt-[15px]">
                                <div className="flex gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/anandhu-unnimadhavan-b0b65314b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-accent-foreground hover:border-[#7cf03d] rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center px-2.5 py-2.5 hover:text-[#7cf03d]"
                                    >
                                        <i className="bx bxl-linkedin  text-2xl "></i>
                                    </a>

                                    <a
                                        href="https://github.com/Anandhu936"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-accent-foreground hover:border-[#7cf03d] rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center px-2.5 py-2.5 hover:text-[#7cf03d]"
                                    >
                                        <i className="bx bxl-github text-2xl "></i>
                                    </a>


                                    <a
                                        href="https://x.com/AnandhuDhoni"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-accent-foreground hover:border-[#7cf03d] rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center px-2.5 py-2.5 hover:text-[#7cf03d]"
                                    >
                                        <i className="bx bxl-twitter text-2xl "></i>
                                    </a>

                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </div >
        </>
    );
};

export default HeroSection;
