import React from 'react';
import "./AlumniSet.css";
import Alumni from "./Alumni"

function AlumniSet({alumni1, img1,
                    alumni2, img2,
                    alumni3, img3,
                    alumni4, img4}){
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
            <Alumni
                img={img3}
                info={alumni3}
            /> 
            <Alumni
                img={img4}
                info={alumni4}
            /> 
        </div>
    )

}

export default AlumniSet;