import Head from 'next/head'

import styles from '../styles/About.module.css'

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="description" content="About Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Go to  <a href="./">Home</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>
            </main>
        </div>
    )
}
