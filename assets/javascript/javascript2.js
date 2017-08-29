var numCorrect = 0;
var numWrong = 0;
var currentQuestion = 0;
var playerChoice = 0;
var correntChoice = 0;
var gameTimer = 0;
var questionTimer = 0;
var timePerQuestion = 5;
var timeLeft = timePerQuestion;
var nextQuestionTimer = 0;
var clockRunning = false;
var question1 = ["Sample 1", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 1];
var	question2 = ["Sample 2", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 4];
var	question3 = ["Sample 3", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 3];
var	question4 = ["Sample 4", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 1];
var	question5 = ["Sample 5", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 4];
var	question6 = ["Sample 6", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 2];
var	question7 = ["Sample 7", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 3];
var question = [];

function newGame() {

}
function start() {
	question = [question1, question2, question3, question4, question5, question6, question7];
  	gameTimer = setInterval(nextQuestion, timePerQuestion*1000);
}

function nextQuestion(){
		clearInterval(questionTimer);
  		$("#question").html(question[currentQuestion][0]);
  		$("#answer1").html(question[currentQuestion][1]);
  		$("#answer2").html(question[currentQuestion][2]);
  		$("#answer3").html(question[currentQuestion][3]);
  		$("#answer4").html(question[currentQuestion][4]);
  		correctChoice = question[currentQuestion][5];
  		$("#answer1").on("click", function(){
  			checkAnswer(1);
  		});
  		$("#answer2").on("click", function(){
  			checkAnswer(2);
  		});
  		$("#answer3").on("click", function(){
  			checkAnswer(3);
  		});
  		$("#answer4").on("click", function(){
  			checkAnswer(4);
  		});
  		timeLeft = timePerQuestion;
  		questionTimer = setInterval(secondsLeft, 1000);
  		currentQuestion++;
  	}

function checkAnswer(choice) {
  		if(choice == correctChoice) {
  			numCorrect++;
  		} else {
  			numWrong++;
  		}
  		clearInterval(gameTimer);
  		nextQuestionTimer = setTimeout(start, 3000);
  	}

function secondsLeft() {
  		timeLeft--;
  		$("#timer").text(timeLeft);
  	}


start();