"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";

const ContactSection: React.FC = () => {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "0472fe5c-21ba-4dc1-b7d2-c5e0d4a3f4b1");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                form.reset();
            } else {
                console.error("Error", data);
                setResult(data.message || "Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Network Error:", error);
            setResult("Something went wrong. Please try again later.");
        }
    };

    return (
        <div id="contact" className="w-full px-[10%] scroll-mt-20 mt-10">
            <h1 className="text-center  text-xl lg:text-3xl text-foreground mb-20">
                CONTACT ME
            </h1>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                    delay: 0.8,
                }}
            >
                <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-8">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            className="flex-1 p-3 outline-neutral-50 border-[0.5px] border-gray-400 rounded-md  "
                            name="name"
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                            className="flex-1 p-3 outline-neutral-50 border-[0.5px] border-gray-400 rounded-md "
                            name="email"
                        />
                    </div>

                    <textarea
                        rows={6}
                        placeholder="Enter your message"
                        required
                        className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md  mb-6"
                        name="message"
                    ></textarea>

                    <button
                        type="submit"
                        className="py-3 px-8 w-max flex items-center cursor-pointer justify-between gap-2  border-[0.5px] border-foreground text-foreground rounded-full mx-auto hover:text-green-500 duration-500"
                    >
                        Submit Now <BiRightArrowAlt size={20} className="text-foreground" />
                    </button>

                    <p className="mt-4 text-center text-white">{result}</p>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactSection;
