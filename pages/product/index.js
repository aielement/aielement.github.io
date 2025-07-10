import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Product(){
    return (
        <Layout>
            <main className="min-h-screen py-16 flex flex-col items-center glass-card mx-8 my-8">
                <h1 className="text-4xl font-bold matcha-gradient-text mb-12">制作した作品</h1>
                
                <div className="glass-card p-8 mb-8 max-w-4xl w-full">
                    <h2 className="text-2xl font-bold readable-text mb-4">鳴らせ！除夜の鐘</h2>
                    <Image src="/u1w_japanese_bonnou.png" width={200} height={200} alt="鳴らせ！除夜の鐘のゲーム画面" className="rounded-lg shadow-lg mb-4"/>
                    <p className="readable-text-secondary mb-2">Unity1週間ゲームジャムのお題「あける」で制作したゲーム</p>
                    <p className="readable-text-secondary mb-2">リズムよく鐘を叩いて、煩悩の無い状態でスッキリと新年を迎えましょう！</p>
                    <p className="readable-text-secondary">プレイは<Link href="https://unityroom.com/games/japanese_bonnou" className="text-blue-600 dark:text-emerald-400 hover:text-blue-800 dark:hover:text-emerald-300 underline font-bold">こちら</Link>から</p>
                </div>
                
                <div className="glass-card p-8 mb-8 max-w-4xl w-full">
                    <h2 className="text-2xl font-bold readable-text mb-4">ちゅ～ちゅ～トレイン！</h2>
                    <Image src="/u1w_chuchutrain.png" width={200} height={200} alt="ちゅ～ちゅ～トレイン！のゲーム画面" className="rounded-lg shadow-lg mb-4"/>
                    <p className="readable-text-secondary mb-2">Unity1週間ゲームジャムのお題「ちゅう」で制作したゲーム</p>
                    <p className="readable-text-secondary mb-2">
                        暴走タコが銀河鉄道を爆走中<br/>
                        カーブに来たらマウス左 or 右を押している間踏ん張るぞ<br/>
                        目指せ光速超え！！！
                    </p>
                    <p className="readable-text-secondary">プレイは<Link href="https://unityroom.com/games/chuchutrain" className="text-blue-600 dark:text-emerald-400 hover:text-blue-800 dark:hover:text-emerald-300 underline font-bold">こちら</Link>から</p>
                </div>
                
                <div className="glass-card p-8 mb-8 max-w-4xl w-full">
                    <h2 className="text-2xl font-bold readable-text mb-4">Gift × Stage</h2>
                    <Image src="/u1w_gift_stage.png" width={200} height={200} alt="Gift × Stageのゲーム画面" className="rounded-lg shadow-lg mb-4"/>
                    <p className="readable-text-secondary mb-2">Unity1週間ゲームジャムのお題「ためる」で制作したゲーム</p>
                    <p className="readable-text-secondary mb-2">
                        あなたの選んだ演出がリアルタイムで反映される！？<br/>
                        駆け出しアイドルのサキとともに、<br/>
                        ライブを盛り上げてギフトをためるゲームです！！
                    </p>
                    <p className="readable-text-secondary">プレイは<Link href="https://unityroom.com/games/gift_stage_azami0828" className="text-blue-600 dark:text-emerald-400 hover:text-blue-800 dark:hover:text-emerald-300 underline font-bold">こちら</Link>から</p>
                </div>
            </main>
        </Layout>
    )
}