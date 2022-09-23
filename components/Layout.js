import Head from "next/head";
import {siteTitle} from "../pages";
import styles from "../styles/Home.module.css";

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
                えれめんの小部屋
            </footer>
        </div>
    );
}