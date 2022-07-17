import React from 'react';

import logo from "../../../assets/logo.svg";
import { AppRoute } from '../../../mocks/const';

import {
  StyledLogo,
  StyledImg,
  StyledText,
} from './style.js';

function Logo() {
  return (
    <StyledLogo to={AppRoute.MAIN}>
      <StyledImg src={logo} alt="логотип" />
      <StyledText>Котокафе</StyledText>
    </StyledLogo>
  );
}

export default Logo;
