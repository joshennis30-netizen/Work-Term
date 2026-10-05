import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

const INFO_QUERY_WHAT = defineQuery(`*[_type == "info"]{
  What
  }|order(_createdAt asc)`)
var info_what = await client.fetch(INFO_QUERY_WHAT)
info_what[0] = Object.values(info_what[0]);
info_what = JSON.stringify(info_what, null, 10).replace(/[\[\]",{}]+/g, '');
info_what = <p style={{ minHeight: '5vh'}}>{info_what}</p>

const INFO_QUERY_WHEN = defineQuery(`*[_type == "info"]{
  When
  }|order(_createdAt asc)`)
var info_when = await client.fetch(INFO_QUERY_WHEN)
info_when[0] = Object.values(info_when[0]);
info_when = JSON.stringify(info_when, null, 10).replace(/[\[\]",{}]+/g, '');
info_when = <p style={{ minHeight: '5vh'}}>{info_when}</p>

const INFO_QUERY_WHERE = defineQuery(`*[_type == "info"]{
  Where
  }|order(_createdAt asc)`)
var info_where = await client.fetch(INFO_QUERY_WHERE)
info_where[0] = Object.values(info_where[0]);
info_where = JSON.stringify(info_where, null, 10).replace(/[\[\]",{}]+/g, '');
info_where = <p style={{ minHeight: '5vh'}}>{info_where}</p>

const INFO_QUERY_HOW = defineQuery(`*[_type == "info"]{
  how_to_take_part
  }|order(_createdAt asc)`)
var info_how = await client.fetch(INFO_QUERY_HOW)
info_how[0] = Object.values(info_how[0]);
info_how = JSON.stringify(info_how, null, 10).replace(/[\[\]",{}]+/g, '');
info_how = <p style={{ minHeight: '5vh'}}>{info_how}</p>

const INFO_QUERY_ADD = defineQuery(`*[_type == "info"]{
  additional_info
  }|order(_createdAt asc)`)
var info_add = await client.fetch(INFO_QUERY_ADD)
info_add[0] = Object.values(info_add[0]);
info_add = JSON.stringify(info_add, null, 10).replace(/[\[\]"{}]+/g, '');
info_add = <p style={{ minHeight: '5vh'}}>{info_add}</p>

export default function Home() {
  return (
    <div className="text-center" style={{ minHeight: '75vh', fontSize: '20px', fontFamily: 'Arial'}}>
      {info_what}
      {info_when}
      {info_where}
      {info_how}
      {info_add}
    </div>
  );
}