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

let qCtr = 0;
let playerScore = 0;
let wrongText = 'That is incorrect.';
let correctText = 'Correct.'

function populateQuestion(e) {
	e.preventDefault();
	console.log(qCtr);
	e.target.innerText = triviaQuestions[qCtr].question;
	buttonOne.innerText = triviaQuestions[qCtr].possibilities[0];
	buttonTwo.innerText = triviaQuestions[qCtr].possibilities[1];
	buttonThree.innerText = triviaQuestions[qCtr].possibilities[2];
	buttonFour.innerText = triviaQuestions[qCtr].possibilities[3];
	answerText.innerText = null;
	qCtr+=1; 
	document.querySelector('.answerText').style.height = '0px';
}

function selectAnswer(e) {
	e.preventDefault();
	console.log(e.target.innerText);
	console.log(triviaQuestions[qCtr-1].answer);
	if (e.target.innerText == triviaQuestions[qCtr-1].answer){
		console.log('Correct!');
		answerText.innerText = correctText + ".. " + triviaQuestions[qCtr-1].amplifyingInfo;
		playerScore+=1;
		document.querySelector('.answerText').style.background = 'rgba(98, 178, 78, 0.8)';
		document.querySelector('.answerText').style.border = '2px solid black';
		document.querySelector('.answerText').style.height = '20vh';
		document.querySelector('.board').style.height = '70vh';
		//add green to background
	} if (e.target.innerText !== triviaQuestions[qCtr-1].answer){
		console.log('WRONG!');
		answerText.innerText = wrongText + ".. " + triviaQuestions[qCtr-1].amplifyingInfo;
		document.querySelector('.answerText').style.background = 'rgba(220, 50, 50, 0.8)'
		document.querySelector('.answerText').style.border = '2px solid black';
		document.querySelector('.answerText').style.height = '20vh';
		document.querySelector('.board').style.height = '70vh';
		//add red to background
	}
	//add score to a div
}

//add reset button
//add another game



