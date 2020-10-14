import React from 'react';

export default (props) => {
    return (
        <div className={`error-${props.class}`}>{props.error}</div>
    )
}