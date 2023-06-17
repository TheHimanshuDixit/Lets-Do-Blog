import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/blog.module.css'

// Step 1: Find the right blog post based on the slug
// Step 2: Render the blog post

const slug = () => {
    const [blog, setBlog] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (!router.isReady)
            return;

        const { slug } = router.query
        console.log('useEffect is running ');
        fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
            return a.json();
        }).then((b) => {
            console.log(b);
            setBlog(b);
        })
    }, [router.isReady])
    return (
        <div className={styles.blog}>
            <h1>
                Title of the page {blog && blog.title}
            </h1>
            <hr />
            <div>{blog && blog.description}.</div>
        </div>
    )
}

export default slug