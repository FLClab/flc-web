import React, {useState, useEffect} from 'react';
import "./Nav.css";

function Nav(){
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 120){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__white"}`}>
            <a className={`nav__logo ${show && "nav__logo-white"}`} href="#home">FLC Lab</a>
            <div className="nav__link-container">
                <a className={`nav__link ${show && "nav__link-white"}`}href="#introduction">Introduction</a>
                <a className={`nav__link ${show && "nav__link-white"}`}href="#members">Members</a>
                <a className={`nav__link ${show && "nav__link-white"}`}href="#gallery">Gallery</a>
                <a className={`nav__link ${show && "nav__link-white"}`}href="#publications">Publications</a>
                <a className={`nav__link ${show && "nav__link-white"}`}href="#funding">Funding</a>
                <a className={`nav__link ${show && "nav__link-white"}`}href="#contact">Contact Us</a>
            </div>
            
        </div>
    )

}

export default Nav;