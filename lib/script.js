let buttonOne = document.querySelector(".buttonOne");
buttonOne.addEventListener('click', selectAnswer);
let buttonTwo = document.querySelector(".buttonTwo");
buttonTwo.addEventListener('click', selectAnswer);
let buttonThree = document.querySelector(".buttonThree");
buttonThree.addEventListener('click', selectAnswer);
let buttonFour = document.querySelector(".buttonFour");
buttonFour.addEventListener('click', selectAnswer);
let triviaQuestion = document.querySelector('.question');
triviaQuestion.addEventListener('click', populateQuestion);
let answerText = document.querySelector('.answerText');
// answerText.addEventListener('click', populateQuestion);
let resetTrivia = document.querySelector('.reset');
resetTrivia.addEventListener('click', resetGame);
let playerPrintScore = document.querySelector('.score');


let qCtr = 0;
let playerScore = 0;
let wrongText = 'That is incorrect.';
let correctText = 'Correct.'
let countdown = 3;
let intervalId = null;
forceGet = true;

function populateQuestion(e) {
	e.preventDefault();
	console.log(qCtr);
	e.target.innerText = triviaQuestions[qCtr].question;
	document.querySelector('.question').style.height = 'auto';
	buttonOne.innerText = triviaQuestions[qCtr].possibilities[0];
	buttonTwo.innerText = triviaQuestions[qCtr].possibilities[1];
	buttonThree.innerText = triviaQuestions[qCtr].possibilities[2];
	buttonFour.innerText = triviaQuestions[qCtr].possibilities[3];
	answerText.innerText = null;
	qCtr+=1; 
	document.querySelector('.answerText').style.display = 'none';
	document.querySelector('.answergrid').style.display = 'grid';
	document.querySelector('.admin').style.display = 'flex';
	document.querySelector('.board').style.width = '88%';
	buttonOne.style.background = 'rgba(240, 240, 240, 0.8)';
	buttonTwo.style.background = 'rgba(240, 240, 240, 0.8)';
	buttonThree.style.background = 'rgba(240, 240, 240, 0.8)';
	buttonFour.style.background = 'rgba(240, 240, 240, 0.8)';
	buttonOne.addEventListener('click', selectAnswer);
	buttonTwo.addEventListener('click', selectAnswer);
	buttonThree.addEventListener('click', selectAnswer);
	buttonFour.addEventListener('click', selectAnswer);
}

function selectAnswer(e) {
	e.preventDefault();
	console.log(e.target.innerText);
	console.log(triviaQuestions[qCtr-1].answer);
	if (e.target.innerText == triviaQuestions[qCtr-1].answer){
		console.log('Correct!');
		answerText.innerText = correctText + ".. " + triviaQuestions[qCtr-1].amplifyingInfo;
		playerScore+=1;
		playerPrintScore.innerText = "Your Score: " + playerScore + "/" + triviaQuestions.length;
		console.log(playerScore);
		e.target.style.background = 'rgba(98, 178, 78, 0.9)';
		document.querySelector('.answerText').style.display = 'initial';
		document.querySelector('.answerText').style.background = 'rgba(98, 178, 78, 0.9)';
		document.querySelector('.answerText').style.border = '2px solid black';
		document.querySelector('.board').style.height = 'auto';
		document.querySelector('.answerText').style.height = 'auto';
		buttonOne.removeEventListener('click', selectAnswer);
		buttonTwo.removeEventListener('click', selectAnswer);
		buttonThree.removeEventListener('click', selectAnswer);
		buttonFour.removeEventListener('click', selectAnswer);
		//remove event listener for other box clicking
	} if (e.target.innerText !== triviaQuestions[qCtr-1].answer){
		console.log('WRONG!');
		answerText.innerText = wrongText + ".. " + triviaQuestions[qCtr-1].amplifyingInfo;
		playerPrintScore.innerText = "Your Score: " + playerScore + "/" + triviaQuestions.length;
		e.target.style.background = 'rgba(220, 50, 50, 0.9)';
		document.querySelector('.answerText').style.display = 'initial';
		document.querySelector('.answerText').style.background = 'rgba(220, 50, 50, 0.9)'
		document.querySelector('.answerText').style.border = '2px solid black';
		document.querySelector('.board').style.height = 'auto';
		document.querySelector('.answerText').style.height = 'auto';
		buttonOne.removeEventListener('click', selectAnswer);
		buttonTwo.removeEventListener('click', selectAnswer);
		buttonThree.removeEventListener('click', selectAnswer);
		buttonFour.removeEventListener('click', selectAnswer);
		//remove event listener for other box clicking
	}
	if (qCtr == 20) {
		start();
	}
	// console.log('last one');
}

function finishGame() {
	if (qCtr == 20 && playerScore >= 14) {
		// console.log('winner!');
		document.querySelector('.board').style.display = 'none';
		document.querySelector('.winning').style.display = 'initial';
		document.querySelector('.winningText').style.display = 'initial';
	} if (qCtr == 20 && playerScore < 14){
		// console.log('looser');
		document.querySelector('.board').style.display = 'none';
		document.querySelector('.loosing').style.display = 'initial';
		document.querySelector('.loosingText').style.display = 'initial';

	}
}



function finish() {
  clearInterval(intervalId);
  // console.log(intervalId);
  console.log('show finish');
  finishGame();	
}

function ticker() {
    if(countdown == 0) finish();
    countdown--;
}

function start() {  intervalId = setInterval(ticker, 850);
	console.log('start ticker');
}	

//add reset button
function resetGame() {
	window.location.reload(false);
	// console.log('reset');
	// qCtr = 0;
	// playerScore = 0;
	// console.log(qCtr);
	// console.log(playerScore);
	// document.querySelector('.question').click();
}



//add another game
	// if (qCtr == 19 && playerScore >= 14){
	// 	console.log('winner');
	// }
	// if (qCtr == 19 && playerScore < 14){
		// console.log('looser');
	// }


