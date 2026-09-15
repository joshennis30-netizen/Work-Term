import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const RESULT_QUERY = defineQuery(`*[_type == "results" && category == "Elite Men (6 Laps)"]{
    Placement,
    Name,
    bib,
    lap_1,
    lap_2,
    lap_3,
    lap_4,
    lap_5,
    lap_6,
    total
    }|order(Placement asc)`)

var results = await client.fetch(RESULT_QUERY)

results = JSON.stringify(results, null, 2).replace(/[{}]/g, '');
results = results.replace(/[\[\]"]+/g, '');

export default function Results() {
    return(
        <div className="text-center">
            {results}
        </div>
    );
}