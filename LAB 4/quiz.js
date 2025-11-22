const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "Who wrote the Ramayana?", answer: "valmiki" }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        if (!userAnswer) {
            alert("Please enter an answer (cannot be empty).");
            i--; 
            continue;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz completed! Your final score is: " + score + "/" + quizQuestions.length);
}
runQuiz();
