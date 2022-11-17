import React from 'react';
import DynamicAlumniSet from './DynamicAlumniSet';
import img_Alexandre from "./img/members/Alexandre_Boulay_crop.JPG";
import img_GabLeclerc from "./img/members/Gabriel_Leclerc.png";
import img_Philippe from "./img/members/Philippe_Gagnon_crop.png";
import img_Marie from "./img/members/Marie_crop.jpg";
import img_Samuel from "./img/members/Samuel_crop.jpg";
import img_PhilGT from "./img/members/PhilippeGT_crop.jpg";
import synapses from "./img/gallery/cultures.png";
import img_ELodie from"./img/members/ElodieMoth_crop.jpg";
import img_Eric from "./img/members/EricBergeron_crop.jpg";
import strings from './strings.json'
import "./AlumniPage.css"
import {FaRegArrowAltCircleLeft} from 'react-icons/fa';
import {Link} from 'react-router-dom'

function AlumniPage(){
    let alumniSet1 = [
        {"alumni": strings.Alumni.Alexandre, "img": img_Alexandre},
        {"alumni": strings.Alumni.Bastian, "img": synapses},
        {"alumni": strings.Alumni.Elodie, "img": img_ELodie},
        {"alumni": strings.Alumni.Eric, "img": img_Eric}
    ]

    let alumniSet2 = [
        {"alumni": strings.Alumni.Gabrielle, "img": synapses},
        {"alumni": strings.Alumni.Gabriel, "img": img_GabLeclerc},
        {"alumni": strings.Alumni.LouisEmile, "img": synapses},
        {"alumni": strings.Alumni.MarcAntoine, "img": synapses},
    ]

    let alumniSet3 = [
        {"alumni": strings.Alumni.Mariame, "img": synapses},
        {"alumni": strings.Alumni.Marie, "img": img_Marie},
        {"alumni": strings.Alumni.Philippe, "img": img_Philippe},
        {"alumni": strings.Alumni.PhilippeGT, "img": img_PhilGT}
    ]

    let alumniSet4 = [
        {"alumni": strings.Alumni.Samuel, "img": img_Samuel}
    ]

    return (
        <div className="alumni-page__container">
            <Link className="back" to="/">
                <span className="back__icon"><FaRegArrowAltCircleLeft /></span>
                <span className="back__label">{strings.back}</span>
            </Link>
            <div className="alumnipage__label">
            {strings.Members.alumni}
            </div>

            <DynamicAlumniSet
                data={alumniSet1}
            />
            <DynamicAlumniSet
                data={alumniSet2}
            />
            <DynamicAlumniSet
                data={alumniSet3}
            />

             <DynamicAlumniSet
                data={alumniSet4}
             />
        </div>

    )
}

export default AlumniPage;
