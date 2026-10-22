import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity'

const PHOTO_QUERY = defineQuery(`*[_type == "photos" && year == 2026]{
    "imageUrl": image.asset->url}`)
var photos = await client.fetch(PHOTO_QUERY)
for(let i=0; i<photos.length; i++){
    photos[i] = Object.values(photos[i]);
    photos[i] = JSON.stringify(photos[i]).replace(/[\[\]{}",]+/g, '');
    photos[i] = <div key={i} className="gallery-item"><img src={photos[i]} alt="photo" width={400} height={300} onClick={() => expandImg()}/></div>
}

function expandImg(){
    var modal = document.getElementById("modal") as HTMLDivElement;
    var span = document.getElementsByClassName("close")[0] as HTMLSpanElement;

    span.onclick = function() {
        modal.style.display = "none";
    }

    var images = document.getElementsByTagName('img');
    var modalImg = document.getElementById("img01") as HTMLImageElement;
    for (let i = 0; i < images.length; i++){
        images[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = images[i].src;
            modalImg.alt = images[i].alt;
        }
    }
}

export default function Photos({ image }: {image: String}) {
    return (
        <div>
            <div className="gallery">
                {photos}
            </div>
            <div id="modal" className="modal">
                <span className="close">x</span>
                <img className="modal-content" id="img01"/>
            </div>
        </div>
    )
}