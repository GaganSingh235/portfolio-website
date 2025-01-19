"use client"
import React from "react";
import Image from "next/image";

export function Logo({ type = "full" }: { type?: string; }) {
    return (
        <div className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20">
            {type === "short" ? (
                <button
                    onClick={() => {
                        const element = document.getElementById("home");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    <Image 
                        src="/short-logo.png"
                        alt="logo"
                        width={86}
                        height={86}
                    />
                </button>
            ) : (
                <button
                    onClick={() => {
                        const element = document.getElementById("home");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    <Image 
                        src="/full-logo.png"
                        alt="logo"
                        width={86}
                        height={86}
                    />
                </button>
            )}
        </div>
    );
};