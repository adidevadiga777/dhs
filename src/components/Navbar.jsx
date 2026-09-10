import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/dhs_logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className='p-3 flex bg-red-950 justify-between items-center border-b border-amber-500'>
            <Link to='/' className='flex items-center' aria-label='Home'>
                <img src={logo} alt='logo' className='h-8 w-auto md:h-12 lg:ml-20' />
            </Link>
            <div className='hidden items-center font-medium lg:flex gap-20'>
                <Link to="/" className='text-m font-bold text-amber-400 transition hover:text-amber-500'>Home</Link>
                <Link to="/" className='text-m font-bold text-amber-400 transition hover:text-amber-500'>Blades</Link>
                <Link to="/" className='text-m font-bold text-amber-400 transition hover:text-amber-500'>Rubbers</Link>
                <Link to="/" className='text-m font-bold text-amber-400 transition hover:text-amber-500'>Balls</Link>
                <Link to="/" className='text-m font-bold text-amber-400 transition hover:text-amber-500'>Accessories</Link>
                <Link to="/" className='text-m font-bold text-amber-400 transition hover:text-amber-500'>Tables</Link>
                <Link to="/" className='text-m font-bold text-amber-400 transition hover:text-amber-500'>Contact</Link>
            </div>
            <div className='flex gap-2'>
                <button className='inline-flex items-center justify-center rounded-md p-2 text-amber-400 lg:hidden' onClick={toggleMenu} aria-label='Open menu'><i className="fa-solid fa-bars w-5 h-5"></i></button>
            </div>
            {isMenuOpen && (
                <div className='fixed inset-0 z-50 bg-red-950 overflow-y-auto lg:hidden'>
                    <div className='sticky top-0 p-3 flex bg-red-950 justify-between items-center items-center border-b border-amber-500'>
                        <Link to='/' className='flex items-center' aria-label='Home'>
                            <img src={logo} alt='logo' className='h-8 w-auto md:h-12 lg:ml-20' />
                        </Link>
                        <div className='flex items-center gap-3'>
                            <button className='inline-flex items-center justify-center rounded-md p-2 text-amber-400' onClick={toggleMenu} aria-label='Close menu'><i className="fa-solid fa-xmark w-5 h-5"></i></button>
                        </div>
                    </div>
                    <div className='mt-10 flex flex-col px-4'>
                        <Link to='/' className='border-b border-amber-400 py-3 text-2xl font-medium text-amber-400' onClick={closeMenu}>Home</Link>
                        <Link to='/about' className='border-b border-amber-00 py-3 text-2xl font-medium text-amber-400' onClick={closeMenu}>Blades</Link>
                        <Link to='/offerings' className='border-b border-amber-500 py-3 text-2xl font-medium text-amber-400' onClick={closeMenu}>Rubbers</Link>
                        <Link to='/contact' className='border-b border-amber-500 py-3 text-2xl font-medium text-amber-400' onClick={closeMenu}>Balls</Link>
                        <Link to='/contact' className='border-b border-amber-500 py-3 text-2xl font-medium text-amber-400' onClick={closeMenu}>Accessories</Link>
                        <Link to='/contact' className='border-b border-amber-500 py-3 text-2xl font-medium text-amber-400' onClick={closeMenu}>Tables</Link>
                        <Link to='/contact' className='border-b border-amber-500 py-3 text-2xl font-medium text-amber-400' onClick={closeMenu}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
