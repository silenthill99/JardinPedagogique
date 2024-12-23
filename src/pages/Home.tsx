/* eslint-disable */
import Diaporama from "../Components/Diaporama";

const Home = () => {
    document.title = "Accueil | Jardin pédagogique"
    return (
        <div className={"container mx-auto"}>
            <h1 className={"text-center"}>Page d'accueil</h1>
            <h2 className={"underline"}>Contexte</h2>
            <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                    <p className={"text-justify"}>Le samedi 23 Mars 2024, les stagiaires de l'école de la 2ème chance de Cosne-Cours sur loire ont
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
        </div>
    );
};

export default Home;