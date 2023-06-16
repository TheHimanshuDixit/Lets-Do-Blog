import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/blog.module.css'

// Step 1: Find the right blog post based on the slug
// Step 2: Render the blog post

const slug = () => {
    const router = useRouter()
    console.log(router.query)
    const { slug } = router.query
    return (
        <div className={styles.blog}>
            <h1>
                Title of the page {slug}
            </h1>
            <hr />
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum id voluptatibus accusantium sit modi labore quaerat officia facilis iusto dicta, explicabo porro dolore, distinctio enim assumenda repellat unde corrupti eius minima earum dolores eum reiciendis minus! Blanditiis laborum officiis accusamus.</div>
        </div>
    )
}

export default slug