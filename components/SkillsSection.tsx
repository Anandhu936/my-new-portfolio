"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Droplets, Fan } from "lucide-react";

const technicalSkills = [
  { name: "AutoCAD", level: 90 },
  { name: "Revit MEP", level: 85 },
  { name: "HAP (Hourly Analysis Program)", level: 80 },
  { name: "HVAC Design", level: 95 },
  { name: "Plumbing Design", level: 80 },
  { name: "Electrical Basics", level: 70 },
  { name: "Heat Load Calculation", level: 90 },
  { name: "Duct Design", level: 85 },
];

const serviceAreas = [
  {
    title: "HVAC Systems",
    description: "Designing heating, ventilation, and air conditioning systems for optimal comfort and energy efficiency.",
    icon: Fan,
  },
  {
    title: "Plumbing Layouts",
    description: "Creating comprehensive water supply and drainage networks for residential and commercial buildings.",
    icon: Droplets,
  },
  {
    title: "Electrical Basics",
    description: "Planning foundational electrical layouts, ensuring safety and compliance with standards.",
    icon: Zap,
  },
  {
    title: "MEP Coordination",
    description: "Integrating mechanical, electrical, and plumbing systems effectively to avoid clashes using Revit and AutoCAD.",
    icon: Wrench,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-10 lg:py-20 bg-gray-200 dark:bg-slate-950 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and service capabilities in the MEP sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Technical Proficiency</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-primary h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Core Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceAreas.map((area) => (
                <motion.div
                  key={area.title}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4">
                    <area.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{area.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
