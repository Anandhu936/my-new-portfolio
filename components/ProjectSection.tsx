"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Multi-Specialty Hospital MEP Layout",
    category: "MEP",
    description:
      "Integrated MEP coordination for a high-rise hospital building, featuring specialized medical gas systems, sterile zone HVAC, and critical power backups with 3D clash detection.",
    tools: ["Revit MEP", "Navisworks", "AutoCAD"],
    image: "/photos/Mep-all-project.jpg",
  },
  {
    id: 2,
    title: "Commercial Mall HVAC System Design",
    category: "HVAC",
    description:
      "Comprehensive design of a centralized chilled water system for a large-scale retail mall.",
    tools: ["HAP", "AutoCAD", "McQuay Pipe Sizer"],
    image: "/photos/hvac.jpg",
  },
  {
    id: 3,
    title: "Fire Protection System Design",
    category: "Fire-Fighting",
    description:
      "Hydraulic calculations and layout design for sprinkler and hydrant systems.",
    tools: ["Elite Fire", "AutoCAD", "NFPA"],
    image: "/photos/fire-fighting.jpg",
  },
  {
    id: 4,
    title: "Educational Institute Plumbing",
    category: "Plumbing",
    description:
      "Water supply and drainage design for campus with lab systems.",
    tools: ["AutoCAD", "Revit"],
    image: "/photos/plumbing.jpg",
  },
  {
    id: 5,
    title: "Home Electrical Design",
    category: "Electrical",
    description:
      "Electrical layout with smart lighting and backup systems.",
    tools: ["AutoCAD", "Dialux"],
    image: "/photos/electrical.jpg",
  },
];

const categories = ["All", "HVAC", "MEP", "Plumbing", "Electrical", "Fire-Fighting"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  // ESC key close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section   id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 rounded-xl overflow-hidden shadow group"
            >
              {/* Image */}
              <div
                className="relative aspect-video cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition">
                  <Maximize2 className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Preview"
                  width={1200}
                  height={800}
                  className="w-full rounded-lg"
                />

                {/* Close */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white dark:bg-slate-600 text-black dark:text-white p-2 rounded-full shadow"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;