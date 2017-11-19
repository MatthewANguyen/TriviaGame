var numCorrect = 0;
var numWrong = 0;
var currentQuestion = 0;
var playerChoice = 0;
var correntChoice = 0;
var gameTimer = 0;
var questionTimer = 0;
var timePerQuestion = 30; //in seconds
var timeLeft = timePerQuestion;
var nextQuestionTimer = 0;
//var clockRunning = false;
//Questions exist as arrays with data in this order:
//[0] - question
//[1] - [4] answer choices
//[5] index of correct answer choice
var question1 = ["What is the capital of Delaware?", "Dover", "Delaware City", "Harrington", "Milford", 1];
var	question2 = ["What is the capital of Nebraska?", "North Platte", "Kearney", "Omaha", "Lincoln", 4];
var	question3 = ["What is the capital of New York?", "Buffalo", "New York", "Albany", "Syracuse", 3];
var	question4 = ["What is the capital of Utah?", "Salt Lake City", "Beaver", "Provo", "Brigham City", 1];
var	question5 = ["What is the capital of Maine?", "Auburn", "Bangor", "Alfred", "Augusta", 4];
var	question6 = ["What is the capital of Kentucky?", "Louisville", "Frankfort", "Lexington", "Richmond", 2];
var	question7 = ["What is the capital of Pennsylvania?", "Allentown", "Philadelphia", "Harrisburg", "Reading", 3];
var question = [];

function start() {
	clearInterval(gameTimer);
	question = [question1, question2, question3, question4, question5, question6, question7];
	nextQuestion();
  	gameTimer = setInterval(nextQuestion, timePerQuestion*1000);
}

function nextQuestion(){
		clearInterval(questionTimer);
		unborderAll();
		$("#timer").removeClass("red");
  		$("#question").html("<STRONG>" + question[currentQuestion][0] + "</STRONG>");
  		$("#answer1")
	  		.html(question[currentQuestion][1])
	  		.on("click", function(){
	  			checkAnswer(1);
	  		})
	  		.hover(function(){
	  			$("#answer1").addClass("hover");
	  		}, function() {
	  			$("#answer1").removeClass("hover");
	  		});
  		$("#answer2")
	  		.html(question[currentQuestion][2])
	  		.on("click", function(){
	  			checkAnswer(2);
	  		})
	  		.hover(function(){
	  			$("#answer2").addClass("hover");
	  		}, function() {
	  			$("#answer2").removeClass("hover");
	  		});
  		$("#answer3")
	  		.html(question[currentQuestion][3])
	  		.on("click", function(){
	  			checkAnswer(3);
	  		})
	  		.hover(function(){
	  			$("#answer3").addClass("hover");
	  		}, function() {
	  			$("#answer3").removeClass("hover");
	  		});
  		$("#answer4")
	  		.html(question[currentQuestion][4])
	  		.on("click", function(){
	  			checkAnswer(4);
	  		})
	  		.hover(function(){
	  			$("#answer4").addClass("hover");
	  		}, function() {
	  			$("#answer4").removeClass("hover");
	  		});
	  	$("#result").empty();
  		correctChoice = question[currentQuestion][5];
  		timeLeft = timePerQuestion - 1;
  		questionTimer = setInterval(secondsLeft, 1000);
  		$("#timer").text(timeLeft);
  		currentQuestion++;
  	}

function unbindAll() {
	$("#answer1").unbind();
	$("#answer2").unbind();
	$("#answer3").unbind();
	$("#answer4").unbind();
}

function unborderAll() {
	$("#answer1").removeClass("hover");
	$("#answer2").removeClass("hover");
	$("#answer3").removeClass("hover");
	$("#answer4").removeClass("hover");
}

function checkAnswer(choice) {
	clearInterval(questionTimer);
	unbindAll();
  		if(choice == correctChoice) {
  			numCorrect++;
  			$("#result").html("Correct!");
  		} else {
  			numWrong++;
  			$("#result").html("Incorrect!");
  		}
  		clearInterval(gameTimer);
  		if(currentQuestion < question.length) {
  			nextQuestionTimer = setTimeout(start, 2000);
  		}
  		else{
  			nextQuestionTimer = setTimeout(endGame, 2000);
  		}
  	}

function secondsLeft() {
  		timeLeft--;
  		$("#timer").text(timeLeft);
  		if(timeLeft < (timePerQuestion/5)) {
  			$("#timer").addClass("red");
  		}
  		if(timeLeft == 0) {
  			checkAnswer(0);
  		}
  	}

function endGame() {
	$("#result").empty();
	$("#correct").html("Correct: " + numCorrect);
  	$("#incorrect").html("Incorrect: " + numWrong);
  	$("#replay").html("Click here to replay trivia!")
  		.on("click", function(){
  			currentQuestion = 0;
  			$("#replay").empty().unbind();
  			$("#correct").empty();
  			$("#incorrect").empty();
  			numCorrect = 0;
  			numWrong = 0;
  			start();
  		});
}
$(document).ready(start);