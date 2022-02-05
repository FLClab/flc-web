import React from 'react';
import "./Gallery.css";
import GalleryImage from "./GalleryImage";
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
            "img": BassoonHomer,
            "label": "Bassoon (STED, Magenta), Homer (STED, Cyan) and Actin (Confocal, Green)",
            "credit": "Theresa Wiesner",
        },
        {
            "id": 1,
            "img": actinSpectrin,
            "label": "Actin (Green) and Spectrin (Red), confocal (Left) and STED (Right)",
            "credit": "Flavie Lavoie-Cardinal",
        },
        {
            "id": 2,
            "img": confocalSted,
            "label": "F-Actin confocal (Left) and STED (Right)",
            "credit": "Flavie Lavoie-Cardinal",
        },
        {
            "id": 3,
            "img": cultures,
            "label": "Neuronal cultures, MAP2 (Green), GFAP (Red), Dapi (Blue)",
            "credit": "Lauence Émond and Francine Nault",
        },
        {
            "id": 4,
            "img": Tubulin,
            "label": "Tubulin labelled with Abberior LIVE 610-Tubulin",
            "credit": "Andréanne Deschênes",
        },
        {
            "id": 5,
            "img": synapticProteins,
            "label": "Synaptic Proteins; PSD95 (STED, Green), Bassoon (STED, Red), Actin (Confocal, Blue)",
            "credit": "Theresa Wiesner",
        }
    ]

    return (
       <div className="gallery__container">
           <div className="row__images">
                {images.map( (image) => (
                    <div key={image.id} className="wrapper">
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