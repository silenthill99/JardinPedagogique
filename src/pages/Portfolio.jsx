import React from 'react';
import "../css/Portfolio.css"

const Portfolio = () => {
    document.title = "Portfolio | jardin pédagogique"
    return (
        <div>
            <h1 style={{
                textAlign:"center"
            }}>Portfolio</h1>
            <div className="portfolio">
                {imageLink.map((image) => (
                    <a key={image.id} href={image.link} target={"_blank"}>
                        <img src={image.link} alt={image.alt}/>
                        <div>
                            Voir la photo
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

const imageLink = [
    {
        link: "1 - 23 mars  - 3e Forum Citoyen Responsabilité écologique.png",
        alt: "Affiche",
        id: 1
    },
    {
        link: "2 - 418171939_1376080656561973_1780255866686462083_n.jpg",
        alt: "Tableau",
        id: 2
    },
    {
        link: "3 - 419044626_1376080719895300_3984056632727648427_n.jpg",
        alt: "Présentation",
        id: 3
    },
    {
        link: "4 - 419324800_1376080636561975_3928395571157246398_n.jpg",
        alt: "Atelier",
        id: 4
    },
    {
        link: "5 - 420203580_1376080626561976_4037523779686633588_n.jpg",
        alt: "Atelier 2",
        id: 5
    },
    {
        link: "6 - 420478381_1376080606561978_873995250332830573_n.jpg",
        alt: "Atelier 3",
        id: 6
    },
    {
        link: "7 - IMG_20240328_155410.jpg",
        alt: "Cabanon",
        id: 7
    }
]

export default Portfolio;