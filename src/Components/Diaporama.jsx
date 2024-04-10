import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel";
import "../css/Diaporama.css"

const Diaporama = () => {
    const datas = [
        {
            id: 1,
            image: "3 - 419044626_1376080719895300_3984056632727648427_n.jpg",
            titre: "Image du slider 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, necessitatibus!"
        },
        {
            id: 2,
            image: "4 - 419324800_1376080636561975_3928395571157246398_n.jpg",
            titre: "Image du slider 2",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, necessitatibus!"
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