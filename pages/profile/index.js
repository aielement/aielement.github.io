import Layout from "../../components/Layout";
import LicenseTable from "../../components/LicenseTable"
import CareerTable from "../../components/CareerTable";

export default function Profile(){
    return(
        <div>
            <Layout>
                <main className="min-h-screen py-16 flex flex-col items-center glass-card mx-8 my-8">
                    <h1 className="text-4xl font-bold matcha-gradient-text mb-12">自己紹介</h1>
                    
                    <div className="w-full max-w-4xl space-y-8">
                        <div className="text-backdrop">
                            <h2 className="text-2xl font-bold readable-text mb-6">経歴</h2>
                            <CareerTable/>
                        </div>

                        <div className="text-backdrop">
                            <h2 className="text-2xl font-bold readable-text mb-6">主に使用している技術</h2>
                            <p className="readable-text-secondary text-lg">C#, Unity, PHP, Python</p>
                        </div>

                        <div className="text-backdrop">
                            <h2 className="text-2xl font-bold readable-text mb-6">保有資格（合格含む）</h2>
                            <LicenseTable/>
                        </div>
                    </div>
                </main>
            </Layout>
        </div>
    );
}