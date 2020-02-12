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
}

function selectAnswer(e) {
	e.preventDefault();
	console.log(e.target.innerText);
	console.log(triviaQuestions[qCtr-1].answer);
	if (e.target.innerText == triviaQuestions[qCtr-1].answer){
		console.log('Correct!');
		answerText.innerText = triviaQuestions[qCtr-1].amplifyingInfo;
	} if (e.target.innerText !== triviaQuestions[qCtr-1].answer){
		console.log('WRONG!');
		answerText.innerText = triviaQuestions[qCtr-1].amplifyingInfo;
	}
}




