import React, { useState } from 'react';
import "./Carousel.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function Carousel({images, credit}){

    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const goToSlide = (imageId) => {
        setCurrent(imageId);
    }

    if(!Array.isArray(images) || images.length <= 0){
        return null;
    }

    return (
        <section className="carousel__container">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {images.map( (image) => {
                return (
                    <div className={image.id===current ? 'slide-active': 'slide'} key={image.id}>
                        { image.id === current && 
                            (
                            <div className="carousel-image__container">    
                                <div className="carousel__label">{image.label}</div>
                                {credit && <div className="carousel__credit">Image credit: {image.credit}</div>}
                                <img className="carousel__image" src={image.img} alt="gallery"/>
                            </div>
                            )
                        }
                    </div>
                )
                })
            }
            <div className="dots__container">
                {images.map( (image) => (
                        <div className='carousel-dot' key={image.id} onClick={() => goToSlide(image.id)}>{image.id === current ? "•" : "◦"}</div>
                ))}
            </div>
        </section>
    )
}

export default Carousel;