import React from 'react';
import "../css/Diaporama.css"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Diaporama = () => {
    return (
        <div className={"diapo"}>
            <div className="elements">
                <div className="element active">
                    <img src={"3 - 419044626_1376080719895300_3984056632727648427_n.jpg"} alt="Image 1"/>
                    <div className="caption">
                        <h2>Image 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nesciunt?</p>
                    </div>
                </div>
                <div className="element">
                    <img src={"4 - 419324800_1376080636561975_3928395571157246398_n.jpg"} alt="Image 2"/>
                    <div className="caption">
                        <h2>Image 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, sit.</p>
                    </div>
                </div>
            </div>
            <FaArrowAltCircleLeft id="nav-gauche" className="las la-chevron-left"/>
            <FaArrowAltCircleRight id="nav-droite" className="las la-chevron-right"/>
        </div>
    );
};

export default Diaporama;