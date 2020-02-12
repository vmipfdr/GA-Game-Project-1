let answers = document.querySelectorAll('.answers');
answers.forEach(answers => answers.addEventListener('click', selectAnswer))

let buttonOne = document.getElementById('.buttonOne');
let buttonTwo = document.getElementById('.buttonTwo');
let buttonThree = document.getElementById('.buttonThree');
let buttonFour = document.getElementById('.buttonFour');

let counter = 0

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




