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
            <div className="publication__hyperlinks">
                <button className="publication__link-button">
                    <a className="publication__link" href={data.source}>{data.journal}</a>
                </button>
                {data.website && 
                    <button className="publication__website-button">
                         <a href={data.website}className="publication__website">Website</a>
                    </button>
                }
            </div>
        </div>
    )
}

export default Publication;