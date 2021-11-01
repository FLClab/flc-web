import React, { useState } from 'react';
import "./Member.css";

function Member({img, member, level}){
    const [showMore, setShowMore] = useState(false);
    const [showMoreString, setShowMoreString] = useState('Show more');

    const onReadMoreClick = () => {
        setShowMore(!showMore);
        showMore ? setShowMoreString('Show more') : setShowMoreString('Show less');
    }

    return (
        <div className="member__container">
           <img className="member__img" src={img}></img>
           <div className="info__container">
               <div className="member__name">{member.name}</div>
               <div className="member__level">{level}</div>
               <button id="read-more__member" className="member-toggle-info__button" onClick={onReadMoreClick}>{showMoreString}</button>
               {showMore && <div className="member__info">{member.info}</div>}
           </div>
        </div>
    )
}

export default Member;