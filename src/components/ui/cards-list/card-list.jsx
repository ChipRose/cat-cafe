import React from 'react';
import {useStars} from '../../../context/stars-hook.js';

import StarCard from '../star-card/star-card.jsx';
import { StyledList, StyledItem } from "./style.js";

function CardList() {
  const {starsInfo} = useStars();

  return (
    <StyledList>
      {
        starsInfo &&
        starsInfo.map((star) => (
          <StyledItem key={star.id}>
            <StarCard star={star} />
          </StyledItem>
        ))
      }
    </StyledList>
  );
};

export default CardList;