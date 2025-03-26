const runGame = require("../gamerun.js");

// НОД
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// НОК для 2х чисел
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// НОК для 3х чисел
function lcmThreeNumbers(a, b, c) {
  return lcm(lcm(a, b), c);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLcmRound() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const num3 = getRandomNumber(1, 100);
  const correctAnswer = lcmThreeNumbers(num1, num2, num3);

  return {
    question: `${num1} ${num2} ${num3}`,
    correctAnswer,
  };
}

function playLcmGame() {
  runGame("Find the smallest common multiple of given numbers.", generateLcmRound);
}

module.exports = playLcmGame;