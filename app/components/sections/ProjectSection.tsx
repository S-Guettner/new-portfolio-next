'use client'
import { FC , useState} from 'react'
import ProjectCard from '../ProjectCard'

interface ProjectSectionProps {

}

const ProjectSection: FC<ProjectSectionProps> = ({ }) => {
    
    const [currentCard, setCurrentCard] = useState(0);
    
    const nextCard = () => {
        setCurrentCard(prev => (prev + 1) % 3)
    };

    console.log(currentCard)

    return (
        <div>
            <section className='p-4 pb-0 mb-4 pt-20'>
                <p className='text-green mb-2'>&lt;Projects&gt;</p>
                <h1 className='text-textLarge text-2xl mb-1 font-bold pl-4'><span className='text-green'>&lt;</span>Recent Works <span className='text-green'>/&gt;</span> </h1>
                <p className='text-green pl-4'>&lt;section&gt;</p>
                <div className='text-green flex justify-end mb-2'>
                    <p className='pr-2'>more</p>
                    <svg onClick={() => nextCard()} stroke="#5ceacc" fill='#5ceacc' strokeWidth="0" viewBox="0 0 1024 1024" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                </div>
                <div>
                    <ProjectCard 
                        currentCard={currentCard}
                    />

                </div>
                <p className='text-green pl-6 '>&lt;/section&gt;</p>
                <p className='text-green'>&lt;/Projects&gt;</p>
            </section>
        </div>
    )
}

export default ProjectSection