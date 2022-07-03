import Logo from "../../ui/logo/logo";
import Copyright from "../../ui/copyright/copyright";

import {StyledFooter, FooterContainer} from "./style";

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