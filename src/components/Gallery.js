import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = props => {
    
    const results = props.data;
    let photos;

    if (results.length > 0) {
        // where do i find gallery url?
        photos = results.map(photo => <GalleryItem url={photo.images.fixed.height.url} key={photo.id} />);
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