import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const NEWS_QUERY = defineQuery(`*[_type == "news"]{
    news,
    date
    }|order(_createdAt asc)`)

var news = await client.fetch(NEWS_QUERY);
news[0] = Object.values(news[0]);
news = JSON.stringify(news, null, 10).replace(/[\[\]",{}]+/g, '');
news = <div>{news}</div>







export default function News() {
    return (
        <div className="text-center">
            {news}
        </div>
    )
}