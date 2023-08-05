#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
const user_info = [
    {
        name: "Shah",
        id: 1000,
        password: 123456
    },
    {
        name: "Shahroze",
        id: 1001,
        password: 12345
    }
];
async function login() {
    const rainbow = chalkAnimation.rainbow('ATM by Shahroze Kamran Sahotra', 2); // Animation starts
    await sleep();
    rainbow.stop();
    const questions = [
        {
            type: 'number',
            name: 'userId',
            message: 'Enter your User ID'
        },
        {
            type: 'number',
            name: 'passId',
            message: 'Enter your Password'
        }
    ];
    const answers = await inquirer.prompt(questions);
    const userfind = user_info.find((u) => u.id === answers.userId);
    if (!userfind) {
        console.log("User not Found!");
        return;
    }
    if (user_info.find((p) => p.password === answers.passId)) {
        console.log(chalk.greenBright("Login Successful"));
        const options = await inquirer.prompt([
            {
                type: 'list',
                name: 'accountType',
                choices: ["Current", "Saving"],
                message: "Select your Account Type",
            },
            {
                type: 'list',
                name: 'transactionType',
                choices: ["Fast Cash", "Withdraw"],
                message: "Select your Transaction Type",
                when(options) {
                    return options.accountType;
                }
            },
            {
                type: 'list',
                name: 'amount',
                choices: [1000, 2000, 5000, 10000],
                message: "Select your Amount",
                when(options) {
                    return options.transactionType === "Fast Cash";
                }
            },
            {
                type: 'number',
                name: 'amount',
                message: "Enter your Amount",
                when(options) {
                    return options.transactionType === "Withdraw";
                }
            },
        ]);
        const balance = 10000;
        const enteredAmount = options.amount;
        if (enteredAmount < balance) {
            const remainingBalance = balance - enteredAmount;
            console.log(chalk.blueBright(`Transaction has been completed successfully!            
${userfind.name}, Your remaining balance is ${remainingBalance}
`));
        }
    }
    else {
        console.log(chalk.redBright("Login Failed"));
    }
}
async function restart() {
    do {
        console.clear();
        await login();
        var again = await inquirer.prompt({
            type: 'input',
            name: 'restart',
            message: 'Press Y to restart | Press N to cancel: '
        });
    } while (again.restart === 'y' || again.restart === 'Y');
}
restart();
