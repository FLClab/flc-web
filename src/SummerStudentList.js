import React from 'react';
import './SummerStudentList.css';
import SummerStudent from "./SummerStudent";

function SummerStudentList({header, studentList}){

    return (
        <div className="summerstudentlist__container">
            <div className="summerstudentlist__header">{header}</div>
            {Object.keys(studentList).map((key, index) => (
                <SummerStudent 
                    key={index}
                    info={studentList[key]}
                />
            ))}
        </div>
    )
}
export default SummerStudentList;