"use client";
import React from "react";
import { Logo } from "./ui/Logo";

export function Footer() {
    const pages = [
        {
            title: "Who Am I?",
            href: "who-am-i",
        },
        {
            title: "My Journey",
            href: "timeline",
        },
        {
            title: "Beyond Academics",
            href: "beyond-academics",
        },
        {
            title: "My CV",
            href: "CV",
        },
    ];

    const socials = [
        {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/gagan-singh-6ba207324",
        },
        {
            title: "Contact Me",
            href: "contact",
        }
    ];

    return (
        <div className="border-t border-white/[0.1] px-8 py-20 bg-neutral-950 w-full relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start  md:px-8">
                <div>
                    <div className="mr-0 md:mr-4 md:flex mb-4">
                        <Logo type="short" />
                    </div>
                    <div className="mt-8 ml-2 max-w-xl">
                        &copy; copyright 2025 Gagan Singh. All rights reserved. <br /><br /> Your name, email, and message are collected respond to inquiries. CV downloads aren&apos;t tracked, nor is your data shared. Contact info@gagansingh.co.uk for any concerns.
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-20 md:gap-40 items-start mt-10 ml-2 sm:mt-0 md:mt-0">
                    <div className="flex justify-center space-y-4 flex-col w-full">
                        <p className="transition-colors hover:text-text-neutral-800 text-neutral-300 font-bold">
                            Pages
                        </p>
                        <ul className="transition-colors hover:text-text-neutral-800 text-neutral-300 list-none space-y-4">
                            {pages.map((page, idx) => (
                                <li key={"pages" + idx} className="list-none">
                                    <button
                                        className="transition-colors hover:text-text-neutral-800"
                                        onClick={() => {
                                            const element = document.getElementById(page.href);
                                            if (element) {
                                                element.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        {page.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center space-y-4 flex-col">
                        <p className="transition-colors hover:text-text-neutral-800 text-neutral-300 font-bold">
                            Socials
                        </p>
                        <ul className="transition-colors hover:text-text-neutral-800 text-neutral-300 list-none space-y-4">
                            {socials.map((social, idx) => (
                                <li key={"social" + idx} className="list-none">
                                    <button
                                        className="transition-colors hover:text-text-neutral-800"
                                        onClick={() => {
                                            const element = document.getElementById(social.href);
                                            if (element) {
                                                element.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        {social.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center mt-20 text-5xl md:text-9xl xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-800">
                Gagan Singh
            </p>
        </div>
    );
}
