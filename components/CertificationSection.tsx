"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileBadge2 } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "Revit MEP Professional Certification",
      issuer: "Axions Institute",
      icon: <FileBadge2 size={32} className="text-emerald-500" />,
      color: "from-emerald-500/20 to-emerald-500/5"
    },
    {
      title: "Advanced HVAC Systems Design",
      issuer: "Axions Institute",
      icon: <Award size={32} className="text-blue-500" />,
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      title: "AutoCAD 2D/3D Drafting",
      issuer: "Axions Institute",
      icon: <FileBadge2 size={32} className="text-primary-500" />,
      color: "from-primary-500/20 to-primary-500/5"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Licenses & Certifications</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${cert.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">{cert.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
