import React from "react";
import { Hero } from "@/components/Hero";
import { WhoAmI } from "@/components/WhoAmI";
import { Timeline } from "@/components/Timeline";
import { BeyondAcademics } from "@/components/Beyond";
import { ContactForm } from "@/components/Contact";
import { CVSection } from "@/components/CVSection";
import { Footer } from "@/components/Footer";

const page = () => {
    return (
        <div className="bg-neutral-950">
            <Hero />
            <WhoAmI />
            <Timeline />
            <BeyondAcademics />
            <CVSection />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default page;
