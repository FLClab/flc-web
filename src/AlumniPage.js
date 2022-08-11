import React from 'react';
import AlumniSet from "./AlumniSet";
import img_Alexandre from "./img/members/Alexandre_Boulay_crop.JPG";
import img_GabLeclerc from "./img/members/Gabriel_Leclerc.png";
import img_Philippe from "./img/members/Philippe_Gagnon_crop.png";
import img_Marie from "./img/members/Marie_crop.jpg";
import img_Samuel from "./img/members/Samuel_crop.jpg";
import img_PhilGT from "./img/members/PhilippeGT_crop.jpg";
import synapses from "./img/gallery/cultures.png";
import strings from './strings.json'
import "./AlumniPage.css"
import {FaRegArrowAltCircleLeft} from 'react-icons/fa';
import {Link} from 'react-router-dom'

function AlumniPage(){
    return (
        <div className="alumni-page__container">
            <Link className="back" to="/">
                <span className="back__icon"><FaRegArrowAltCircleLeft /></span>
                <span className="back__label">{strings.back}</span>
            </Link>
            <div className="alumnipage__label">
            {strings.Members.alumni}
            </div>
            <AlumniSet
                img1={img_Alexandre}
                alumni1={strings.Alumni.Alexandre}
                img2={synapses}
                alumni2={strings.Alumni.Bastian}
                img3={synapses}
                alumni3={strings.Alumni.Elodie}
                img4={synapses}
                alumni4={strings.Alumni.Gabrielle}
             />
             <AlumniSet
                img1={img_GabLeclerc}
                alumni1={strings.Alumni.Gabriel}
                img2={synapses}
                alumni2={strings.Alumni.LouisEmile}
                img3={synapses}
                alumni3={strings.Alumni.MarcAntoine}
                img4={synapses}
                alumni4={strings.Alumni.Mariame}
             />
             <AlumniSet
                img1={img_Marie}
                alumni1={strings.Alumni.Marie}
                img2={img_Philippe}
                alumni2={strings.Alumni.Philippe}
                img3={img_PhilGT}
                alumni3={strings.Alumni.PhilippeGT}
                img4={img_Samuel}
                alumni4={strings.Alumni.Samuel}
             />
        </div>

    )
}

export default AlumniPage;
