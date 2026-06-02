"use client";
import { navLinks } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/anandhu-unnimadhavan-b0b65314b/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Anandhu936", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/AnandhuDhoni", label: "Twitter" },
];

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const close = () => setIsOpen(false);

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.05 + i * 0.07, type: "spring", stiffness: 200, damping: 22 },
        }),
        exit: (i: number) => ({
            opacity: 0,
            y: -20,
            transition: { delay: i * 0.03, duration: 0.18 },
        }),
    };

    return (
        <div className="md:hidden">
            {/* ─── Hamburger button ─── */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="relative z-[9999] flex flex-col justify-center items-center w-10 h-10 rounded-lg"
            >
                <motion.span
                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block w-6 h-0.5 rounded-full mb-1.5"
                    style={{ background: "var(--foreground)" }}
                />
                <motion.span
                    animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block w-6 h-0.5 rounded-full mb-1.5"
                    style={{ background: "var(--foreground)" }}
                />
                <motion.span
                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block w-6 h-0.5 rounded-full"
                    style={{ background: "var(--foreground)" }}
                />
            </button>

            {/* ─── Full-page overlay menu (portal so it's above ALL stacking contexts) ─── */}
            {mounted && createPortal(
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="fullpage-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] flex flex-col"
                        style={{ background: "var(--background)" }}
                    >
                        {/* Top bar inside menu */}
                        <div
                            className="flex items-center justify-between px-6 h-20 border-b flex-shrink-0"
                            style={{ borderColor: "var(--border)" }}
                        >
                            <span className="font-clicker-script text-2xl" style={{ color: "var(--foreground)" }}>
                                Portfolio
                            </span>
                            {/* X close button */}
                            <button
                                onClick={close}
                                aria-label="Close menu"
                                className="flex flex-col justify-center items-center w-10 h-10 rounded-lg"
                            >
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 45 }}
                                    className="block w-6 h-0.5 rounded-full mb-[-1px]"
                                    style={{ background: "var(--primary)" }}
                                />
                                <motion.span
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: -45 }}
                                    className="block w-6 h-0.5 rounded-full"
                                    style={{ background: "var(--primary)" }}
                                />
                            </button>
                        </div>

                        {/* Nav links — centered vertically */}
                        <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
                            {navLinks.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    custom={i}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={close}
                                        className="group flex items-center gap-5 py-4 border-b"
                                        style={{ borderColor: "var(--border)" }}
                                    >
                                        {/* Number */}
                                        <span
                                            className="text-sm font-bold tabular-nums w-7 shrink-0"
                                            style={{ color: "var(--primary)" }}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>

                                        {/* Label */}
                                        <span
                                            className="font-montserrat font-bold text-3xl tracking-tight transition-colors duration-200 group-hover:text-primary"
                                            style={{ color: "var(--foreground)" }}
                                        >
                                            {item.name}
                                        </span>

                                        {/* Arrow  */}
                                        <span
                                            className="ml-auto text-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-1"
                                            style={{ color: "var(--primary)" }}
                                        >
                                            →
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Bottom — social + copyright */}
                        <div
                            className="px-8 py-8 border-t flex items-center justify-between flex-shrink-0"
                            style={{ borderColor: "var(--border)" }}
                        >
                            <p
                                className="text-xs font-montserrat uppercase tracking-widest"
                                style={{ color: "var(--muted-foreground)" }}
                            >
                                Connect
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 hover:scale-110"
                                        style={{
                                            borderColor: "var(--border)",
                                            color: "var(--muted-foreground)",
                                        }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
                                            (e.currentTarget as HTMLElement).style.color = "var(--primary)";
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                                            (e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)";
                                        }}
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            , document.body)}
        </div>
    );
}