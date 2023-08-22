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
                <p className='text-green '>&lt;Stack&gt;</p>
                <div className='my-2'>
                    <p className='pl-6 text-textLarge'>- Next.js</p>
                    <p className='pl-6 text-textLarge'>- NextAuth</p>
                    <p className='pl-6 text-textLarge'>- Tailwind CSS ❤️</p>
                    <p className='pl-6 text-textLarge'>- MongoDB</p>
                    <p className='pl-6 text-textLarge'>- Mongoose</p>
                </div>
                <p className='text-green mb-8'>&lt;/Stack&gt;</p>


                <Link  href={"https://code-career.vercel.app/"}>
                    <p className='text-green resume-button inline border border-green p-2  rounded'>Visit the Project</p>
                </Link>
            </main>
        )
    }
    else if (currentCard === 1) {
        return (
            <main className='h-60 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4'>
                <p className='text-textLarge'>HELLLOO 222222222222</p>
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