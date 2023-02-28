import styles from '@/styles/Livercheesedisplay.module.css';
import { useRouter } from 'next/router';
const Livercheesedisplay = ()=>{
    const router = useRouter()
    const numberoflivercheese = router.asPath.slice(9)
    if (numberoflivercheese < 3){
        console.log("Leberkas")
        return(
            <div>
            <h2 className={styles.result}>Um Gottes Willen! Du brauchst jetzt Leberkäse.</h2>
            </div>
        )
    }
    
    if (numberoflivercheese < 7){
        return(
        <div>
            <h2 className={styles.result}>Basst. Du host gnua Lebakas</h2>
            </div>
        )
    }

    if (numberoflivercheese > 7){
        return(
        <div>
            <h2 className={styles.result}>Sappralot! Da werd da ja schlecht!</h2>
            </div>
        )
    }
}
export default Livercheesedisplay; 