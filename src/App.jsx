import './css/App.css'
import Home from "./pages/Home.jsx";
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="">Accueil</NavLink>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="" element={<Home/>}/>
                </Routes>
            </main>
        </>
    )
}

export default App
