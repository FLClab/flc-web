import React from "react";
import logo from './img/logos/logo-flclab_darkbckg.png';
import "./Banner.css"
import strings from "./strings.json";

function Banner() {
    return (
        <div className="banner__container">
            {/* <div
                className="background_img"
                style={{ backgroundImage: `url('${background_img}')`,
                    backgroundSize: "cover", 
                    backgroundPositionX: "center",
                    backgroundRepeat: "no-repeat", 
                    height: "100%",
                    backgroundPositionY: "80%" }}
            > */}
                <div className="banner">
                    <img src={logo} alt="" 
                    style={{
                        height: "35%",
                        width: "35%",
                        paddingTop: "2vw",
                        margin: "auto",
                    }}
                    ></img>
                    <div className="banner__textcontent">{strings.Banner.groupInfo}</div>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Banner;