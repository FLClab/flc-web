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
        {"id": "micranet", "data": strings.Publications.MicraNet},
        {"id": "TAGAN", "data": strings.Publications.TAGAN,},
        {"id": "theresa", "data": strings.Publications.Theresa,},
        {"id": "Factin", "data": strings.Publications.FActin,},
        {"id": "fluo", "data": strings.Publications.FluoLifetime,},
        {"id": "MLAuto", "data": strings.Publications.MLAuto,},
        {"id": "Prefnet", "data": strings.Publications.Prefnet,},
        {"id": "GoldNano", "data": strings.Publications.GoldNano,},
        {"id": "RESOLFT", "data": strings.Publications.RESOLFT,},
        {"id": "GFP", "data": strings.Publications.GFP,},
        {"id": "Mitos", "data": strings.Publications.Mitos,},
        {"id": "Dreiklang", "data": strings.Publications.Dreiklang,},
        {"id": "Crystals", "data": strings.Publications.Crystals,},
        {"id": "Crystals2", "data": strings.Publications.Crystals2,},
        {"id": "Crystals3", "data": strings.Publications.Crystals3,},
        {"id": "Crystals4", "data": strings.Publications.Crystals4,},
    ]

    const numPubs = publications.length;

    return (
        <div className="test">
            {publications.slice(0, showPubs).map((publication) => (
                <Publication key={publication.id} data={publication.data} />
            ))}
            {showAll && publications.slice(showPubs+1,numPubs).map((publication) => (
                <Publication key={publication.id} data={publication.data} />
            ))}
            <div className="button__container">
                <button id="read-more__publication" className="publication-toggle-info__button" onClick={onShowAllClick}>{showAllString}</button>
            </div>
        </div>
    )
}

export default PublicationSet;