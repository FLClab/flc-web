import React from 'react';
import "./Publication.css";

function Publication({authors, title, journal, link}){
    return (
        <div className="publication__container">
            <span className="publication__authors">{authors}</span>
            <span className="publication__title">{title}</span>
            <a className="publication__link" href={link}>{journal}</a>
        </div>
    )
}

export default Publication;