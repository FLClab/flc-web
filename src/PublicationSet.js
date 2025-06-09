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

    // const showPubs = 5

    var keyPublications = [
        {"id": "PySTED", "data": strings.Publications.PySTED, "students": [0,1, 2,3,6],},
        {"id": "TAGAN", "data": strings.Publications.TAGAN, "students": [0, 1,2,3,4,6],},
        {"id": "micranet", "data": strings.Publications.MicraNet, "students": [0, 5],},
        {"id": "theresa", "data": strings.Publications.Theresa, "students": [0, 1,2,3,4,6],},
        {"id": "FActin", "data": strings.Publications.FActin, "students": [0, 1,4],},
        {"id": "MLAuto", "data": strings.Publications.MLAuto, "students": [1,3,4,7],}
    ]
        
        
    var publications = [
        {"id":"STEDFM", "data": strings.Publications.STEDFM, "students": [0,1,2,3,4,5,6,9],},
        {"id":"NeuralStemCells", "data": strings.Publications.NeuralStemCells, "students": [3,6,7],},
        {"id": "Calcium", "data": strings.Publications.Calcium, "students": [0,1,2,3,6,7,12],},
        {"id": "PySTED", "data": strings.Publications.PySTED, "students": [0,1, 2,3,6],},
    	{"id": "Unmixing", "data": strings.Publications.Unmixing, "students": [0,1,3,4,5,6],},
        {"id": "TAGAN", "data": strings.Publications.TAGAN, "students": [0, 1,2,3,4,6],},
        {"id": "micranet", "data": strings.Publications.MicraNet, "students": [0, 5],},
        {"id": "theresa", "data": strings.Publications.Theresa, "students": [0, 1,2,3,4,6],},
        {"id": "FActin", "data": strings.Publications.FActin, "students": [0, 1,4],},
        {"id": "MLAuto", "data": strings.Publications.MLAuto, "students": [1,3,4,7],},
        {"id": "Neurophot", "data": strings.Publications.Neurophot, "students": [0,1,2],},
        {"id": "BBB", "data": strings.Publications.BBB, "students": [1,2,5],},
        {"id": "Astrocytes", "data": strings.Publications.Astrocytes, "students": [8,16],},
        {"id": "ChronicStress", "data": strings.Publications.ChronicStress, "students": [4,7,16],},
        {"id": "Mitos", "data": strings.Publications.Mitos, "students": [1],},
        {"id": "ActiveAAAI", "data": strings.Publications.ActiveAAAI, "students": [0, 2],},
        {"id": "ContBandit", "data": strings.Publications.ContBandit, "students": [0,1,2,3],},
        {"id": "PYSTED", "data": strings.Publications.PYSTED, "students": [0,1,2],},
        {"id": "Methods", "data": strings.Publications.Methods, "students": [0, 1,2],},
        {"id": "NCDN", "data": strings.Publications.NCDN, "students": [4,28],},
        {"id": "Crystals4", "data": strings.Publications.Crystals4, "students": [1],},
        {"id": "fluo", "data": strings.Publications.FluoLifetime, "students": [4],},
        {"id": "Prefnet", "data": strings.Publications.Prefnet, "students": [0, 5],},
        {"id": "Crystals3", "data": strings.Publications.Crystals3, "students": [1],},
        {"id": "GoldNano", "data": strings.Publications.GoldNano, "students": [0],},
        {"id": "RESOLFT", "data": strings.Publications.RESOLFT, "students": [0],},
        {"id": "Dreiklang", "data": strings.Publications.Dreiklang, "students": [3],},
        {"id": "Crystals2", "data": strings.Publications.Crystals2, "students": [2],},
        {"id": "Crystals", "data": strings.Publications.Crystals, "students": [1],},
        {"id": "GFP", "data": strings.Publications.GFP, "students": [5],}
    ]

    // const numPubs = publications.length;
    
    const sortByYear = (item1, item2) => {
        console.log(item1.props)
        console.log(item2.props)
        return item2.props.data.year - item1.props.data.year
    }


    return (
        <div className="test">
            {!showAll && keyPublications.map((publication) => (
                <Publication key={publication.id} data={publication.data} studentIds={publication.students} />
            ))}
        
            {showAll && publications.map((publication) => (
                <Publication key={publication.id} data={publication.data} studentIds={publication.students} />
            )).sort(sortByYear)}
            <div className="button__container">
                <button id="read-more__publication" className="publication-toggle-info__button" onClick={onShowAllClick}>{showAllString}</button>
            </div>
        </div>
    )
}

export default PublicationSet;
