import React, { useState } from 'react';
import "./Student.css";

function Student({ img, student, level, info, director, codirector }) {
    const [showMore, setShowMore] = useState(false);
    const [showMoreString, setShowMoreString] = useState('Show more');

    const onReadMoreClick = () => {
        setShowMore(true);
    }

    const closeInfo = () => {
        setShowMore(false);
    }
    
    
    return (
        <div className="student">
            <img className="student_img" src={img} alt=""></img>
            <div className="info__container">
                <div className="student__name">{student}</div>
                <div className="student__level">{level}</div>
                <div className="director__container">
                    <span className="student__director">Director: {director}</span>
                    <span className="student__director">Co-director: {codirector}</span>
                </div>
                <button id="read-more" className="toggle-info__button" onClick={onReadMoreClick}>{showMoreString}</button>
                {/* {showMore && <div className="student__info">{info}</div>} */}
                <div className={`overlay ${showMore && 'show-overlay'}`}>
                    <div className="info">{info}</div>
                    <button className="close-button" onClick={closeInfo}>X</button>
                </div>
            </div>
        </div>
    )
}

export default Student;