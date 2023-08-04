#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
let min = 1, max = 51;
let generated = getRandomInt(min, max);
async function getUserInput() {
    const rainbow = chalkAnimation.rainbow('Number Guessing Game by Shahroze Kamran Sahotra', 2); // Animation starts
    await sleep();
    rainbow.stop();
    let ask = await inquirer.prompt([
        {
            type: 'number',
            message: `Enter Number between 1-50 `,
            name: 'userNumber'
        },
        {
            type: 'confirm',
            message: 'Yes or No'
        }
    ]);
    if (isNaN(ask.userNumber) || ask.userNumber < 1 || ask.userNumber > 51) {
        console.log(chalk.red(`Invalid input. Please enter a number between 1 and 51.`));
        return getUserInput();
    }
    return ask.userNumber;
}
const numGuess = await getUserInput();
if (generated === numGuess) {
    console.log(chalk.greenBright(`You Guessed it right`));
}
else {
    console.log(chalk.redBright(`Your Guess is incorrect
    Generated Number ${generated} 
    Your Guess ${numGuess}
    `));
}
