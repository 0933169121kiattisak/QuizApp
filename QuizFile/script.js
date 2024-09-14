// const questions = [
//     {
//         question:"1 + 1 = ?",
//         answers:[
//             {text: 2, correct: true},
//             {text: 3, correct: false},
//             {text: 4, correct: false},
//             {text: 5, correct: false},
//         ],
//     },
//     {
//         question:"1 + 3 = ?",
//         answers:[
//             {text: 2, correct: false},
//             {text: 3, correct: false},
//             {text: 4, correct: true},
//             {text: 5, correct: false},
//         ],
//     },
//     {
//         question:"4 + 1 = ?",
//         answers:[
//             {text: 2, correct: false},
//             {text: 3, correct: false},
//             {text: 4, correct: false},
//             {text: 5, correct: true},
//         ],
//     },
//     {
//         question:"3 + 3 = ?",
//         answers:[
//             {text: 2, correct: false},
//             {text: 3, correct: false},
//             {text: 4, correct: false},
//             {text: 6, correct: true},
//         ],
//     }
// ];

// const questonsElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestions();
// }

// function showQuestions() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questonsElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer)
//     });
// }

// function resetState() {
//     nextButton.style.display = "none";
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }

//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }

// function showScore(){
//     resetState();
//     questonsElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
// }

// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestions();
//     }else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click",() => {
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }
// })
// startQuiz();    

class Quiz {
    constructor(questions, questionElement, answerButtonsElement, nextButtonElement) {
        this.questions = questions;
        this.questionElement = questionElement;
        this.answerButtonsElement = answerButtonsElement;
        this.nextButtonElement = nextButtonElement;
        this.currentQuestionIndex = 0;
        this.score = 0;

        this.nextButtonElement.addEventListener('click', () => {
            this.currentQuestionIndex < this.questions.length ? this.handleNextButton() : this.startQuiz();
        });
    }

    startQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.nextButtonElement.innerHTML = "Next";
        this.showQuestion();
    }

    showQuestion() {
        this.resetState();
        const currentQuestion = this.questions[this.currentQuestionIndex];
        this.questionElement.innerHTML = `${this.currentQuestionIndex + 1}. ${currentQuestion.question}`;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerHTML = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', (e) => this.selectAnswer(e));
            this.answerButtonsElement.appendChild(button);
        });
    }

    resetState() {
        this.nextButtonElement.style.display = 'none';
        this.answerButtonsElement.innerHTML = ''; // ลบปุ่มคำตอบทั้งหมด
    }

    selectAnswer(e) {
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct === 'true';
        selectedButton.classList.add(isCorrect ? 'correct' : 'incorrect');

        if (isCorrect) this.score++;

        Array.from(this.answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === 'true') button.classList.add('correct');
            button.disabled = true;
        });

        this.nextButtonElement.style.display = 'block';
    }

    showScore() {
        this.resetState();
        this.questionElement.innerHTML = `You scored ${this.score} out of ${this.questions.length}!`;
        this.nextButtonElement.innerHTML = "Play Again";
        this.nextButtonElement.style.display = 'block';
    }

    handleNextButton() {
        this.currentQuestionIndex++;
        this.currentQuestionIndex < this.questions.length ? this.showQuestion() : this.showScore();
    }
}

// สร้างคำถาม
const questions = [
    {
        question: "1 + 1 = ?",
        answers: [
            { text: 2, correct: true },
            { text: 3, correct: false },
            { text: 4, correct: false },
            { text: 5, correct: false },
        ],
    },
    {
        question: "1 + 3 = ?",
        answers: [
            { text: 2, correct: false },
            { text: 3, correct: false },
            { text: 4, correct: true },
            { text: 5, correct: false },
        ],
    },
    {
        question: "4 + 1 = ?",
        answers: [
            { text: 2, correct: false },
            { text: 3, correct: false },
            { text: 4, correct: false },
            { text: 5, correct: true },
        ],
    },
    {
        question: "3 + 3 = ?",
        answers: [
            { text: 2, correct: false },
            { text: 3, correct: false },
            { text: 4, correct: false },
            { text: 6, correct: true },
        ],
    }
];

// เริ่มเกม
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButtonElement = document.getElementById('next-btn');

const quiz = new Quiz(questions, questionElement, answerButtonsElement, nextButtonElement);
quiz.startQuiz();
