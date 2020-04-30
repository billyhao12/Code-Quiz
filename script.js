// Global Variables

var startTime = 75;
var elapsedTime = 0;
var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = 'Time remaining: ' + secondsLeft;
    }, 1000);

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        gameOver();
    };
}

function gameOver() {
    title.innerHTML = 'Game Over';
}

var feedback = document.createElement('p');
feedback.innerHTML = 'Wrong';

var
    choiceA = document.createElement('button'),
    choiceB = document.createElement('button'),
    choiceC = document.createElement('button'),
    choiceD = document.createElement('button');

var choices = [choiceA, choiceB, choiceC, choiceD];

var questions = ['1. What are the three main programming languages of a web developer?', '2. Which element listed does NOT make use of a closing tag?', '3. What should you do if your code isn\'t working?', '4. Which of the following in JavaScript allows you to store multiple named values in one variable?', '5. Which HTML tag prints the largest text?'];

var responses = {
    one: ['A. Python, C++ and R', 'B. HTML, CSS and Java', 'C. HTML, CSS and JavaScript', 'D. Python, C++ and JavaScript'],
    two: ['A. <p>', 'B. <img>', 'C. <div>', 'D. <h2>'],
    three: ['A. Inspect it in a Google Chrome web browser', 'B. console.log() certain areas to make sure they are working', 'C. Google alternative solutions', 'D. All of the above'],
    four: ['A. an object', 'B. an array', 'C. a function', 'D. an if statement'],
    five: ['A. <h1>', 'B. <h2>', 'C. <h3>', 'D. <p>']
};

var answers = [2, 1, 3, 0, 0];

// HTML Elements

var startButton = document.getElementById('start-button');

var topBox = document.getElementById('topBox');
var topRow = document.getElementById('topRow');
var viewHighscores = document.getElementById('topLeftCol');
var timer = document.getElementById('timer');

var midBox = document.getElementById('midBox');
var midRow = document.getElementById('midRow');
var midCol = document.getElementById('midCol');

var title = document.getElementById('title');
var question = document.getElementById('question');

// Starting the quiz

function firstQuestion() {

    // Question 1 Display
    startButton.addEventListener('click', function (event) {

        title.innerHTML = ''; // removes title
        startButton.parentNode.removeChild(startButton); // removes start button
        question.innerHTML = questions[0] + '<br>'; // First question

        for (var i = 0; i < 4; i++) {
            choices[i].innerHTML = responses.one[i];
            question.appendChild(choices[i]);
        };

        // Start the timer
        setTime();
    });

    // Question 1 Click Events
    choices.forEach(function (choice, i) {
        choice.onclick = function () {
            if (i === answers[0]) {
                secondQuestion();
            } else {
                question.appendChild(feedback);
                secondsLeft = secondsLeft - 15;
            };
        };
    });
}

// Calling the firstQuestion() function
firstQuestion();

function secondQuestion() {

    // Question 2 Display

    question.innerHTML = questions[1] + '<br>'; // Second question

    for (var i = 0; i < 4; i++) {
        choices[i].textContent = responses.two[i];
        question.appendChild(choices[i]);
    };

    // Question 2 Click Events

    choices.forEach(function (choice, i) {
        choice.onclick = function () {
            if (i === answers[1]) {
                thirdQuestion();
            } else {
                question.appendChild(feedback);
                secondsLeft = secondsLeft - 15;
            };
        }
    });

};

function thirdQuestion() {

    // Question 3 Display

    question.innerHTML = questions[2] + '<br>'; // Third question

    for (var i = 0; i < 4; i++) {
        choices[i].innerHTML = responses.three[i];
        question.appendChild(choices[i]);
    };

    // Question 3 Click Events

    choices.forEach(function (choice, i) {
        choice.onclick = function () {
            if (i === answers[2]) {
                fourthQuestion();
            } else {
                question.appendChild(feedback);
                secondsLeft = secondsLeft - 15;
            };
        }
    });

};

function fourthQuestion() {

    // Question 4 Display

    question.innerHTML = questions[3] + '<br>'; // Fourth question

    for (var i = 0; i < 4; i++) {
        choices[i].innerHTML = responses.four[i];
        question.appendChild(choices[i]);
    };

    // Question 4 Click Events

    choices.forEach(function (choice, i) {
        choice.onclick = function () {
            if (i === answers[3]) {
                fifthQuestion();
            } else {
                question.appendChild(feedback);
                secondsLeft = secondsLeft - 15;
            };
        }
    });
};

function fifthQuestion() {

    // Question 5 Display

    question.innerHTML = questions[4] + '<br>'; // Fifth question

    for (var i = 0; i < 4; i++) {
        choices[i].textContent = responses.five[i];
        question.appendChild(choices[i]);
    };

    // Question 4 Click Events

    choices.forEach(function (choice, i) {
        choice.onclick = function () {
            if (i === answers[4]) {
                // Go to results page
            } else {
                question.appendChild(feedback);
                secondsLeft = secondsLeft - 15;
            };
        }
    });
};