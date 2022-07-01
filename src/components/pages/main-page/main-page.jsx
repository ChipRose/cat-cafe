import About from "../../blocks/about/about";
import StarsList from "../../blocks/stars-list/stars-list";
import FormNew from "../../blocks/form-new/form-new";

import { StyledPage } from "./style";

function MainPage() {
  return (
    <StyledPage>
      <About />
      <StarsList />
      <FormNew />
    </StyledPage>
  );
}

export default MainPage;
