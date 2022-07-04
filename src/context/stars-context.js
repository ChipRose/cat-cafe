import React, { useContext, useState, useEffect } from 'react';

import starsData from '../mocks/stars-data';

const StarContext = React.createContext();

const useInfoStars = () => {
  return useContext(StarContext);
};

function StarProvider({ children }) {
  const DOWNLOAD_DELAY = 1000;

  const [stars, setStars] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStars(starsData);
    }, DOWNLOAD_DELAY);
    return () => clearTimeout(timer);
  },[]);

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
      {children}
    </StarContext.Provider>
  );
};

export { StarProvider, useInfoStars };