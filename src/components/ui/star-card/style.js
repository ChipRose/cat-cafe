import styled from "styled-components";

import Title from "../title/title";

const StyledCard = styled.article`
width:353px;
min-height: 525px;
padding: ${(props)=>props.theme.indent};
box-sizing: border-box;
display: flex;
flex-direction: column;
border-radius: ${(props)=>props.theme.borderRadius.main};
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

const ImageBlock = styled.div`
  height: 313px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  border-radius: ${(props)=>props.theme.borderRadius.main};
  picture {
    width: 313px;
    height: 313px;
    object-fit: contain;
  }
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