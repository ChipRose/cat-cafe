import Title from "../../ui/title/title";
import StarCard from "../../ui/star-card/star-card";
import Button from "../../ui/button/button";

import "./style.css";

function StarsList() {
  return (
    <section className="stars-list">
      <div className="container stars-list__container">
        <Title level={2} size={36} className="stars-list__title">
          {"Наши звезды"}
        </Title>
        <ul className="stars-list__list">
          <li className="stars-list__item">
            <StarCard/>
          </li>
          {/* {
            starsInfo &&
            starsInfo.map((star)=>(
              <li className="stars-list__item" key={star.id}>
                <StarCard star={star} />
              </li>
            ))
          } */}
        </ul>
        <Button className="stars-list__button" minWidth={353}>
          {"Купить билет"}
        </Button>
      </div>
    </section>
  );
}

export default StarsList;