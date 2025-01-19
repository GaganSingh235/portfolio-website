"use client";
import React from "react";
import { motion } from "framer-motion";
import { Grid } from "./ui/Grid";

const descriptions = [
    "A resourceful, self-motivated and passionate individual looking to pursue a career in computer science and a knack for learning new concepts swiftly.",
    "A dedicated character with demonstrated commitment and strong organisational abilities shown through a multitude of high-level projects.",
    "My journey has been one of constant discovery, and I'm eager to take the next step.",
    "I want to immerse myself in cutting-edge research, expanding my skills, and applying my knowledge to create impactful solutions for the betterment of tomorrow.",
];

export const WhoAmI = () => {
    return (
        <div className="h-screen flex items-center justify-center" id="who-am-i">
            <div className="max-w-7xl w-full px-4">
                <h2 className="text-lg md:text-4xl text-white mx-auto font-bold pb-10">
                    Who Am I?
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2">
                        {descriptions.map((description, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
                            >
                                <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
                                    <Grid size={20} />
                                    <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                                        {description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};