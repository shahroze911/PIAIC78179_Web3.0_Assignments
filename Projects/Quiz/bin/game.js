import inquirer from "inquirer";
const quizQuestions = [
    {
        question: "\nTo access the services of the operating system, the interface is provided by the ___________?",
        choices: ["Library", "System calls", "Assembly instructions"],
        correctAnswer: "System calls",
    },
    {
        question: "\nCPU scheduling is the basis of ___________",
        choices: [
            "multiprogramming operating systems",
            "larger memory sized systems",
            "multiprocessor systems",
        ],
        correctAnswer: "multiprogramming operating systems",
    },
    {
        question: "\nWhich one of the following is not a real time operating system??",
        choices: ["RTLinux", "Palm OS", "VxWorks", "QNX"],
        correctAnswer: "Palm OS",
    },
];
async function startQuiz() {
    let quizScore = 0;
    for (const questions of quizQuestions) {
        const answerPrompt = await inquirer.prompt([
            {
                type: "list",
                name: "answer",
                message: questions.question,
                choices: questions.choices,
            },
        ]);
        if (answerPrompt.answer === questions.correctAnswer) {
            console.log("Correct Answer");
            quizScore++;
        }
        else {
            console.log(`Wrong Answer..! Correct Answer is ***${questions.correctAnswer}***`);
        }
    }
    const totalQuestions = quizQuestions.length;
    const percentage = (quizScore / totalQuestions) * 100;
    console.log(`Quiz completed. Your score: ${quizScore} out of ${totalQuestions}`);
    if (percentage >= 50) {
        console.log(`Passed with ${percentage.toFixed(2)}%`);
    }
    else {
        console.log(`Failed with ${percentage.toFixed(2)}%`);
    }
}
startQuiz();
