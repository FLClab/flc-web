import React, { useState } from 'react';
import "./PI.css";

function PI({data, level, img}){
    // const [showMore, setShowMore] = useState(false);
    // const [showMoreString, setShowMoreString] = useState('Show more');

    // const onReadMoreClick = () => {
    //     setShowMore(!showMore);
    //     showMore ? setShowMoreString('Show more') : setShowMoreString('Show less');
    // }

    return (
        <div className="pi__container">
            <img className="pi__img" src={img} alt=""></img>
            <div className="pi-info__container">
                <div className="pi__name">{data.name}</div>
                <div className="pi__level">{level}</div>
                {/* <button id="pi__read-more" className="pi__toggle-info-button" onClick={onReadMoreClick}>{showMoreString}</button>
                {showMore && <div className="pi__info">{data.info}</div>} */}
            </div>
        </div>
    )
}

export default PI;