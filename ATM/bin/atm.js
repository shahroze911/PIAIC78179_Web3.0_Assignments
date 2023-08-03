import inquirer from "inquirer";
const user_info = [
    {
        id: 1000,
        password: 123456
    },
    {
        id: 1001,
        password: 12345
    }
];
async function login() {
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
        console.log("Login Successful");
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
            }
        ]);
        const balance = 10000;
        console.log(balance);
        const enteredAmount = options.amount;
        console.log(enteredAmount);
        if (enteredAmount < balance) {
            const remainingBalance = balance - enteredAmount;
            console.log(`${userfind} remaining balance is ${remainingBalance}`);
        }
    }
    else {
        console.log("Login Failed");
    }
}
login();
