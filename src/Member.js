import React, { useState } from 'react';
import "./Member.css";


function Member({member, img}){
    const [showMore, setShowMore] = useState(false);
    const showMoreString = 'Show more'
    const onReadMoreClick = () => {
        setShowMore(true);
    }

    const closeInfo = () => {
        setShowMore(false)
    }

    return (
        <div className="member__container">
           <img className="member__img" src={img} alt=""></img>
           <div className="info__container">
                <div className="member__name">{member.name}</div>
                <div className="member__level">{member.level}</div>
                {member.director && member.codirector && 
                <div className="director__container">
                    <span className="member__director">Director: {member.director}</span>
                    <span className="member__director">Co-director: {member.codirector}</span>
                    </div>
                }
                <div className="weblinks__container">
                    {member.twitter && <a href={member.twitter} className="twitter__link">Twitter</a>}
                    {member.webpage && <a href={member.webpage} className="webpage__link">Web page</a>}
                </div>
                <button id="read-more__member" className="member-toggle-info__button" onClick={onReadMoreClick}>{showMoreString}</button>
                {/* {showMore && <div className="member__info">{member.info}</div>} */}
                <div className={`member-overlay ${showMore && 'show-member-overlay'}`}>
                    <div className="member-info">{member.info}</div>
                    <button className="member-close-button" onClick={closeInfo}></button>
                </div>
           </div>
        </div>
    )
}

export default Member;