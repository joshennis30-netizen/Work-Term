'use client';
import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const RACE_QUERY = defineQuery(`*[_type == "race"]{
    category
    }`)
var category = await client.fetch(RACE_QUERY);
for(let i=0; i<category.length; i++){
    category[i] = JSON.stringify(category[i].category, null, 5).replace(/[\[\]",]+/g, '');
    const category1 = category[i];
    category[i] = <button type="button" key={i} onClick={() => setRace(category1)}>{category[i]}</button>
}

var race;
var results: any[] = [];

function setRace(selectedRace: string) {
    race = selectedRace;
    fetchResults(race);
    var tableBody = document.getElementById("tBody") as HTMLTableElement;
    var tRows = tableBody.querySelectorAll('tbody tr').length;
    if (tRows != 0){
        for (let x=0; x<=tRows - 1;){
        tableBody.deleteRow(x);
        tRows = tableBody.querySelectorAll('tbody tr').length;
        }
    }
}

async function fetchResults(race: string) {
    const NAME_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        Name,
        Placement
        }|order(Placement asc)`)
    var name = await client.fetch(NAME_QUERY)
    for(let i=0; i<name.length; i++){
        name[i] = JSON.stringify(name[i].Name, null, 5).replace(/[\[\]",]+/g, '');
    }
    const BIB_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        bib,
        Placement
        }|order(Placement asc)`)
    var bib = await client.fetch(BIB_QUERY)
    for(let i=0; i<bib.length; i++){
        bib[i] = JSON.stringify(bib[i].bib, null, 5).replace(/[\[\]",]+/g, '');
    }
    const LAP1_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_1,
        Placement
        }|order(Placement asc)`)
    var lap1 = await client.fetch(LAP1_QUERY)
    for(let i=0; i<lap1.length; i++){
        lap1[i] = JSON.stringify(lap1[i].lap_1, null, 5).replace(/[\[\]",]+/g, '');
    }
    const LAP2_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_2,
        Placement
        }|order(Placement asc)`)
    var lap2 = await client.fetch(LAP2_QUERY)
    for(let i=0; i<lap2.length; i++){
        lap2[i] = JSON.stringify(lap2[i].lap_2, null, 5).replace(/[\[\]",]+/g, '');
    }
    const LAP3_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_3,
        Placement
        }|order(Placement asc)`)
    var lap3 = await client.fetch(LAP3_QUERY)
    for(let i=0; i<lap3.length; i++){
        lap3[i] = JSON.stringify(lap3[i].lap_3, null, 5).replace(/[\[\]",]+/g, '');
    }
    const LAP4_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_4,
        Placement
        }|order(Placement asc)`)
    var lap4 = await client.fetch(LAP4_QUERY)
    for(let i=0; i<lap4.length; i++){
        lap4[i] = JSON.stringify(lap4[i].lap_4, null, 5).replace(/[\[\]",]+/g, '');
    }
    const LAP5_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_5,
        Placement
        }|order(Placement asc)`)
    var lap5 = await client.fetch(LAP5_QUERY)
    for(let i=0; i<lap5.length; i++){
        lap5[i] = JSON.stringify(lap5[i].lap_5, null, 5).replace(/[\[\]",]+/g, '');
    }
    const LAP6_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_6,
        Placement
        }|order(Placement asc)`)
    var lap6 = await client.fetch(LAP6_QUERY)
    for(let i=0; i<lap6.length; i++){
        lap6[i] = JSON.stringify(lap6[i].lap_6, null, 5).replace(/[\[\]",]+/g, '');
    }
    const TOTAL_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        total,
        Placement
        }|order(Placement asc)`)
    var total = await client.fetch(TOTAL_QUERY)
    for(let i=0; i<total.length; i++){
        total[i] = JSON.stringify(total[i].total, null, 5).replace(/[\[\]",]+/g, '');
    }
    for(let i=0; i<name.length; i++){
        results[i] = <tr key={i}><td className="center">{name[i]}</td><td className="center">{bib[i]}</td><td className="center">{lap1[i]}</td>
        <td className="center">{lap2[i]}</td><td className="center">{lap3[i]}</td><td className="center">{lap4[i]}</td>
        <td className="center">{lap5[i]}</td><td className="center">{lap6[i]}</td><td className="center">{total[i]}</td></tr>
    }
    var tableBody = document.getElementById("tBody") as HTMLTableElement;
    for(let i=results.length - 1; i>=0; --i){
        var row = tableBody.insertRow(0);
        for(let j=0; j<results[i].props.children.length; j++){
            var newCell = row.insertCell(j);
        newCell.innerHTML = results[i].props.children[j].props.children;
        }
    }
    console.log(results);
    //results.length = 0;
}

function Results(results: any[]) {
    return(
        <div>
            <div className="raceButtons">{category}</div>
            <table id="table">
                <thead id="tHead">
                    <tr><th>Name</th><th>Bib</th><th>Lap 1</th><th>Lap 2</th><th>Lap 3</th><th>Lap 4</th>
                    <th>Lap 5</th><th>Lap 6</th><th>Total</th></tr>
                </thead>
                <tbody id="tBody" className="center"/> 
            </table>
        </div>
    );
}

export default Results;