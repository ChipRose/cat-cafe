import React from 'react';

import CardSticker from '../card-sticker/card-sticker';

import {
  StyledCard,
  ImageBlock,
  CardTitle,
  CardText
} from './style';

function StarCard({ star }) {
  const { image, name, alt, about, id, date, feature } = star;

  const EMPTY_FEATURE = 'empty';
  const nowDate = new Date();
  const weekDuration = 7 * 24 * 3600 * 1000;
  const isNew = nowDate - date < weekDuration ? true : false;
  const starFeature = feature && feature.toLowerCase() !== 'empty' ? feature : null;

  return (
    <StyledCard tabIndex={id}>
      <ImageBlock>
        <picture>
          <img
            src={image}
            width={313}
            height={313}
            alt={alt}
          />
        </picture>
        <CardSticker isShowNew={isNew} starFeature={starFeature} />
      </ImageBlock>
      <div>
        <CardTitle level={3} size={32}>
          {name}
        </CardTitle>
        <div>
          <CardText>
            {about}
          </CardText>
        </div>
      </div>
    </StyledCard>
  );
}

export default StarCard;
