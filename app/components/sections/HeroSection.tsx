import { FC } from 'react'
import Navbar from '../navigation/Navbar'

interface HeroSectionProps {

}

const HeroSection: FC<HeroSectionProps> = ({ }) => {
    return (
        <main className='h-vh100  bg-[#0a192f]'>
            <Navbar />
            <p className='text-white'>Hi, my name is</p>
            <h1 className='text-white'>Sven Güttner.</h1>
        </main>
    )
}

export default HeroSection