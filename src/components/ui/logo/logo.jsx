import React from 'react';

import logo from "../../../assets/logo.svg";

import {
  StyledLogo,
  StyledImg,
  StyledText,
} from './style.js';

function Logo() {
  return (
    <StyledLogo href="/">
      <StyledImg src={logo} alt="логотип" />
      <StyledText>Котокафе</StyledText>
    </StyledLogo>
  );
}

export default Logo;
