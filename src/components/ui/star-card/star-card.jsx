import React from 'react';

import  {Card, CardImageBlock, CardImg, CardTitle, CardText} from './style';

function StarCard({ star }) {
  const { image, image2x, name, alt, about, id } = star;

  return (
    <Card tabIndex={id}>
      <CardImageBlock>
        <CardImg>
          <img
            src={process.env.PUBLIC_URL + `${image}`}
            srcSet={process.env.PUBLIC_URL + `${image2x} 2x`}
            width={313}
            height={313}
            alt={alt}
          />
        </CardImg>
        {/* <StarSticker/> */}
      </CardImageBlock>
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
    </Card>
  );
}

export default StarCard;
