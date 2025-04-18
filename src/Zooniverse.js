import React from "react";
import zoo from './img/zooniverse_banner.png';
import "./Zoo.css"

function Zooniverse(){
    return (
        <div className="zoo-banner__container">
            <div
                className="zoo-banner__img"
                style={{ backgroundImage: `url('${zoo}')`,
                    backgroundSize: "cover", 
                    backgroundPositionX: "center",
                    backgroundRepeat: "no-repeat", 
                    height: "50vh",
                    backgroundPositionY: "60%" }}
            >

                <div className="zoo-banner">
                    <a href="https://www.zooniverse.org/projects/reber199/synaptic-protein-zoo" className="zoo-banner__textcontent">We have launched a citizen science project on Zooniverse. Click here to help us annotate synapses!</a>
                </div>
            </div>
        </div>
    )
}

export default Zooniverse;