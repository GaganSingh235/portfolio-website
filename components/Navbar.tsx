"use client";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React, { useState, ReactNode, useEffect } from "react";
import { Logo } from "./ui/Logo";

const navItems = [
    {
        name: "About Me",
        link: "#",
        children: [
            {
                name: "Who Am I?",
                link: "#who-am-i",
            },
            {
                name: "My journey",
                link: "#timeline",
            },
            {
                name: "Beyond Academics",
                link: "#beyond-academics",
            }
        ],
    },
    {
        name: "My CV",
        link: "#",
        children: [
            {
                name: "Download my CV",
                link: "#CV",
            },
        ],
    },
];

export function Navbar() {
    return (
        <div className="w-full mt-3">
            <DesktopNav />
            <MobileNav navItems={navItems} />
        </div>
    );
}

const DesktopNav = () => {
    const [active, setActive] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0 ? true : false)
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className={`hidden lg:flex flex-row self-start items-center justify-between py-4 mx-auto px-4 fixed top-0 left-0 right-0 z-[100] ${
                isScrolled ? "bg-neutral-950 border-b border-neutral-800 shadow-2xl" : "bg-transparent border-none shadow-none"
            }`}
        >
            <Logo type="full" />
            <div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
                <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="About Me">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#who-am-i">Who Am I?</HoveredLink>
                            <HoveredLink href="#timeline">My Journey</HoveredLink>
                            <HoveredLink href="#beyond-academics">Beyond Academics</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="My CV">
                        <div className="text-sm grid gap-10 p-4">
                            <ProductItem
                                title="Curriculum Vitae"
                                href="#CV"
                                src="/CV/page1.webp"
                                description="Or is it a resumé? Whatever it is, download it here!"
                            />
                        </div>
                    </MenuItem>
                </Menu>
            </div>
            <button
                className="hidden md:block px-8 py-2 text-sm font-bold rounded-lg bg-white text-black transition-all duration-300 transform hover:bg-indigo-700 hover:text-white hover:scale-105 active:scale-95 active:bg-gray-800 active:text-white"
                onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                Get in Touch
            </button>
        </motion.div>
    );
};

const MobileNav = ({
    navItems,
}: {
    navItems: {
        name: string;
        link: string;
        children?: {
            name: string;
            link: string;
        }[];
    }[];
}) => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsNavbarOpen(open ? true : false);
    }, [open]);

    return (
        <motion.div
            key={String(open)}
            className={`flex flex-col lg:hidden w-full justify-between items-center fixed top-0 left-0 right-0 z-[100] px-4 py-4 ${
                isNavbarOpen || isScrolled
                    ? "bg-neutral-950 border-b border-neutral-800 shadow-2xl"
                    : "bg-transparent border-none shadow-none"
            }`}
        >
            <div className="flex flex-row justify-between items-center w-full">
                <Logo type="short" />
                {open ? (
                    <IconX
                        className="text-white"
                        onClick={() => setOpen(!open)}
                    />
                ) : (
                    <IconMenu2
                        className="text-white"
                        onClick={() => setOpen(!open)}
                    />
                )}
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex rounded-lg absolute top-20 bg-neutral-950 inset-x-0 z-20 flex-col items-start justify-start gap-4 w-full px-4 py-8 border-b border-neutral-800"
                    >
                    {navItems.map((navItem, idx) => (
                        <div key={`navItem-${idx}`} className="w-full">
                            {navItem.children ? (
                                <MobileChildNavItems navItem={navItem} />
                            ) : (
                                <Link
                                    href={navItem.link || "#"}
                                    className="relative text-neutral-300"
                                >
                                    <motion.span className="block">{navItem.name}</motion.span>
                                </Link>
                            )}
                        </div>
                    ))}
                    <button
                        className="px-8 py-2 w-full rounded-lg bg-white text-black font-semibold"
                        onClick={() => {
                            const element = document.getElementById("contact");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        Get in Touch
                    </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const MobileChildNavItems = ({
    navItem,
}: {
    navItem: {
        name: string;
        link: string;
        children?: {
            name: string;
            link: string
        }[]
    };
}) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div className="overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="relative text-neutral-300 flex w-full justify-between"
            >
                <motion.span className="block">{navItem.name}</motion.span>
                <IconChevronDown className="text-neutral-300" />
            </button>
            <AnimatePresence>
                {open && navItem.children && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0 }}
                        className="pl-4"
                    >
                        {navItem.children.map((child, childIdx) => (
                            <Link
                                key={`child-${childIdx}`}
                                href={child.link}
                                className="relative text-neutral-300"
                            >
                                <motion.span className="block">{child.name}</motion.span>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
 
const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};
 
    export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative ">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-neutral-300 hover:opacity-[0.9] "
            >
                {item}
            </motion.p>

            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_0.4rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <div className="">
                                <motion.div
                                    transition={transition}
                                    layoutId="active"
                                    className="bg-neutral-800 mt-4 backdrop-blur-sm rounded-2xl overflow-hidden  shadow-xl"
                                >
                                    <motion.div
                                        layout
                                        className="w-max h-full p-4"
                                    >
                                        {children}
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative bg-transparent flex justify-center space-x-4 px-4 py-3 "
        >
            {children}
        </nav>
    );
};
 
export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex gap-4">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-base font-black mb-1 text-white">
                    {title}
                </h4>
                <p className="text-sm max-w-[10rem] text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>
    );
};


export const HoveredLink = ({
    children,
    ...rest
}: LinkProps & { children: ReactNode }) => {
    return (
        <Link
            {...rest}
            className="text-neutral-200 hover:text-neutral-400"
        >
            {children}
        </Link>
    );
};