import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const SPONSOR_QUERY = defineQuery(`*[_type == "sponsor"]{
    name,
    website}`)

var sponsors = await client.fetch(SPONSOR_QUERY)
for(let i=0; i<sponsors.length; i++){
    sponsors[i] = Object.values(sponsors[i]);
    sponsors[i] = <tr key={i}><td className="center">{sponsors[i][0]}</td><td className="center"><a href={sponsors[i][1]}>Website</a></td></tr>
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