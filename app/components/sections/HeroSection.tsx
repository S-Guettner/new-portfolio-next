'use client'
import { FC, useState } from 'react'
import Navbar from '../navigation/Navbar'
import Image from 'next/image'
import portrait from '../../../public/portraitMe.png'


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

            <section className='p-4 pb-0 mb-4 '>
                <p className='text-green mb-2'>&lt;About&gt;</p>
                <p className=' text-green pl-4 mb-1'>Hi, my name is</p>
                <h1 className='text-textLarge text-3xl mb-1 font-bold pl-4'><span className='text-green'>&lt;</span>Sven Güttner <span className='text-green'>/&gt;</span> </h1>
                <p className='text-green pl-6'>&lt;p&gt;</p>
                <div className='text-text'>
                    <p className='pl-8'>I am a web developer who loves to tackle new challenges and is constantly on a learning journey. My goal is to not just build websites, but to create experiences that resonate with users.</p>
                </div>
                <p className='text-green pl-6 '>&lt;/p&gt;</p>
                <p className='text-green pl-6'>&lt;Image&gt;</p>
                <section className='flex justify-center'>
                    <Image
                        src={portrait}
                        height={20}
                        width={250}
                        alt='image of me'
                    />
                </section>
                <p className='text-green pl-6'>&lt;/Image&gt;</p>
                <p className='text-green'>&lt;/About&gt;</p>
            </section>

        </main>
    )
}

export default HeroSection