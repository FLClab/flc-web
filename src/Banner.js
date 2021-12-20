import React from "react";
import logo from './img/logos/logo-flclab_darkbckg.svg';
import background_img from './img/gallery/4colors.png';
import "./Banner.css"
import strings from "./strings.json";

function Banner() {
    return (
        <div className="banner__container">
            <div
                className="background_img"
                style={{ backgroundImage: `url('${background_img}')`,
                    backgroundSize: "cover", 
                    backgroundPositionX: "center",
                    backgroundRepeat: "no-repeat", 
                    height: "600px",
                    backgroundPositionY: "80%" }}
            >
            <div className="banner">
                <img src={logo} alt="" 
                style={{
                    height: "450px",
                    width: "450px",
                    paddingTop: "50px",
                    marginLeft: "60vh",
                }}
                ></img>
                <div className="banner__textcontent">{strings.Banner.groupInfo}</div>
            </div>
            
            </div>
        </div>
    );
}

export default Banner;