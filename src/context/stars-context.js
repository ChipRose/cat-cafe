import React, { useContext, useState, useEffect } from 'react';

import starsData from '../mocks/stars-data.js';
import galleryData from '../mocks/gallery-data.js';
import buyOptions from '../mocks/buy-options.js';

const StarContext = React.createContext();

const useInfoStars = () => {
  return useContext(StarContext);
};

const GalleryContext = React.createContext();

const useInfoGallery = () => {
  return useContext(GalleryContext);
};

const BuyOptionsContext = React.createContext();

const useOptionsContext = () => {
  return useContext(BuyOptionsContext);
};

function Provider({ children }) {
  const DOWNLOAD_DELAY = 1000;

  const [stars, setStars] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStars(starsData);
    }, DOWNLOAD_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const addCard = (star) => {
    const { starName, aboutText, starPhoto, dataPublish, catFeature } = star;
    setStars([
      ...stars, {
        id: stars.length,
        name: starName,
        about: aboutText,
        image: starPhoto,
        alt: starName,
        feature: catFeature,
        date: dataPublish,
      }
    ])
  };

  return (
    <StarContext.Provider value={{
      starsInfo: stars,
      addCard
    }}>
      <GalleryContext.Provider value={galleryData}>
        <BuyOptionsContext.Provider value={buyOptions}>
          {children}
        </BuyOptionsContext.Provider>
      </GalleryContext.Provider>
    </StarContext.Provider>
  );
};

export { Provider, useInfoStars, useInfoGallery, useOptionsContext };