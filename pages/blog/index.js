import Layout from "../../components/Layout";
import generalStyle from "../../styles/GeneralContent.module.css"
import mainStyles from '../../styles/Home.module.css'
import { GetMyNotePost } from "../../lib/getMyNotePost"
import ActionAreaCard from "../../components/ActionAreaCard";
import {GetMyZennFeed} from "../../lib/getMyZennFeed";


export async function getStaticProps() {
    const allNotePostData = await GetMyNotePost()
    const allZennFeedData = await GetMyZennFeed()

    const concatPostData = allNotePostData.concat(allZennFeedData)

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
            <main className={generalStyle}>
                {
                    allPostData.map( ({ title, url, publishAt, site }) => {
                        const date = new Date(publishAt);
                        const publishedYear = date.getFullYear();
                        const publishedMonth = date.getMonth() + 1;
                        const publishedDate = date.getDate();
                        const content = `${publishedYear}年${publishedMonth}月${publishedDate}日`;

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
            </main>
        </Layout>
    )
}