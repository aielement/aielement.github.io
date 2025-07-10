import Link from "next/link";
import Image from "next/image";

export default function ActionAreaCard({route, image, title, content}) {
    return (
        <Link href={route} className="block w-full h-full">
            <div className="glass-card p-6 h-full hover:border-blue-400/50 dark:hover:border-emerald-400/50 hover:shadow-2xl group cursor-pointer min-h-[280px] flex flex-col">
                {image && (
                    <div className="mb-4 overflow-hidden rounded-xl">
                        <Image
                            src={image}
                            alt={title}
                            width={345}
                            height={140}
                            className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                )}
                
                <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-bold readable-text group-hover:text-blue-600 dark:group-hover:text-emerald-300 transition-all duration-300">
                        {title}
                    </h3>
                    <p className="readable-text-secondary leading-relaxed text-sm group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {content}
                    </p>
                </div>
                
                <div className="mt-auto pt-4 flex items-center readable-text group-hover:text-blue-600 dark:group-hover:text-emerald-300 transition-colors duration-300">
                    <span className="text-sm font-medium">詳細を見る</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
