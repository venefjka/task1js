const readlineSync = require("readline-sync");

function greetUser() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
}

function checkAnswer(userAnswer, correctAnswer, name) {
  if (userAnswer === correctAnswer.toString()) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
}

function runGame(description, generateRound) {
  const name = greetUser();
  console.log(description);

  for (let i = 0; i < 3; i++) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");
    checkAnswer(userAnswer, correctAnswer, name);
  }

  console.log(`Congratulations, ${name}!`);
}

module.exports = runGame;