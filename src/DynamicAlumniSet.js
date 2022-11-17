import React from 'react';
import Alumni from './Alumni';
import './DynamicAlumniSet.css';

function DynamicAlumniSet({data}){

    console.log(data)
    return (
        <div className="dynamic-alumni-set__container">
            {data.map( ({alumni, img}) => (
                <Alumni
                    key={alumni.name}
                    img={img}
                    info={alumni}
                />
            ))}
        </div>

    )
}

export default DynamicAlumniSet;