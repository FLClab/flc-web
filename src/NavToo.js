import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavToo.css";

function NavToo({navY, introY, memberY, galleryY, pubY, contactY}){
    const [scrolled, handleScrolled] = useState(false);
    const [activeNone, setActiveNone] = useState(false);
    const [activeIntro, setActiveIntro] = useState(false);
    const [activeMembers, setActiveMembers] = useState(false);
    const [activeGallery, setActiveGallery] = useState(false);
    const [activePublications, setActivePublications] = useState(false);
    const [activeContact, setActiveContact] = useState(false);

    const currentScroll = window.scrollY;

    useEffect(() => {
        changeNav()
    })

    const changeNav = () => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 120){
                handleScrolled(true);
            } else{
                handleScrolled(false);
            }
            if (currentScroll >= navY && currentScroll < introY ){
                setActiveNone(true);
                setActiveIntro(false);
                setActiveMembers(false);
                setActiveGallery(false);
                setActivePublications(false);
                setActiveContact(false);
            } else if (currentScroll >= introY && currentScroll < memberY){
                setActiveNone(false);
                setActiveIntro(true);
                setActiveMembers(false);
                setActiveGallery(false);
                setActivePublications(false);
                setActiveContact(false);
            } else if (currentScroll >= memberY && currentScroll < galleryY){
                setActiveNone(false);
                setActiveIntro(false);
                setActiveMembers(true);
                setActiveGallery(false);
                setActivePublications(false);
                setActiveContact(false);
            } else if (currentScroll >= galleryY && currentScroll < pubY){
                setActiveNone(false);
                setActiveIntro(false);
                setActiveMembers(false);
                setActiveGallery(true);
                setActivePublications(false);
                setActiveContact(false);
            }
            else if (currentScroll >= pubY && currentScroll < contactY){
                setActiveNone(false);
                setActiveIntro(false);
                setActiveMembers(false);
                setActiveGallery(false);
                setActivePublications(true);
                setActiveContact(false);
            }
            else if (currentScroll >= contactY){
                setActiveNone(false);
                setActiveIntro(false);
                setActiveMembers(false);
                setActiveGallery(false);
                setActivePublications(false);
                setActiveContact(true);
            }
        })
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return(
        <div className={`nav__container ${scrolled && 'nav-white__container'}`}>
            <div className={`nav-link__container ${scrolled && 'nav-link-white__container'}`}>
                <a className={`nav-logo ${activeNone && 'nav__active'}`} href="#home" onClick={scrollToTop}>FLC Lab</a>
                <a className={`nav-link ${scrolled && 'nav-link-white'} ${activeIntro && 'nav__active'}`} href="#intro-section">Introduction</a>
                <a className={`nav-link ${scrolled && 'nav-link-white'}  ${activeMembers && 'nav__active'}`} href="#members-section">Members</a>
                <Link to="alumni" className={`nav-link ${scrolled && 'nav-link-white'}`}>Alumni</Link>
                <a className={`nav-link ${scrolled && 'nav-link-white'} ${activeGallery && 'nav__active'}`} href="#gallery-section">Gallery</a>
                <a className={`nav-link ${scrolled && 'nav-link-white'} ${activePublications && 'nav__active'}`} href="#publications-section">Publications</a>
                <a className={`nav-link ${scrolled && 'nav-link-white'} ${activeContact && 'nav__active'}`} href="#contact-section">Contact Us</a>
            </div>
        </div>
    )
}

export default NavToo;