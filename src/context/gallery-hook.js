import React, { useContext, useState } from 'react';

import galleryData from '../mocks/gallery-data.js';

const GalleryContext = React.createContext();

const useInfoGallery = () => {
  return useContext(GalleryContext);
};

function GalleryProvider({ children }) {
  const [swiperRef, setSwiperRef] = useState(null);
	const [activeSlide, setActiveSlide] = useState(0);


	const slideTo = (index) => {
		swiperRef.slideTo(index, 0);
	};

  return (
    <GalleryContext.Provider value={{
      gallery: galleryData,
      activeSlide, setActiveSlide,
      setSwiperRef,
      slideTo,
    }}>
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryProvider, useInfoGallery };