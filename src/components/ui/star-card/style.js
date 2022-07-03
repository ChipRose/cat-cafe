import styled from "styled-components";

import Title from "../title/title";

const Card = styled.article`
width:353px;
height: 100%;
padding: ${(props)=>props.theme.indent};
box-sizing: border-box;
display: flex;
flex-direction: column;
border-radius: 12px;
background: ${(props)=>props.theme.bgColor.contrast};
&:hover{
  box-shadow: ${(props)=>props.theme.mainShadow};
}
&:focus, &:active {
  outline: ${(props)=>props.theme.outline.card};
  box-shadow: ${(props)=>props.theme.mainShadow};
}
`;

const CardImageBlock = styled.div`
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

const CardImg = styled.picture`
  width: 100%;
  height: 313px;
  object-fit: contain;
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

export {Card, CardImageBlock, CardImg, CardTitle, CardText};