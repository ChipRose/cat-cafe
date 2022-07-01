import styled from "styled-components";

const StyledButton = styled.button`
  min-width:  ${(props) => props.width};
  padding: 16.5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.contrastTxtColor};
  background: ${(props) => props.theme.buttonBgColor.default};
  transition: all 0.3s ease-out;
  &:hover {
    background: ${(props) => props.theme.buttonBgColor.action};
    box-shadow: 0 4px 0 0  ${(props) => props.theme.buttonBgColor.shadow} inset;
  };
  &:active {
    background: ${(props) => props.theme.buttonBgColor.action};
    box-shadow: none;
  }
  &:disabled {
    background: grey;
  }
`;

export { StyledButton };