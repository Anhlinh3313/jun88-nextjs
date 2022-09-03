import Head from 'next/head'
import Home from './home/home-view'

export default function HomeIndex() {
  return (
    <div>
      <Head>
        <title>Create Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
      <footer>
      </footer>
    </div>
  )
}
