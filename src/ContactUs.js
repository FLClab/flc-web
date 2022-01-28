import React from 'react';
import "./ContactUs.css"
import { FaEnvelope, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import strings from "./strings.json";
import scholar_logo from "./img/icons/Google_Scholar_logo.svg";

function ContactUs({description, email}){

    const onMailHover = () => {
        document.getElementById("email").style.color = "#ff9100";
    };

    const onMailOut = () => {
        document.getElementById("email").style.color = "white";
    }

    const onLocationHover = () => {
        document.getElementById("maps").style.color = "#ff9100";
    }
    
    const onLocationOut = () => {
        document.getElementById("maps").style.color = "white";
    }

    const onTwitterHover = () => {
        document.getElementById("twitter__ref").style.color = "#ff9100";
    }

    const onTwitterOut = () => {
        document.getElementById("twitter__ref").style.color = "white";
    }

    const onScholarHover = () => {
        document.getElementById("scholar__ref").style.color = "#ff9100";
    }

    const onScholarOut = () => {
        document.getElementById("scholar__ref").style.color = "white";
    }

    return (
        <div className="contact__container">
            <div className="contact-us">
                {description}
            </div>
            <div className="contact__row">
                <div className="mail">
                    <div className="mail__icon"> <FaEnvelope /></div>
                    <a id="email" className="email" href="mailto:flavie.lavoie-cardinal@cervo.ulaval.ca" onMouseOver={onMailHover} onMouseOut={onMailOut}>{email}</a>
                </div>
                <div className="location">
                    <div className="location__icon"><FaMapMarkerAlt /></div>
                    <a id="maps" 
                        className="maps" 
                        href="https://www.google.com/maps/place/Centre+de+recherche+CERVO/@46.8435901,-71.2187097,15z/data=!4m5!3m4!1s0x4cb8bd92afd86bbd:0xa6b4594c3294e4f7!8m2!3d46.8491853!4d-71.2206768"
                        onMouseOver={onLocationHover}
                        onMouseOut={onLocationOut}
                        >
                        Location on Maps
                    </a>
                </div>
            </div>
            <div className="contact__last-row">
                <div className="twitter">
                    <div className="twitter__icon"><FaTwitter /></div>
                    <a id="twitter__ref"
                        className="twitter__ref"
                        href="https://twitter.com/FlcLab"
                        onMouseOver={onTwitterHover}
                        onMouseOut={onTwitterOut}
                    >
                        Twitter
                    </a>
                </div>
                <div className="scholar">
                    <img className="scholar_img" src={scholar_logo} alt=""></img>
                    <a id="scholar__ref"
                        className="scholar__ref"
                        href={strings.Members.Flavie.scholar}
                        onMouseOver={onScholarHover}
                        onMouseOut={onScholarOut}
                    >
                        Google Scholar
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default ContactUs;