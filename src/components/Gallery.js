import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = props => {
    
    const results = props.data;
    let photos;

    if (results.length > 0) {
        // is my url right?
        photos = results.map(photo => (
            <GalleryItem url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                key={photo.id}
            />
        ));
    } else {
        photos = <NotFound />;
    }

    return (
        <div className="photo-gallery">
            <ul>{photos}</ul>
        </div>
    );
}

export default Gallery;