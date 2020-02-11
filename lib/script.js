let answers = document.querySelectorAll('.answers');
answers.forEach(answers => answers.addEventListener('click', selectAnswer))

let counter = 0

//these questions have correlating possibilities to be printed


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




