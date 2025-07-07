import React, { useRef } from 'react';

const Lightbox = ({ isOpen, img, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  const overlayRef = useRef(null);
  if (!isOpen) return null;
  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-opacity"
      onClick={e => {
        // Only close if the click is on the overlay, not on any child
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <span
        className="absolute top-6 right-10 text-white text-4xl cursor-pointer hover:text-red-500"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </span>
      {hasPrev && (
        <span
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer hover:text-blue-400"
          onClick={onPrev}
          aria-label="Previous"
        >
          <i className="fas fa-chevron-left"></i>
        </span>
      )}
      {hasNext && (
        <span
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer hover:text-blue-400"
          onClick={onNext}
          aria-label="Next"
        >
          <i className="fas fa-chevron-right"></i>
        </span>
      )}
      {/* Overlay click zones for navigation */}
      {hasPrev && (
        <div
          className="absolute left-0 top-0 h-full w-1/3 cursor-pointer z-40"
          onClick={onPrev}
          style={{ background: 'transparent' }}
        />
      )}
      {hasNext && (
        <div
          className="absolute right-0 top-0 h-full w-1/3 cursor-pointer z-40"
          onClick={onNext}
          style={{ background: 'transparent' }}
        />
      )}
      <div className="relative flex flex-col items-center justify-center p-0 m-0">
        <img
          src={img.src}
          alt={img.alt}
          className="object-contain max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl bg-[#222]"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <div className="text-white text-center mt-4 pointer-events-auto">
          <p>{img.alt}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
