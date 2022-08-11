import React from 'react';
import "./Alumni.css"

function Alumni({img, info}){

    return (
        <div className="alumni">
            <img className="alumni__img" src={img} alt=""></img>
            <div className="alumni__info-container">
                <div className="alumni__name">{info.name}</div>
                <span className="alumni__program">{info.Program}</span>
                <hr className="alumni__hr"></hr>
                { info.Project && <a href={info.url} className="alumni__thesis">{info.Project}</a>}
                { info.Title && <span className="alumni__title">{info.Title}</span> }
            </div>
        </div>
    )

}

export default Alumni