import React from 'react';
import "./Publication.css";

function Publication({data}){
    return (
        <div className="publication__container">
            <span className="publication__authors">{data.authors}</span>
            <span className="publication__title">{data.title} </span>
            <a className="publication__link" href={data.link}>{data.journal}</a>
        </div>
    )
}

export default Publication;