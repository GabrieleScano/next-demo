import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { NavBar } from '../components/NavBar'

import styles from '../styles/MainLayout.module.css'


export default function AboutPage() {
    return (
        <MainLayout>
            <h1>ABOUT</h1>
            <h1 className={'title'}>
                Go to  <Link href="./">Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/index.js</code>
            </p>
        </MainLayout>
    )
}
