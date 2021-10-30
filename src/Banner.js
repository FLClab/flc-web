import React from "react";
import logo from './img/logos/logo-flclab_darkbckg.svg';
import "./Banner.css"

function Banner() {
    return (
        <div
            className="banner"
            style={{ backgroundImage: `url('${logo}')`, backgroundSize: "contain", backgroundPositionX: "center" }}
        >
        </div>
    );
}

export default Banner;