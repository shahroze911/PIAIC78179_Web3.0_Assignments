#! /usr/bin/env node
import inquirer from "inquirer";
const questions = await inquirer.prompt([
    {
        type: "input",
        name: "words",
        message: "Enter Sentence: ",
    },
]);
const words = questions.words.trim().split(" ");
const counter = words.length;
const characters = questions.words.replace(/\s/g, "");
console.log(`Total Number of Words in given string: ${counter}
Total Characters are (Without Spaces): ${characters.length}
`);
