import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const RESULT_QUERY = defineQuery(`*[_type == "results" && category == "2 Loop Open (2 Laps)"]{
    Placement,
    Name,
    bib,
    lap_1,
    lap_2,
    total
    }|order(Placement asc)`)

var results = await client.fetch(RESULT_QUERY)

for(let i=0; i<results.length; i++){
    results[i] = Object.values(results[i]);
}
results = JSON.stringify(results, null, 4).replace(/[\[\]"]+/g, '');

export default function Results() {
    return(
        <div className="text-center">
            {results}
        </div>
    );
}