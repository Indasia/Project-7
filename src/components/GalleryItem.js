import React from 'react';

// photos that will show in gallery
const GalleryItem = props => (
    <li className="photo-wrap">
        <img src={props.url} alt=""/>
    </li>
);

export default GalleryItem;