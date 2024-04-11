import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel";
import "../css/Diaporama.css"

const Diaporama = () => {
    const datas = [
        {
            id: 1,
            image: "3 - 419044626_1376080719895300_3984056632727648427_n.jpg",
        },
        {
            id: 2,
            image: "4 - 419324800_1376080636561975_3928395571157246398_n.jpg",
        },
        {
            id: 3,
            image: "5 - 420203580_1376080626561976_4037523779686633588_n.jpg",
        }
    ]

    return (
        <div>
            <h3 style={{
                textAlign: "center"
            }}>Quelques images du conseil du 23 mars</h3>
            <Carousel
                autoPlay
                infiniteLoop
                interval={6000}
                thumbWidth={120}
                showIndicators={false}
                showStatus={false}
            >
                {datas.map((slide) => (
                    <div key={slide.id}>
                        <img src={slide.image} alt=""/>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Diaporama;