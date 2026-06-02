"use client";

import { motion } from "framer-motion";
import { CheckCircle, Loader2, Mail, MapPin, Phone, Send, XCircle } from "lucide-react";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setFormState("success");
      setForm({ name: "", email: "", subject: "", message: "" });

      // Reset back to idle after 5 seconds
      setTimeout(() => setFormState("idle"), 5000);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to send message.";
      setErrorMsg(message);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
            className="flex flex-col justify-center gap-8 bg-card p-8 rounded-2xl border border-border"
          >
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold text-foreground">Email</h4>
                <p className="mt-1 text-muted-foreground">anandhunair777@gmail.com</p>
                <a
                  href="mailto:anandhunair777@gmail.com"
                  className="text-primary hover:text-primary/80 mt-2 inline-block text-sm font-medium"
                >
                  Send a message
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-12 w-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold text-foreground">Phone</h4>
                <p className="mt-1 text-muted-foreground">+91 99467 32936</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-12 w-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold text-foreground">Location</h4>
                <p className="mt-1 text-muted-foreground">Kozhikode, Kerala, India</p>
                <p className="text-muted-foreground/70 mt-1 text-sm">Available for relocation</p>
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
            {/* Success Banner */}
            {formState === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
              >
                <CheckCircle className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">
                  Message sent! I&apos;ll get back to you soon.
                </span>
              </motion.div>
            )}

            {/* Error Banner */}
            {formState === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
              >
                <XCircle className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">
                  {errorMsg || "Failed to send. Please try again."}
                </span>
              </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 block w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                    placeholder="John Doe"
                    required
                    disabled={formState === "loading"}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 block w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                    placeholder="john@example.com"
                    required
                    disabled={formState === "loading"}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-foreground placeholder:text-muted-foreground/50"
                  placeholder="Project Inquiry"
                  required
                  disabled={formState === "loading"}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-foreground placeholder:text-muted-foreground/50 resize-none"
                  placeholder="How can I help you?"
                  required
                  disabled={formState === "loading"}
                />
              </div>
              <button
                type="submit"
                disabled={formState === "loading" || formState === "success"}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-700 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : formState === "success" ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
