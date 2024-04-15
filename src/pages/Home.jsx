import React from 'react';
import "../css/Home.css"
import Diaporama from "../Components/Diaporama.jsx";

const Home = () => {
    document.title = "Accueil | Jardin pédagogique"
    return (
        <>
            <h1 style={{
                textAlign:"center"
            }}>Page d'accueil</h1>
            <h2 style={{
                marginLeft:"2.5%",
                textDecoration:"underline"
            }}>Contexte</h2>
            <div className="contexte">
                <div>
                    <p style={{
                        textAlign: "justify"
                    }}>Le samedi 23 Mars 2024, les stagiaires de l'école de la 2ème chance de Cosne-Cours sur loire ont
                        été
                        invités pour participer à un projet communal lié à l'environnement. Parmi les différents projets
                        qui
                        ont été proposés, celui de faire un jardin partagé a été retenu.
                    </p>
                    <p>
                        En parallèle de ce projet de jardin partagé, l'école de la 2ème chance a mis en place, avec le
                        conseil municipal de la commune, un projet de jardin partagé, dans lequel chaque citoyens de
                        Cosne-Cours sur Loire pourront participer.
                    </p>
                    <h2>Quelques définitions d'un jardin partagé</h2>
                    <ul>
                        <li>Lieu de vie ouvert sur le quartier, convivial, qui favorise les rencontres entre
                            générations et entre cultures.</li>
                        <li>Terrain cultivable ou en friche mis à la disposition d’habitants d’une ville qui ne
                            bénéficient pas d’espace de verdure.</li>
                        <li>Jardin qui se conçoit, se construit et se cultive collectivement.</li>
                    </ul>
                </div>
                <Diaporama/>
            </div>
        </>
    );
};

export default Home;