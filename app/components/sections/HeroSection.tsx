import { FC } from 'react'
import Navbar from '../navigation/Navbar'

interface HeroSectionProps {

}

const HeroSection: FC<HeroSectionProps> = ({ }) => {
    return (
        <main className='h-vh100  bg-background'>
            <Navbar />
            <p className='text-textLarge'>Hi, my name is</p>
            <h1 className='text-text mb-20'>Sven Güttner.</h1>
            <div className='text-text'>
                dwdawd
            </div>
        </main>
    )
}

export default HeroSection