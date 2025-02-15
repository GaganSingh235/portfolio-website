import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            boxShadow: {
                derek: `0px 0px 0px 1px rgb(0 0 0 / 0.06),
                0px 1px 1px -0.5px rgb(0 0 0 / 0.06),
                0px 3px 3px -1.5px rgb(0 0 0 / 0.06), 
                0px 6px 6px -3px rgb(0 0 0 / 0.06),
                0px 12px 12px -6px rgb(0 0 0 / 0.06),
                0px 24px 24px -12px rgb(0 0 0 / 0.06)`,
                input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
            },
        },
    },
    plugins: [
        addVariablesForColors,
        function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    "bg-grid": (value: string) => ({
                        backgroundImage: `url("${svgToDataUri(
                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    "bg-dot": (value: string) => ({
                        backgroundImage: `url("${svgToDataUri(
                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`,
                    }),
                },
                {
                    values: flattenColorPalette(theme("backgroundColor")),
                    type: "color"
                }
            );
        },
    ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
    
    addBase({
        ":root": newVars,
    });
}