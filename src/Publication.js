import React from 'react';
import "./Publication.css";

function Publication({data, studentIds}){
    return (
        <div className="publication__container">
            <div className="authors__container">
                {data.authors.map( (author, index) => (
                    <span key={index} className={studentIds.includes(index)? "publication__author-color": "publication__author"}>{author}</span>
                ))}
            </div>
            {/* <span className="publication__authors">{data.authors}</span> */}
            <span className="publication__title">{data.title}, ({data.year}) </span>
            <a href={data.source} className="publication__link">{data.journal}</a>
        </div>
    )
}

export default Publication;