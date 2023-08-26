'use client'
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


interface NavbarProps {
    currentSection: number
    totalSections: number
    onSectionChange: (sectionIndex: number) => void;
}

const Navbar: FC<NavbarProps> = ({ currentSection, totalSections, onSectionChange }) => {

    const [menuStatus, setMenuStatus] = useState(false)
    const menuRef = useRef(null);

    const [menuClass, setMenuClass] = useState("");


    gsap.registerPlugin(ScrollToPlugin);

    const navigateToSection = (sectionIndex: number) => {

        const duration = 1.5;

        gsap.to(window, {
            duration: 1.5,  // or any other desired duration
            scrollTo: window.innerHeight * sectionIndex,
            ease: "power2",
            onStart: () => {
                gsap.delayedCall(duration / 2, () => { onSectionChange(sectionIndex) })
            }
        })
    }

    const navHandler = (i: number) => {
        navigateToSection(i)
        setMenuStatus(false)
    }



    return (
        <section>
            <nav className='text-[#5ef0d0] flex justify-between items-center px-4 pt-4 pb-2 mb-2'>
                {/* LOGO */}
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="3.5rem" width="3.5rem" xmlns="http://www.w3.org/2000/svg">
                    <path className='draw' d="M5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" stroke="currentColor" strokeWidth="0.5" fill="none"></path>
                    <text className='' x="8" y="9" fontSize="7" fill="currentColor" textAnchor="middle" dominantBaseline="middle">SG</text>
                </svg>
                {/* Hamburger menu */}
                <div className={`py-4 pt-5 flex flex-col justify-between w-12 h-16 cursor-pointer ${menuStatus ? 'relative pt-7' : ''} lg:hidden`} onClick={() => setMenuStatus(prev => !prev)}>
                    <div className={` h-0.5 bg-current transition-all  duration-1000 ${menuStatus ? 'transform rotate-45 absolute w-[70%]' : 'w-[80%]'}`}></div>
                    <div className={`w-[70%] h-0.5 bg-current transition-opacity duration-400 ${menuStatus ? 'opacity-0' : ''}`}></div>
                    <div className={` h-0.5 bg-current transition-all  duration-1000 ${menuStatus ? 'transform -rotate-45 w-[70%] absolute' : 'w-[60%]'}`}></div>
                </div>
                {/* nav menu for lg BP and above */}
                <div className='hidden lg:block'>
                    <nav className='flex justify-between gap-10'>
                        <button onClick={() => navHandler(0)} className='hover-underline-animation  cursor-pointer text-green slideFadeIn '>&lt;About/&gt;</button>
                        <button onClick={() => navHandler(1)} className='hover-underline-animation  cursor-pointer text-green slideFadeIn '>&lt;Skills/&gt;</button>
                        <button onClick={() => navHandler(2)} className='hover-underline-animation  cursor-pointer text-green slideFadeIn '>&lt;Projects/&gt;</button>
                        <button onClick={() => navHandler(3)} className='hover-underline-animation  cursor-pointer text-green slideFadeIn '>&lt;Contact/&gt;</button>
                        <a href="https://ik.imagekit.io/6sicju8qu/cv.pdf?updatedAt=1693069395988" target="_blank" rel="noopener noreferrer">
                            <button className='resume-button mr-0 p-2 border rounded-xl text-green border-green shadow-greenrounded-2xl md:text-lg'>
                                Resume
                            </button>
                        </a>
                    </nav>
                </div>
            </nav>
            {/* mobile menu */}
            <section className='lg:hidden'>
                {menuStatus && (
                    <div className={` text-center fadeIn bg-background border border-green p-2 rounded-3xl m-2`}>
                        <div className=' flex justify-evenly gap-4 right-0 top-10  rounded-b-3xl p-5 border-green'>
                            <button onClick={() => navHandler(0)} className='hover-underline-animation  cursor-pointer text-green slideFadeIn md:text-lg'>&lt;About/&gt;</button>
                            <button onClick={() => navHandler(1)} className='hover-underline-animation  cursor-pointer text-green slideFadeIn md:text-lg'>&lt;Skills/&gt;</button>
                            <button onClick={() => navHandler(2)} className='hover-underline-animation  cursor-pointer text-green slideFadeIn md:text-lg'>&lt;Projects/&gt;</button>
                            <button onClick={() => navHandler(3)} className='hover-underline-animation  cursor-pointer text-green slideFadeIn md:text-lg'>&lt;Contact/&gt;</button>
                        </div>
                        <div className='flex justify-center'>
                            <a href="https://ik.imagekit.io/6sicju8qu/cv.pdf?updatedAt=1693069395988" target="_blank" rel="noopener noreferrer">
                                <button className='resume-button mr-0 p-2 border rounded-xl text-green border-green shadow-greenrounded-2xl md:text-lg'>
                                    Resume
                                </button>
                            </a>
                        </div>
                    </div>
                )
                }
            </section>
        </section>
    )
}

export default Navbar