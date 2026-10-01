import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const NEWS_QUERY = defineQuery(`*[_type == "news"]{
    news
    }|order(_createdAt asc)`)
var news = await client.fetch(NEWS_QUERY);
for(let i=0; i<news.length; i++){
    news[0] = Object.values(news[0]);
    news = JSON.stringify(news, null, 10).replace(/[\[\]",{}]+/g, '');
    news = <div>{news}</div>
}

const DATE_QUERY = defineQuery(`*[_type == "news"]{
    date
    }|order(_createdAt asc)`)
var date = await client.fetch(DATE_QUERY);
for(let i=0; i<date.length; i++){
    date[0] = Object.values(date[0]);
    date = JSON.stringify(date, null, 10).replace(/[\[\]",{}]+/g, '');
    date = <div>{date}</div>
}

export default function News() {
    return (
        <div className="newsContainer">
            <article className="text-center">
                <h2>{date}</h2>
                <p>{news}</p>
            </article>
        </div>
    )
}