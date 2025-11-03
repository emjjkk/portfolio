"use client"
import Header from '@/components/header'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <>
            <div className="md:w-[70%] h-screen overflow-y-scroll p-4 md:p-6 mx-auto cs">
                <Header />

                {/* Body Text */}
                <h1 className="text-3xl md:text-4xl my-5 md:w-2/3">Maybe the next time you visit this page, there'll actually be something interesting to see here.</h1>
                <p className="text-md">In the meantime, <a href="https://www.youtube.com/watch?v=eQdF8JMCYWo" className="text-blue-600">here</a> is a video you can watch.</p>
            </div>
        </>
    )
}