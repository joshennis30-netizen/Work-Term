import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const NEWS_QUERY = defineQuery(`*[_type == "news"]{
    news
    }|order(_createdAt asc)`)
var news = await client.fetch(NEWS_QUERY);
for(let i=0; i<news.length; i++){
    news[i] = Object.values(news[i]);
    news[i] = JSON.stringify(news[i], null, 10).replace(/[\[\]",{}]+/g, '');
    news[i] = <h1>{news[i]}</h1>
}

const DATE_QUERY = defineQuery(`*[_type == "news"]{
    date
    }|order(_createdAt asc)`)
var date = await client.fetch(DATE_QUERY);
for(let i=0; i<date.length; i++){
    date[i] = Object.values(date[i]);
    date[i] = JSON.stringify(date[i], null, 10).replace(/[\[\]",{}]+/g, '');
    date[i] = <h5 style={{ textDecoration: 'underline' }}>{date[i]}</h5>
}

var articles: any[] = [];
for (let i = 0; i < news.length; i++){
    articles[i] = <article key={i} className="text-center" style={{minHeight: '10vh', backgroundColor: '#ffffffa0', padding: '10px', borderRadius: '10px'}}>{date[i]}{news[i]}</article>
}

export default function News() {
    return (
        <div className="newsContainer">
            {articles}
        </div>
    )
}