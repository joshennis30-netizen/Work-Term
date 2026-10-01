import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const SPONSOR_QUERY = defineQuery(`*[_type == "sponsors"]{
    name}`)

var sponsors = await client.fetch(SPONSOR_QUERY)
for(let i=0; i<sponsors.length; i++){
    sponsors[i] = Object.values(sponsors[i]);
    sponsors[i] = JSON.stringify(sponsors[i], null, 10).replace(/[\[\]",]+/g, '');
    sponsors[i] = <tr><td className="center">{sponsors[i]}</td></tr>
}

export default function Sponsors() {
    return (
        <table>
            <tbody>
                {sponsors}
            </tbody>
        </table>
    )
}