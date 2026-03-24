"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Building, GraduationCap } from 'lucide-react';
import Image from "next/image";

interface Highlight {
  icon: React.ReactNode;
  title: string;
}

const About: React.FC = () => {
  const highlights: Highlight[] = [
    { 
      icon: <User className="text-primary-500" size={24} />, 
      title: "Mechanical Engineering Graduate" 
    },
    { 
      icon: <Building className="text-primary-500" size={24} />, 
      title: "HVAC & MEP Design Specialist" 
    },
    { 
      icon: <GraduationCap className="text-primary-500" size={24} />, 
      title: "Certified in Revit & AutoCAD" 
    },
  ];

  return (
    <section
      id="about"
      className=" py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Image/Portrait Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-4/5 bg-slate-200 dark:bg-slate-800 relative group flex items-center justify-center">
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent z-10" />

                <Image
                  src="/photos/my-photo.jpg"
                  alt="Photographer Profile"
                  fill
                  priority
                />

                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-1">ANANDHU U</h3>
                  <p className="text-slate-200">MEP Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Professional Overview
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a dedicated Mechanical Engineering graduate with a strong
              specialization in MEP (Mechanical, Electrical, and Plumbing)
              engineering. My passion lies in creating efficient, sustainable,
              and innovative building systems that optimize performance and
              minimize environmental impact.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              My core objective is to leverage my comprehensive training and
              technical skills in HVAC design, heat load calculation, duct
              layout, and system modeling to contribute effectively to dynamic
              engineering projects and progressive organizations.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800"
                >
                  {item.icon}
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Career Objective Box */}
            <div className="bg-primary-50 dark:bg-primary-900/10 border-l-4 border-primary-500 p-6 rounded-r-lg">
              <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-2">
                <CheckCircle2 className="text-primary-500" size={20} /> Career
                Objective
              </h4>
              <p className="text-slate-700 dark:text-slate-300 italic">
                &quot;To secure a challenging position in a reputable
                engineering firm where I can apply my expertise in MEP and HVAC
                design to deliver cost-effective and energy-efficient building
                solutions, while continuing to grow professionally.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;