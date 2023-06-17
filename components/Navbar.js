import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <nav>
            <ul className={styles.mainnav}>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/about'}><li>About</li></Link>
                <Link href={'/blog'}><li>Blog</li></Link>
                <Link href={'/contact'}><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar