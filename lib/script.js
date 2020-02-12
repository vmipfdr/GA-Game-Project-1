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

let qCtr = 0

function populateQuestion(e) {
	e.preventDefault();
	console.log(qCtr);
	e.target.innerText = triviaQuestions[qCtr].question;
	// document.buttonOne.innerText = triviaQuestions[qCtr].possibilities[0];
	console.log(triviaQuestions[qCtr].possibilities[0]);
	qCtr+=1;
}


// for (i = 0; i < triviaQuestions.length; i++) {

// }

// for (i = 0; i < alphabet.length; i++) {
// 	let letters = document.createElement('div')
// 	letters.classList.add('letters')
// 	letters.addEventListener('click', guessedLetter)
// 	letters.innerText = alphabet[i];
// 	keyboard.appendChild(letters);
// }













//playersAnswers stays empty until javascript fills it with possible answers
let playersAnswers = []

function selectAnswer(e) {
	e.target.style.background = "white";
	counter+=1;
	playersAnswers.push(counter);
	console.log(counter);
	if (counter==1) {
		e.target.style.background = "black";
	}
	e.target.removeEventListener('click', selectAnswer);
	// winner();
}




