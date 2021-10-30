import React from 'react';

function Student({img1, img2, student1, student2, description1, description2}) {
    return (
        <div className="student__container">
            <div className="student">
                <img className="student_img" src={img1}></img>
                <div className="student__name">{student1}</div>
                <div className="student__info">{description1}</div>
            </div>
            <div className="student">
                <img className="student__img" src={img2}></img>
                <div className="student__name">{student2}</div>
                <div className="student__info">{description2}</div>
            </div>
        </div>
    )
}

export default Student;