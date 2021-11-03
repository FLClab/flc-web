import React, { useState } from 'react';
import "./Gallery.css";
import actinCamkii from "./img/gallery/actin-camkii.png";
import BassoonHomer from "./img/gallery/BassoonHomer.png"
import actinSpectrin from "./img/gallery/ActinSpectrin.png";
import confocalSted from "./img/gallery/confocal-sted-actin.png";
import cultures from "./img/gallery/cultures.png";
import Tubulin from "./img/gallery/LIVE610_Tubulin.png";
import synapticProteins from "./img/gallery/SynapticProteins.png";


function Gallery(){
    const [inFocus0, setInFocus0] = useState(false);
    const [inFocus1, setInFocus1] = useState(false);
    const [inFocus2, setInFocus2] = useState(false);
    const [inFocus3, setInFocus3] = useState(false);
    const [inFocus4, setInFocus4] = useState(false);
    const [inFocus5, setInFocus5] = useState(false);
    const [inFocus6, setInFocus6] = useState(false);
    
    const images = [
        {
            "id": 0,
            "img": actinCamkii,
            "label": "Actin and CamkII",
            "inFocus": inFocus0
        },
        {
            "id": 1,
            "img": BassoonHomer,
            "label": "Bassoon Homer",
            "inFocus": inFocus1
        }, 
        {
            "id": 2,
            "img": actinSpectrin,
            "label": "Actin Spectrin",
            "inFocus": inFocus2
        },
        {
            "id": 3,
            "img": confocalSted,
            "label": "Confocal & STED",
            "inFocus": inFocus3
        },
        {
            "id": 4,
            "img": cultures,
            "label": "Cultures",
            "inFocus": inFocus4
        },
        {  
            "id": 5,
            "img": Tubulin,
            "label": "Tubulin",
            "inFocus": inFocus5
        },
        {
            "id": 6,
            "img": synapticProteins,
            "label": "Synaptic Proteins",
            "fcn": inFocus6,
        }
    ]

    const onmouseover = (id) => {  
        switch(id){
            case 0: {
                setInFocus0(true);
                break;
            }
            case 1: {
                setInFocus1(true);
                break;
            }
            case 2: {
                setInFocus2(true);
                break;
            }
            case 3: {
                setInFocus3(true);
                break;
            }
            case 4: {
                setInFocus4(true);
                break;
            }
            case 5: {
                setInFocus5(true);
                break;
            }
            case 6: {
                setInFocus6(true);
                break;
            }
            default: {
                break;
            }
        }
        
    }

    const onmouseout = (id) => {
        switch(id){
            case 0: {
                setInFocus0(false);
                break;
            }
            case 1: {
                setInFocus1(false);
                break;
            }
            case 2: {
                setInFocus2(false);
                break;
            }
            case 3: {
                setInFocus3(false);
                break;
            }
            case 4: {
                setInFocus4(false);
                break;
            }
            case 5: {
                setInFocus5(false);
                break;
            }
            case 6: {
                setInFocus6(false);
                break;
            }
            default: {
                break;
            }
        }
    }

    return (
        <div className="gallery__container">
            <div className="row__images">
                {images.map((image) => (
                    <div className="wrapper">
                        <div 
                            key={image.id}
                            className="image__container"
                            style={{ backgroundImage: `url('${image.img}')`, backgroundSize: "cover", backgroundPositionX: "center" }}
                            onMouseOver={() => onmouseover(image.id)}
                            onMouseOut={() => onmouseout(image.id)}
                        ></div>
                        {image.inFocus && <div id={image.id} className="image__label" >{image.label}</div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery;