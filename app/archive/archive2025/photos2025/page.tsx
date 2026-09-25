import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity'

const PHOTO_QUERY = defineQuery(`*[_type == "photos" && year == 2025]{
    "imageUrl": image.asset->url}`)

var photos = await client.fetch(PHOTO_QUERY)

for(let i=0; i<photos.length; i++){
    photos[i] = Object.values(photos[i]);
    photos[i] = JSON.stringify(photos[i]).replace(/[\[\]{}",]+/g, '');
    photos[i] = <img src={photos[i]} alt="photo" width={400} height={300}/>
}

console.log(photos);

export default function Photos2025({ image }: {image: String}) {
    return (
        <div>
            {photos}
        </div>
    )
}