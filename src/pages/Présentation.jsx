import React from 'react';

const Présentation = () => {
    document.title = "Nous présenter | jardin pédagogique"
    return (
        <>
            <h1>Qui sommes nous ?</h1>
            <h2>École de la 2e chance</h2>
            <ul>
                <li>Benoît PARAUT (Formateur référent e2c Cosne)</li>
                <li>Anaïs CHOTARD (Stagiaire e2c Cosne)</li>
                <li>Joffrey SENE (Stagiaire e2c Cosne)</li>
                <li>Eric VANG (Stagiaire e2c Cosne)</li>
                <li>Florian GRAZIANI (Stagiaire e2c Cosne / Concepteur du site internet)</li>
            </ul>
            <h2>Conseil municipal de Cosne-cours sur Loire</h2>
        </>
    );
};

export default Présentation;