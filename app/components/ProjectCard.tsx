import { FC } from 'react'

interface ProjectCardProps {
    currentCard:number
}

const ProjectCard: FC<ProjectCardProps> = ({ currentCard }) => {
    if (currentCard === 0){
        return (
            <main className='h-60 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4'>
                <p className='text-textLarge'>HELLLOO11111111111111</p>
            </main>
        )
    }
    else if (currentCard === 1){
        return(
            <main className='h-60 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4'>
                <p className='text-textLarge'>HELLLOO 222222222222</p>
            </main>
        )
    }
    else if (currentCard === 2){
        return(
            <main className='h-60 bg-white bg-opacity-10 rounded-xl shadow-2xl backdrop-blur-md p-4'>
                <p className='text-textLarge'>HELLLOO 33333333333333333333</p>
            </main>
        )
    }
}

export default ProjectCard