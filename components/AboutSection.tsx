"use client"
import React from "react";
import Image from "next/image";
import { Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
    return (
        <section
            id="about"
            className="flex justify-center pt-5 pb-5 lg:pt-10 lg:pb-20"
        >
            <div className="w-full px-[10%] rounded-lg">
                <h1 className="text-xl lg:text-3xl text-foreground font-semibold text-center">
                    ABOUT
                </h1>

                <div className="grid lg:grid-cols-2 gap-6 mt-8 lg:mt-20">
                    {/* Image Section */}
                    <motion.div className="flex justify-center"
                        initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.8, }}

                    >
                        <div className="relative w-60 h-60 lg:w-80 lg:h-80 border-2 border-black rounded-md  overflow-hidden">
                            <Image
                                src="/photos/my-pic.jpg"
                                alt="Photographer Profile"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className="flex flex-col justify-center"
                        initial={{ opacity: 0, y: 50 }} // start hidden & slightly below
                        whileInView={{ opacity: 1, y: 0 }} // fade in and rise up
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 0.8, // smooth speed
                            ease: "easeOut", // gentle easing
                            delay: 0.3, // short delay for better flow
                        }}
                    >
                        <div>
                            <div className="grid lg:grid-cols-2 gap-5 mb-8">
                                <div className="border border-accent-foreground rounded-lg p-5 text-center flex flex-col justify-center items-center">
                                    <p><Award /></p>
                                    <p className="font-bold">Experience</p>
                                    <p className="font-light">1+ years</p>
                                    <p className="font-light">Frontend Development</p>
                                </div>
                                <div className="border border-accent-foreground rounded-lg p-5 text-center flex flex-col justify-center items-center">
                                    <p><Users /></p>
                                    <p className="font-bold">Education</p>
                                    <p className="font-light">B-Tech</p>
                                    <p className="font-light">Mechanical Engineering</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm lg:text-lg font-light text-foreground text-justify font-montserrat">
                            I’m a passionate Frontend Developer with experience in building
                            responsive and user-friendly web applications. Proficient in
                            JavaScript, React.js, Next.js, and Tailwind CSS, I love crafting
                            clean and efficient code to enhance user experiences. Constantly
                            learning and evolving, I aim to create intuitive and visually
                            appealing digital solutions.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
