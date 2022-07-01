import styled from "styled-components";

import Title from "../../ui/title/title";

const StyledStarsList = styled.section`
  background: rgba(255, 238, 173, 1);
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledListTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
`;

const StyledList = styled.ul`
  margin: 0 0 24px;
  padding: 0;
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const StyledItem = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;
  flex: 0 0 353px;
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export { StyledStarsList, StyledListContainer, StyledListTitle, StyledList, StyledItem }; 