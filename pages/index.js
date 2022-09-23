import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";

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
          <a href="./profile" className={styles.card}>
            <h2>自己紹介 &rarr;</h2>
            <p>簡単な経歴紹介/関連サイトのリンクをまとめています</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>ゲーム制作 &rarr;</h2>
            <p>制作した/制作中のゲームについてまとめています</p>
          </a>

          <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
          >
            <h2>ブログ &rarr;</h2>
            <p>触った技術を中心にまとめています</p>
          </a>

          <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
          >
            <h2>TODOまとめ &rarr;</h2>
            <p>
              個人的TODOをまとめています
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
