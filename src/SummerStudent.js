import React from 'react';
import "./SummerStudent.css";

function SummerStudent({info}){
    return (
        <div className="summerstudent__container">
            <span className="summerstudent__name">{info.name}</span>
            <span className="summerstudent__program">{info.Program}</span>
        </div>
    )
}

export default SummerStudent;