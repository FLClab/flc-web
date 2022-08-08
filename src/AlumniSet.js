import React from 'react';
import "./AlumniSet.css";
import Alumni from "./Alumni"

function AlumniSet({alumni1, img1,
                    alumni2, img2}){
    return (
        <div className="alumni-set__container">
            <Alumni
                img={img1}
                info={alumni1}
            /> 
            <Alumni
                img={img2}
                info={alumni2}
            /> 
        </div>
    )

}

export default AlumniSet;