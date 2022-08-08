import React from 'react';
import AlumniSet from "./AlumniSet";
import img_GabLeclerc from "./img/members/Gabriel_Leclerc.png";
import img_Emile from "./img/members/LouisEmile_Robitaille.png";
import strings from './strings.json'
import "./AlumniPage.css"
import {FaRegArrowAltCircleLeft} from 'react-icons/fa';
import {Link} from 'react-router-dom'

function AlumniPage(){
    return (
        <div className="alumni-page__container">
            <Link className="back" to="/">
                <span className="back__icon"><FaRegArrowAltCircleLeft /></span>
                <span>{strings.back}</span>
            </Link>
            <div className="alumnipage__label">
            {strings.Members.alumni}
            </div>
            <AlumniSet
            img1={img_GabLeclerc}
            alumni1={strings.Alumni.Gabriel}
            img2={img_Emile}
            alumni2={strings.Alumni.LouisEmile}
             />
        </div>

    )
}

export default AlumniPage;