import React, { useEffect, useState } from 'react';
import "./NavToo.css";

function NavToo(){
    const [scrolled, handleScrolled] = useState(false);

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
        })
    }
    return(
        <div className={`nav__container ${scrolled && 'nav-white__container'}`}>
            <div className={`nav-link__container ${scrolled && 'nav-link-white__container'}`}>
                <a className='nav-logo'>FLC Lab</a>
                <a className={`nav-link ${scrolled && 'nav-link-white'}`}>Introduction</a>
                <a className={`nav-link ${scrolled && 'nav-link-white'}`}>Members</a>
                <a className={`nav-link ${scrolled && 'nav-link-white'}`}>Alumni</a>
                <a className={`nav-link ${scrolled && 'nav-link-white'}`}>Gallery</a>
                <a className={`nav-link ${scrolled && 'nav-link-white'}`}>Publications</a>
                <a className={`nav-link ${scrolled && 'nav-link-white'}`}>Contact Us</a>
            </div>
        </div>
    )
}

export default NavToo;