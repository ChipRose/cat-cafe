import styled from "styled-components";

import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";

const StyledHeader = styled.header`
  width: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
`;

const HeaderContainer = styled.div`
  width: 1140px;
  min-height: 80px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo/>
        <Nav/>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
