import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const RESULT_QUERY = defineQuery(`*[_type == "results" && category == "Elite Women (5 Laps)" && year == 2026]{
    Placement,
    Name,
    bib,
    lap_1,
    lap_2,
    lap_3,
    lap_4,
    lap_5,
    total
    }|order(Placement asc)`)

var results = await client.fetch(RESULT_QUERY)

for(let i=0; i<results.length; i++){
    results[i] = Object.values(results[i]);
    results[i] = JSON.stringify(results[i], null, 10).replace(/[\[\]",]+/g, '');
    results[i] = <div>{results[i]}</div>
}

export default function Results() {
    return(
        <div className="text-center">
            {results}
        </div>
    );
}