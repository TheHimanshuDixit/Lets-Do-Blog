import React, { useEffect } from 'react'
import Link from 'next/link'
import { FaCode } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';


const Navbar = ({ user, handlelogout }) => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-2xl roun">
                    <Link href={'/'} className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0">
                        <FaCode className='text-2xl text-pink-500 w-7 h-7' />
                        <span className="ml-3 text-xl">Hunting Coders</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
                        <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href={'/about'} className="mr-5 hover:text-gray-900">About</Link>
                        <Link href={'/blog'} className="mr-5 hover:text-gray-900">Blog</Link>
                        <Link href={'/contact'} className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    {!user.value && <div className='flex items-center justify-center'>
                        <Link href={'/signup'} className="inline-flex items-center bg-pink-400 border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded text-base mt-4 md:mt-0 text-white">Signup
                        </Link>
                        <Link href={'/login'} className="ml-3 inline-flex items-center bg-pink-400 border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded text-base mt-4 md:mt-0 text-white">Login
                        </Link></div>} {user.value && <div className='flex items-center justify-center'>
                            <button className="inline-flex items-center mt-4 md:mt-0 text-pink-400 hover:text-pink-500 text-3xl"><RiAccountCircleFill />
                            </button>
                            <button onClick={handlelogout} className="ml-4 inline-flex items-center bg-pink-400 border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded text-base mt-4 md:mt-0 text-white">Logout
                            </button>
                        </div>}
                </div>
            </header>
        </>
    )
}

export default Navbar