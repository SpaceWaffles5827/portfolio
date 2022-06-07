import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import HomeBody from '../components/HomeBody'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Hartwig</title>
        <meta name="description" content="Jack Hartwig Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <HomeBody></HomeBody>

    </div>
  )
}
