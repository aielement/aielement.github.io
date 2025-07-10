import Head from "next/head";
import {siteTitle} from "../pages";
import Link from "next/link";

export default function Layout({children}){
    return (
        <div className="px-8 min-h-screen">
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content="近況や使用技術を中心に書いていきます" />
                <link rel="icon" href="/profile.jpeg" />
            </Head>

            <div className="main_element py-8">{children}</div>

            <footer className="flex flex-1 py-8 border-t border-white/20 justify-center items-center bg-white/5 backdrop-blur-sm">
                <Link href="/" className="text-matcha-300 hover:text-matcha-200 transition-colors duration-300 font-medium">
                    えれめんの小部屋
                </Link>
            </footer>
        </div>
    );
}