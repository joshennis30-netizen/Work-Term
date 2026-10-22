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
    var tableHead = document.getElementById("tHead") as HTMLTableElement;
    var tRows = tableBody.querySelectorAll('tbody tr').length;
    if (tRows != 0){
        for (let x=0; x<=tRows - 1;){
        tableBody.deleteRow(x);
        tRows = tableBody.querySelectorAll('tbody tr').length;
        }
    }
    tableHead.deleteRow(-1);
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
        if (lap1[i].lap_1 != null){
            lap1[i] = JSON.stringify(lap1[i].lap_1, null, 5).replace(/[\[\]",]+/g, '');
        }
    }
    const LAP2_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_2,
        Placement
        }|order(Placement asc)`)
    var lap2 = await client.fetch(LAP2_QUERY)
    for(let i=0; i<lap2.length; i++){
        if (lap2[i].lap_2 != null){
            lap2[i] = JSON.stringify(lap2[i].lap_2, null, 5).replace(/[\[\]",]+/g, '');
        }
    }
    const LAP3_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_3,
        Placement
        }|order(Placement asc)`)
    var lap3 = await client.fetch(LAP3_QUERY)
    for(let i=0; i<lap3.length; i++){
        if (lap3[i].lap_3 != null){
            lap3[i] = JSON.stringify(lap3[i].lap_3, null, 5).replace(/[\[\]",]+/g, '');
        }
    }
    const LAP4_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_4,
        Placement
        }|order(Placement asc)`)
    var lap4 = await client.fetch(LAP4_QUERY)
    for(let i=0; i<lap4.length; i++){
        if (lap4[i].lap_4 != null){
            lap4[i] = JSON.stringify(lap4[i].lap_4, null, 5).replace(/[\[\]",]+/g, '');
        }
    }
    const LAP5_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_5,
        Placement
        }|order(Placement asc)`)
    var lap5 = await client.fetch(LAP5_QUERY)
    for(let i=0; i<lap5.length; i++){
        if (lap5[i].lap_5 != null){
            lap5[i] = JSON.stringify(lap5[i].lap_5, null, 5).replace(/[\[\]",]+/g, '');
        }
    }
    const LAP6_QUERY = defineQuery(`*[_type == "results" && category == "${race}" && year == 2026]{
        lap_6,
        Placement
        }|order(Placement asc)`)
    var lap6 = await client.fetch(LAP6_QUERY)
    for(let i=0; i<lap6.length; i++){
        if (lap6[i].lap_6 != null){
            lap6[i] = JSON.stringify(lap6[i].lap_6, null, 5).replace(/[\[\]",]+/g, '');
        }
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
        results[i] = <tr key={i} id="tRow"><td className="center">{name[i]}</td><td className="center">{bib[i]}</td><td className="center">{lap1[i]}</td>
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
    var tableHead = document.getElementById("tHead") as HTMLTableElement;
    var row = tableHead.insertRow(0);
    var nameCell = row.insertCell(0);
    nameCell.innerHTML = "Name";
    var bibCell = row.insertCell(1);
    bibCell.innerHTML = "Bib";
    var totalCell = row.insertCell(2);
    totalCell.innerHTML = "Total";
    for(let i=0; i<results.length; i++){
        if (typeof lap6[i] !== 'string'){
            var tRows = tableBody.rows[i];
            tRows.deleteCell(7);
        } else {
            var lapCell = row.insertCell(2);
            lapCell.innerHTML = "Lap 6"
            break;
        }
    }
    for(let i=0; i<results.length; i++){
        if (typeof lap5[i] !== 'string'){
            var tRows = tableBody.rows[i];
            tRows.deleteCell(6);
        } else {
            var lapCell = row.insertCell(2);
            lapCell.innerHTML = "Lap 5"
            break;
        }
    }
    for(let i=0; i<results.length; i++){
        if (typeof lap4[i] !== 'string'){
            var tRows = tableBody.rows[i];
            tRows.deleteCell(5);
        } else {
            var lapCell = row.insertCell(2);
            lapCell.innerHTML = "Lap 4"
            break;
        }
    }
    for(let i=0; i<results.length; i++){
        if (typeof lap3[i] !== 'string'){
            var tRows = tableBody.rows[i];
            tRows.deleteCell(4);
        } else {
            var lapCell = row.insertCell(2);
            lapCell.innerHTML = "Lap 3"
            break;
        }
    }
    for(let i=0; i<results.length; i++){
        if (typeof lap2[i] !== 'string'){
            var tRows = tableBody.rows[i];
            tRows.deleteCell(3);
        } else {
            var lapCell = row.insertCell(2);
            lapCell.innerHTML = "Lap 2"
            break;
        }
    }
    for(let i=0; i<results.length; i++){
        if (typeof lap1[i] !== 'string'){
            var tRows = tableBody.rows[i];
            tRows.deleteCell(2);
        } else {
            var lapCell = row.insertCell(2);
            lapCell.innerHTML = "Lap 1"
            break;
        }
    }
    results.length = 0;
}

export default function Results(results: any[]) {
    return(
        <div>
            <div className="raceButtons">{category}</div>
            <table id="table" style={{ marginTop: 25}}>
                <thead id="tHead" className="center"/>
                <tbody id="tBody" className="center"/> 
            </table>
        </div>
    );
}