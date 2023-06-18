import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/blog.module.css'
import * as fs from 'fs';

// Step 1: Find the right blog post based on the slug
// Step 2: Render the blog post

const Slug = (props) => {
    function createMarkup(change) {
        return { __html: change };
    }
    const [blog, setBlog] = useState(props.myblog)
    // const router = useRouter()

    // useEffect(() => {
    //     if (!router.isReady)
    //         return;

    //     const { slug } = router.query
    //     console.log('useEffect is running ');
    //     fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
    //         return a.json();
    //     }).then((b) => {
    //         console.log(b);
    //         setBlog(b);
    //     })
    // }, [router.isReady])
    return (
        <div className={styles.blog}>
            <h1>
                Title of the page {blog && blog.title}
            </h1>
            <hr />
            {blog && <div dangerouslySetInnerHTML={createMarkup(blog.description)}></div>}
        </div>
    )
}


// export async function getServerSideProps(context) {
//     // Fetch data from external API
//     const { slug } = context.query
//     const data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
//     const myblog = await data.json()

//     // Pass data to the page via props
//     return { props: { myblog } }
// }


export async function getStaticPaths() {
    let allb = await fs.promises.readdir('blogdata')
    console.log(allb)
    allb = allb.map((b) => {
        return { params: { slug: b.split(".")[0] } }
    })
    return {
        paths: allb,
        fallback: true,
    };
}

export async function getStaticProps(context) {
    console.log(context)
    const { slug } = context.params;
    let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            myblog: JSON.parse(myblog)
        },
    }
}


export default Slug