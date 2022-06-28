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
  color: rgba(255, 255, 255, 1);
  background: rgba(255, 115, 43, 1);
  transition: all 0.3s ease-out;
  &:hover {
    background: rgba(243, 87, 20, 1);
    box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.14) inset;
  };
  &:active {
    background: rgba(243, 87, 20, 1);
    box-shadow: none;
  }
`;

function Button({ children, minWidth }) {
  return (
    <StyledButton type="button" width={`${minWidth}px`}>
      {children}
    </StyledButton>
  );
};

export default Button;
