'use client'
import { FC, useState } from 'react'
import ProjectCard from '../ProjectCard'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface ProjectSectionProps {

}

const ProjectSection: FC<ProjectSectionProps> = ({ }) => {

    const [currentCard, setCurrentCard] = useState(0);

    const nextCard = () => {
        setCurrentCard(prev => (prev + 1) % 3)
    }

    const prevCard = () => {
        setCurrentCard(prev => (prev - 1 + 3) % 3)
    }

    console.log(currentCard)

    return (
        <div>
            <section className='p-4 pb-0 mb-4 pt-20'>
                <p className='text-green mb-2'>&lt;Projects&gt;</p>
                <h1 className='text-textLarge text-2xl mb-1 font-bold pl-4'><span className='text-green'>&lt;</span>Recent Works <span className='text-green'>/&gt;</span> </h1>
                <p className='text-green pl-4 mb-5'>&lt;section&gt;</p>
                <div className='text-green flex justify-end items-center '>
                    <div className='flex gap-x-5 pb-2 pr-2'>
                        <svg onClick={() => prevCard()} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M18.464,2.114c-0.329-0.174-0.728-0.148-1.033,0.063l-13,9C4.161,11.365,4,11.672,4,12s0.161,0.635,0.431,0.822l13,9 C17.602,21.94,17.8,22,18,22c0.159,0,0.318-0.038,0.464-0.114C18.794,21.713,19,21.372,19,21V3 C19,2.628,18.794,2.287,18.464,2.114z M17,19.091L6.757,12L17,4.909V19.091z"></path></svg>
                        <svg onClick={() => nextCard()} className='rotate-180' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M18.464,2.114c-0.329-0.174-0.728-0.148-1.033,0.063l-13,9C4.161,11.365,4,11.672,4,12s0.161,0.635,0.431,0.822l13,9 C17.602,21.94,17.8,22,18,22c0.159,0,0.318-0.038,0.464-0.114C18.794,21.713,19,21.372,19,21V3 C19,2.628,18.794,2.287,18.464,2.114z M17,19.091L6.757,12L17,4.909V19.091z"></path></svg>
                    </div>
                </div>
                <div className='mb-12'>
                    <TransitionGroup className="card-slider">
                        <CSSTransition
                            key={currentCard}
                            timeout={500}
                            classNames="project-card-slide"
                            exit={false}
                            enter={true}
                        >
                            <ProjectCard currentCard={currentCard} />
                        </CSSTransition>
                    </TransitionGroup>


                </div>
                <p className='text-green pl-6 '>&lt;/section&gt;</p>
                <p className='text-green'>&lt;/Projects&gt;</p>
            </section>
        </div>
    )
}

export default ProjectSection