import React from 'react';
import "./Affiliations.css";
import CERVO from "./img/logos/image1.png";
import UNIQUE from "./img/logos/UNIQUE.png";
import RBIQ from "./img/logos/RBIQ_standard.gif";
import crdm_ul from "./img/logos/image5.png";
import CERVIM from "./img/logos/image2.png";
import IID from "./img/logos/image3.png";
import Laval from "./img/logos/image4.jpeg";

function Affiliations() {
    return (
        <div className="logos__container">
            <a href="https://cervo.ulaval.ca/en" className="logo__item">
                <img src={CERVO}></img>
            </a>
            <a href="https://www.ulaval.ca/la-recherche/unites-de-recherche/centres-de-recherche-reconnus/centre-de-recherche-en-robotique-vision-et-intelligence-machine-cervim" className="logo__item">
                <img src={CERVIM}></img>
            </a>
            <a href="https://iid.ulaval.ca/" className="logo__item">
                <img src={IID}></img>
            </a>
            <a href="https://ulaval.ca/" className="logo__item">
                <img src={Laval}></img>
            </a>
            <a href="https://crdm.ulaval.ca/" className="logo__item">
                <img src={crdm_ul}></img>
            </a>
            <a href="https://rbiq-qbin.qc.ca/" className="logo__item">
                <img src={RBIQ}></img>
            </a>
            <a href="https://https://sites.google.com/view/unique-neuro-ai/home" className="logo__item">
                <img src={UNIQUE}></img>
            </a>
        </div>
    )
}

export default Affiliations;