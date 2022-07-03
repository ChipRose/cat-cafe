import styled from "styled-components";

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.bgColor.contrast};
`;

const FooterContainer = styled.div`
  width: ${(props) => props.theme.appWidth};
  margin: 0 auto;
  padding: 19px ${(props) => props.theme.indent};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { StyledFooter, FooterContainer };