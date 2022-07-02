import React, { useContext, useState } from 'react';

import starsData from '../mocks/stars-data';

const StarContext = React.createContext();
const StarAddContext = React.createContext();


const useInfoStars = () => {
  return useContext(StarContext);
};

const useAddInfoStars = () => {
  return useContext(StarAddContext);
};


function StarProvider({ children }) {
  const [stars, setStars] = useState(starsData);

  const addCard = (key, newStar) => {

    if (key === 'Enter') {
      setStars([
        ...stars, {
          id: stars.length,
          name: `Кот ${newStar}`
        }
      ])
    }
  };

  return (
    <StarContext.Provider value={stars}>
      <StarAddContext.Provider value={addCard}>
        {children}
      </StarAddContext.Provider>
    </StarContext.Provider>
  );
};

export { StarProvider, useInfoStars, useAddInfoStars };