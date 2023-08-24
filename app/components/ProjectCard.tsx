import { FC } from 'react'
import Image from 'next/image'
import codeCareer from '../../public/projectImages/code-career.png'
import Link from 'next/link'

interface ProjectCardProps {
    currentCard: number
}

const ProjectCard: FC<ProjectCardProps> = ({ currentCard }) => {
    if (currentCard === 0) {
        return (
            <main className=' justify-between pb-8 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4'>
                <h2 className='text-textLarge mb-2 text-2xl'>code-career</h2>
                <p className='text-text mb-2'>Code-Career" is a job platform tailored for IT professionals. I've built it to simplify the job search in the tech world. Find your next IT role with ease at Code-Career.</p>
                <section className='my-5'>
                    <section className='flex justify-evenly '>
                        <div className=''>
                            <Image
                                src={codeCareer}
                                width={100}
                                height={100}
                                alt='Logo Code-career'
                            />
                        </div>
                        <div className='pt-3'>
                            <p className='text-green '>&lt;Stack&gt;</p>
                            <p className='pl-6 text-textLarge'>- Next.js</p>
                            <p className='pl-6 text-textLarge'>- NextAuth</p>
                            <p className='pl-6 text-textLarge'>- Tailwind CSS ❤️</p>
                            <p className='pl-6 text-textLarge'>- MongoDB</p>
                            <p className='pl-6 text-textLarge'>- Mongoose</p>
                            <p className='text-green mb-8'>&lt;/Stack&gt;</p>
                        </div>
                    </section>
                </section>


                <Link href={"https://code-career.vercel.app/"}>
                    <p className='text-green resume-button inline border border-green p-2  rounded'>Visit the Project</p>
                </Link>
            </main>
        )
    }
    else if (currentCard === 1) {
        return (
            <main className='justify-between pb-8 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4'>
                <h2 className='text-textLarge mb-2 text-2xl'>My Portfolio</h2>
                <p className='text-text mb-2'>Welcome to my front-end developer portfolio. Explore my journey, skills, and the passion I bring to every piece of code.</p>
                <section className='my-5'>
                    <section className='flex justify-evenly '>
                        <div className=''>
                            <Image
                                src={codeCareer}
                                width={100}
                                height={100}
                                alt='Logo Code-career'
                            />
                        </div>
                        <div className='pt-10'>
                            <p className='text-green '>&lt;Stack&gt;</p>
                            <p className='pl-6 text-textLarge'>- Next.js</p>
                            <p className='pl-6 text-textLarge'>- gsap</p>
                            <p className='pl-6 text-textLarge'>- Tailwind CSS ❤️</p>
                            <p className='text-green mb-8'>&lt;/Stack&gt;</p>
                        </div>
                    </section>
                </section>


                <Link href={"https://code-career.vercel.app/"}>
                    <p className='text-green resume-button inline border border-green p-2  rounded'>Visit the Project</p>
                </Link>
            </main>
        )
    }
    else if (currentCard === 2) {
        return (
            <main className='h-60 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4'>
                <p className='text-textLarge'>HELLLOO 33333333333333333333</p>
            </main>
        )
    }
}

export default ProjectCard