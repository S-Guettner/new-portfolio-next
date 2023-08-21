'use client'
import { FC, useState } from 'react'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {

    const [menuStatus, setMenuStatus] = useState(false)

    return (
        <section>
            <nav className='text-[#5ef0d0] flex justify-between items-center p-4'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="3.5rem" width="3.5rem" xmlns="http://www.w3.org/2000/svg">
                    <path className='draw' d="M5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" stroke="currentColor" strokeWidth="0.5" fill="none"></path>                  
                    <text x="8" y="9"  fontSize="6" fill="currentColor" textAnchor="middle" dominantBaseline="middle">SG</text>
                </svg>

                <div className={`py-4 pt-7 flex flex-col justify-between w-12 h-16 cursor-pointer ${menuStatus ? 'relative ' : ''}`} onClick={() => setMenuStatus(prev => !prev)}>
                    <div className={` h-0.5 bg-current transition-all  duration-1000 ${menuStatus ? 'transform rotate-45 absolute w-[70%]' : 'w-[80%]'}`}></div>
                    <div className={`w-[70%] h-0.5 bg-current transition-opacity duration-400 ${menuStatus ? 'opacity-0' : ''}`}></div>
                    <div className={` h-0.5 bg-current transition-all  duration-1000 ${menuStatus ? 'transform -rotate-45 w-[70%] absolute' : 'w-[60%]'}`}></div>
                </div>
            </nav>
            {menuStatus && (
                <div className='text-right text-[#5ef0d0]'>
                    <p className='mb-5 pr-4 '>NAVMENU</p>
                    <p className='mb-5 pr-4 '>NAVMENU</p>
                    <p className='mb-5 pr-4 '>NAVMENU</p>
                    <p className='mb-5 pr-4 '>NAVMENU</p>
                </div>
            )
            }
        </section>
    )
}

export default Navbar