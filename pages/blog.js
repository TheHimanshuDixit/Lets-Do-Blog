import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

// Step 1: Collect all the files from blogdara folder
// Step 2: Loop over the files and create a blog post for each

const blog = () => {
  return (
    <div className={styles.main}>
      <div className={styles.blogs}>
        <h2>Popular Blogs</h2>
        <div className={styles.blogItem}>
          <div className='myimg'><Image className={styles.IMG} src='/coder.jpg' alt='' width={320} height={213} priority={false} /></div>
          <Link href={'/blogpost/Learn-Js'}>
            <h3>How to learn JavaScript in 2022?</h3>
          </Link>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </div>
    </div>
  )
}

export default blog