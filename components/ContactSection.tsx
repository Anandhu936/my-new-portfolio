"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-200 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you have a specific project in mind, need consultation for MEP systems, or just want to say hello, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-8 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                <p className="mt-1 text-gray-600 dark:text-gray-400">anandhunair777@example.com</p>
                <a href="mailto:email@example.com" className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400 mt-2 inline-block text-sm font-medium">
                  Send a message
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
                <p className="mt-1 text-gray-600 dark:text-gray-400">+91 99467 32936</p>
              
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Kozhikode, Kerala, India</p>
                <p className="text-gray-500 dark:text-gray-500 mt-1 text-sm">Available for relocation</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white resize-none"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-700 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
