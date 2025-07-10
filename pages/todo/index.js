import Layout from "../../components/Layout";

export default function Todo(){
    return (
        <Layout>
            <main className="min-h-screen py-16 flex flex-col items-center glass-card mx-8 my-8">
                <h1 className="text-4xl font-bold matcha-gradient-text mb-12">TODOまとめ</h1>
                
                <div className="w-full max-w-4xl space-y-8">
                    <div className="text-backdrop">
                        <h2 className="text-2xl font-bold readable-text mb-6">現在のタスク</h2>
                        <p className="readable-text-secondary text-lg">工事中です。近日公開予定！</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}