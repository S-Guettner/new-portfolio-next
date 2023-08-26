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

            <section className='p-4 pb-0 mb-4 md:px-20 md:py-10 lg:px-52 xl:px-80 2xl:px-[25rem]'>
                <p className='text-green mb-2 md:text-lg'>&lt;About&gt;</p>
                <p className=' text-green pl-4 mb-1 md:text-xl md:mb-3'>Hi, my name is</p>
                <h1 className='text-textLarge text-3xl mb-1 font-bold pl-4 md:text-[2rem] md:mb-5'><span className='text-green '>&lt;</span>Sven Güttner <span className='text-green'>/&gt;</span> </h1>
                <p className='text-green pl-6 md:text-lg'>&lt;p&gt;</p>
                <div className='text-text'>
                    <p className='pl-8 md:text-[1rem] md:px-20 lg:px-24 xl:hidden '>I am a web developer who loves to tackle new challenges and is constantly on a learning journey. My goal is to not just build websites, but to create experiences that resonate with users.</p>
                    <p className='pl-8 md:text-[1rem] md:px-20 lg:px-24 hidden xl:block xl:px-32'>I am a web developer who loves to tackle new challenges and is constantly on a learning journey. As I navigate through the ever-evolving realm of technology, I am driven by a fervent desire to innovate and create. My goal extends beyond merely constructing websites – I am dedicated to crafting digital experiences that deeply resonate with users, leaving an enduring impact that goes beyond the screen.</p>
                </div>
                <p className='text-green pl-6 md:text-lg'>&lt;/p&gt;</p>
                <p className='text-green pl-6 md:text-lg'>&lt;Image&gt;</p>
                <section className='flex justify-center'>
                    <Image
                        className='md:w-[300px]'
                        src={portrait}
                        height={20}
                        width={250}
                        alt='image of me'
                    />
                </section>
                <p className='text-green pl-6 md:text-lg'>&lt;/Image&gt;</p>
                <p className='text-green md:text-lg'>&lt;/About&gt;</p>
            </section>

        </main>
    )
}

export default HeroSection