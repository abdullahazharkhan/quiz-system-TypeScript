#! /usr/bin/env node
import * as inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
import { questions } from "./questions.js";
const prompt = inquirer.createPromptModule();
let marks = 0;
let nextQuestion = 1;
function main(q, ans, opt) {
    prompt([
        {
            type: "list",
            name: "userInput",
            message: q,
            choices: opt
        }
    ])
        .then(answer => {
        if (answer["userInput"] == ans) {
            console.log("Right Answer!!");
            marks = marks + 1;
        }
        if (nextQuestion < questions.length) {
            main(questions[nextQuestion].question, questions[nextQuestion].correctAns, questions[nextQuestion].choices);
            nextQuestion = nextQuestion + 1;
        }
        else {
            console.log(`You gained ${marks}/${questions.length}, bye!!`);
        }
    });
}
console.log(chalk.cyan(figlet.textSync("Quiz System", {
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
})));
main(questions[0].question, questions[0].correctAns, questions[0].choices);
//# sourceMappingURL=index.js.map