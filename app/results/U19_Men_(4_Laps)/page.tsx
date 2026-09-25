import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const NAME_QUERY = defineQuery(`*[_type == "results" && category == "U19 Men (4 Laps)" && year == 2026]{
    Name
    }|order(Placement asc)`)
var name = await client.fetch(NAME_QUERY)
for(let i=0; i<name.length; i++){
    name[i] = Object.values(name[i]);
    name[i] = JSON.stringify(name[i], null, 5).replace(/[\[\]",]+/g, '');
}

const BIB_QUERY = defineQuery(`*[_type == "results" && category == "U19 Men (4 Laps)" && year == 2026]{
    bib
    }|order(Placement asc)`)
var bib = await client.fetch(BIB_QUERY)
for(let i=0; i<bib.length; i++){
    bib[i] = Object.values(bib[i]);
    bib[i] = JSON.stringify(bib[i], null, 5).replace(/[\[\]",]+/g, '');
}

const LAP1_QUERY = defineQuery(`*[_type == "results" && category == "U19 Men (4 Laps)" && year == 2026]{
    lap_1
    }|order(Placement asc)`)
var lap1 = await client.fetch(LAP1_QUERY)
for(let i=0; i<lap1.length; i++){
    lap1[i] = Object.values(lap1[i]);
    lap1[i] = JSON.stringify(lap1[i], null, 5).replace(/[\[\]",]+/g, '');
}

const LAP2_QUERY = defineQuery(`*[_type == "results" && category == "U19 Men (4 Laps)" && year == 2026]{
    lap_2
    }|order(Placement asc)`)
var lap2 = await client.fetch(LAP2_QUERY)
for(let i=0; i<lap2.length; i++){
    lap2[i] = Object.values(lap2[i]);
    lap2[i] = JSON.stringify(lap2[i], null, 5).replace(/[\[\]",]+/g, '');
}

const LAP3_QUERY = defineQuery(`*[_type == "results" && category == "U19 Men (4 Laps)" && year == 2026]{
    lap_3
    }|order(Placement asc)`)
var lap3 = await client.fetch(LAP3_QUERY)
for(let i=0; i<lap3.length; i++){
    lap3[i] = Object.values(lap3[i]);
    lap3[i] = JSON.stringify(lap3[i], null, 5).replace(/[\[\]",]+/g, '');
}

const LAP4_QUERY = defineQuery(`*[_type == "results" && category == "U19 Men (4 Laps)" && year == 2026]{
    lap_4
    }|order(Placement asc)`)
var lap4 = await client.fetch(LAP4_QUERY)
for(let i=0; i<lap4.length; i++){
    lap4[i] = Object.values(lap4[i]);
    lap4[i] = JSON.stringify(lap4[i], null, 5).replace(/[\[\]",]+/g, '');
}

const TOTAL_QUERY = defineQuery(`*[_type == "results" && category == "U19 Men (4 Laps)" && year == 2026]{
    total
    }|order(Placement asc)`)
var total = await client.fetch(TOTAL_QUERY)
for(let i=0; i<total.length; i++){
    total[i] = Object.values(total[i]);
    total[i] = JSON.stringify(total[i], null, 5).replace(/[\[\]",]+/g, '');
}

var results = await client.fetch(NAME_QUERY);

for(let i=0; i<results.length; i++){
    results[i] = <tr><td className="center">{name[i]}</td><td className="center">{bib[i]}</td><td className="center">{lap1[i]}</td>
    <td className="center">{lap2[i]}</td><td className="center">{lap3[i]}</td><td className="center">{lap4[i]}</td>
    <td className="center">{total[i]}</td></tr>
}

export default function Results() {
    return(
        <table>
            <thead>
                <tr><th>Name</th><th>Bib</th><th>Lap 1</th><th>Lap 2</th><th>Lap 3</th><th>Lap 4</th>
                <th>Lap 5</th><th>Lap 6</th><th>Total</th></tr>
            </thead>
            <tbody>
                {results}
            </tbody>
        </table>
    );
}