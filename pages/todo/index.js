import Layout from "../../components/Layout";
import generalStyle from "../../styles/GeneralContent.module.css"

export default function Todo(){
    return (
        <Layout>
            <main className={generalStyle.main}>
                <h1>工事中</h1>
            </main>
        </Layout>
    )
}