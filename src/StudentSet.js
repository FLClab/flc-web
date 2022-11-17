import React from 'react';
import "./StudentSet.css";
import Student from "./Student"

function StudentSet({student1, level1, image1,
                    student2, level2, image2,
                    student3, level3, image3,
                    student4, level4, image4}){
    return (
        <div className="student-set__container">
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
            <Student
                img={image3}
                level={level3}
                student={student3.name}
                info={student3.info}
                director={student3.director}
                codirector={student3.codirector}
            />
            <Student
                img={image4}
                level={level4}
                student={student4.name}
                info={student4.info}
                director={student4.director}
                codirector={student4.codirector}
            />
        </div>
    )
}

export default StudentSet;