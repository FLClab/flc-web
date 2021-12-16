import React from 'react';
import "./StudentPair.css"
import Student from "./Student";

function StudentPair({img1, student1, level1, img2, student2, level2}){
    return (
        <div className="student-pair__container">
            <Student
                img={img1}
                level={level1}
                student={student1.name}
                info={student1.info}
            />
            <Student
                img={img2}
                level={level2}
                student={student2.name}
                info={student2.info}
            />
        </div>
    )
}

export default StudentPair