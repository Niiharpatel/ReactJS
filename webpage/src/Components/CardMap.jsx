import React from 'react'
import MusicCard from './MusicCard'
import './Style.css'

let data = [{
    img: "https://c4.wallpaperflare.com/wallpaper/628/290/367/taylor-swift-singer-celebrity-blonde-taylor-swift-wallpaper-preview.jpg",
    name: "Taylor Swift",
    Genres: "Singer-SongWriter",
    link: "https://www.allmusic.com/artist/taylor-swift-mn0000472102/discography"
}, {
    img: "https://wallpapers.com/images/hd/alluring-ed-sheeran-hd-y9deb32b7kfiob0h.webp",
    name: "Ed Sheeran",
    Genres: "pop, folk-pop,soft rock",
    link: "https://www.allmusic.com/artist/ed-sheeran-mn0002639628/discography"
}, {
    img: "https://c4.wallpaperflare.com/wallpaper/568/340/1003/singers-billie-eilish-american-singer-hd-wallpaper-preview.jpg",
    name: "Billie Eilish",
    Genres: "Electropop,hip-hop,industrial music.",
    link: "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"

}, {
    img: "https://wallpapers.com/images/high/the-weeknd-starboy-9oclki6xfg74lytx.webp",
    name: "The Weeknd",
    Genres: "Pop hip hop alternative R&B",
    link: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
}, {
    img: "https://wallpapers.com/images/high/adele-in-sweater-7u39hj1y8n2m21lx.webp",
    name: "Adele",
    Genres: "Pop soul",
    link: "https://open.spotify.com/album/6TVfiWmo8KtflUAmkK9gGF"
}, {
    img: "https://wallpapers.com/images/high/beautiful-model-dua-lipa-75exk9o0pqqd42sw.webp",
    name: "Dua Lipa",
    Genres: "primarily pop",
    link: "https://open.spotify.com/album/0obMz8EHnr3dg6NCUK4xWp"
}, {
    img: "https://wallpapers.com/images/high/charlie-puth-city-view-bs66e1qfslsniopj.webp",
    name: "Charlie Puth",
    Genres: "Pop R&B",
    link: "https://open.spotify.com/album/2LTqBgZUH4EkDcj8hdkNjK"
}, {
    img: "https://wallpapers.com/images/featured/selena-gomez-7xfoy663ewracf9y.webp",
    name: "Selena Gomez",
    Genres: "Pop dance-pop electropop",
    link: "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
}, {
    img: "https://wallpapers.com/images/featured/adam-levine-vik3w29d9kz3tqxi.webp",
    name: "Adam Levine",
    Genres: "Pop rock pop funk rock neo soul",
    link: "https://open.spotify.com/artist/4bYPcJP5jwMhSivRcqie2n"
}, {
    img: "https://wallpapers.com/images/hd/pretty-katy-perry-portrait-7ko1hauu4otvxs0j.webp",
    name: "Katy Perry",
    Genres: "Pop rock pop funk rock neo soul",
    link: "https://www.allmusic.com/artist/katy-perry-mn0000859589/discography"
}]




function CardMap() {

    return (
        <>

            <div className='cardflex'>
                {data.map((e, i) => {
                    return <MusicCard getdata={e} key={i} />;
                })}
            </div>
        </>
    )
}

export default CardMap