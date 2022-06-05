const Quote = require("inspirational-quotes");

function rootValue() {
  const today = new Date();
  const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const getRandomDiceThrow = (sides = 6) => Math.ceil(Math.random() * sides);
  const randomCointToss = () => Math.random() > 0.5;
  const getRandomCointTossesUntilTrue = () => {
    const result = [];
    do {
      result.push(randomCointToss());
    } while (!result[result.length - 1]);
    return result;
  };

  return {
    greeting: "Hello Misha!",
    greetingCat: randomCointToss() ? "Meow" : null,
    urls: ["https://github.com/MishanyaZh"],
    randomDiceThrow: getRandomDiceThrow(),
    pi: Math.PI,
    isTodaySat: today.getDay() === 6,
    randomCointTossesUntilTrue: getRandomCointTossesUntilTrue,
    today: DAYS_OF_WEEK[today.getDay()],
    workDays: DAYS_OF_WEEK.slice(1, 6),
    randomQuote: Quote.getQuote(),
  };
}

module.exports = rootValue;
