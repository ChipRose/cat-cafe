import styled from 'styled-components';

import Title from "../../ui/title/title.jsx";

const StyledGallery = styled.section`
  background: ${(props) => props.theme.bgColor.accent};
  background-image: url("${process.env.PUBLIC_URL}/img/bg/paw-right.svg"),
  url("${process.env.PUBLIC_URL}/img/bg/shape.svg"),
  url("${process.env.PUBLIC_URL}/img/bg/leaves-left.svg");
  background-position: 100% 10%, calc(100% + 400px)  -300px, 0 100%;
  background-repeat: no-repeat;
`;

const StyledGalleryWrapper = styled.div`
  width: 1140px;
  padding: 80px 20px 100px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const GalleryTitle = styled(Title)`
  margin-bottom: 60px;
  text-align: center;
`;

export {
  StyledGallery,
  StyledGalleryWrapper,
  GalleryTitle,
}; 