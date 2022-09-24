import Parser from "rss-parser";

const userName = "aielement";

export async function GetMyZennFeed() {
    const parser = new Parser();
    const feed = await parser.parseURL(`https://zenn.dev/${userName}/feed`);

    return feed.items.map( ({ title, link, pubDate }) => {
        return {
            title: {title}.title,
            url: {link}.link,
            publishAt: {pubDate}.pubDate,
            site: "zenn"
        }
    })
}
