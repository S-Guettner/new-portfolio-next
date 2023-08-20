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
        <main>
            <canvas id='canvas' className='h-vh100 flex items-center bg-black justify-center'>
                <h1 className='text-white'>SKILLSSECTION</h1>
            </canvas>

        </main>
    )
}

export default SkillsSection