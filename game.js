const readlineSync = require("readline-sync");

// НОД
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// НОК
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// НОК для 3 чисел
function lcmThreeNumbers(a, b, c) {
  return lcm(lcm(a, b), c);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playLcmGame() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("Find the smallest common multiple of given numbers.");

  for (let i = 0; i < 3; i++) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const num3 = getRandomNumber(1, 100);

    const correctAnswer = lcmThreeNumbers(num1, num2, num3);

    console.log(`Question: ${num1} ${num2} ${num3}`);
    const userAnswer = Number(readlineSync.question("Your answer: "));

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

// Генерация геом прогрессии
function generateGeometricProgression() {
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

  return { progression, correctAnswer };
}

function playGeometricProgressionGame() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What number is missing in the progression?");

  for (let i = 0; i < 3; i++) {
    const { progression, correctAnswer } = generateGeometricProgression();

    console.log(`Question: ${progression.join(" ")}`);
    const userAnswer = Number(readlineSync.question("Your answer: "));

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

function main() {
  console.log("Choose a game:");
  console.log("1 - Least Common Multiple (LCM)");
  console.log("2 - Geometric Progression");

  const choice = readlineSync.question("Enter 1 or 2: ");

  if (choice === "1") {
    playLcmGame();
  } else if (choice === "2") {
    playGeometricProgressionGame();
  } else {
    console.log("Invalid choice. Exiting...");
  }
}

main();
