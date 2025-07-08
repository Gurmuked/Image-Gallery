import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = ({ images, onZoom }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
    {images.map((img, idx) => (
      <GalleryItem key={idx} img={img} onZoom={() => onZoom(idx)} index={idx} />
    ))}
  </div>
);

export default Gallery;
