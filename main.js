const readlineSync = require("readline-sync");
const playLcmGame = require("./games/lcm");
const playProgressionGame = require("./games/progression");

function main() {
  console.log("Choose a game:");
  console.log("1 - Least Common Multiple (LCM)");
  console.log("2 - Geometric Progression");
  

  const choice = readlineSync.question("Enter 1 or 2: ");

  if (choice === "1") {
    playLcmGame();
  } else if (choice === "2") {
    playProgressionGame();
  } else {
    console.log("Invalid choice. Exiting...");
  }
}

main();
