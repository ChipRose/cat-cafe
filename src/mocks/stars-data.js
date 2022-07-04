const starsData = [
  {
    id: 0,
    name: "Кот Лаки",
    about:
      "Крайне спокойный, ласковый малыш, который медленно, но уверенно перестаёт быть робким скромнягой.",
    image: process.env.PUBLIC_URL + "/img/stars/lucky.jpg",
    image2x: process.env.PUBLIC_URL + "/img/stars/lucky@2x.jpg",
    alt: "Полосатый кот с желтым платком на шее",
    feature: "empty",
    date: new Date(2022, 5, 1),
  },
  {
    id: 1,
    name: "Кот Базилио",
    about:
      "Прошлые хозяева отказались от него, и долгое время ему пришлось быть на передержке, привыкая к новой жизни.",
    image: process.env.PUBLIC_URL + "/img/stars/basilio.jpg",
    image2x: process.env.PUBLIC_URL + "/img/stars/basilio@2x.jpg",
    alt: "Полосатый кот, облизывающий мордочку",
    feature: "empty",
    date: new Date(2022, 5, 1),
  },
  {
    id: 2,
    name: "Кошка Сью",
    about:
      "Эта юная красавица очень общительная и ласковая уже с первого дня, как приехала в кафе.",
    image: process.env.PUBLIC_URL + "/img/stars/sue.jpg",
    image2x: process.env.PUBLIC_URL + "/img/stars/sue@2x.jpg",
    alt: "Серая кошка с загнутыми ушами",
    feature: "ласковый",
    date: new Date(2022, 5, 1),
  }
];

export default starsData;
