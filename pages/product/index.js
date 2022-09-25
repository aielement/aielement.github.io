import Layout from "../../components/Layout";
import generalStyle from "../../styles/GeneralContent.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Product(){
    return (
        <Layout>
            <main className={generalStyle.main}>
                <h1>制作した作品</h1>
                <div>
                    <h2>鳴らせ！除夜の鐘</h2>
                    <Image src="/u1w_japanese_bonnou.png" width={200} height={200}/>
                    <p>Unity1週間ゲームジャムのお題「あける」で制作したゲーム</p>
                    <p>リズムよく鐘を叩いて、煩悩の無い状態でスッキリと新年を迎えましょう！</p>
                    <p>プレイは<Link href="https://unityroom.com/games/japanese_bonnou"><a>こちら</a></Link>から</p>
                </div>
                <div>
                    <h2>ちゅ～ちゅ～トレイン！</h2>
                    <Image src="/u1w_chuchutrain.png" width={200} height={200}/>
                    <p>Unity1週間ゲームジャムのお題「ちゅう」で制作したゲーム</p>
                    <p>
                        暴走タコが銀河鉄道を爆走中<br/>
                        カーブに来たらマウス左 or 右を押している間踏ん張るぞ<br/>
                        目指せ光速超え！！！
                    </p>
                    <p>プレイは<Link href="https://unityroom.com/games/chuchutrain"><a>こちら</a></Link>から</p>
                </div>
                <div>
                    <h2>Gift × Stage</h2>
                    <Image src="/u1w_gift_stage.png" width={200} height={200}/>
                    <p>Unity1週間ゲームジャムのお題「ためる」で制作したゲーム</p>
                    <p>
                        あなたの選んだ演出がリアルタイムで反映される！？<br/>
                        駆け出しアイドルのサキとともに、<br/>
                        ライブを盛り上げてギフトをためるゲームです！！
                    </p>
                    <p>プレイは<Link href="https://unityroom.com/games/gift_stage_azami0828"><a>こちら</a></Link>から</p>
                </div>


            </main>
        </Layout>
    )
}