import React from 'react';
import "./DynamicStudentSet.css";
import Student from "./Student";

function DynamicStudentSet({data}){
    return (
        <div className="student-set__container">
            {data.map( ({student, img}) => (
                <Student
                    key={student.name}
                    img={img}
                    level={student.level}
                    student={student.name}
                    info={student.info}
                    director={student.director}
                    codirector={student.codirector}
                />
            ))}
        </div>
    )
}

export default DynamicStudentSet;