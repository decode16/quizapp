const questions = [

    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Elephant", correct: false },

        ]
    },
    {
        question: "'Dandia' is a popular dance of?",
        answers: [
            { text: "Punjab", correct: false },
            { text: "Gujarat", correct: true },
            { text: "Tamil Nadu", correct: false },
            { text: "Maharashtra", correct: false },

        ]
    },
    {
        question: "'Natya - Shastra' the main source of India's classical dances was written by",
        answers: [
            { text: "Bharat Muni", correct: true },
            { text: "Nara Muni", correct: false },
            { text: "Abhinav Gupt", correct: false },
            { text: "Tandu Muni", correct: false },

        ]
    },
    {
        question: "The words 'Satyameva Jayate' inscribed below the base plate of the emblem of India are taken from",
        answers: [
            { text: "Rigveda", correct: false },
            { text: "Satpath Brahmana", correct: false },
            { text: "Mundak Upanishad", correct: true },
            { text: "Ramayana", correct: false },

        ]
    },
    {
        question: "The ratio of width of our National flag to its length is",
        answers: [
            { text: "3:5", correct: false },
            { text: "2:$", correct: false },
            { text: "2:3", correct: true },
            { text: "3:4", correct: false },

        ]
    },
];





const questionElement = document.getElementById("question")
const answrtButton = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    let currentQuestionIndex = 0;
    let score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answrtButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });


};

function resetState() {
    nextButton.style.display = "none"
    while (answrtButton.firstChild) {
        answrtButton.removeChild(answrtButton.firstChild)
    }
};

function selectAnswer(n) {

    const selectBtn = n.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;

    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answrtButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

};


function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton() {

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }

};


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();