let currentQuestion;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 250) + 1;
    const num2 = Math.floor(Math.random() * 250) + 1;
    currentQuestion = { num1, num2, answer: num1 + num2 };
    
    document.getElementById('question').innerText = `${num1} + ${num2} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value, 10);

    if (userAnswer === currentQuestion.answer) {
        document.getElementById('feedback').innerText = 'Correct! Well done.';
    } else {
        document.getElementById('feedback').innerText = 'Incorrect. Try again.';
    }
}
// Generate the first question on page load
generateQuestion();
