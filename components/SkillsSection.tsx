"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaPenNib, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiFramer, SiShadcnui, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#e44d26]" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#2965f1]" />, level: 85 },
    { name: "JavaScript", icon: <FaJs className="text-[#f7df1e]" />, level: 75 },
    { name: "React.js", icon: <FaReact className="text-[#61dafb]" />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" />, level: 80 },
    { name: "Node.js", icon: <FaNodeJs className="text-[#83cd29]" />, level: 70 },
    { name: "GitHub", icon: <FaGithub className="text-[#ffffff]" />, level: 90 },
    { name: "Framer Motion", icon: <SiFramer className="text-[#e900ff]" />, level: 65 },
    { name: "shadcn/ui", icon: <SiShadcnui className="text-[#8b5cf6]" />, level: 60 },
    { name: "UX/UI", icon: <FaPenNib className="text-[#00bcd4]" />, level: 85 },
];

const SkillsSection = () => {
    return (
        <section
            id="skills"
            className=" py-10 px-6 lg:px-20"
        >   <h1 className="text-xl lg:text-3xl text-accent-foreground font-semibold text-center mb-8">SKILLS</h1>
            <div className="w-full px-[10%]  mx-auto">
                {/* Title */}

                <div className="grid lg:grid-cols-2 gap-15 mb-8">
                    <div>
                        <motion.h2
                            className="text-2xl font-semibold  text-accent-foreground mb-4"
                            initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.8, }}
                        >
                            Professional Skills
                        </motion.h2>

                        <motion.p
                            className="text-accent-foreground mb-10 text-left"
                            initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.8, }}
                        >
                            I am proficient in modern web technologies and tools that help me create responsive, interactive, and visually appealing web applications. Here’s a snapshot of my technical skill set:
                        </motion.p>
                        {/* Skill Bars */}
                        <div className="space-y-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    viewport={{ once: false }}
                                >
                                    {/* Skill Header */}
                                    <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-200">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">{skill.icon}</span>
                                            <span className="font-medium">{skill.name}</span>
                                        </div>
                                        <span>{skill.level}%</span>
                                    </div>

                                    {/* Animated Progress Bar */}
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                        <motion.div
                                            className="bg-blue-600 h-2.5 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            viewport={{ once: false }}
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div className="flex  items-center"
                        initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.8, }}
                    >

                        <div className=" rounded-md overflow-hidden inline-block ">
                            <Image
                                src="/photos/about-1.jpg"
                                alt="Photographer Profile"
                                width={500} // image natural width
                                height={500} // image natural height
                                className="w-full h-auto rounded-md"
                                priority
                            />
                        </div>
                    </motion.div>


                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
