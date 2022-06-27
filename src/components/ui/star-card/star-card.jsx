import image from "../../../assets/stars/lucky.jpg";
import image2x from "../../../assets/stars/lucky@2x.jpg";
import Title from "../title/title";

import "./style.css";

function StarCard() {
  return (
    <article className="star-card">
      <div className="star-card__image-block">
        <picture className="star-card__img">
          <img
            src={image}
            srcSet={image2x}
            className="star-card__image"
            width={313}
            height={313}
            alt="Лаки"
          />
        </picture>
        {/* <StarSticker/> */}
      </div>
      <div className="star-card__text-block">
        <Title level={3} size={32} className="star-card__title">
          {"Кот Лаки"}
        </Title>
        <div className="star-card__info">
          <p className="star-card__txt">
            {"Крайне спокойный, ласковый малыш, который медленно, но уверенно перестаёт быть робким скромнягой"}
          </p>
        </div>
      </div>
    </article>
  );
}

export default StarCard;
