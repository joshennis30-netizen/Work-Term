import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const NAME_QUERY = defineQuery(`*[_type == "results" && category == "1 Loop Open (1 Lap)" && year == 2026]{
    Name
    }|order(Placement asc)`)
var name = await client.fetch(NAME_QUERY)
for(let i=0; i<name.length; i++){
    name[i] = Object.values(name[i]);
    name[i] = JSON.stringify(name[i], null, 5).replace(/[\[\]",]+/g, '');
}

const BIB_QUERY = defineQuery(`*[_type == "results" && category == "1 Loop Open (1 Lap)" && year == 2026]{
    bib
    }|order(Placement asc)`)
var bib = await client.fetch(BIB_QUERY)
for(let i=0; i<bib.length; i++){
    bib[i] = Object.values(bib[i]);
    bib[i] = JSON.stringify(bib[i], null, 5).replace(/[\[\]",]+/g, '');
}

const TOTAL_QUERY = defineQuery(`*[_type == "results" && category == "1 Loop Open (1 Lap)" && year == 2026]{
    total
    }|order(Placement asc)`)
var total = await client.fetch(TOTAL_QUERY)
for(let i=0; i<total.length; i++){
    total[i] = Object.values(total[i]);
    total[i] = JSON.stringify(total[i], null, 5).replace(/[\[\]",]+/g, '');
}

var results = await client.fetch(NAME_QUERY);

for(let i=0; i<results.length; i++){
    results[i] = <tr><td className="center">{name[i]}</td><td className="center">{bib[i]}</td><td className="center">{total[i]}</td></tr>
}

export default function Results() {
    return(
        <table>
            <thead>
                <tr><th>Name</th><th>Bib</th><th>Total</th></tr>
            </thead>
            <tbody>
                {results}
            </tbody>
        </table>
    );
}