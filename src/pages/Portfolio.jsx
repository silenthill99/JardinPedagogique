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
                    <a key={image.alt} href={image.link} target={"_blank"}>
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
        link: "23 mars  - 3e Forum Citoyen Responsabilité écologique.png",
        alt: "Affiche"
    },
    {
        link: "418171939_1376080656561973_1780255866686462083_n.jpg",
        alt: "Tableau"
    },
    {
        link: "419044626_1376080719895300_3984056632727648427_n.jpg",
        alt: "Présentation"
    }
]

export default Portfolio;