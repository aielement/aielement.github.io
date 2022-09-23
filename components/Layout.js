import Head from "next/head";
import {siteTitle} from "../pages";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Layout({children}){
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content="近況や使用技術を中心に書いていきます" />
                <link rel="icon" href="/profile.jpeg" />
            </Head>

            <div className="main_element">{children}</div>

            <footer className={styles.footer}>
                <Link href="/"><a>えれめんの小部屋</a></Link>
            </footer>
        </div>
    );
}