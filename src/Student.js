import React from 'react';
import "./Student.css";

function Student({img, student, level, info}) {
    return (
        <div className="student">
            <img className="student_img" src={img}></img>
            <div className="info__container">
                <div className="student__name">{student}</div>
                <div className="student__level">{level}</div>
                <div className="student__info">{info}</div>
            </div>
        </div>
    )
}

export default Student;