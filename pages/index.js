import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import Link from "next/link";
import ActionAreaCard from "../components/ActionAreaCard";

export const siteTitle = "えれめんの小部屋";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image src="/profile.jpeg" alt="profile image" width={120} height={120} />
        <h1 className={styles.title}>
          {siteTitle}
        </h1>

        <div className={styles.grid}>
          <ActionAreaCard route="/profile" title="自己紹介" content="簡単な経歴紹介/関連サイトのリンクをまとめています"/>
          <ActionAreaCard route="/product" title="ゲーム制作" content="制作した/制作中のゲームについてまとめています"/>
          <ActionAreaCard route="/blog" title="ブログ" content="触った技術を中心にまとめています"/>
          <ActionAreaCard route="/todo" title="TODOまとめ" content="個人的TODOをまとめています"/>
        </div>

      </main>
    </div>
  )
}
