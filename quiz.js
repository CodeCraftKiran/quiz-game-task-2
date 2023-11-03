import { quizData } from './quizdata.js'

let displayQuestion = document.getElementById('display-question')
let butonDiv = document.getElementById('mcq')
let score = 0
let quizIndex = 0

function finalScore() {
    displayQuestion.textContent = "FINAL SCORE"
    butonDiv.textContent = `SCORE = ${score} / ${quizData.length}`
}

function quizQuestion() {
    if (quizData.length > quizIndex) {
    displayQuestion.textContent = quizData[quizIndex]["question"]
    let list = "";
    for (let j = 0; j < quizData[quizIndex].options.length; j++) {
        list += `<button type="button" class="mcq-button">${quizData[quizIndex].options[j]}</button>`;
    }
    butonDiv.innerHTML = list; 
    } else {
        finalScore()
    }
}

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const clickedButtonValue = event.target.textContent;
        if (clickedButtonValue == quizData[quizIndex].answer)
            score += 1
        quizIndex++;
        quizQuestion();
        
    }
});

quizQuestion();