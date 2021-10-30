import React from 'react';
import "./Member.css";

function Member({img, member, level, info}){
    return (
        <div className="member__container">
           <img className="member__img" src={img}></img>
           <div className="info__container">
               <div className="member__name">{member}</div>
               <div className="member__level">{level}</div>
               <div className="member__info">{info}</div>
           </div>
        </div>
    )
}

export default Member;