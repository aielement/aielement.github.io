import Layout from "../../components/Layout";
import generalStyle from "../../styles/GeneralContent.module.css"

export default function Profile(){
    return(
        <div>
            <Layout>
                <main className={generalStyle.main}>
                    <h1>自己紹介</h1>
                    <h2>経歴</h2>
                        <table>
                            <thead>
                                <tr><th>時期</th><th>内容</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>2014年4月〜2020年3月</td><td>大学・大学院にて地球物理学を学ぶ</td></tr>
                                <tr><td>2020年4月〜現在</td><td>F2Pゲームの開発会社にて、ゲームエンジニアとして従事</td></tr>
                            </tbody>
                        </table>

                    <h2>主に使用している技術</h2>
                        C#, Unity, PHP, Python

                    <h2>保有資格（合格含む）</h2>
                        <table>
                            <thead>
                                <tr><th>取得時期</th><th>資格名</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>2014年12月</td><td>普通自動車一種運転免許　取得</td></tr>
                                <tr><td>2015年7月</td><td>測量士補試験　合格</td></tr>
                                <tr><td>2018年3月</td><td>高等学校教諭一種免許状（理科）　取得</td></tr>
                                <tr><td>2021年6月</td><td>応用情報技術者試験　合格</td></tr>
                                <tr><td>2021年9月</td><td>第四級アマチュア無線技師　取得</td></tr>
                                <tr><td>2021年12月</td><td>第一級陸上特殊無線技師　取得</td></tr>
                                <tr><td>2022年4月</td><td>第二級アマチュア無線技師　取得</td></tr>
                                <tr><td>2022年8月</td><td>第一級アマチュア無線技師試験　合格</td></tr>
                            </tbody>
                        </table>
                </main>
            </Layout>
        </div>
    );
}