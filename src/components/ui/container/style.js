import styled from "styled-components";

const StyledContainer = styled.div`
  width: ${(props) => props.theme.appWidth};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.indent};
  box-sizing: border-box;
`;

export { StyledContainer };