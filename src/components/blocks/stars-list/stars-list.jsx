import React from "react";

import CardList from '../../layout/cards-list/card-list';
import Button from "../../ui/button/button";

import { StyledStarsList, StyledListContainer, StyledListTitle } from "./style";

function StarsList() {

  return (
    <StyledStarsList>
      <StyledListContainer>
        <StyledListTitle level={2} size={36} >
          {"Наши звезды"}
        </StyledListTitle>
        <CardList />
        <Button minWidth={353}>
          {"Добавить кота"}
        </Button>
      </StyledListContainer>
    </StyledStarsList>
  );
}

export default StarsList;