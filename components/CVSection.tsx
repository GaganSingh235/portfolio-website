"use client";
import Image from "next/image";
import React from "react";
import { IconDownload } from '@tabler/icons-react'
import { motion } from "framer-motion";

export function CVSection() {
    return (
        <div className="h-screen flex items-center justify-center">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 justify-start relative z-20 max-w-7xl mx-auto bg-gradient-to-br from-neutral-900 to-gray-900 sm:rounded-2xl" id="CV">
                <div className="absolute -top-px right-10 md:right-60 bg-gradient-to-r from-transparent via-purple-500 h-px to-transparent w-1/2 z-30" />
                <div className="absolute -top-px right-10 md:right-40 bg-gradient-to-r from-transparent via-indigo-500 h-px to-transparent w-1/2 z-30" />
                <div className="absolute -top-px right-10 md:right-80 bg-gradient-to-r from-transparent via-sky-500 h-px to-transparent w-1/2 z-30" />

                <div
                    className="absolute inset-0 w-full h-full opacity-10 bg-noise [mask-image:radial-gradient(#fff,transparent,75%)]"
                    style={{
                        backgroundImage: "url(/noise.webp)",
                        backgroundSize: "30%",
                    }}
                />

                <div className="relative sm:rounded-2xl overflow-hidden px-6 md:px-8">
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
                        style={{
                            mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
                        }}
                    />

                    <div className="relative px-0 py-10 sm:px-10 sm:pt-16 sm:pb-10 lg:px-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.1, duration: 1 }}
                        >
                            <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
                                Download my professional CV
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 1 }}
                        >
                            <p className="mt-8 max-w-[26rem] text-left text-base/6 text-neutral-200">
                                Want to learn more about my skills, experience, and accomplishments? Warning: this may cause intense and/or sudden inspiration - don&apos;t say I didn&apos;t tell you...
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            <a
                                href="/CV/CV.pdf"
                                download="Gagan Singh CV.pdf"
                                className="mt-8 flex w-48 space-x-2 items-center font-semibold px-4 py-2 rounded-lg bg-indigo-700 text-white transition-all duration-300 transform hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-gray-800 active:text-white"
                            >
                                <span className="italic">Curriculum Vitae</span>
                                <IconDownload className="h-5 w-5" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                <div className="relative h-full flex gap-4 w-full overflow-hidden max-h-[200px] md:max-h-[400px] px-4 items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <Image
                            src="/CV/page1.webp"
                            alt="cta-1"
                            width={300}
                            height={500}
                            className="h-full object-cover object-top rounded-lg md:rounded-none mt-4 md:mt-0 brightness-75"
                            style={{ maxHeight: '100%'}}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <Image
                            src="/CV/page2.webp"
                            alt="cta-1"
                            width={300}
                            height={500}
                            className="h-full object-cover object-top mt-10 rounded-lg brightness-75"
                            style={{ maxHeight: '100%'}}
                        />
                    </motion.div>
                </div>

                <div className="absolute -bottom-px right-10 md:right-60 bg-gradient-to-r from-transparent via-purple-500 h-px to-transparent w-1/2 z-30" />
                <div className="absolute -bottom-px right-10 md:right-40 bg-gradient-to-r from-transparent via-indigo-500 h-px to-transparent w-1/2 z-30" />
                <div className="absolute -bottom-px right-10 md:right-80 bg-gradient-to-r from-transparent via-sky-500 h-px to-transparent w-1/2 z-30" />
            </section>
        </div>
    );
}
