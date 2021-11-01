import React from 'react';
import "./Funding.css";
import CERVO from "./img/logos/FondationCERVO.png";
import GQ from "./img/logos/GQ-Logo-2.png";
import NSERC from "./img/logos/image6.png";
import INNO from "./img/logos/image7.png";
import Sentinelle from "./img/logos/image9.png";
import FRQNT from "./img/logos/image10.png";
import FRQS from "./img/logos/image11.png";
import chaires from "./img/logos/image12.png";
import CIFAR from "./img/logos/image13.png";
import NEURONEX from './img/logos/logo-neuronex.svg';
import NF from './img/logos/NewFrontiers.svg';

function Funding() {
    return (
        <div className="funding__container">
            <div className="funding__row">
                <a href="https://fondationcervo.com/" className="logo__item">
                    <img src={CERVO}></img>
                </a>
                <a href="https://www.nserc-crsng.gc.ca/" className="logo__item">
                    <img src={NSERC}></img>
                </a>
                <a href="https://www.innovation.ca/" className="logo__item">
                    <img src={INNO}></img>
                </a>
                <a href="https://sentinellenord.ulaval.ca/" className="logo__item">
                    <img src={Sentinelle}></img>
                </a>
                <a href="https://frq.gouv.qc.ca/nature-et-technologies/" className="logo__item">
                    <img src={FRQNT}></img>
                </a>
                <a href="https://frq.gouv.qc.ca/sante/" className="logo__item">
                    <img src={FRQS}></img>
                </a>
            </div>
            <div className="funding__row">
                <a href="https://www.chairs-chaires.gc.ca/home-accueil-fra.aspx" className="logo__item-chaires">
                    <img src={chaires}></img>
                </a>
                <a href="https://cifar.ca" className="logo__item">
                    <img src={CIFAR}></img>
                </a>
                <a href="https://neuronex.org/" className="logo__item">
                    <img src={NEURONEX}></img>
                </a>
                <a href="https://www.sshrc-crsh.gc.ca/funding-financement/nfrf-fnfr/index-eng.aspxs" className="logo__item">
                    <img src={NF}></img>
                </a>
                <a href="https://www.genomequebec.com/" className="logo__item">
                    <img src={GQ}></img>
                </a>
            </div>
        </div>
    )
}

export default Funding;