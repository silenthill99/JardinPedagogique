import React from 'react';
import "../css/Home.css"
import Diaporama from "../Components/Diaporama.jsx";

const Home = () => {
    document.title = "Accueil | Jardin pédagogique"
    return (
        <div>
            <h1>Page d'accueil</h1>
            <h2 style={{
                textDecoration:"underline"
            }}>Contexte</h2>
            <div className="contexte">
                <p style={{
                    textAlign:"justify"
                }}>Le samedi 23 Mars 2024, les stagiaires de l'école de la 2ème chance de Cosne-Cours sur loire ont été
                    invités pour participer à un projet communal lié à l'environment. Parmi les différents projets qui
                    ont été proposés, celui de faire un jardin partagé a été retenu.
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </p>
                <Diaporama/>
            </div>
        </div>
    );
};

export default Home;