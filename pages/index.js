import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// we can not use global css as a module to use it write it in _app.js
// import '../styles/style.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <style jsx>
        {`
          .head {
            font-family: 'Inter', sans-serif;
            font-size: 2rem;
            text-shadow: 0 0 10px #000;
          }
          h2 {
            text-decoration: underline;
          }
          .myimg {
            text-align: center;
            padding-bottom: 2rem;
          }
        `}
      </style>

      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>
          <span className='head'>Hunting Coder : A Blog for Coders</span>
        </h1>
        <div className={styles.description}>
          <div className={styles.blogs}>
            {/* <div className={`${styles1.blogs} ${styles2.blogs}`}>/ */}
            <h2>Popular Blogs</h2>
            <div className={styles.blogItem}>
              <div className='myimg'><img className={styles.IMG} src='/coder.jpg' alt='' width={320} height={213} /></div>
              {/* <div className='myimg'><Image className={styles.IMG} src='/coder.jpg' alt='' width={320} height={213} priority={true} /></div> */}
              <h3>How to learn JavaScript in 2022?</h3>
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
      </main>
    </>
  )
}
