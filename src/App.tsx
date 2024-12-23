import Home from "./pages/Home";
import {NavLink, Route, Routes} from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { SiInternetexplorer } from "react-icons/si";
import Portfolio from "./pages/Portfolio";
import Présentation from "./pages/Présentation";
import Videos from "./pages/Videos";

function App() {
    return (
        <div className={"min-h-screen flex flex-col"}>
            <header>
                <div className="flex justify-between items-center text-center container mx-auto flex-wrap">
                    <img src={"potager.jpg"} width={300} alt={"Logo de l'e2c"}/>
                    <h1>Jardin citoyen</h1>
                    <img src={"logo e2c.png"} alt={"Potager"}/>
                </div>
                <nav className={"flex justify-center bg-gradient-to-b from-purple-500 to-pink-500 text-white"}>
                    <NavLink to="" className={(nav)=>nav.isActive ? "m-1 p-1 hover:underline border border-white" : "m-1 p-1 hover:underline"}>Accueil</NavLink>
                    <NavLink to="portfolio" className={(nav)=>nav.isActive ? "m-1 p-1 hover:underline border border-white" : "m-1 p-1 hover:underline"}>Portfolio</NavLink>
                    <NavLink to="presentation" className={(nav)=>nav.isActive ? "m-1 p-1 hover:underline border border-white" : "m-1 p-1 hover:underline"}>Nous présenter</NavLink>
                    <NavLink to={"videos"} className={(nav)=>nav.isActive ? "m-1 p-1 hover:underline border border-white" : "m-1 p-1 hover:underline"}>Vidéos</NavLink>
                </nav>
            </header>
            <main className={"grow"}>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="portfolio" element={<Portfolio/>}/>
                    <Route path="presentation" element={<Présentation/>}/>
                    <Route path={"videos"} element={<Videos/>}/>
                </Routes>
            </main>
            <footer className={"p-5 text-white h-52 bg-purple-600"}>
                <h2 className={"underline"}>Nous contacter</h2>
                <div className={"flex"}>
                    <a href="https://www.facebook.com/E2CNievre" target={"_blank"}>
                        <FaFacebook className={"translate-y-1/2 hover:opacity-50"} size={50}/>
                    </a>
                    <a href="https://e2cnievre.fr" target={"_blank"}>
                        <SiInternetexplorer size={50} className={"translate-y-1/2 hover:opacity-50"}/>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default App
