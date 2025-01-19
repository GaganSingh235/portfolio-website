"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ImagesGrid } from "./ui/ImageGrid";
import { FeaturedImages } from "./ui/FeaturedImages";

export function Hero() {
    return (
        <div className="w-full bg-neutral-950 bg-grid-white/[0.05] relative overflow-hidden pt-20" id="home">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                <Navbar />
                <div className="relative pb-4 flex flex-col items-start justify-center overflow-hidden px-8 md:px-8">
                    <div className="relative flex flex-col items-start mt-20 lg:pl-20">
                        <h1 className="text-3xl md:-ml-2 md:text-6xl lg:text-9xl tracking-tight font-bold mt-4 mb-8 text-white max-w-8xl">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1, duration: 1 }}
                            >
                                Hey.{" "}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                I&apos;m{" "}
                                <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-indigo-700 to-indigo-600 z-10">
                                    Gagan Singh
                                </span>{" "}
                            </motion.span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline-block h-14 w-14 md:h-28 md:w-28 stroke-indigo-500 stroke-[1px]"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <motion.path
                                        initial={{
                                            pathLength: 0,
                                            fill: "#a5b4fc",
                                            opacity: 0,
                                        }}
                                        animate={{
                                            pathLength: 1,
                                            fill: "#a5b4fc",
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "linear",
                                            repeatDelay: 0.5,
                                        }}
                                        d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"
                                    />
                                </svg>
                            </span>
                        </h1>
                        <h2 className="relative md:text-xl text-zinc-200 tracking-wide mb-12 mt-8 max-w-2xl">
                            I&apos;m an 18-year-old student pursuing a career in computer science. <br /> Uh-oh, I&apos;m running out of copy, uhh... Lorem Ispum?
                        </h2>
                    </div>

                    <div className="relative z-10 group mb-10">
                        <button
                            className="md:ml-20 px-8 py-2 rounded-lg bg-white text-black font-semibold text-xl transition-all duration-300 transform hover:bg-indigo-700 hover:text-white hover:scale-105 active:scale-95 active:bg-gray-800 active:text-white"
                            onClick={() => {
                            const element = document.getElementById("who-am-i");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                            }}
                        >
                            About Me
                        </button>
                    </div>
                    
                    <FeaturedImages images={logos} imageSize={28} className="md:ml-20"/>
                </div>
            <ImagesGrid images={imageGrid} />
        </div>
    );
}

const imageGrid = [
    {
        src: "/hero-images/platformer.png",
        className: "translate-y-10",
    },
    {
        src: "/hero-images/hyperergo.png",
        className: "translate-y-20",
    },

    {
        src: "/hero-images/candle-designer.png",
        className: "translate-y-4",
    },
    {
        src: "/hero-images/mustafar-duel.png",
        className: "translate-y-10",
    },
    {
        src: "/hero-images/noumed.png",
        className: "translate-y-20",
    },
];

const logos = [
    {
        name: "HTML",
        designation: "The Web's Skeleton Crew",
        image: "/logos/HTML.png",
    },
    {
        name: "CSS",
        designation: "Style. Design. Slay.",
        image: "/logos/CSS.png",
    },
    {
        name: "Tailwind",
        designation: "Because writing actual CSS is so 1000 B.C.E.",
        image: "/logos/Tailwind.png",
    },
    {
        name: "JavasScript",
        designation: "Making websites alive (and sometimes breaking them)",
        image: "logos/JavaScript.svg",
    },
    {
        name: "TypeScript",
        designation: "JavaScript, but with a trust fund and a safety net",
        image: "/logos/TypeScript.svg",
    },
    {
        name: "React.JS",
        designation: "The library your friend swears changed their life",
        image: "/logos/React.png",
    },
    {
        name: "Next.JS",
        designation: "React's overachieving sibling",
        image: "/logos/Next.png",
    },
    {
        name: "Three.JS",
        designation: "2D's adventerous cousin",
        image: "/logos/Three.png",
    },
    {
        name: "Motion",
        designation: "Animations that vibe",
        image: "/logos/Motion.png",
    },
    {
        name: "Python",
        designation: "Not used here, but I had to flex my generalist skills",
        image: "/logos/Python.png",
    },
    {
        name: "Figma",
        designation: "The place where I design, but never gets implemented",
        image: "/logos/Figma.png",
    },
];
