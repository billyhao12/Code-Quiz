// Global Variables

var startTime = 75;
var elapsedTime = 0;
var timeLeft = 75;

var questions = ['What are the three main programming languages of a web developer?'
                ,'Which element listed does NOT make use of a closing tag?'
                ,'What should you do if your code isn\'t working?'
                ,'Which of the following in JavaScript allows you to store multiple named values in one variable?'
                ,'Which HTML tag prints the largest text?'];

var responses = {
    1: ['Python, C++ and R', 'HTML, CSS and Java', 'HTML, CSS and JavaScript', 'Python, C++ and JavaScript'],
    2: ['<p>', '<img>', '<div>', '<h2>'],
    3: ['Inspect it in a Google Chrome web browser', 'console.log() certain areas to make sure they are working', 'Google alternative solutions', 'All of the above'],
    4: ['an object', 'an array', 'a function', 'an if statement'],
    5: ['<h1>', '<h2>', '<h3>', '<p>']
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

var title = document.querySelector(h2);
var question = document.getElementById('question');

// Actions
startButton.addEventListener('click', function(event) {
    title = '';
    question = 
});
