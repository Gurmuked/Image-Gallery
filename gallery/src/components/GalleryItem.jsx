import React from 'react';

const GalleryItem = ({ img, onZoom, index }) => (
  <div
    className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl group cursor-pointer"
    onClick={() => onZoom(index)}
  >
    <img
      src={img.src}
      alt={img.alt}
      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <span
        className="text-white text-3xl focus:outline-none hover:scale-110 transition-transform"
        aria-label="Zoom"
      >
        <i className="fas fa-search-plus"></i>
      </span>
    </div>
  </div>
);

export default GalleryItem;
