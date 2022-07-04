import React from 'react';

import { StyledCardSticker } from './style';

function CardSticker({ isShowNew, starFeature }) {

  if (isShowNew) {
    return (
      <StyledCardSticker new>
        new
      </StyledCardSticker>
    );
  } else if (starFeature) {
    return (
      <StyledCardSticker feature>
        {starFeature}
      </StyledCardSticker>
    );
  }
};

export default CardSticker;