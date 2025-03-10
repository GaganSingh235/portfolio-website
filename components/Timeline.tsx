"use client";
import React, { useEffect, useRef, useState } from "react";
import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import Image from "next/image";

export const Timeline = () => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-neutral-950 font-sans md:px-10 pt-10 md:pt-40"
            ref={containerRef}
            id="timeline"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-bold">
                    My Journey
                </h2>
                <p className="text-neutral-300">
                    I&apos;ve been working with computers for over half a decade. Here&apos;s a timeline of my journey.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                            <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                        </div>
                        <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 ">
                            {item.title}
                        </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                        height: heightTransform,
                        opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

const data = [
    {
        title: "Currently",
        content: (
            <div>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    I&apos;m creating a 3D candle designer for an international charity, L&apos;Arche, specifically in Zimbabwe.
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    They are a global community operating in over 35 countries, supporting people with and without intellectual disabilities to live, work, and grow together.
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    My web application involves customising a 3D rotatable candle, and to sending it&apos;s data for L&apos;Arche to manufacture and sell to fund their amazing work.
                </p>
                <div className="grid grid-cols-2 gap-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.1, duration: 1 }}
                >
                    <Image
                        src="/timeline/larche/login.png"
                        alt="L'Arche"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <Image
                        src="/timeline/larche/dashboard.png"
                        alt="L'Arche Zimbabwe"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <Image
                        src="/timeline/larche/canvas.png"
                        alt="3D Candle Designer"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    <Image
                        src="/timeline/larche/avatar.png"
                        alt="L'Arche Code"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                    />
                </motion.div>
                </div>
            </div>
        ),
    },
    {
        title: "Currently",
        content: (
            <div>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Don&apos;t think I&apos;m stopping; The frontiers most captivating to me now include AI, cybersecurity, and quantum computing.
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Learning, adaptive, evolving systems feels like science fiction come true; on the flip side, cybersecurity provides the challenge of not creating Skynet.
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    The problem of how Shor&apos;s Algorithm poses the threat of breaking cryptographic algorithms was kinda cool (and scary... of course).
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Q-bits representing simultaneous values by exploiting superposition astounded me about the potential for such powerful tech.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 1 }}
                    >
                        <Image
                            src="/timeline/research/ai-architecture.png"
                            alt="L'Arche"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <Image
                            src="/timeline/research/quantum-chip.jpg"
                            alt="L'Arche Zimbabwe"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <Image
                            src="/timeline/research/shors-algorithm.png"
                            alt="3D Candle Designer"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <Image
                            src="/timeline/research/cybersecurity.png"
                            alt="L'Arche Code"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                </div>
          </div>
        ),
    },
    {
        title: "2024",
        content: (
            <div>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Built a dynamic website for Noumed Life Sciences, based in Maidenhead, an international pharmaceutical company, from scratch.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 1 }}
                    >
                        <Image
                            src="/timeline/noumed/homepage.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <Image
                            src="/timeline/noumed/navigation.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <Image
                            src="/timeline/noumed/products.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <Image
                            src="/timeline/noumed/anticonvulsants.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                </div>
             </div>
        ),
    },
    {
        title: "2022-2024",
        content: (
            <div>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Moved onto web development. Became Proficient in HTML, CSS & JavaScript (top two).
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Found out using the big three only was pretty nooby. Came across React.JS and the divine power of dynamic websites (bottom left).
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Learned Next.JS and Sever Side Rendering, and let&apos;s just say, things got better (bottom right)
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 1 }}
                    >
                        <Image
                            src="/timeline/web-dev/feedback.png"
                            alt="feedback website"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <Image
                            src="/timeline/web-dev/kenobi.png"
                            alt="high ground threat"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <Image
                            src="/timeline/web-dev/hyperergo.png"
                            alt="home decor website"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <Image
                            src="/timeline/web-dev/portfolio.png"
                            alt="portfolio website"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>
        ),
    },
    {
        title: "2019-2021",
        content: (
            <div>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Finally, I started learning python, so what did I do after &quot;hello world&quot;? Make games of course, what can I say, I&apos;m a gamer.
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    I made everything from classic like space invaders and pong - to maze games, top-down shooters and 2D platformers.
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Seriously though, making games is probably one of the best ways to develop logical thinking, as how to code in general - certainly taught me a lot.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 1 }}
                    >
                        <Image
                            src="/timeline/python/hello-world.png"
                            alt="hello world"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <Image
                            src="/timeline/python/maze.png"
                            alt="maze game"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <Image
                            src="/timeline/python/top-down.png"
                            alt="top down shooter"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <Image
                            src="/timeline/python/platformer.png"
                            alt="platformer"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                </div>
          </div>
        ),
    },
    {
        title: "2017-2018",
        content: (
            <div>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Tinkered with basic software like Kodu & Scratch
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Made some simple games and picked up basic computational logic
                </p>
                <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Definitely not images from Google
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 1 }}
                    >
                        <Image
                            src="/timeline/scratch-kodu/kodu-game.png"
                            alt="kodu game"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <Image
                            src="/timeline/scratch-kodu/kodu-logic.jpg"
                            alt="kodu logic"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <Image
                            src="/timeline/scratch-kodu/scratch-logic.png"
                            alt="scratch logic"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <Image
                            src="/timeline/scratch-kodu/scratch-game.png"
                            alt="scratch game"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-all duration-200 hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>
        ),
    },
];
