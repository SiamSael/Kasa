import React, { useState } from 'react';
import Slide from '../Slide';

function Slideshow(images) {

    const [index, setIndex] = useState(0); 
    const length = images.length;

    const arrowLeft = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
        return newIndex

    }

    const arrowRight = () => {
        const newIndex = index + 1;
        setIndex(newIndex > length -1 ? 0 : newIndex);
        return newIndex
    };
    
    return (
        <div className="slideshow">
            <i className={images.length <= 1 ? "fa fa-chevron-left hide" : "fa fa-chevron-left" } onClick={arrowLeft}></i>
            <i className={images.length <= 1? "fa fa-chevron-right hide" : "fa fa-chevron-right" } onClick={arrowRight}></i>
            {Slide(index, images)}
        </div>
    )
};

export default Slideshow
