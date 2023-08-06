#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
const now = new Date();
async function options() {
    let repeat = true;
    const questions = await inquirer.prompt([
        {
            type: "list",
            name: "Choose",
            message: "Welcome to TODO List ",
            choices: ["Add New", "View All", "Exit"],
        },
    ]);
    switch (questions.Choose) {
        case "Add New":
            let loop = true;
            while (loop) {
                const answers = await inquirer.prompt([
                    {
                        type: "input",
                        name: "TODO",
                        message: "Create a New Task",
                    },
                    {
                        type: "confirm",
                        name: "retry",
                        message: "Add more to the list ",
                        default: false,
                    },
                ]);
                const { TODO, retry } = answers;
                loop = retry;
                if (TODO) {
                    todos.push(TODO);
                }
                else {
                    console.log("Invalid Input");
                }
                if (loop == false) {
                    options();
                }
                else {
                }
            }
            break;
        case "View All":
            if (todos.length > 0) {
                console.log(`Your TODO List: `);
                todos.forEach((todo) => {
                    console.log(todo, "=>", now.toLocaleDateString());
                });
            }
            else {
                console.log(`Empty List! `);
            }
            break;
        case "Exit":
            break;
        default:
            options();
            break;
    }
}
options();
