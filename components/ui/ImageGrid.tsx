import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ImagesGrid = ({
    images
}: {
    images: {
        src: string,
        className: string
    }[]
}) => {
    return (
        <div className="relative h-[20rem] md:h-[30rem] overflow-hidden mt-10 w-full border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex gap-5 flex-shrink-0 justify-center absolute inset-0 h-full w-full pt-5">
                {images.map((image) => (
                    <div
                        className={cn(
                            "relative p-2 rounded-lg border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-800 bg-gray-100 mt-0 transition-transform duration-300 transform hover:translate-y-[-5px]",
                            image.className
                        )}
                        key={image.src}
                    >
                        <Image
                            src={image.src}
                            alt={image.src}
                            width="500"
                            height="500"
                            className="object-cover rounded-lg h-full flex-shrink-0 min-w-[15rem] object-top"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};