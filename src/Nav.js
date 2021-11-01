import React, {useState, useEffect} from 'react';
import "./Nav.css";
import "./App";

function Nav({active}){
    const [show, handleShow] = useState(false);
    const [activeNone, setActiveNone] = useState(false);
    const [activeIntro, setActiveIntro] = useState(false);
    const [activeMembers, setActiveMembers] = useState(false);
    const [activeGallery, setActiveGallery] = useState(false);
    const [activePublications, setActivePublications] = useState(false);
    const [activeFunding, setActiveFunding] = useState(false);
    const [activeContact, setActiveContact] = useState(false); 

    const navScroll = 0;
    const introScroll = 505;
    const memberScroll = 1667;
    const galleryScroll = 3589;
    const pubScroll = 3758;
    const fundingScroll = 4537;
    const contactScroll = 4610;


    useEffect(() => {
        // terribly ugly code but it works olé
        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;
            if (window.scrollY > 120){
                handleShow(true);
            } else handleShow(false);

            if (currentScroll >= navScroll && currentScroll < introScroll ){
                setActiveNone(true);
                setActiveIntro(false);
                setActiveMembers(false);
                setActiveGallery(false);
                setActivePublications(false);
                setActiveFunding(false);
                setActiveContact(false);
            } else if (currentScroll >= introScroll && currentScroll < memberScroll){
                setActiveNone(false);
                setActiveIntro(true);
                setActiveMembers(false);
                setActiveGallery(false);
                setActivePublications(false);
                setActiveFunding(false);
                setActiveContact(false);
            } else if (currentScroll >= memberScroll && currentScroll < galleryScroll){
                setActiveNone(false);
                setActiveIntro(false);
                setActiveMembers(true);
                setActiveGallery(false);
                setActivePublications(false);
                setActiveFunding(false);
                setActiveContact(false);
            } else if (currentScroll >= galleryScroll && currentScroll < pubScroll){
                setActiveNone(false);
                setActiveIntro(false);
                setActiveMembers(false);
                setActiveGallery(true);
                setActivePublications(false);
                setActiveFunding(false);
                setActiveContact(false);
            }
            else if (currentScroll >= pubScroll && currentScroll < fundingScroll){
                setActiveNone(false);
                setActiveIntro(false);
                setActiveMembers(false);
                setActiveGallery(false);
                setActivePublications(true);
                setActiveFunding(false);
                setActiveContact(false);
            }
            else if (currentScroll >= fundingScroll && currentScroll < contactScroll){
                setActiveNone(false);
                setActiveIntro(false);
                setActiveMembers(false);
                setActiveGallery(false);
                setActivePublications(false);
                setActiveFunding(true);
                setActiveContact(false);
            }
            else if (currentScroll >= contactScroll){
                setActiveNone(false);
                setActiveIntro(false);
                setActiveMembers(false);
                setActiveGallery(false);
                setActivePublications(false);
                setActiveFunding(false);
                setActiveContact(true);
            }
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
            <a className={`nav__logo ${show && "nav__logo-white"} ${activeNone && "nav__active"}` } href="#home" onClick={scrollToTop}>FLC Lab</a>
            <div className="nav__link-container">
                <a className={`nav__link ${show && "nav__link-white"} ${activeIntro && "nav__active"}`} href="#intro-section">Introduction</a>
                <a className={`nav__link ${show && "nav__link-white"} ${activeMembers && "nav__active"}`} href="#members-section">Members</a>
                <a className={`nav__link ${show && "nav__link-white"} ${activeGallery && "nav__active"}`} href="#gallery-section">Gallery</a>
                <a className={`nav__link ${show && "nav__link-white"} ${activePublications && "nav__active"}`} href="#publications-section">Publications</a>
                <a className={`nav__link ${show && "nav__link-white"} ${activeFunding && "nav__active"}`} href="#funding-section">Funding</a>
                <a className={`nav__link ${show && "nav__link-white"} ${activeContact && "nav__active"}`} href="#contact-section">Contact Us</a>
            </div>
            
        </div>
    )

}

export default Nav;