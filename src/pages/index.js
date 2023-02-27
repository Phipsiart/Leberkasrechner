import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from 'components/Header/header'
import Link from 'next/link';
import Footer from 'components/Footer/footer';
export default function Home() {
  
  return (
    <>
      <Head>
        <title>Leberkasrechner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.placeholder}></div>
        <Header></Header>
        <div>
          <h1 className={styles.mainheadline}>
            Leberkasrechner.
          </h1>
          <p className={styles.textsmall}>
            Ein neuer Weg, deinen Leberkaskonsum zu berechnen.
          </p>
          <div className='d-flex justify-content-center'>
<Link href="/calculator" className={styles.tryit}>
Loslegen
</Link>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}