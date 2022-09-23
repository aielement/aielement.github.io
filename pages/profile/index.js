import Layout from "../../components/Layout";
import LicenseTable from "../../components/LicenseTable"
import generalStyle from "../../styles/GeneralContent.module.css"
import CareerTable from "../../components/CareerTable";

export default function Profile(){
    return(
        <div>
            <Layout>
                <main className={generalStyle.main}>
                    <h1>自己紹介</h1>
                    <h2>経歴</h2>
                    <CareerTable/>

                    <h2>主に使用している技術</h2>
                        C#, Unity, PHP, Python

                    <h2>保有資格（合格含む）</h2>
                    <LicenseTable/>
                </main>
            </Layout>
        </div>
    );
}