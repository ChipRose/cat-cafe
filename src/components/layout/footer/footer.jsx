import styled from "styled-components";

import Logo from "../../ui/logo/logo";
import Copyright from "../../ui/copyright/copyright";

const StyledFooter = styled.footer`
  background: ${(props)=>props.theme.contrastBgColor};
`;

const FooterContainer = styled.div`
  width: ${(props)=>props.theme.appWidth};
  margin: 0 auto;
  padding: 19px ${(props)=>props.theme.indent};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <Logo/>
        <Copyright/>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;