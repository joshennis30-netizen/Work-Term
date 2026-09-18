import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const PHOTO_QUERY = defineQuery(`*[_type == "photos"]{
    image
    }`)

var photos = await client.fetch(PHOTO_QUERY)

export default function Photos() {
    return (
        <div className="text-center">
            {photos}
        </div>
    )
}