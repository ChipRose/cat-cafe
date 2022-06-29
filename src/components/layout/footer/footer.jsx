import styled from "styled-components";

import Logo from "../../ui/logo/logo";
import Copyright from "../../ui/copyright/copyright";

const StyledFooter = styled.footer`
  background: rgba(255, 255, 255, 1);
`;

const FooterContainer = styled.div`
  width: 1140px;
  margin: 0 auto;
  padding: 19px 20px;
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