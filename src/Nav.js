import React, {useState, useEffect} from 'react';
import "./Nav.css";
import "./App";

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

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={`nav ${show && "nav__white"}`}>
            <a className={`nav__logo ${show && "nav__logo-white"}`} href="#home" onClick={scrollToTop}>FLC Lab</a>
            <div className="nav__link-container">
                <a className={`nav__link ${show && "nav__link-white"}`} href="#intro-section">Introduction</a>
                <a className={`nav__link ${show && "nav__link-white"}`} href="#members-section">Members</a>
                <a className={`nav__link ${show && "nav__link-white"}`} href="#gallery-section">Gallery</a>
                <a className={`nav__link ${show && "nav__link-white"}`} href="#publications-section">Publications</a>
                <a className={`nav__link ${show && "nav__link-white"}`} href="#funding-section">Funding</a>
                <a className={`nav__link ${show && "nav__link-white"}`} href="#contact-section">Contact Us</a>
            </div>
            
        </div>
    )

}

export default Nav;