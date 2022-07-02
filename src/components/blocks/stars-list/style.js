import styled from "styled-components";

import Title from "../../ui/title/title";

const StyledStarsList = styled.section`
  background: ${(props)=>props.theme.bgColor.accent};
  background-image: url("${process.env.PUBLIC_URL}/img/bg/paw.svg"),
  url("${process.env.PUBLIC_URL}/img/bg/shape.svg"),
  url("${process.env.PUBLIC_URL}/img/bg/leaves.svg");
  background-position: 0 5%, 0 100%, 100% 100%;
  background-repeat: no-repeat;
`;

const StyledListContainer = styled.div`
  width: 1140px;
  min-height: 914px;
  padding: 100px 20px 80px;
  margin: 0 auto;
  box-sizing: border-box;
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledListTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
`;

export { StyledStarsList, StyledListContainer, StyledListTitle }; 