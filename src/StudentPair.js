import React from 'react';
import "./StudentPair.css"
import Student from "./Student";

function StudentPair({image1, student1, level1, image2, student2, level2}){
    return (
        <div className="student-pair__container">
            <Student
                img={image1}
                level={level1}
                student={student1.name}
                info={student1.info}
                director={student1.director}
                codirector={student1.codirector}
            />
            <Student
                img={image2}
                level={level2}
                student={student2.name}
                info={student2.info}
                director={student2.director}
                codirector={student2.codirector}
            />
        </div>
    )
}

export default StudentPair