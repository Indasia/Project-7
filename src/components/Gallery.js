import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = props => {
    
    const results = props.data;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => <GalleryItem url={galleryItem.images.fixed.height.url} key={galleryItem.id} />);
    } else {
        photos = <NotFound />
    }

    return (
        <ul className="photo-gallery">
            {photos}
        </ul>
    );
}

export default Gallery;