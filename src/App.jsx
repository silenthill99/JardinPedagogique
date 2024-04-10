import './css/App.css'
import Home from "./pages/Home.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { SiInternetexplorer } from "react-icons/si";
import Portfolio from "./pages/Portfolio.jsx";
import Présentation from "./pages/Présentation.jsx";

function App() {
    return (
        <>
            <header>
                <div>
                    <img src={"potager.jpg"} width={300} alt={"Logo de l'e2c"}/>
                    <h1>Jardin citoyen</h1>
                    <img src={"logo e2c.png"} alt={"Potager"}/>
                </div>
                <nav>
                    <NavLink to="">Accueil</NavLink>
                    <NavLink to="portfolio">Portfolio</NavLink>
                    <NavLink to="presentation">Nous présenter</NavLink>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="portfolio" element={<Portfolio/>}/>
                    <Route path="presentation" element={<Présentation/>}/>
                </Routes>
            </main>
            <footer>
                <h2>Nous contacter</h2>
                <a href="https://www.facebook.com/E2CNievre" target={"_blank"}>
                    <FaFacebook size={50}/>
                </a>
                <a href="https://e2cnievre.fr" target={"_blank"}>
                    <SiInternetexplorer size={50}/>
                </a>
            </footer>
        </>
    )
}

export default App
