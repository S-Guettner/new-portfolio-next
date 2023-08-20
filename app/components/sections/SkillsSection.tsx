'use client'
import { FC, useEffect } from 'react'
import { FluidSimulation } from '../effects/FluidEffect'

interface SkillsSectionProps {

}

const SkillsSection: FC<SkillsSectionProps> = ({ }) => {

    useEffect(() => {
        const canvas = document.getElementById('canvas');

        if (canvas) {
            FluidSimulation();
        }
    }, [])

    return (

        
        <canvas id='canvas' className='h-vh100 w-full block'>
            
        </canvas>
       




    )
}

export default SkillsSection