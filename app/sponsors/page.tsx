import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const SPONSOR_QUERY = defineQuery(`*[_type == "sponsors"]{
    name}`)

var sponsors = await client.fetch(SPONSOR_QUERY)

for(let i=0; i<sponsors.length; i++){
    sponsors[i] = Object.values(sponsors[i]);
}
sponsors = JSON.stringify(sponsors, null, 4).replace(/[\[\]"]+/g, '');

export default function Sponsors() {
    return (
        <div className="text-center">
            {sponsors}
        </div>
    )
}