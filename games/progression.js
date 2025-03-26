const runGame = require("../gamerun.js");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProgressionRound() {
  const length = getRandomNumber(5, 10); // Длина цепочки
  const start = getRandomNumber(1, 10); // Начальный элемент
  const ratio = getRandomNumber(2, 5); // Множитель

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start * Math.pow(ratio, i));
  }

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = "..";

  return {
    question: progression.join(" "),
    correctAnswer,
  };
}

function playProgressionGame() {
  runGame("What number is missing in the progression?", generateProgressionRound);
}

module.exports = playProgressionGame;