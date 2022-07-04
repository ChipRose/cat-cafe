import React from 'react';
import {useInfoStars} from '../../../context/stars-context';

import StarCard from '../../ui/star-card/star-card';
import { StyledList, StyledItem } from "./style";

function CardList() {
  const stars = useInfoStars();

  return (
    <StyledList>
      {
        stars.starsInfo &&
        stars.starsInfo.map((star) => (
          <StyledItem key={star.id}>
            <StarCard star={star} />
          </StyledItem>
        ))
      }
    </StyledList>
  );
};

export default CardList;