import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BiSolidLike } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
// import * as fs from 'fs';

// Step 1: Find the right blog post based on the slug
// Step 2: Render the blog post

const Slug = (props) => {
    console.log()
    function createMarkup(change) {
        return { __html: change };
    }
    const [blog, setBlog] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady)
            return;
        const { slug } = router.query
        console.log(slug)
        fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
            return a.json();
        }).then((b) => {
            setBlog(b);
        })
    }, [router.isReady])
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-2xl" alt="hero" src="/coder.jpg" />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Title of the page {blog && blog[0].title}</h1>
                        <div className="mb-8 leading-relaxed">{blog && <p dangerouslySetInnerHTML={createMarkup(blog[0].desc)}></p>}</div>
                        <div className="flex justify-center">
                            <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><BiSolidLike className='text-2xl text-blue-600' /></button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><AiFillHeart className="text-2xl text-pink-500" /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


// export async function getServerSideProps(context) {
//     const MONGODB_URI = process.env.MONGODB_URI;

//     if (!MONGODB_URI) {
//         throw new Error(
//             'Please define Mongo DB URI'
//         )
//     }

//     // Fetch data from external API
//     const { slug } = context.query
//     const data = await Blog.find({ slug: slug })
//     // const res = await data.json();

//     // Pass data to the page via props
//     return { props: { data } }
// }

// export async function getServerSideProps(context) {
//     // Fetch data from external API
//     const { slug } = context.query
//     const data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
//     const myblog = await data.json()

//     // Pass data to the page via props
//     return { props: { myblog } }
// }


// export async function getStaticPaths() {
//     let allb = await fs.promises.readdir('blogdata')
//     console.log(allb)
//     allb = allb.map((b) => {
//         return { params: { slug: b.split(".")[0] } }
//     })
//     return {
//         paths: allb,
//         fallback: true,
//     };
// }

// export async function getStaticProps(context) {
//     console.log(context)
//     const { slug } = context.params;
//     let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             myblog: JSON.parse(myblog)
//         },
//     }
// }


export default Slug