import styled from "styled-components";

import Title from "../title/title";

const Card = styled.article`
width: 353px;
height: 100%;
padding: 20px;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 12px;
background: rgba(255, 255, 255, 1);
&:hover{
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
}
&:focus, &:active {
  outline: 3px solid rgba(255, 115, 43, 1);
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
}
`;

const ImageBlock = styled.div`
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

const Img = styled.picture`
  width: 100%;
  height: 313px;
  object-fit: contain;
`;

const CardTitle = styled(Title)`
  margin: 0 0 12px;
`;

const Text = styled.p`
  margin: 0 0 10px;
  &:last-child {
    margin-bottom:0;
  }
`;

function StarCard({ star }) {
  const { image, image2x, name, alt, about, id } = star;

  return (
    <Card tabIndex={id}>
      <ImageBlock>
        <Img>
          <img
            src={process.env.PUBLIC_URL + `${image}`}
            srcSet={process.env.PUBLIC_URL + `${image2x} 2x`}
            width={313}
            height={313}
            alt={alt}
          />
        </Img>
        {/* <StarSticker/> */}
      </ImageBlock>
      <div className="star-card__text-block">
        <CardTitle level={3} size={32} className="star-card__title">
          {name}
        </CardTitle>
        <div className="star-card__info">
          <Text>
            {about}
          </Text>
        </div>
      </div>
    </Card>
  );
}

export default StarCard;
