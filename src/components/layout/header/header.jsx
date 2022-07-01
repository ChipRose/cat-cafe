import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";

import {StyledHeader, StyledContainer} from "./style";

function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo/>
        <Nav/>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
