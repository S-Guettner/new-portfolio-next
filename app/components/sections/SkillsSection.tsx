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

        <div className='h-vh100 w-full block'>
        <canvas id='canvas' className='h-vh100 w-full block'>
            <h2 className='text-white z-10'>Hello</h2>
        </canvas>
        </div>




    )
}

export default SkillsSection