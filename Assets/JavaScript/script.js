// Global Variables and Functions

var secondsLeft = 75;

var highscores = [];

var timerInterval;

// Retrieves data from localStorage and updates highscores array
var storedHighscores = JSON.parse(localStorage.getItem('highscores'));
if (storedHighscores !== null) {
    highscores = storedHighscores;
}

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = 'Time Remaining: ' + secondsLeft;

        if (secondsLeft <= 0) {
            timer.textContent = 'Time\'s Up!';
            clearInterval(timerInterval);
            gameOver();
        };

    }, 1000);

    function complete() {
        clearInterval(timerInterval);
        title.innerHTML = 'Congratulations!';
        question.textContent = 'You completed the quiz with ' + secondsLeft + ' seconds remaining.';

        // Displaying the form
        question.appendChild(recordScore);
        recordScore.appendChild(enterNameLabel);
        recordScore.appendChild(enterName);

        // Stores score and navigates to the highscore page
        storeHighscores();
    };

    setTime.complete = complete;
}

function gameOver() {
    title.innerHTML = 'Game Over';
    question.textContent = 'You ran out of time to complete the quiz!';

    if (document.getElementById('start-button') === null && document.getElementById('restart-button') === null) {

        let restartBtn = document.createElement('button');
        restartBtn.setAttribute('class', 'btn btn-primary');
        restartBtn.setAttribute('id', 'restart-button');
        restartBtn.textContent = 'Restart Quiz';
        midCol.appendChild(restartBtn);
        restartBtn.addEventListener('click', function() {
            clearInterval(timerInterval);
            secondsLeft = 75;
            restartBtn.remove();
            firstQuestion();
        });
    }

}

// Variables for score submission
var recordScore = document.createElement('form');

var enterNameLabel = document.createElement('label');
enterNameLabel.innerHTML = '<br> Enter name: ';

var enterName = document.createElement('input');

var eventListenerExists = false;

// Stores score and navigates to the highscore page
function storeHighscores() {

    if (!eventListenerExists) {

        recordScore.addEventListener('submit', function (event) {
            event.preventDefault();
            var nameText = enterName.value;
            var userScore = nameText + ': ' + secondsLeft + ' seconds';

            if (nameText === '') {
                return;
            };

            highscores.push(userScore);

            // Store new score into localStorage
            localStorage.setItem('highscores', JSON.stringify(highscores));

            highscoresPage();
        });

        eventListenerExists = true;

    }

}

// Highscores page
function highscoresPage() {

    clearInterval(timerInterval);
    title.textContent = 'Highscores';
    question.innerHTML = '';

    for (var i = 0; i < highscores.length; i++) {

        var li = document.createElement('li');
        li.textContent = highscores[i];
        question.appendChild(li);

    };

    if (document.getElementById('start-button') === null && document.getElementById('restart-button') === null) {

        let restartBtn = document.createElement('button');
        restartBtn.setAttribute('class', 'btn btn-primary');
        restartBtn.setAttribute('id', 'restart-button');
        restartBtn.textContent = 'Restart Quiz';
        midCol.appendChild(restartBtn);
        restartBtn.addEventListener('click', function() {
            clearInterval(timerInterval);
            secondsLeft = 75;
            restartBtn.remove();
            firstQuestion();
        });
    }
    
}

function highscoresPageOnClick(event) {

    event.preventDefault();

    clearInterval(timerInterval);
    title.textContent = 'Highscores';
    question.innerHTML = '';

    for (var i = 0; i < highscores.length; i++) {

        var li = document.createElement('li');
        li.textContent = highscores[i];
        question.appendChild(li);

    };

}

// Feedback for wrong answer
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

// View Highscores link
viewHighscores.addEventListener('click', highscoresPageOnClick);

startButton.addEventListener('click', function (event) {
    firstQuestion();
});

// Starting the quiz
function firstQuestion() {

    // Question 1 Display
    title.innerHTML = ''; // removes title
    startButton.remove(); // removes start button
    question.innerHTML = questions[0] + '<br>'; // First question

    for (var i = 0; i < 4; i++) {
        choices[i].innerHTML = responses.one[i];
        question.appendChild(choices[i]);
    };

    // Start the timer
    setTime();

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
                setTime.complete();
            } else {
                question.appendChild(feedback);
                secondsLeft = secondsLeft - 15;
            };
        }
    });
};