'use client'
import { FC, useState } from 'react'
import Navbar from '../navigation/Navbar'

interface HeroSectionProps {
    currentSection: number
    totalSections: number
    onSectionChange: (sectionIndex: number) => void;
}

const HeroSection: FC<HeroSectionProps> = ({ currentSection, totalSections, onSectionChange }) => {

    const [streamOpen, setStreamOpen] = useState(false)

    return (
        <main className='h-vh100 bg-background'>
            <Navbar
                currentSection={currentSection}
                totalSections={totalSections}
                onSectionChange={onSectionChange}
            />

            <section className='p-4 pb-0 mb-6 '>
                <p className='text-green mb-2'>&lt;About&gt;</p>
                <p className=' text-green pl-4 mb-1'>Hi, my name is</p>
                <h1 className='text-textLarge text-3xl mb-1 font-bold pl-4'><span className='text-green'>&lt;</span>Sven Güttner<span className='text-green'>/&gt;</span> </h1>
                <p className='text-green pl-4'>&lt;p&gt;</p>
                <div className='text-text'>
                    <p className='pl-8'>I am a web developer who loves to tackle new challenges and is constantly on a learning journey. My goal is to not just build websites, but to create experiences that resonate with users.</p>
                </div>
                <p className='text-green pl-6 '>&lt;/p&gt;</p>
                <p className='text-green'>&lt;/About&gt;</p>
            </section>
            <div className='flex justify-between items-center text-green'>
            <p className=' mb-2 pl-8 '>&lt;issNasaStream&gt;</p>
                {streamOpen && (
                    <svg onClick={() => setStreamOpen(false)} className='pb-3 pr-2' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2.5rem" width="2.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                )}
            </div>
            {!streamOpen && (
                <div>
                    <p className='text-green pl-16'>&lt;button&gt;</p>

                    <button onClick={() => setStreamOpen(true)} className='text-green ml-2 pl-24'>
                        <p className=' border p-2 my-2 rounded-2xl border-green resume-button'>open Stream</p>
                    </button>


                    <p className='mb-5 text-green pl-16'>&lt;button&gt;</p>
                </div>
            )}

            {streamOpen && (
                <section className='flex mb-2 justify-center text-green'>
                    <iframe className=' rounded-2xl bg-background' width="560" height="315" src="https://www.youtube-nocookie.com/embed/KG6SL6Mf7ak?controls=0&autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </section>
            )}
            <p className='text-green pl-8'>&lt;/issNasaStream&gt;</p>
        </main>
    )
}

export default HeroSection