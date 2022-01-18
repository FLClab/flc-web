import React, { useState } from 'react';
import "./Student.css";

function Student({img, student, level, info, directors}) {
    const [showMore, setShowMore] = useState(false);
    const [showMoreString, setShowMoreString] = useState('Show more');

    const onReadMoreClick = () => {
        setShowMore(!showMore);
        showMore ? setShowMoreString('Show more') : setShowMoreString('Show less');
    }

    return (
        <div className="student">
            <img className="student_img" src={img} alt=""></img>
            <div className="info__container">
                <div className="student__name">{student}</div>
                <div className="student__director">Director(s): {directors}</div>
                <div className="student__level">{level}</div>
                <button id="read-more" className="toggle-info__button" onClick={onReadMoreClick}>{showMoreString}</button>
                {showMore && <div className="student__info">{info}</div>}
            </div>
        </div>
    )
}

export default Student;