import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anuradha Kumari</title>
        <meta name="description" content="Personal website of Anuradha Kumari" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Anuradha Kumari
        </h1>

        <p className={styles.description}>
          Frontend developer, working as a frontend consultant at Passionate People, Media Developer Expert at Cloudinary, Accessibility Advocate
        </p>
        
      </main>

      <footer className={styles.footer}>
        Created by Anuradha Kumari, hosted on Vercel
      </footer>
    </div>
  )
}
