"use client";
import React, { useState } from "react";
import { IconMailFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { Grid } from "./ui/Grid";

export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const data = {
            name,
            email,
            company,
            message,
        };
    
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                alert('Mission accomplished! Message has left the building!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Holy Smokes! Something went wrong...');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Holy Smokes! - Something went wrong...');
        }
    };

    return (
        <div className="w-screen flex justify-center items-center mt-10 bg-neutral-950" id="contact">
            <div className="grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2">
                <div className="relative flex flex-col overflow-hidden items-start">
                    <div className="flex items-start justify-start">
                        <div className="flex items-center justify-center overflow-hidden">
                            <IconMailFilled className="h-6 w-6 text-blue-500" />
                        </div>
                    </div>
                    <h2 className="mt-9 bg-gradient-to-b bg-clip-text text-left text-xl font-bold text-transparent from-neutral-200 to-neutral-300 md:text-3xl lg:text-5xl">
                        Get in touch
                    </h2>
                    <p className="mt-8 max-w-lg text-base text-neutral-400 md:text-left">
                        Email: The classic. Drop me a line—I promise I&apos;ll reply faster than a bot but slower than instant noodles cook.
                    </p>
                    <p className="mt-8 max-w-lg text-base text-neutral-400 md:text-left">
                        Carrier Pigeon: A bit outdated, but hey, I&apos;ll keep an eye on the sky.
                    </p>
                    <p className="mt-8 max-w-lg text-base text-neutral-400 md:text-left">
                        Smoke Signals: Not recommended. I might mistake it for a barbeque invite.
                    </p>

                    <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
                        <p className="text-sm text-neutral-400">info@gagansingh.co.uk</p>
                        <div className="h-1 w-1 rounded-full bg-neutral-400" />
                        <p className="text-sm text-neutral-400">Homing Pigeon (A magic one that knows where I live)</p>
                    </div>
                    <div className="relative mt-20 flex w-[600px] items-center justify-center -translate-x-32 md:-translate-x-10">
                        <div className="right-1 top-0" />
                        <Pin className="right-1 top-0" />
                            <Image
                                src="/world-map.svg"
                                width={500}
                                height={500}
                                alt="world map"
                                className="[transform:rotateX(45deg)_translateZ(0px)] invert filter"
                            />
                    </div>
                </div>
                <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b p-4 from-neutral-900 to-neutral-950 sm:p-10">
                    <Grid size={20} />
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="relative z-20 mb-4 w-full">
                            <label className="mb-2 inline-block text-sm font-medium text-neutral-300" htmlFor="name">
                                Full name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your full name… or your superhero alias."
                                className="h-10 w-full rounded-md border border-transparent pl-4 text-sm placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none border-neutral-800 bg-neutral-800 text-white"
                                required
                            />
                        </div>
                        <div className="relative z-20 mb-4 w-full">
                            <label className="mb-2 inline-block text-sm font-medium text-neutral-300" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Where can I slide into your inbox?"
                                className="h-10 w-full rounded-md border border-transparent pl-4 text-sm placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none border-neutral-800 bg-neutral-800 text-white"
                                required
                            />
                        </div>
                        <div className="relative z-20 mb-4 w-full">
                            <label className="mb-2 inline-block text-sm font-medium text-neutral-300" htmlFor="company">
                                Company
                            </label>
                            <input
                                id="company"
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder="Or just 'Freelancer Extraordinaire'."
                                className="h-10 w-full rounded-md border border-transparent pl-4 text-sm placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none border-neutral-800 bg-neutral-800 text-white"
                            />
                        </div>
                        <div className="relative z-20 mb-4 w-full">
                            <label className="mb-2 inline-block text-sm font-medium text-neutral-300" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Tell me everything (or just the important stuff)."
                                className="w-full rounded-md border border-transparent pl-4 pt-4 text-sm placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none border-neutral-800 bg-neutral-800 text-white"
                                required
                            />
                        </div>
                        <button type="submit" className="flex space-x-2 items-center font-semibold px-4 py-2 rounded-lg bg-white text-black transition-all duration-300 transform hover:bg-indigo-700 hover:text-white hover:scale-105 active:scale-95 active:bg-gray-800 active:text-white"                    >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const Pin = ({ className }: { className?: string }) => {
    return (
        <motion.div
            style={{
                transform: "translateZ(1px)",
            }}
            className={cn(
                "pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500",
                className,
            )}
        >
            <div className="h-full w-full">
                <div className="absolute inset-x-0 -top-10 left-[28px] z-20 w-fit rounded-lg px-2 py-1 text-xs font-normal bg-neutral-800 text-white">
                    I&apos;m over here! 👋
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500" />
                </div>

                <div
                    style={{
                        perspective: "800px",
                        transform: "rotateX(70deg) translateZ(0px)",
                    }}
                    className="absolute left-20 top-12 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
                >
                    {Array.from({ length: 3 }).map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                scale: 0,
                                x: "-50%",
                                y: "-50%",
                            }}
                            animate={{
                                opacity: [0, 1, 0.5, 0],
                                scale: 1,
                                z: 0,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: index * 2,
                            }}
                            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-sky-500/[0.2]"
                        />
                    ))}
                </div>

                <>
                    <motion.div className="absolute -top-8 left-[81px] h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500 blur-[2px]" />
                    <motion.div className="absolute -top-8 left-[81px] h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500" />
                    <motion.div className="absolute top-12 left-20 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-blue-600 blur-[3px]" />
                    <motion.div className="absolute top-12 left-20 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-blue-300" />
                </>
            </div>
        </motion.div>
    );
};

export const FeatureIconContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative h-14 w-14 rounded-md bg-gradient-to-b p-[4px] from-neutral-800 to-neutral-950",
                className,
            )}
        >
            <div className={cn("relative z-20 h-full w-full rounded-[5px] bg-neutral-800", className)}>
                {children}
            </div>

            <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg" />
            <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 mx-auto w-[60%] bg-gradient-to-r from-transparent via-blue-600 to-transparent h-[8px] blur-sm" />
        </div>
    );
};
