"use client";
import React from "react";
import { FeatureCard } from "./ui/Grid";
import { motion } from "framer-motion";

export function BeyondAcademics() {
    return (
        <div className="mt-40 h-full" id="beyond-academics">
            <div className="max-w-7xl mx-auto pl-5 pb-20">
                <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-bold">
                    Beyond Academics
                </h2>
                <p className="text-neutral-300">
                    No one likes a boring academic who doesn&apos;t do anything else in life. Luckily, I&apos;m not one.
                </p>
            </div>
            <div className="h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
                    {grid.map(({ title, description }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
                        >
                            <FeatureCard key={title} title={title} description={description} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const grid = [
    {
        title: "UK-RAS STEM Robotics Competition Winners",
        description: "Me and my team were to design rovers to navigate through various Martian terrains as efficient as possible. We won against schools from across the country. We also got a pet rabbit robot.",
    },
    {
        title: "Charity Shop Volunteer",
        description: "Volunteered as a charity shop assistant for over half a year. I worked with others, welcomed & solcialised with customers, handled cash, allocated stock and research product prices.",
    },
    {
        title: "Pharmaceutical Packaging Assistant",
        description: "Manually packed pharmaceutical products within a GMP environment and timelines. Worked with colleagues within a team listening to requirements and communicating notes on shift changeover.",
    },
    {
        title: "Instruments & Music",
        description: "Unofficial grade 5 pianist. I love playing exotic instruments such as the Dilruba and Tabla. I also have experience with creating, editing and uploading audio using DAWs and other software.",
    },
    {
        title: "DofE Silver Award",
        description: "3 Days of expedition in New Forest. 12 months of learning a skill (piano). 3 months of physical discipline (swimming). 6 months of volunteering (charity shop).",
    },
    {
        title: "Academy Level Swimmer",
        description: "I'm an academy level swimmer at Hillingdon Leisure Centre and have been swimming there for a decade. I've also been taught rescue swimming and basic lifeguarding.",
    },
    {
        title: "eDX Harvard CS50 Course",
        description: "I'm currently undergoing the completion of edX Harvard's CS50 Computer Science Course.",
    },
    {
        title: "Languages",
        description: "As you can tell, I speak English, first language actually. But did you also know, that I can speak Punjabi (fluently) and Japanese (basic-intermediate)?",
    },
];