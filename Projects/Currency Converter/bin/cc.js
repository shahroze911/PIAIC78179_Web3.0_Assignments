import inquirer from "inquirer";
const currencies = {
    "PKR": {
        "USD": 0.0035,
        "GBP": 0.0027,
        "EUR": 0.0032,
        "PKR": 1
    },
    "USD": {
        "PKR": 287.93,
        "GBP": 0.787,
        "EUR": 0.91,
        "USD": 1
    },
    "GBP": {
        "USD": 1.26,
        "PKR": 365.49,
        "EUR": 1.16,
        "GBP": 1
    },
    "EUR": {
        "USD": 1.09,
        "PKR": 314.96,
        "EUR": 1,
        "GBP": 0.86
    },
};
let questions = await inquirer.prompt([
    {
        type: 'list',
        name: 'from',
        message: 'Convert From: ',
        choices: ["PKR", "USD", "EUR", "GBP"]
    },
    {
        type: 'list',
        name: 'to',
        message: 'Convert To: ',
        choices: ["PKR", "USD", "EUR", "GBP"]
    },
    {
        type: 'number',
        name: 'amount',
        message: 'Enter Amount (To be converted): ',
        validate: (value) => {
            if (!isNaN(value)) {
                return true;
            }
            return 'Enter Valid Number';
        }
    },
]);
const { from, to, amount } = questions;
if (from && to && amount) {
    let res = currencies[to][from] * amount;
    console.log(res);
}
else {
    console.log("Invalid Input");
}
