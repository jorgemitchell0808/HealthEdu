const quizData = [
    {
        question: "What is consent in a sexual context?",
        options: [
            "Saying yes to everything your partner wants",
            "A clear, voluntary agreement to engage in a specific sexual activity",
            "Agreeing to something because you feel pressured",
            "Silence or not saying no"
        ],
        correctAnswer: 1,
        explanation: "Consent is a clear, voluntary agreement to engage in a specific sexual activity. It should be freely given, reversible, informed, enthusiastic, and specific."
    },
    {
        question: "Which of the following is NOT a sign of a healthy relationship?",
        options: [
            "Mutual respect",
            "Open communication",
            "Controlling behavior",
            "Trust"
        ],
        correctAnswer: 2,
        explanation: "Controlling behavior is a sign of an unhealthy relationship. Healthy relationships are built on mutual respect, trust, and open communication."
    },
    {
        question: "What is sexting?",
        options: [
            "Sending text messages about your day",
            "Posting selfies on social media",
            "Sending sexually explicit messages or images electronically",
            "Texting while having a conversation"
        ],
        correctAnswer: 2,
        explanation: "Sexting involves sending sexually explicit messages or images electronically, usually via mobile phone or social media."
    },
    {
        question: "What is sextortion?",
        options: [
            "A type of dance",
            "A form of blackmail using sexual images or information",
            "A new social media platform",
            "A type of relationship"
        ],
        correctAnswer: 1,
        explanation: "Sextortion is a form of blackmail where someone threatens to share intimate images or information unless certain demands are met."
    },
    {
        question: "Which of the following is a key component of consent?",
        options: [
            "It can't be withdrawn once given",
            "It's assumed if you're in a relationship",
            "It must be enthusiastic and freely given",
            "It's not necessary for kissing"
        ],
        correctAnswer: 2,
        explanation: "Consent must be enthusiastic and freely given. It can be withdrawn at any time, is necessary for all sexual activities, and should never be assumed."
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const quizElement = document.getElementById('quiz');
    const questionData = quizData[currentQuestion];
    
    let quizHtml = `
        <div class="question">
            <h2>Question ${currentQuestion + 1}</h2>
            <p>${questionData.question}</p>
        </div>
        <div class="options">
    `;
    
    questionData.options.forEach((option, index) => {
        quizHtml += `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${option}
            </label>
        `;
    });
    
    quizHtml += '</div>';
    quizElement.innerHTML = quizHtml;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return false;
    
    return parseInt(selectedOption.value) === quizData[currentQuestion].correctAnswer;
}

function showResults() {
    const quizElement = document.getElementById('quiz');
    const resultsElement = document.getElementById('results');
    const scoreElement = document.getElementById('score');
    const totalQuestionsElement = document.getElementById('total-questions');
    const feedbackElement = document.getElementById('feedback');
    
    quizElement.style.display = 'none';
    resultsElement.style.display = 'block';
    document.getElementById('submit-quiz').style.display = 'none';
    
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = quizData.length;
    
    let feedbackHtml = '<h3>Question Breakdown:</h3>';
    quizData.forEach((question, index) => {
        feedbackHtml += `
            <p><strong>Question ${index + 1}:</strong> ${question.explanation}</p>
        `;
    });
    
    feedbackElement.innerHTML = feedbackHtml;
}

document.getElementById('submit-quiz').addEventListener('click', () => {
    if (checkAnswer()) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
});

document.getElementById('retake-quiz').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.getElementById('submit-quiz').style.display = 'block';
    loadQuiz();
});

// Initial quiz load
loadQuiz();