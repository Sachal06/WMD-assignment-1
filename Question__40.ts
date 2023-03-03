
let Artist = make_album("Ed Sherran","ED 2023 Album",6);
console.log(Artist);
console.log(Artist.artist_name);
console.log(Artist.album_title);
console.log(Artist.number_of_tracks);

let Artist_1 = make_album("Bilal Saeed","New 2023",5);
console.log(Artist_1);
console.log(Artist_1.artist_name);
console.log(Artist_1.album_title);
console.log(Artist_1.number_of_tracks);

let Artist_2 = make_album("Sidhu Mossewala","BacktoBack",25);
console.log(Artist_2);
console.log(Artist_2.artist_name);
console.log(Artist_2.album_title)
console.log(Artist_2.number_of_tracks);

function make_album(artist : string, title : string, tracks :  number){
    return {
        artist_name : artist,
        album_title : title,
        number_of_tracks : tracks
    }
}

