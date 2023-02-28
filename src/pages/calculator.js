import Head from "next/head";
import Header from "components/Header/header";
import Loader from "components/Loader/loader";
import styles from '@/styles/Calculator.module.css';
import Footer from "components/Footer/footer";
import {useRouter} from "next/router";
export default function Caclulator() {
  const router = useRouter();
  function Livercheesecalculate(){
        const livercheesenumber = document.getElementById("inputvalue").value
        const redirecturl = ('/results/' + livercheesenumber)
        router.push(redirecturl)
        
  }
    return(
        <>
        <Head>
        <title>Leberkasrechner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
       <main>
        <Loader></Loader>
        <Header></Header>
        <h1 className={styles.Headline}>
        Wie viele Leberkassemmeln hast du?
          </h1>
        <div className={styles.Calculator}>
        <input className="form-control" id="inputvalue" placeholder="Anzahl eingeben"></input>
       </div>
       <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={Livercheesecalculate}>Eingabe</button>
       </div>
       <Footer></Footer>
       </main>

        </>
    )
}
