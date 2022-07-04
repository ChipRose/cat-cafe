import styled from "styled-components";

import Title from "../title/title";

const StyledCard = styled.article`
width:353px;
height: 100%;
padding: ${(props)=>props.theme.indent};
box-sizing: border-box;
display: flex;
flex-direction: column;
border-radius: ${(props)=>props.theme.borderRadius};
background: ${(props)=>props.theme.bgColor.contrast};
transition: all 0.3s ease-in;
&:hover{
  box-shadow: ${(props)=>props.theme.mainShadow};
}
&:focus, &:active {
  box-shadow: 
    0 0 0 3px ${(props)=>props.theme.outline.solid},
    ${(props)=>props.theme.mainShadow};
}
`;

const StyledCardImageBlock = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${(props)=>props.theme.borderRadius};
  picture {
    width: 100%;
    height: 313px;
    object-fit: contain;
  }
`;

const ImageBlock = styled(StyledCardImageBlock)`
  margin-bottom: 20px;
`;

const CardTitle = styled(Title)`
  margin: 0 0 12px;
  text-align: left;
`;

const CardText = styled.p`
  margin: 0 0 10px;
  &:last-child {
    margin-bottom:0;
  }
`;

export {
  StyledCard, 
  ImageBlock,
  CardTitle, 
  CardText
};