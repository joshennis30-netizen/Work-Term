import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const RESULT_QUERY = defineQuery(`*[_type == "results" && category == "1 Loop Open (1 Lap)"]{
    Placement,
    Name,
    bib,
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