import logo from "../../../assets/logo.svg";

import "./style.css";

function Logo() {
  return (
    <a href="/" className="logo">
      <img className="logo__img" src={logo} alt="логотип" />
      <span className="logo__text">Котокафе</span>
    </a>
  );
}

export default Logo;
