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
    }
]

export default Portfolio;