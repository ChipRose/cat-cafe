import styled, { css } from "styled-components";

const AccordionButton = styled.button`
  background: transparent;
  border: none;
  img{
    transition: all 0.3s ease-in;
  }
  ${({ isOpen }) => isOpen
    ? css`
      img{
        transform: rotate(180deg);
      }
    `
    : null
  }
`;

const BasicButton = css`
  display: inline-block;
  text-align: center;
  border: none;
  text-decoration: none;
  background: ${(props) => props.theme.buttonColor.default};
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover, 
  &:active {
    background: ${(props) => props.theme.buttonColor.action};
  }
`;

const StyledButton = styled.a`
  ${BasicButton};
  ${(props) => props.$minWidth
    ? css`
      min-width: ${props.$minWidth}px;
    `
    : css`
      min-width: 100%;
    `
  }
  padding: 16.5px;
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.borderRadius.button};
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.txtColor.contrast};
  &:hover {
    box-shadow: 0 4px 0 0  ${(props) => props.theme.buttonColor.shadow} inset;
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background: grey;
  }
`;

const StyledSliderButton = styled.button`
  ${BasicButton};
  width: 64px;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const StyledCloseButton = styled.button`
  ${BasicButton};
  width: 40px;
  height: 40px;
  box-sizing: border - box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 100 %;
  border-radius: 0 ${(props) => props.theme.borderRadius.main} 0 50%;
  img {
    width: 15px;
    height: auto;
  }
`;

export {
  StyledButton,
  StyledSliderButton,
  StyledCloseButton,
  AccordionButton,
};