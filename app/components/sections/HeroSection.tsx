import { FC } from 'react'

interface HeroSectionProps {

}

const HeroSection: FC<HeroSectionProps> = ({ }) => {
    return (
        <main className='h-screen flex items-center justify-center'>
            <h1 className='text-white'>HEROSECTION</h1>
        </main>
    )
}

export default HeroSection