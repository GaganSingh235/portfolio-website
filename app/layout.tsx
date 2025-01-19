import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Gagan Singh",
    description: "Portfolio | Gagan Singh",
    icons: {
        icon: "/short-logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="description" content="Portfolio | Gagan Singh" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Gagan Singh" />
                <meta property="og:description" content="Portfolio | Gagan Singh" />
                <meta property="og:image" content="/short-logo.png" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/short-logo.png" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
