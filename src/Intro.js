import React, { useState } from 'react';
import group from "./img/members/Group_2025.jpg";
import group_2 from "./img/members/Group_2025.jpg";
import "./Intro.css"
import strings from "./strings.json"

function Intro(){
    const [withMask, setWithMask] = useState(false);

    const onmouseover = () => {
        setWithMask(true);
    }

    const onmouseout = () => {
        setWithMask(false);
    }

    return (
        <div className="container">
            <div className="left" onMouseOver={onmouseover} onMouseOut={onmouseout}>
                <img src={withMask ? group_2 : group} alt=""></img> 
            </div>
            <div className="right">
                <span className="right__title">{strings.Intro.label}</span>
                <span className="right__content">{strings.Intro.content}</span>
            </div>
        </div>
    )
}

export default Intro;
