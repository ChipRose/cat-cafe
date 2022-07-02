import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";

function PageWrapper({addCard}) {

  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default PageWrapper;
