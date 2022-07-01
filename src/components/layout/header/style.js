import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
`;

const StyledContainer = styled.div`
  width: ${(props) => props.theme.appWidth};
  min-height: 80px;
  margin: 0 auto;
  padding: 10px ${(props) => props.theme.indent};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { StyledHeader, StyledContainer };