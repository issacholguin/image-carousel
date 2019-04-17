import React from 'react';
import './ArrowComponent.css';

const ArrowComponent = (props) => {
    const {click, arrowCode, arrowDirection} = props;

    return (
        <div className={`arrow ${arrowDirection} grow`}
             onClick={click}>{arrowCode}</div>
    )
}

export default ArrowComponent;