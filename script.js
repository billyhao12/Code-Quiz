// Global Variables

var startTime = 75;
var elapsedTime = 0;
var timeLeft = 75;

var feedback = document.createElement('p');
feedback.innerHTML = 'Wrong';

var questions = ['What are the three main programming languages of a web developer?', 'Which element listed does NOT make use of a closing tag?', 'What should you do if your code isn\'t working?', 'Which of the following in JavaScript allows you to store multiple named values in one variable?', 'Which HTML tag prints the largest text?'];

var responses = {
    one: ['Python, C++ and R', 'HTML, CSS and Java', 'HTML, CSS and JavaScript', 'Python, C++ and JavaScript'],
    two: ['<p>', '<img>', '<div>', '<h2>'],
    three: ['Inspect it in a Google Chrome web browser', 'console.log() certain areas to make sure they are working', 'Google alternative solutions', 'All of the above'],
    four: ['an object', 'an array', 'a function', 'an if statement'],
    five: ['<h1>', '<h2>', '<h3>', '<p>']
};

// HTML Elements

var startButton = document.getElementById('start-button');

var topBox = document.getElementById('topBox');
var topRow = document.getElementById('topRow');
var topLeftCol = document.getElementById('topLeftCol');
var topRightCol = document.getElementById('topRightCol');

var midBox = document.getElementById('midBox');
var midRow = document.getElementById('midRow');
var midCol = document.getElementById('midCol');

var title = document.getElementById('title');
var question = document.getElementById('question');

// Starting the quiz

// Question 1 Display
startButton.addEventListener('click', function (event) {
    title.innerHTML = ''; // removes title
    question.innerHTML = questions[0]; // first question
    startButton.parentNode.removeChild(startButton); // removes start button

    var choiceA = document.createElement('button');
    choiceA.innerHTML = 'A. ' + responses.one[0];
    question.appendChild(choiceA);

    var choiceB = document.createElement('button');
    choiceB.innerHTML = 'B. ' + responses.one[1];
    question.appendChild(choiceB);

    var choiceC = document.createElement('button');
    choiceC.innerHTML = 'C. ' + responses.one[2];
    question.appendChild(choiceC);

    var choiceD = document.createElement('button');
    choiceD.innerHTML = 'D. ' + responses.one[3];
    question.appendChild(choiceD);

    // Question 1 Click Events

    choiceA.addEventListener('click', function (event) {
        question.appendChild(feedback);
        // subtract 15 seconds
    });

    choiceB.addEventListener('click', function (event) {
        question.appendChild(feedback);
        // subtract 15 seconds
    });

    choiceD.addEventListener('click', function (event) {
        question.appendChild(feedback);
        // subtract 15 seconds
    });

    // Correct Answer
    choiceC.addEventListener('click', function (event) {

        // Question 2 Display

        question.innerHTML = questions[1] + '<br>'; // Second question

        choiceA.textContent = 'A. ' + responses.two[0];
        question.appendChild(choiceA);

        choiceB.textContent = 'B. ' + responses.two[1];
        question.appendChild(choiceB);

        choiceC.textContent = 'C. ' + responses.two[2];
        question.appendChild(choiceC);

        choiceD.textContent = 'D. ' + responses.two[3];
        question.appendChild(choiceD);

        // Question 2 Click Events

        choiceA.addEventListener('click', function (event) {
            question.appendChild(feedback);
            // subtract 15 seconds
        });
    
        choiceC.addEventListener('click', function (event) {
            question.appendChild(feedback);
            // subtract 15 seconds
        });
    
        choiceD.addEventListener('click', function (event) {
            question.appendChild(feedback);
            // subtract 15 seconds
        });
    
        // Correct Answer
        choiceB.addEventListener('click', function (event) {

            // Question 3 Display

            question.innerHTML = questions[2] + '<br>'; // Third question

            choiceA.textContent = 'A. ' + responses.three[0];
            question.appendChild(choiceA);

            choiceB.textContent = 'B. ' + responses.three[1];
            question.appendChild(choiceB);
    
            choiceC.textContent = 'C. ' + responses.three[2];
            question.appendChild(choiceC);
    
            choiceD.textContent = 'D. ' + responses.three[3];
            question.appendChild(choiceD);

            // Question 3 Click Events

            choiceA.addEventListener('click', function (event) {
                question.appendChild(feedback);
                // subtract 15 seconds
            });
        
            choiceB.addEventListener('click', function (event) {
                question.appendChild(feedback);
                // subtract 15 seconds
            });
        
            choiceC.addEventListener('click', function (event) {
                question.appendChild(feedback);
                // subtract 15 seconds
            });
        
            // Correct Answer
            choiceD.addEventListener('click', function (event) {
                

                // Question 4 Display

                question.innerHTML = questions[3] + '<br>'; // Fourth question

                choiceA.textContent = 'A. ' + responses.four[0];
                question.appendChild(choiceA);
        
                choiceC.textContent = 'B. ' + responses.four[1];
                question.appendChild(choiceC);
        
                choiceB.textContent = 'C. ' + responses.four[2];
                question.appendChild(choiceB);
        
                choiceD.textContent = 'D. ' + responses.four[3];
                question.appendChild(choiceD);
                
                // Question 4 Click Events

                choiceB.addEventListener('click', function (event) {
                    question.appendChild(feedback);
                    // subtract 15 seconds
                });
            
                choiceC.addEventListener('click', function (event) {
                    question.appendChild(feedback);
                    // subtract 15 seconds
                });
            
                choiceD.addEventListener('click', function (event) {
                    question.appendChild(feedback);
                    // subtract 15 seconds
                });
            
                // Correct Answer
                choiceA.addEventListener('click', function (event) {

                    // Question 5 Display

                    question.innerHTML = questions[4] + '<br>'; // Fifth question

                    choiceA.textContent = 'A. ' + responses.five[0];
                    question.appendChild(choiceA);
            
                    choiceC.textContent = 'B. ' + responses.five[1];
                    question.appendChild(choiceC);
            
                    choiceB.textContent = 'C. ' + responses.five[2];
                    question.appendChild(choiceB);
            
                    choiceD.textContent = 'D. ' + responses.five[3];
                    question.appendChild(choiceD);

                    // Question 5 Click Events

                    choiceB.addEventListener('click', function (event) {
                        question.appendChild(feedback);
                        // subtract 15 seconds
                    });
                
                    choiceC.addEventListener('click', function (event) {
                        question.appendChild(feedback);
                        // subtract 15 seconds
                    });
                
                    choiceD.addEventListener('click', function (event) {
                        question.appendChild(feedback);
                        // subtract 15 seconds
                    });
                
                    // Correct Answer
                    choiceA.addEventListener('click', function (event) {
                        // Form to enter initials
                    });

                });
    
            });

        });

    });

});