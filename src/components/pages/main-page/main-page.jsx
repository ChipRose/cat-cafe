import styled from "styled-components";

import About from "../../blocks/about/about";
import StarsList from "../../blocks/stars-list/stars-list";

const StyledPage = styled.main`
  flex: 1 1 auto;
`;

function MainPage() {
  return (
    <StyledPage>
      <About/>
      <StarsList/>
    </StyledPage>
  );
}

export default MainPage;
