import React from 'react';
import "./Research.css";
import strings from "./strings.json";
import SR_image from "./img/icons/microscope.png";
import ML_image from "./img/icons/machine-learning.png";
import neuro_image from "./img/icons/neurons.png";

function Research(){
    return (
        <div className="research__container">
            <div className="sr__container">
                <img className="research__image" src={SR_image}></img> 
                <div className="sr__research-label">{strings.Research.SuperResolution.label}</div>
                <div className="sr__research-description">{strings.Research.SuperResolution.description}</div>
            </div>
            <div className="ml__container">
                <img className="research__image" src={ML_image}></img> 
                <div className="ml__research-label">{strings.Research.MachineLearning.label}</div>
                <div className="ml__research-description">{strings.Research.MachineLearning.description}</div>
            </div>
            <div className="neuro__container">
                <img className="research__image" src={neuro_image}></img> 
                <div className="neuro__research-label">{strings.Research.Neuro.label}</div>
                <div className="neuro__research-description">{strings.Research.Neuro.description}</div>
            </div>
        </div>
    )

}

export default Research;