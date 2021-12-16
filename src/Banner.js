import React from "react";
import logo from './img/logos/logo-flclab_darkbckg.svg';
import "./Banner.css"
import strings from "./strings.json";

function Banner() {
    return (
        <div className="banner__container">
            <div
                className="banner"
                style={{ backgroundImage: `url('${logo}')`, backgroundSize: "contain", backgroundPositionX: "center" }}
            >
            </div>
            <div className="banner__textcontent">{strings.Banner.groupInfo}</div>
        </div>
    );
}

export default Banner;