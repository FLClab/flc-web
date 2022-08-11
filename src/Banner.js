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
                    height: "650px",
                    backgroundPositionY: "80%" }}
            >
                <div className="banner">
                    <img src={logo} alt="" 
                    style={{
                        height: "500px",
                        width: "450px",
                        paddingTop: "20px",
                        margin: "auto",
                    }}
                    ></img>
                    <div className="banner__textcontent">{strings.Banner.groupInfo}</div>
                </div>
                <div className="banner__fadeBottom" />
            </div>
        </div>
    );
}

export default Banner;