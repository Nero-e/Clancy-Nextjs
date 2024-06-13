import React from "react";
import { Description } from "@/components/home/Description";
import { Hero } from "@/components/home/Hero";

export default function HomeLayout({children}:{children: React.ReactNode}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Hero />
            <Description />
            {children}
        </main>
    )
}