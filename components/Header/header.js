import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Header = () =>{
    return(
        <div className={styles.pageheader}>
        <header className={styles.brandheader}><Link href="/"><Image className={styles.brandimage} src="/logo.png" alt="Leberkasrechner Logo" width={32} height={32} /></Link><span className={styles.brandheaderspan}>Leberkasrechner</span></header>
        </div>
    )
}
export default Header;