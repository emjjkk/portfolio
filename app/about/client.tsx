"use client"
import Header from '@/components/header'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <>
            <div className="md:w-[70%] h-screen overflow-y-scroll p-4 md:p-6 mx-auto cs">
                <Header />

                {/* Body Text */}
                <h1 className="text-3xl md:text-4xl my-5 md:w-3/4">Allow me to introduce myself</h1>

                {/* Profile Card */}
                <div className="md:w-2/3 flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl shadow-md p-6 mb-5 gap-6 border border-gray-200">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQGCY-25SW6aeQ/profile-displayphoto-shrink_200_200/B4DZXYpaG5HIAY-/0/1743096489400?e=1762992000&v=beta&t=mNLt4PQiRq5btsOw2sBfO6MK-i8hccSDTIvOWAG56Do" // replace with your image path
                            alt="Profile Picture"
                            width={140}
                            height={140}
                            className="rounded-full object-cover border-4 border-gray-200"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col space-y-2 text-gray-800">
                        <h2 className="text-2xl font-semibold">Emmanuel Alabi</h2>
                        <p className="text-sm text-gray-500">🇹🇭 Thai / 🇳🇬 Nigerian • Based in 🇷🇼 Rwanda</p>

                        <div className="text-sm mt-3">
                            <p><span className="font-semibold">Skills:</span> Software engineering, Video editing, Writing</p>
                            <p><span className="font-semibold">Tech Stack:</span> Next.js, Astro, Remix, Flask, Django</p>
                            <p><span className="font-semibold">Likes:</span> Gaming (FPS, ARPG), Kdrama, Motorbikes, Supercars</p>
                            <p><span className="font-semibold">Dislikes:</span> Slow Wi-Fi, messy UIs, and unhandled promises 😤</p>
                        </div>
                    </div>
                </div>

                <p className="text-md md:w-2/3 mb-2">
                    Heyo, I'm a college student and software developer based for now in Rwanda, and I'm currently focusing on full-stack web development. I'm familiar with Javascript- (NextJS, Astro, Remix, etc) and Python (Flask, Django) based frameworks for web development. I can also build cross-platform mobile apps with React Native and other things like discord bots, chrome extensions, and tampermonkey scripts. I also have a sound background in Cybersecurity.
                </p>
                <p className="text-md md:w-2/3 mb-2">
                    When I'm not coding, I'm most likely playing games (I play FPS and ARPG games). I'm also a supercar and superbike fanatic, and I'll use a Suzuki GSX-S1000 GX to commute between home and the Tencent headquarters one day trust.
                </p>
            </div>
        </>
    )
}
