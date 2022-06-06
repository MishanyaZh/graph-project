const Quote = require("inspirational-quotes");
const movieQuote = require("popular-movie-quotes");

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
    books: [
      {
        title: "Harry Potter and the Sorcerer's Stone",
      },
      {
        title: "Harry Potter and the Chamber of Secrets",
      },
      {
        title: "Harry Potter and the Prisoner of Azkaban",
      },
      {
        title: "Harry Potter and the Goblet of Fire",
      },
      {
        title: "Harry Potter and the Order of the Phoenix",
      },
      {
        title: "Harry Potter and the Half-Blood Prince",
      },
      {
        title: "Harry Potter and the Deathly Hallows",
      },
      {
        title: "Leviathan Wakes",
      },
      {
        title: "Caliban's War",
      },
      {
        title: "Abaddon's Gate",
      },
      {
        title: "Cibola Burn",
      },
      {
        title: "Nemesis Games",
      },
      {
        title: "Babylon's Ashes",
      },
      {
        title: "Persepolis Rising",
      },
      {
        title: "Tiamat's Wrath",
      },
      {
        title: "Blood of Elves",
      },
      {
        title: "Time of contempt",
      },
      {
        title: "Baptism of fire",
      },
      {
        title: "The tower of the swallow",
      },
      {
        title: "The lady of the lake",
      },
    ],
    authors: [
      {
        name: "J. K. Rowling",
      },
      {
        name: "James S. A. Corey",
      },
      {
        name: "Andrzej Sapkowski",
      },
    ],
    users: [
      {
        name: "Alice",
        email: "alice@example.com",
      },
      {
        name: "Bob",
        email: "bob@example.com",
      },
      {
        name: "Celine",
        email: "celine@example.com",
      },
      {
        name: "Dan",
        email: "dan@example.com",
      },
    ],
    // -----------
    greeting: "Hello Misha!",
    greetingCat: randomCointToss() ? "Meow" : null,
    urls: ["https://github.com/MishanyaZh"],
    randomDiceThrow: getRandomDiceThrow(),
    pi: Math.PI,
    isTodaySat: today.getDay() === 6,
    randomCointTossesUntilTrue: getRandomCointTossesUntilTrue,
    today: DAYS_OF_WEEK[today.getDay()],
    workDays: DAYS_OF_WEEK.slice(1, 6),
    randomQuoteTheDay: Quote.getQuote(),
    randomMovieQuote: movieQuote.getRandomQuote(),
  };
}

module.exports = rootValue;
