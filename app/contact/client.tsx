"use client"
import Header from '@/components/header'
import { AiFillDiscord } from 'react-icons/ai'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function ContactPage() {
    return (
        <>
            <div className="md:w-[70%] h-screen overflow-y-scroll p-4 md:p-6 mx-auto cs">
                <Header />

                {/* Intro */}
                <h1 className="text-3xl md:text-4xl my-5 md:w-2/3 font-semibold">
                    Let's get in touch
                </h1>

                <p className="text-md md:w-2/3 mb-6">
                    Got a project, collab, or just wanna say hey? Hit me up! I check my messages regularly and love chatting about web dev, cybersecurity, or basically anything tech.
                </p>

                {/* Contact Details */}
                <section className="my-10 md:w-2/3 space-y-6">
                    <div className="flex items-center gap-3">
                        <FiMail className="text-xl" />
                        <a href="mailto:youremail@example.com" className="text-md hover:underline">
                            emmanuel.opalabi@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <FiGithub className="text-xl" />
                        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-md hover:underline">
                            github.com/emjjkkk
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <FiLinkedin className="text-xl" />
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-md hover:underline">
                            linkedin.com/in/emjjkk
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <AiFillDiscord className="text-xl" />
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-md hover:underline">
                            @e.mjjkk
                        </a>
                    </div>
                </section>

                {/* CTA */}
                <section className="my-10 md:w-2/3">
                    <h2 className="text-xl font-semibold mb-3">Want to work together?</h2>
                    <p className="text-md mb-4 md:w-3/4">
                        If you have a project idea, a freelance gig, or just want to collab on something wild, drop me a message. I usually respond pretty fast — let's make something cool!
                    </p>
                    <a 
                        href="mailto:youremail@example.com" 
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Say Hello
                    </a>
                </section>
            </div>
        </>
    )
}
