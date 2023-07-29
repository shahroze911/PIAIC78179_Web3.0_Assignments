#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function calculations() {
    const rainbow = chalkAnimation.rainbow('Calculator by Shahroze Kamran Sahotra', 2); // Animation starts
    await sleep();
    rainbow.stop();
    const result = await inquirer.prompt([
        {
            type: 'number',
            name: 'firstNum',
            message: 'Enter First Number => '
        },
        {
            type: 'number',
            name: 'secondNum',
            message: 'Enter Second Number => '
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Enter Operation you want to perform ',
            choices: ['+', '-', '*', '/']
        }
    ]);
    let res = 0;
    switch (result.operator) {
        case '+':
            res = result.firstNum + result.secondNum;
            console.log(chalk.red(`Result of ${result.firstNum} ${result.operator} ${result.secondNum} = `, res));
            break;
        case '-':
            res = result.firstNum - result.secondNum;
            console.log(chalk.yellowBright(`Result of ${result.firstNum} ${result.operator} ${result.secondNum} = `, res));
            break;
        case '*':
            res = result.firstNum * result.secondNum;
            console.log(chalk.blueBright(`Result of ${result.firstNum} ${result.operator} ${result.secondNum} = `, res));
            break;
        case '/':
            res = result.firstNum / result.secondNum;
            console.log(chalk.bgMagenta(`Result of ${result.firstNum} ${result.operator} ${result.secondNum} = `, res));
            break;
        default:
            console.log(chalk.cyanBright(`Invalid Input`));
            break;
    }
}
async function restart() {
    do {
        console.clear();
        await calculations();
        var again = await inquirer.prompt({
            type: 'input',
            name: 'restart',
            message: 'Press Y to restart | Press N to cancel: '
        });
    } while (again.restart === 'y' || again.restart === 'Y');
}
restart();
