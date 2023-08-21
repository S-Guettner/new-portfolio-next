'use client'
import { FC, useEffect } from 'react'
import { FluidSimulation } from '../effects/FluidEffect'

interface SkillsSectionProps {
    currentSection:number
}

const SkillsSection: FC<SkillsSectionProps> = ({ currentSection }) => {

    useEffect(() => {
        const canvas = document.getElementById('canvas');

        if (canvas) {
            setTimeout(() => {
                FluidSimulation();
            }, 1000);
        }
    }, [currentSection])

    return (

        
        <canvas id='canvas' className='h-vh100 w-full block'>
            
        </canvas>
       




    )
}

export default SkillsSection