import React, { useState } from 'react';
import "./Member.css";


function Member({img, member, level, hasDirectors, director, codirector, hasWebLinks}){
    const [showMore, setShowMore] = useState(false);
    const [showMoreString, setShowMoreString] = useState('Show more');

    const onReadMoreClick = () => {
        setShowMore(!showMore);
        showMore ? setShowMoreString('Show more') : setShowMoreString('Show less');
    }

    return (
        <div className="member__container">
           <img className="member__img" src={img} alt=""></img>
           <div className="info__container">
                <div className="member__name">{member.name}</div>
                {hasDirectors && 
                <div className="director__container">
                    <span className="member__director">Director: {director}</span>
                    <span className="member__director">Co-director: {codirector}</span>
                    </div>
                }
                <div className="member__level">{level}</div>
                {hasWebLinks &&
                <div className="weblinks__container">
                    <a href={member.twitter} className="twitter__link">Twitter</a>
                    <a href={member.webpage} className="webpage__link">Web page</a>
                </div>
                }
                <button id="read-more__member" className="member-toggle-info__button" onClick={onReadMoreClick}>{showMoreString}</button>
                {showMore && <div className="member__info">{member.info}</div>}
           </div>
        </div>
    )
}

export default Member;