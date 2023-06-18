import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

// Step 1: Collect all the files from blogdara folder
// Step 2: Loop over the files and create a blog post for each

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allblogs)
  const [count, setCount] = useState(2)

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
    setCount(count + 2)
    let data = await d.json()
    setBlogs(data)
  };

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
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blogitem) => {
            return <div className={styles.blogItem} key={blogitem.slug}>
              {/* <div className='myimg'><Image className={styles.IMG} src='/coder.jpg' alt='' width={320} height={213} priority={true} /></div> */}
              <div className='myimg'><img className={styles.IMG} src='/coder.jpg' alt="" width={320} height={213} /></div>
              <Link href={'/blogpost/' + blogitem.slug}>
                <h3>{blogitem.title}</h3>
              </Link>
              <p>{blogitem.metadata}</p>
            </div>
          })
          }
        </InfiniteScroll>
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
  let allCount = data.length;
  let myfile;
  let allblogs = [];
  for (let i = 0; i < 2; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile(("blogdata/" + item), "utf-8")
    allblogs.push(JSON.parse(myfile));
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allblogs, allCount
    }
  }
}


export default Blog