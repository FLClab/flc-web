import React from 'react';
import "./StudentSet.css";
import Student from "./Student"

function StudentSet({student1, level1, image1, student2, level2, image2, student3, level3, image3, student4, level4, image4}){
    return (
        <div className="student-set__container">
            <Student
                img={image1}
                level={level1}
                student={student1.name}
                PI={student1.PI}
                info={student1.info}
            />
            <Student
                img={image2}
                level={level2}
                student={student2.name}
                PI={student2.PI}
                info={student2.info}
            />
            <Student
                img={image3}
                level={level3}
                student={student3.name}
                PI={student3.PI}
                info={student3.info}
            />
            <Student
                img={image4}
                level={level4}
                student={student4.name}
                PI={student4.PI}
                info={student4.info}
            />
        </div>
    )
}

export default StudentSet;
