import React from 'react'
import Link from 'next/link'
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-2xl roun">
                    <a className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0">
                        <FaCode className='text-2xl text-pink-500 w-7 h-7'/>
                        <span className="ml-3 text-xl">Hunting Coders</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
                        <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href={'/about'} className="mr-5 hover:text-gray-900">About</Link>
                        <Link href={'/blog'} className="mr-5 hover:text-gray-900">Blog</Link>
                        <Link href={'/contact'} className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Search
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar