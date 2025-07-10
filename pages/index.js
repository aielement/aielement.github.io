import Image from 'next/image'
import ActionAreaCard from "../components/ActionAreaCard";
import ThemeToggle from "../components/ThemeToggle";
import Layout from "../components/Layout";

export const siteTitle = "えれめんの小部屋";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <Layout>
        <main className="min-h-screen py-16 flex-1 flex flex-col justify-center items-center glass-card mx-8 my-8">
          <div className="relative mb-8">
            <Image 
              src="/profile.jpeg" 
              alt="profile image" 
              width={120} 
              height={120} 
              className="rounded-full border-4 border-white/30 shadow-lg transition-transform duration-200 hover:scale-105" 
            />
          </div>
          
          <h1 className="text-6xl font-bold text-center mb-12 matcha-gradient-text">
            {siteTitle}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mt-12">
            <ActionAreaCard route="/profile" title="自己紹介" content="簡単な経歴紹介/関連サイトのリンクをまとめています"/>
            <ActionAreaCard route="/product" title="ゲーム制作" content="制作した/制作中のゲームについてまとめています"/>
            <ActionAreaCard route="/blog" title="ブログ" content="触った技術を中心にまとめています"/>
            <ActionAreaCard route="/todo" title="TODOまとめ" content="個人的TODOをまとめています"/>
          </div>
        </main>
      </Layout>
    </div>
  )
}
