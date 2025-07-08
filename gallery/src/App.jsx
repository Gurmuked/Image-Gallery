import React, { useState, useCallback } from 'react';
import FilterButtons from './components/FilterButtons';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';
import images from './components/data';

function App() {
  const [filter, setFilter] = useState('all');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const openLightbox = useCallback((idx) => {
    setLightboxIdx(idx);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIdx(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIdx(idx => (idx > 0 ? idx - 1 : idx));
  }, []);

  const showNext = useCallback(() => {
    setLightboxIdx(idx => (idx < filteredImages.length - 1 ? idx + 1 : idx));
  }, [filteredImages.length]);

  // Keyboard navigation
  React.useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIdx, closeLightbox, showPrev, showNext]);

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-4xl font-bold text-center py-2  text-red-700 bg-green-400 mb-2">Photo Gallery</h1>
      <FilterButtons active={filter} onChange={setFilter} />
      <Gallery images={filteredImages} onZoom={(idx) => setLightboxIdx(idx)} />
      <Lightbox
        isOpen={lightboxIdx !== null}
        img={filteredImages[lightboxIdx] || {}}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
        hasPrev={lightboxIdx > 0}
        hasNext={lightboxIdx < filteredImages.length - 1}
      />
    </div>
  );
}

export default App;
