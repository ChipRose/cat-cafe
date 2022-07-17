import React, { useContext, useState } from 'react';

import buyOptions from '../mocks/buy-options.js';

const BuyOptionsContext = React.createContext();

const useOptionsContext = () => {
  return useContext(BuyOptionsContext);
};

function BuyOptionsProvider({ children }) {
  const { durationOptions, ticketOptions } = buyOptions;
  const [duration, setDuration] = useState(durationOptions[0]);
  const [selectType, setSelectType] = useState(ticketOptions[0].id);

  const HandlerTypeSelect = (evt) => setSelectType(evt.target.value);
  const HandlerDurationSelect = (evt) => setDuration(evt.target.value);

  const ticketAvailability = durationOptions.length && ticketOptions.length;

  const priceType = ticketOptions.find(
    (option) => option.id === Number(selectType)
  );

  const price = priceType.price * duration;

  return (
    <BuyOptionsContext.Provider value={{
      durationOptions, ticketOptions,
      ticketAvailability,
      duration, HandlerDurationSelect,
      selectType, HandlerTypeSelect,
      priceType, price,
    }}>
      {children}
    </BuyOptionsContext.Provider>
  );
};

export { BuyOptionsProvider, useOptionsContext };