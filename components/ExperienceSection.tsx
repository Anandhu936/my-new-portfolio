"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "MEP / HVAC Engineering Trainee",
      company: "Axions Institute",
      location: "Calicut, Kerala",
      period: "2026 - Present", // Placeholder dates
      description: "Intensive training and hands-on experience in comprehensive MEP design and project execution.",
      responsibilities: [
        "Performed accurate heat load calculations using HAP for various building types.",
        "Designed and drafted efficient HVAC duct layouts using AutoCAD.",
        "Created detailed 3D models and coordinated MEP systems using Revit MEP.",
        "Gained practical knowledge in plumbing and fundamental electrical design integration.",
        "Participated in site visits and learned project coordination standards."
      ]
    }
    // Add more experiences here if needed
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience & Training</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-700"></div>

              <div className={`md:flex items-center justify-between w-full mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -ml-2.25 md:ml-0 mt-1.5 md:mt-0 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 z-10 shadow-sm"></div>

                <div className="w-full md:w-5/12 bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow relative">
                  {/* Arrow pointing to timeline */}
                  <div className={`hidden md:block absolute top-6 w-4 h-4 bg-slate-50 dark:bg-slate-800/50 border-t border-l border-slate-100 dark:border-slate-800 transform ${index % 2 === 0 ? '-left-2 -rotate-45' : '-right-2 rotate-135'}`}></div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                    <span className="flex items-center"><Briefcase size={16} className="mr-1" /> {exp.company}</span>
                    <span className="flex items-center"><MapPin size={16} className="mr-1" /> {exp.location}</span>
                    <span className="flex items-center text-primary-600 dark:text-primary-400"><Calendar size={16} className="mr-1" /> {exp.period}</span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 font-medium">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={16} className="text-primary-500 mr-2 mt-1 shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400 text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
