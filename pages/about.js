import Head from 'next/head'
import Link from 'next/link'
import { NavBar } from '../components/NavBar'

import styles from '../styles/About.module.css'

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="description" content="About Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <h1>ABOUT</h1>


            <main className={styles.main}>
                <h1 className={styles.title}>
                    Go to  <Link href="./">Home</Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>
            </main>
        </div>
    )
}
