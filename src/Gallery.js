import React from 'react';
import "./Gallery.css";
import GalleryImage from "./GalleryImage";
import actinCamkii from "./img/gallery/actin-camkii.png";
import BassoonHomer from "./img/gallery/BassoonHomer.png"
import actinSpectrin from "./img/gallery/ActinSpectrin.png";
import confocalSted from "./img/gallery/confocal-sted-actin.png";
import cultures from "./img/gallery/cultures.png";
import Tubulin from "./img/gallery/LIVE610_Tubulin.png";
import synapticProteins from "./img/gallery/SynapticProteins.png";

function Gallery() {
    const images = [
        {
            "id": 0,
            "img": actinCamkii,
            "label": "Actin and CaMKII",
            "credit": "N/A",
        },
        {
            "id": 1,
            "img": BassoonHomer,
            "label": "Bassoon and Homer",
            "credit": "N/A",
        },
        {
            "id": 2,
            "img": actinSpectrin,
            "label": "Actin and Spectrin",
            "credit": "N/A",
        },
        {
            "id": 3,
            "img": confocalSted,
            "label": "F-Actin confocal and STED",
            "credit": "N/A",
        },
        {
            "id": 4,
            "img": cultures,
            "label": "Cultures",
            "credit": "N/A",
        },
        {
            "id": 5,
            "img": Tubulin,
            "label": "Tubulin",
            "credit": "N/A",
        },
        {
            "id": 6,
            "img": synapticProteins,
            "label": "Synaptic Proteins",
            "credit": "N/A",
        }
    ]

    return (
       <div className="gallery__container">
           <div className="row__images">
                {images.map( (image) => (
                    <div className="wrapper">
                        <GalleryImage 
                            id={image.id}
                            imgSrc={image.img}
                            credit={image.credit}
                            label={image.label}
                        />
                    </div>
                ))}
            </div>
       </div>
    )

}

export default Gallery;