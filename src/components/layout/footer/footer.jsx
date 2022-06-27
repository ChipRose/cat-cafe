import Logo from "../../ui/logo/logo";
import Copyright from "../../ui/copyright/copyright";

import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Logo/>
        <Copyright/>
      </div>
    </footer>
  );
}

export default Footer;