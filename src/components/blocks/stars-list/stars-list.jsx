import React, {useContext} from "react";

import CatInfoContext from "../../../util/context";
import StarCard from "../../ui/star-card/star-card";
import Button from "../../ui/button/button";

import {StyledStarsList, StyledListContainer, StyledListTitle, StyledList, StyledItem} from "./style"; 

function StarsList() {
  const {starsInfo} = useContext(CatInfoContext);

  return (
    <StyledStarsList>
      <StyledListContainer>
        <StyledListTitle  level={2} size={36} >
          {"Наши звезды"}
        </StyledListTitle>
        <StyledList>
          {
            starsInfo &&
            starsInfo.map((star)=>(
              <StyledItem key={star.id}>
                <StarCard star={star} />
              </StyledItem>
            ))
          }
        </StyledList>
        <Button minWidth={353}>
          {"Добавить кота"}
        </Button>
      </StyledListContainer>
    </StyledStarsList>
  );
}

export default StarsList;