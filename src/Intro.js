import React from 'react';
import group from "./img/members/IMG_3364_group_nomask.png";
import "./Intro.css"
import strings from "./strings.json"

function Intro(){
    return (
        <div className="container">
            <div className="left">
                <img src={group}></img> 
            </div>
            <div className="right">
                <span className="right__title">{strings.Intro.label}</span>
                <span className="right__content">{strings.Intro.content}</span>
                <span>
                    <button className="readmore__button">{strings.Intro.readmore}</button>
                </span>
            </div>
        </div>
    )
}

export default Intro;
