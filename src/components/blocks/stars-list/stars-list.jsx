import React, {useContext} from "react";
import styled from "styled-components";

import CatInfoContext from "../../../util/context";
import Title from "../../ui/title/title";
import StarCard from "../../ui/star-card/star-card";
import Button from "../../ui/button/button";

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


function StarsList() {
  const {starsData} = useContext(CatInfoContext);

  return (
    <StyledStarsList>
      <StyledListContainer>
        <StyledListTitle level={2} size={36} >
          {"Наши звезды"}
        </StyledListTitle>
        <StyledList>
          {
            starsData &&
            starsData.map((star)=>(
              <StyledItem key={star.id}>
                <StarCard star={star} />
              </StyledItem>
            ))
          }
        </StyledList>
        <Button minWidth={353}>
          {"Купить билет"}
        </Button>
      </StyledListContainer>
    </StyledStarsList>
  );
}

export default StarsList;