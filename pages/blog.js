import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'
// import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import * as fs from 'fs';

// Step 1: Collect all the files from blogdara folder
// Step 2: Loop over the files and create a blog post for each

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allblogs)

  // useEffect(() => {
  //   console.log('useEffect is running ');
  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json();
  //   }).then((b) => {
  //     console.log(b);
  //     setBlogs(b);
  //   })
  // }, [])

  return (
    <div className={styles.main}>
      <div className={styles.blogs}>
        <h2>Popular Blogs</h2>
        {blogs.map((blogitem) => {
          return <div className={styles.blogItem} key={blogitem.slug}>
            {/* <div className='myimg'><Image className={styles.IMG} src='/coder.jpg' alt='' width={320} height={213} priority={true} /></div> */}
            <div className='myimg'><img className={styles.IMG} src='/coder.jpg' alt='' width={320} height={213}/></div>
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

// server side rendering

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const data = await fetch(`http://localhost:3000/api/blogs`)
//   const allblogs = await data.json()

//   // Pass data to the page via props
//   return { props: { allblogs } }
// }


// static side rendering 

export async function getStaticProps() {
  let data = await fs.promises.readdir("blogdata")
  let myfile;
  let allblogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile(("blogdata/" + item), "utf-8")
    allblogs.push(JSON.parse(myfile));
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allblogs
    }
  }
}


export default blog