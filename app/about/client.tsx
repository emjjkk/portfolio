"use client"
import Header from '@/components/header'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <>
            <div className="md:w-[70%] h-screen overflow-y-scroll p-4 md:p-6 mx-auto cs">
                <Header />

                {/* Intro */}
                <h1 className="text-3xl md:text-4xl my-5 md:w-3/4">Allow me to introduce myself</h1>

                <p className="text-md md:w-2/3 mb-2">
                    Heyo, I'm a college student and software developer based for now in Rwanda, and I'm currently focusing on full-stack web development. I'm familiar with Javascript (NextJS, Astro, Remix, etc) and Python (Flask, Django) based frameworks for web development. I can also build cross-platform mobile apps with React Native and other things like Discord bots, Chrome extensions, and Tampermonkey scripts. I also have a sound background in Cybersecurity.
                </p>
                <p className="text-md md:w-2/3 mb-6">
                    When I'm not coding, I'm most likely playing games (I play FPS and ARPG games). I'm also a supercar and superbike fanatic, and I'll use a Suzuki GSX-S1000 GX to commute between home and the Tencent headquarters one day — trust.
                </p>

                {/* Education Section */}
                <section className="my-10 md:w-2/3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-semibold mb-4">Education</h2>
                        <div className="h-[1.5px] flex-1 ml-4 mb-[4px] bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold">BSc Computer Science</h3>
                            <p className="text-sm opacity-80 mb-1">University of the People — 2024 – Present</p>
                            <p className="text-md opacity-90">
                                Building a strong foundation in software design, algorithms, and data structures while balancing real-world coding experience through freelance and open-source work.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">MCIT Cybersecurity Certificate</h3>
                            <p className="text-sm opacity-80 mb-1">IBM Skills Build — November 2025</p>
                            <p className="text-md opacity-90">
                                Covered network defense, penetration testing fundamentals, and secure system architecture with hands-on labs and practical assessments.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="my-10 md:w-2/3 mb-20">
                    <div className="flex items-center">
                        <h2 className="text-xl font-semibold mb-4">Experience</h2>
                        <div className="h-[1.5px] flex-1 ml-4 mb-[4px] bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold">Web Developer</h3>
                            <p className="text-sm opacity-80 mb-1">Comet Digital Ltd — Rwanda, 2022 – 2024</p>
                            <p className="text-md opacity-90">
                                Developed client websites, dashboards, and internal tooling using Next.js, Django, and Tailwind CSS. 
                                Worked on performance optimizations, responsive UI, and integrating third-party APIs.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">Freelance Full-Stack Developer</h3>
                            <p className="text-sm opacity-80 mb-1">Remote — 2024 – Present</p>
                            <p className="text-md opacity-90">
                                Designed and shipped indie web apps, Discord bots, and automation tools. 
                                Specialized in building lightweight systems with Redis, TypeScript, and AI integrations for personal or niche community use.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
