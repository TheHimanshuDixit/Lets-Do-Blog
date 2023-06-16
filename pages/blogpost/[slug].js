import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/blog.module.css'

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