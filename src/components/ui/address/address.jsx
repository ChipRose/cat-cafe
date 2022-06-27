import AddressIcon from "../../../assets/icons/map-flag.svg";

import "./style.css";

function Address() {
  return (
    <address className="address">
      <div className="address__image-block">
        <img
          className="address__icon"
          width="16"
          height="17"
          src={AddressIcon}
          alt="Указаталь адреса"
        />
      </div>
      <span className="address__text">
        Санкт-Петербург, набережная реки Карповки, дом 5, литера П
      </span>
    </address>
  );
}

export default Address;
