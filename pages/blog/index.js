import Layout from "../../components/Layout";
import generalStyle from "../../styles/GeneralContent.module.css"
import mainStyles from '../../styles/Home.module.css'
import { GetMyNotePost } from "../../lib/getMyNotePost"
import ActionAreaCard from "../../components/ActionAreaCard";


export async function getStaticProps() {
    const allNotePostData = await GetMyNotePost()

    return {
        props: {
            allNotePostData,
        },
    };

}

export default function Blog( {allNotePostData} ){
    return (
        <Layout>
            <main className={generalStyle}>
                {
                    allNotePostData.map( ({ name, noteUrl, publishAt }) => (
                        <ActionAreaCard route={noteUrl} title={name} content={publishAt}/>
                    ))
                }
            </main>
        </Layout>
    )
}