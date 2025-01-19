"use client";
import React, { useState, useEffect, useId } from "react";

export const FeatureCard = ({ title, description }: { title: string; description: string }) => (
    <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden col-span-1 md:col-span-2">
        <Grid size={20} />
        <div className="relative z-20">
            <h3 className="text-base font-bold text-white">{title}</h3>
            <p className="text-neutral-400 mt-4 text-base">{description}</p>
        </div>
    </div>
);

export const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
    const [randomPattern, setRandomPattern] = useState<number[][] | undefined>(pattern);

    useEffect(() => {
        if (!pattern) {
            const newPattern = Array.from({ length: 5 }, () => [
                Math.floor(Math.random() * 4) + 7,
                Math.floor(Math.random() * 6) + 1,
            ]);
            setRandomPattern(newPattern);
        }
    }, [pattern]);

    return (
        <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x={-12}
                    y={4}
                    squares={randomPattern}
                    className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/100 stroke-white/100"
                />
            </div>
        </div>
    );
};

export function GridPattern({
    width,
    height,
    x,
    y,
    squares,
    className,
    ...props
}: {
    width: number;
    height: number;
    x: number;
    y: number;
    squares?: number[][];
    className?: string;
}) {
    const patternId = useId();
    return (
        <svg aria-hidden="true" className={`${className}`} {...props}>
            <defs>
                <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y], idx) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}-${idx}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
  );
}