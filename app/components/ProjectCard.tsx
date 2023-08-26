import { FC } from 'react'
import Image from 'next/image'
import codeCareer from '../../public/projectImages/code-career.png'
import portfolio from '../../public/projectImages/portfolio.png'
import circles from '../../public/projectImages/circles.png'
import Link from 'next/link'

interface ProjectCardProps {
    currentCard: number
}

const ProjectCard: FC<ProjectCardProps> = ({ currentCard }) => {
    if (currentCard === 0) {
        return (
            <main className=' justify-between pb-8 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4 md:w-3/4 md:mx-auto md:px-10 xl:w-1/2'>
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

                <div className='flex justify-between'>
                    <Link className='navButton' href={"https://code-career.vercel.app/"}>
                        <p className='text-green resume-button inline border border-green p-2  rounded'>Visit the Project</p>
                    </Link>
                </div>
            </main>
        )
    }
    else if (currentCard === 1) {
        return (
            <main className='justify-between pb-8 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4 md:w-3/4 md:mx-auto md:px-10 xl:w-1/2'>
                <h2 className='text-textLarge mb-2 text-2xl'>My Portfolio</h2>
                <p className='text-text mb-2'>Welcome to my front-end developer portfolio. Explore my journey, skills, and the passion I bring to every piece of code.</p>
                <section className='my-5'>
                    <section className='flex justify-evenly '>
                        <div className=''>
                            <Image
                                src={portfolio}
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


                <Link className='navButton' href={"https://github.com/S-Guettner/new-portfolio-next"}>
                    <p className='text-green resume-button inline border border-green p-2  rounded'>Visit code</p>
                </Link>
            </main>
        )
    }
    else if (currentCard === 2) {
        return (
            <main className=' justify-between pb-8 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4 md:w-3/4 md:mx-auto md:px-10 xl:w-1/2'>
                <h2 className='text-textLarge mb-2 text-2xl'>Circles Social App</h2>
                <p className='text-text mb-2'>Built with a passionate team using React Native, "Circle" is a streamlined social app for both Android and iOS. Users can easily connect, chat, and customize profiles. .</p>
                <section className='my-5'>
                    <section className='flex justify-evenly '>
                        <div className=''>
                            <Image
                                src={circles}
                                width={90}
                                height={90}
                                alt='Logo Code-career'
                            />
                        </div>
                        <div className='pt-3'>
                            <p className='text-green '>&lt;Stack&gt;</p>
                            <p className='pl-6 text-textLarge'>- React Native</p>
                            <p className='pl-6 text-textLarge'>- Node.js</p>
                            <p className='pl-6 text-textLarge'>- Express</p>
                            <p className='pl-6 text-textLarge'>- MongoDB</p>
                            <p className='pl-6 text-textLarge'>- Mongoose</p>
                            <p className='text-green mb-8'>&lt;/Stack&gt;</p>
                        </div>
                    </section>
                </section>


                <Link className='navButton' href={"https://github.com/S-Guettner/expo-circle-frontend"}>
                    <p className='text-green resume-button inline border border-green p-2  rounded'>Visit code</p>
                </Link>
            </main>
        )
    }
}

export default ProjectCard