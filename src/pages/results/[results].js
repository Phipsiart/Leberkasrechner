import Head from "next/head";
import styles from '@/styles/Results.module.css'
import Header from "components/Header/header";
import Loader from "components/Loader/loader";
import Livercheesedisplay from "components/Livercheesedisplay/livercheesedisplay";
function Results(){
    return(
        <>
        <Head>
        <title>Leberkasrechner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <main>
        <Loader></Loader>
        <Header></Header>
        <h1 className={styles.results}>Ergebnis</h1>
        <Livercheesedisplay></Livercheesedisplay>
        </main>
        </>
    )
}
export default Results; 