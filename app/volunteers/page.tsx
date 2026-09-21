import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const VOLUNTEER_QUERY = defineQuery(`*[_type == "volunteers"]{
    name}`)

var volunteers = await client.fetch(VOLUNTEER_QUERY)

for(let i=0; i<volunteers.length; i++){
    volunteers[i] = Object.values(volunteers[i]);
    volunteers[i] = JSON.stringify(volunteers[i], null, 10).replace(/[\[\]",]+/g, '');
    volunteers[i] = <div>{volunteers[i]}</div>
}

export default function Volunteers() {
    return (
        <div className="text-center">
            {volunteers}
        </div>
    )
}