// var game = {

// 	numCorrect: 0,
// 	numWrong: 0,
// 	currentQuestion: 0,
// 	playerChoice: 0,
// 	correctChoice: 0,
// 	gameTimer: 0,
// 	questionTimer: 0,
// 	timePerQuestion: 3,
// 	timeLeft: this.timePerQuestion,
// 	nextQuestionTimer: 0,
// 	clockRunning: false,
// 	question1: ["Sample 1", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 1],
// 	question2: ["Sample 2", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 4],
// 	question3: ["Sample 3", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 3],
// 	question4: ["Sample 4", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 1],
// 	question5: ["Sample 5", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 4],
// 	question6: ["Sample 6", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 2],
// 	question7: ["Sample 7", "Sample 1", "Sample 1", "Sample 1", "Sample 1", 3],
// 	question: [],


// 	newGame: function() {

// 	},

// 	start: function() {
// 		question = [this.question1, this.question2, this.question3, this.question4, this.question5, this.question6, this.question7];
//       	this.gameTimer = setInterval(this.nextQuestion, this.timePerQuestion*1000);
//   	},

//   	nextQuestion: function() {
//   		$("#question").html(this.question[game.currentQuestion][0]);
//   		$("#answer1").html(this.question[game.currentQuestion][1]);
//   		$("#answer2").html(this.question[game.currentQuestion][2]);
//   		$("#answer3").html(this.question[game.currentQuestion][3]);
//   		$("#answer4").html(this.question[game.currentQuestion][4]);
//   		this.correctChoice = this.question[game.currentQuestion][5];
//   		$("#answer1").on("click", function(){
//   			game.checkAnswer(1);
//   		});
//   		$("#answer2").on("click", function(){
//   			game.checkAnswer(2);
//   		});
//   		$("#answer3").on("click", function(){
//   			game.checkAnswer(3);
//   		});
//   		$("#answer4").on("click", function(){
//   			game.checkAnswer(4);
//   		});
//   		game.timeLeft = this.timePerQuestion;
//   		game.questionTimer = setInterval(this.secondsLeft, 1000);
//   		game.currentQuestion++;
//   	},

//   	checkAnswer: function(choice) {
//   		if(choice == correctChoice) {
//   			game.numCorrect++;
//   		} else {
//   			game.numWrong++;
//   		}
//   		clearInterval(this.gameTimer);
//   		this.nextQuestionTimer = setTimeout(this.start, 3000);
//   	},

//   	secondsLeft: function() {
//   		this.timeLeft--;
//   		$("#timer").text(this.timeLeft);

//   	}

// }

// game.start();