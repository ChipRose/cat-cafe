import styled, {css} from "styled-components";

const BasicButton = css`
  border: none;
  background: ${(props) => props.theme.buttonBgColor.default};
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover, 
  &:active {
    background: ${(props) => props.theme.buttonBgColor.action};
  }
`;

const StyledButton = styled.button`
  ${BasicButton};
  min-width:  ${(props) => props.width};
  padding: 16.5px;
  border-radius: 5px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.txtColor.contrast};
  &:hover {
    box-shadow: 0 4px 0 0  ${(props) => props.theme.buttonBgColor.shadow} inset;
  };
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background: grey;
  }
`;

const StyledCloseButton = styled.button`
  ${BasicButton};
  width: 40px;
  height: 40px;
  box-sizing: border-box; 
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 100%;
  border-radius: 0 ${(props)=>props.theme.borderRadius} 0 50%;
  img {
    width: 15px;
    height: auto;
  }
`;

export { 
  StyledButton,
  StyledCloseButton,
};