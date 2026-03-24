import React from 'react';
import DynamicAlumniSet from './DynamicAlumniSet';
import img_Alexandre from "./img/members/Alexandre_Boulay_crop.JPG";
import img_Alexy from "./img/members/Alexy_crop.jpg";
import img_Alexis from "./img/members/Alexis_Lebrun_crop.jpg";
import img_GabLeclerc from "./img/members/Gabriel_Leclerc.png";
import img_Philippe from "./img/members/Philippe_Gagnon_crop.png";
import img_Marie from "./img/members/Marie_crop.jpg";
import img_Samuel from "./img/members/Samuel_crop.jpg";
import img_PhilGT from "./img/members/PhilippeGT_crop.jpg";
import synapses from "./img/gallery/cultures.png";
import img_ELodie from"./img/members/ElodieMoth_crop.jpg";
import img_Eric from "./img/members/EricBergeron_crop.jpg";
import img_Koraly from "./img/members/Koraly_crop.jpg";
import img_Theresa from "./img/members/Theresa_Wiesner_crop.png";
import img_Vincent from "./img/members/Vincent_Boily_crop.png";
import img_Roseline from "./img/members/RoselineOloryAgomma_crop.jpg";
import img_Renaud from "./img/members/renaud_bernatchez_crop.png";
import img_JeanMichel from "./img/members/JeanMichelBellavance_crop.png";
import img_JGabriel from "./img/members/JGabriel_crop.png";
import img_AnthonyL from "./img/members/AnthonyLavertu_crop.png";
import img_David from "./img/members/DavidVIncent_crop.png";
import img_Albert from "./img/members/Albert_Michaud_crop.png";
import img_Benoit from"./img/members/Benoit_Turcotte_crop.JPG";
import img_William from "./img/members/WilliamL_crop.png";
import img_LaurenceF from "./img/members/LaurenceF_crop.jpg";
import img_Tristan from "./img/members/Tristan.jpg"
import img_Mathieu from "./img/members/Mathieu.jpg";
import img_Rayane from "./img/members/Rayane.jpg";
import strings from './strings.json'
import "./AlumniPage.css"
import {FaRegArrowAltCircleLeft} from 'react-icons/fa';
import {Link} from 'react-router-dom'

function AlumniPage(){

    let alumniSet1 = [
            {"alumni": strings.Alumni.Alexy, "img": img_Alexy},
        {"alumni": strings.Alumni.Mathieu, "img": img_Mathieu},
        {"alumni": strings.Alumni.Rayane, "img": img_Rayane},
        {"alumni": strings.Alumni.Tassnym, "img": synapses},
    ]

    let alumniSet2 = [
        {"alumni": strings.Alumni.Tristan, "img": img_Tristan},
          {"alumni": strings.Alumni.Alexis, "img": img_Alexis},
         {"alumni": strings.Alumni.Camille, "img": synapses},
          {"alumni": strings.Alumni.JGabriel, "img": img_JGabriel},

       
    ]

    let alumniSet3 = [
         {"alumni": strings.Alumni.Ludovic, "img": synapses},
          {"alumni": strings.Alumni.Sacha, "img": synapses},
           {"alumni": strings.Alumni.Zoe, "img": synapses},
              {"alumni": strings.Alumni.Albert, "img": img_Albert},
         

    ]

    let alumniSet4 = [
      
        {"alumni": strings.Alumni.AnthonyL, "img": img_AnthonyL},
        {"alumni": strings.Alumni.Benoit, "img": img_Benoit},
        {"alumni": strings.Alumni.Chi, "img": synapses},
          {"alumni": strings.Alumni.David, "img": img_David},
    
    ]

    let alumniSet5= [
  
                {"alumni": strings.Alumni.JeanMichel, "img": img_JeanMichel},
        {"alumni": strings.Alumni.Koraly, "img": img_Koraly},
          {"alumni": strings.Alumni.Renaud, "img": img_Renaud},
            {"alumni": strings.Alumni.Elodie, "img": img_ELodie},

        
    ]

    let alumniSet6= [
         {"alumni": strings.Alumni.Eric, "img": img_Eric},
      {"alumni": strings.Alumni.LaurenceF, "img": img_LaurenceF},  
       
        {"alumni": strings.Alumni.Marie, "img": img_Marie},
        {"alumni": strings.Alumni.PhilippeGT, "img": img_PhilGT},
    ]

    let alumniSet7= [
       
        {"alumni": strings.Alumni.Roseline, "img": img_Roseline},
         {"alumni": strings.Alumni.Samuel, "img": img_Samuel},
        {"alumni": strings.Alumni.Theresa, "img": img_Theresa},
        {"alumni": strings.Alumni.Vincent, "img": img_Vincent},
    ]

    let alumniSet8 = [
        {"alumni": strings.Alumni.Alexandre, "img": img_Alexandre},     
        {"alumni": strings.Alumni.Gabriel, "img": img_GabLeclerc},
        {"alumni": strings.Alumni.MarcAntoine, "img": synapses},
        {"alumni": strings.Alumni.Mariame, "img": synapses},
    ]

    let alumniSet9 = [
             {"alumni": strings.Alumni.Philippe, "img": img_Philippe},
            {"alumni": strings.Alumni.William, "img": img_William},
            {"alumni": strings.Alumni.Gabrielle, "img": synapses},
            {"alumni": strings.Alumni.LouisEmile, "img": synapses},
        
    ]
    let alumniSet10 = [

             {"alumni": strings.Alumni.Bastian, "img": synapses},
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
             <DynamicAlumniSet
                data={alumniSet5}
             />

              <DynamicAlumniSet
                data={alumniSet6}
             />
             
             <DynamicAlumniSet
                data={alumniSet7}
             />

            <DynamicAlumniSet
                data={alumniSet8}
             />
             <DynamicAlumniSet
                data={alumniSet9}
             />
             <DynamicAlumniSet
                data={alumniSet10}
             />

        </div>

    )
}

export default AlumniPage;
