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
            "label": "F-Actin (red), CaMKII (Green) and PSD95 (Blue)",
            "credit": "Bastian Raulier",
        },
        {
            "id": 1,
            "img": BassoonHomer,
            "label": "Bassoon (Magenta), Homer (Cyan) and Actin (Green)",
            "credit": "Theresa Wiesner",
        },
        {
            "id": 2,
            "img": actinSpectrin,
            "label": "Actin (Green) and Spectrin (Red), confocal (Left) and STED (Right)",
            "credit": "Flavie Lavoie-Cardinal",
        },
        {
            "id": 3,
            "img": confocalSted,
            "label": "F-Actin confocal (Left) and STED (Right)",
            "credit": "N/A",
        },
        {
            "id": 4,
            "img": cultures,
            "label": "Cultures",
            "credit": "Lauence Émond and Francine Nault",
        },
        {
            "id": 5,
            "img": Tubulin,
            "label": "Tubulin in live neurons laabelled with Abberior LIVE 610-Tubulin",
            "credit": "Andréanne Deschênes",
        },
        {
            "id": 6,
            "img": synapticProteins,
            "label": "Synaptic Proteins; PSD95 (Green), Bassoon (Red), Actin (Confocal, Blue)",
            "credit": "Theresa Wiesner",
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