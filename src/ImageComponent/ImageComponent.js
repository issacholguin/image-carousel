import React from 'react';
import './ImageComponent.css';

const ImageComponent = (props) => {
    const {image} = props;
    return (
        <img src={image}
        className="image-slide"
        alt='carousel'></img>
    )
}

export default ImageComponent;