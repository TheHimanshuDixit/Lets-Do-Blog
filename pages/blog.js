import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

// Step 1: Collect all the files from blogdara folder
// Step 2: Loop over the files and create a blog post for each

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allblogs)
  const [count, setCount] = useState(0)

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 1}`)
    setCount(count + 1)
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
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-pink-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Welcome to the coders blog</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi qui at facere sapiente nulla incidunt ipsum, odio molestiae sequi?</p>
            </div>
          </div>
          <InfiniteScroll
            dataLength={blogs.length} //This is important field to render the next data
            next={fetchData}
            hasMore={props.allCount !== blogs.length}
            loader={<h4 className='font-semibold text-center text-2xl text-pink-500'>Loading...</h4>}
            endMessage={
              <p className='text-center mt-14 text-2xl text-pink-500'>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="flex flex-wrap sm:m-4 mx-4 -mb-10 -mt-4 justify-center">
              {blogs.map((blogitem) => {
                return <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="/coder.jpg" />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{blogitem.title}</h2>
                  <p className="text-base leading-relaxed mt-2">{blogitem.metadata}.</p>
                  <Link href={'/blogpost/' + blogitem.slug} className="text-pink-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              })
              }
            </div>
          </InfiniteScroll>
        </div>
      </section>
    </>
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
  for (let i = 0; i < 1; i++) {
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