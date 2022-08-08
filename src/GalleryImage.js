import React from 'react';
import ModalImage from "react-modal-image";
import "./GalleryImage.css";


function GalleryImage({id, imgSrc, credit, label}) {
  
    return (
        <div className="image-container">
            <ModalImage 
                id={`gallery-img_${id}`}
                className="gallery__modal-image"
                small={imgSrc}
                large={imgSrc}
                alt={`${label}, taken by ${credit}`}
                hideDownload={true}
                hideZoom={true}
            /> 
        </div>
        
    )
}

export default GalleryImage;