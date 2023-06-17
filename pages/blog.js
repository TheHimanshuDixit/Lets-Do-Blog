import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Step 1: Collect all the files from blogdara folder
// Step 2: Loop over the files and create a blog post for each

const blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    console.log('useEffect is running ');
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    }).then((b) => {
      console.log(b);
      setBlogs(b);
    })
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.blogs}>
        <h2>Popular Blogs</h2>
        {blogs.map((blogitem) => {
          return <div className={styles.blogItem} key={blogitem.slug}>
            <div className='myimg'><Image className={styles.IMG} src='/coder.jpg' alt='' width={320} height={213} priority={true} /></div>
            <Link href={'/blogpost/' + blogitem.slug}>
              <h3>{blogitem.title}</h3>
            </Link>
            <p>{blogitem.description}</p>
          </div>
        })
        }
      </div>
    </div>
  )
}

export default blog