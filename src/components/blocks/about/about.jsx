import Title from "../../ui/title/title";
import Address from "../../ui/address/address";
import AboutImg from "../../../assets/about/in-a-chair.svg";

import "./style.css";

function About() {
  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__text-block">
          <Title level={1} size={44} className="about__title">
            {"Первое в России котокафе"}
          </Title>
          <div className="about__info">
            <p className="about__text">
              Крупнейшее котокафе России, в котором живёт 50 кошек и котов,
              и каждый из них ищет новый дом. Животных можно гладить,
              фотографировать, играть с ними.
            </p>
          </div>
          <p className="about__work-time">Рабочее время с 8:00 до 23:00</p>
          <Address />
        </div>
        <div className="about__image-block">
          <img
            className="about__img"
            src={AboutImg}
            width="446"
            height="446"
            alt="Девушка в кресле с котом на спинке"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
