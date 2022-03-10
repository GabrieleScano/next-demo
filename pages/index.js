import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home</h1>
      <h1 className={'title'}>
        Go to  <Link href="./about">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayout>
  )
}
