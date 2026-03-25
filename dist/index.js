import { Data } from "./dataFormat.js";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
const rl = readline.createInterface({ input: stdin, output: stdout });
const introduction = `
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.

Please select the difficulty choseLevel:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice (1/2/3):`;
function addDifficulty(type) {
    switch (type) {
        case "1":
            Data.totalChances = 10;
            Data.remainingChances = 10;
            Data.difficulty = "Easy";
            break;
        case "2":
            Data.remainingChances = 5;
            Data.totalChances = 5;
            Data.difficulty = "Medium";
            break;
        case "3":
            Data.totalChances = 3;
            Data.remainingChances = 3;
            Data.difficulty = "Hard";
    }
}
/* main */
async function main() {
    const choseLevel = await rl.question(introduction);
    addDifficulty(choseLevel);
    Data.randomNumber = Math.round(Math.random() * 100);
    console.log(`\nGreat! You have selected the ${Data.difficulty} difficulty.\nLet's start the game!`);
    while (Data.remainingChances != 0) {
        const guess = await rl.question("\nEnter your guess:");
        const guessNumber = Number(guess);
        if (isNaN(guessNumber)) {
            console.log(`\nthe input must be number`);
            continue;
        }
        if (guessNumber === Data.randomNumber) {
            console.log(`\nCongratulations! You guessed the correct number in ${Data.totalChances - Data.remainingChances} attempts.`);
            break;
        }
        if (guessNumber < Data.randomNumber) {
            console.log(`\nIncorrect! The number is greater than ${guessNumber}.`);
        }
        else {
            console.log(`\nIncorrect! The number is less than ${guessNumber}.`);
        }
        Data.remainingChances--;
    }
    if (Data.remainingChances == 0) {
        console.log(`\ngame over, the correct number is ${Data.randomNumber}.`);
    }
    rl.close();
}
main();
