import React from 'react';

const GalleryItem = props => (
    <li className="photo-wrap">
        <img src={props.url} alt=""/>
    </li>
);

export default GalleryItem;