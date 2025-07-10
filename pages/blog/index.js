import Layout from "../../components/Layout";
import { GetMyNotePost } from "../../lib/getMyNotePost"
import ActionAreaCard from "../../components/ActionAreaCard";
import {GetMyZennFeed} from "../../lib/getMyZennFeed";

// SSG（Static Site Generation）のためのデータを渡す
export async function getStaticProps() {
    const allNotePostData = await GetMyNotePost()
    const allZennFeedData = await GetMyZennFeed()

    // noteとzennの記事情報のJSONを結合する
    const concatPostData = allNotePostData.concat(allZennFeedData)

    // 公開日時の新しい順に並べる
    const allPostData = concatPostData.sort(
        function (a, b) {
            const aDate = new Date(a.publishAt).getTime()
            const bDate = new Date(b.publishAt).getTime()
            return bDate - aDate
        }
    );

    return {
        props: {
            allPostData
        },
    };

}

export default function Blog( {allPostData} ){
    return (
        <Layout>
            <main className="min-h-screen py-16 flex flex-col items-center glass-card mx-8 my-8">
                <h1 className="text-4xl font-bold matcha-gradient-text mb-12">ブログ</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {
                    allPostData.map( ({ title, url, publishAt, site }) => {
                        const date = new Date(publishAt);
                        const publishedYear = date.getFullYear();
                        // getMonthは0〜11の整数値が返ってくるので、+1する
                        const publishedMonth = date.getMonth() + 1;
                        const publishedDate = date.getDate();
                        const content = `${publishedYear}年${publishedMonth}月${publishedDate}日`;
                        // サイトによって、カードに表示する画像を変える
                        if (site === "note") {
                            return (
                                <ActionAreaCard key={title} route={url} title={title} content={content} image="/notelogo.svg"/>
                            )
                        }
                        else if (site === "zenn") {
                            return (
                                <ActionAreaCard key={title} route={url} title={title} content={content} image="/zennlogo.svg"/>
                            )
                        }
                    })
                }
                </div>
            </main>
        </Layout>
    )
}