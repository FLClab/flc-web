import React, { useState } from "react";
import strings from "./strings.json"
import "./PublicationSet.css"
import Publication from "./Publication";

function PublicationSet(){

    const [showAll, setShowAll] = useState(false);
    const [showAllString, setShowAllString] = useState('Show all')

    const onShowAllClick = () => {
        setShowAll(!showAll);
        showAll ? setShowAllString('Show all') : setShowAllString('Collapse');
    }

    const showPubs = 3

    var publications = [
       
        {"id": "micranet", "data": strings.Publications.MicraNet, "students": [0, 5],},
        {"id": "theresa", "data": strings.Publications.Theresa, "students": [0, 1,2,3,4,6],},
        {"id": "MLAuto", "data": strings.Publications.MLAuto, "students": [1,3,4,7],},
        {"id": "ActiveAAAI", "data": strings.Publications.ActiveAAAI, "students": [0, 2],},
        {"id": "ContBandit", "data": strings.Publications.ContBandit, "students": [0,1,2,3],},
        {"id": "PYSTED", "data": strings.Publications.PYSTED, "students": [0,1,2],},
        {"id": "FActin", "data": strings.Publications.FActin, "students": [0, 1,4],},
        {"id": "Methods", "data": strings.Publications.Methods, "students": [0, 1,2],},
        {"id": "TAGAN", "data": strings.Publications.TAGAN, "students": [0, 1,2,3],},
        {"id": "NCDN", "data": strings.Publications.NCDN, "students": [4,28],},
        {"id": "Prefnet", "data": strings.Publications.Prefnet, "students": [0, 5],},
        {"id": "fluo", "data": strings.Publications.FluoLifetime, "students": [4],},
        {"id": "GoldNano", "data": strings.Publications.GoldNano, "students": [0],},
        {"id": "RESOLFT", "data": strings.Publications.RESOLFT, "students": [0],},
        {"id": "GFP", "data": strings.Publications.GFP, "students": [5],},
        {"id": "Mitos", "data": strings.Publications.Mitos, "students": [1],},
        {"id": "Dreiklang", "data": strings.Publications.Dreiklang, "students": [3],},
        {"id": "Crystals", "data": strings.Publications.Crystals, "students": [1],},
        {"id": "Crystals2", "data": strings.Publications.Crystals2, "students": [2],},
        {"id": "Crystals3", "data": strings.Publications.Crystals3, "students": [1],},
        {"id": "Crystals4", "data": strings.Publications.Crystals4, "students": [1],},
    ]

    const numPubs = publications.length;

    return (
        <div className="test">
            {publications.slice(0, showPubs).map((publication) => (
                <Publication key={publication.id} data={publication.data} studentIds={publication.students} />
            ))}
            {showAll && publications.slice(showPubs,numPubs).map((publication) => (
                <Publication key={publication.id} data={publication.data} studentIds={publication.students} />
            ))}
            <div className="button__container">
                <button id="read-more__publication" className="publication-toggle-info__button" onClick={onShowAllClick}>{showAllString}</button>
            </div>
        </div>
    )
}

export default PublicationSet;
