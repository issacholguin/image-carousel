import React from 'react';
import "./DotComponent.css"

const DotComponent = (props) => {
    return (
        <span className={props.id}
              onClick={props.click}></span>
    )
}

export default DotComponent;