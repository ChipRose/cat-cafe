import styled from 'styled-components';

const StyledGallery = styled.section`
  background: ${(props) => props.theme.bgColor.accent};
  background-image: url("${process.env.PUBLIC_URL}/img/bg/paw-right.svg"),
  url("${process.env.PUBLIC_URL}/img/bg/shape.svg"),
  url("${process.env.PUBLIC_URL}/img/bg/leaves-left.svg");
  background-position: 100% 10%, calc(100% + 400px)  -300px, 0 100%;
  background-repeat: no-repeat;
`;

const StyledGalleryWrapper = styled.div`
  width: ${(props) => props.theme.appWidth};
  padding: 80px ${(props) => props.theme.indent} 100px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export {
  StyledGallery,
  StyledGalleryWrapper,
}; 