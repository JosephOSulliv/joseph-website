import React from 'react';

export function Image({image,description}) {
    return (
        <img src={image} alt={description}/>
    );
}