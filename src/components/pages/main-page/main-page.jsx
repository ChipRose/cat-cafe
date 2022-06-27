import About from "../../blocks/about/about";
import StarsList from "../../blocks/stars-list/stars-list";

import "./style.css";

function MainPage() {
  return (
    <main className="main-page">
      <About/>
      <StarsList/>
    </main>
  );
}

export default MainPage;
