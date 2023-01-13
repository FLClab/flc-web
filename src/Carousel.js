import React, { useState } from 'react';
import "./Carousel.css";
import GalleryImage from "./GalleryImage";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import BassoonHomer from "./img/gallery/BassoonHomer.png"
import actinSpectrin from "./img/gallery/ActinSpectrin.png";
import confocalSted from "./img/gallery/confocal-sted-actin.png";
import cultures from "./img/gallery/cultures.png";
import Tubulin from "./img/gallery/LIVE610_Tubulin.png";
import synapticProteins from "./img/gallery/SynapticProteins.png";
import Fourcolors from "./img/gallery/4colors_VCF_february2022.png";

function Carousel(){
    const images = [

        {
            "id": 0,
            "img": BassoonHomer,
            "label": "Bassoon (STED, Magenta), Homer (STED, Cyan) and Actin (Confocal, Green)",
            "credit": "Theresa Wiesner",
        },
        {
            "id": 1,
            "img": actinSpectrin,
            "label": "Actin (Green) and Spectrin (Red), confocal (Left) and STED (Right)",
            "credit": "Flavie Lavoie-Cardinal and Mado Lemieux",
        },
        {
            "id": 2,
            "img": Tubulin,
            "label": "Tubulin labelled with Abberior LIVE 610-Tubulin",
            "credit": "Andréanne Deschênes",
        },
                {
            "id": 3,
            "img": Fourcolors,
            "label": "SMI31 (Confocal, magenta), Actin (STED, green), PSD95 (STED, red), Bassoon (STED, blue)",
            "credit": "Valérie Clavet-Fournier",
        },
                {
            "id":4,
            "img": confocalSted,
            "label": "F-Actin confocal (Left) and STED (Right)",
            "credit": "Flavie Lavoie-Cardinal",
        },
                {
            "id": 5,
            "img": cultures,
            "label": "Neuronal cultures, MAP2 (Green), GFAP (Red), Dapi (Blue)",
            "credit": "Flavie Lavoie-Cardinal",
        },
        {
            "id": 6,
            "img": synapticProteins,
            "label": "Synaptic Proteins; PSD95 (STED, Green), Bassoon (STED, Red), Actin (Confocal, Blue)",
            "credit": "Theresa Wiesner",
        }
    ]

    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const goToSlide = (imageId) => {
        setCurrent(imageId);
    }

    if(!Array.isArray(images) || images.length <= 0){
        return null;
    }

    return (
        <section className="carousel__container">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {images.map( (image) => {
                return (
                    <div className={image.id===current ? 'slide-active': 'slide'} key={image.id}>
                        { image.id === current && 
                            (
                            <div className="carousel-image__container">    
                                <div className="carousel__label">{image.label}</div>
                                <div className="carousel__credit">Image credit: {image.credit}</div>
                                <img className="carousel__image" src={image.img} alt="gallery-image"/>
                            </div>
                            )
                        }
                    </div>
                )
                })
            }
            <div className="dots__container">
                {images.map( (image) => (
                        <div className='carousel-dot' key={image.id} onClick={() => goToSlide(image.id)}>{image.id === current ? "•" : "◦"}</div>
                ))}
            </div>
        </section>
    )
}

export default Carousel;